#!/bin/bash
# ============================================================
# AWS S3 + CloudFront Deployment Script
# Shri Anaghaa Interior Gallery
# ============================================================
# Prerequisites:
#   - AWS CLI installed & configured (aws configure)
#   - S3 bucket created & configured for static website hosting
#   - CloudFront distribution created pointing to S3 bucket
#
# Usage:
#   chmod +x deploy-aws.sh
#   S3_BUCKET=your-bucket-name CF_DIST_ID=your-distribution-id ./deploy-aws.sh
# ============================================================

set -e

S3_BUCKET=${S3_BUCKET:-"shri-anaghaa-interior-gallery"}
CF_DIST_ID=${CF_DIST_ID:-"YOUR_CLOUDFRONT_DISTRIBUTION_ID"}
BUILD_DIR="dist"
REGION=${AWS_REGION:-"ap-south-1"}

echo "🏗  Building project..."
npm run build

echo "☁️  Syncing to S3 bucket: $S3_BUCKET"

# Upload all assets with long cache (1 year)
aws s3 sync $BUILD_DIR/assets s3://$S3_BUCKET/assets \
  --region $REGION \
  --cache-control "public, max-age=31536000, immutable" \
  --delete

# Upload HTML files with no-cache
aws s3 sync $BUILD_DIR s3://$S3_BUCKET \
  --region $REGION \
  --exclude "assets/*" \
  --cache-control "no-cache, no-store, must-revalidate" \
  --delete

echo "🌐 Invalidating CloudFront cache..."
aws cloudfront create-invalidation \
  --distribution-id $CF_DIST_ID \
  --paths "/*"

echo "✅ Deployment complete!"
echo "   Bucket: https://$S3_BUCKET.s3-website.$REGION.amazonaws.com"
