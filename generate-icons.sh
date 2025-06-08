#!/bin/bash

# Set source image and output directory
SOURCE_IMAGE="ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png"
OUTPUT_DIR="ios/App/App/Assets.xcassets/AppIcon.appiconset"

# Make sure output directory exists
mkdir -p "$OUTPUT_DIR"

# iPhone icons
sips -Z 40 "$SOURCE_IMAGE" --out "${OUTPUT_DIR}/iphone-20@2x.png"
sips -Z 60 "$SOURCE_IMAGE" --out "${OUTPUT_DIR}/iphone-20@3x.png"
sips -Z 58 "$SOURCE_IMAGE" --out "${OUTPUT_DIR}/iphone-29@2x.png"
sips -Z 87 "$SOURCE_IMAGE" --out "${OUTPUT_DIR}/iphone-29@3x.png"
sips -Z 80 "$SOURCE_IMAGE" --out "${OUTPUT_DIR}/iphone-40@2x.png"
sips -Z 120 "$SOURCE_IMAGE" --out "${OUTPUT_DIR}/iphone-40@3x.png"
sips -Z 120 "$SOURCE_IMAGE" --out "${OUTPUT_DIR}/iphone-60@2x.png"
sips -Z 180 "$SOURCE_IMAGE" --out "${OUTPUT_DIR}/iphone-60@3x.png"

# iPad icons
sips -Z 20 "$SOURCE_IMAGE" --out "${OUTPUT_DIR}/ipad-20.png"
sips -Z 40 "$SOURCE_IMAGE" --out "${OUTPUT_DIR}/ipad-20@2x.png"
sips -Z 29 "$SOURCE_IMAGE" --out "${OUTPUT_DIR}/ipad-29.png"
sips -Z 58 "$SOURCE_IMAGE" --out "${OUTPUT_DIR}/ipad-29@2x.png"
sips -Z 40 "$SOURCE_IMAGE" --out "${OUTPUT_DIR}/ipad-40.png"
sips -Z 80 "$SOURCE_IMAGE" --out "${OUTPUT_DIR}/ipad-40@2x.png"
sips -Z 76 "$SOURCE_IMAGE" --out "${OUTPUT_DIR}/ipad-76.png"
sips -Z 152 "$SOURCE_IMAGE" --out "${OUTPUT_DIR}/ipad-76@2x.png"
sips -Z 167 "$SOURCE_IMAGE" --out "${OUTPUT_DIR}/ipad-83.5@2x.png"

echo "All app icon assets have been generated!"
