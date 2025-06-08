#!/bin/bash

# Set source image and output directory
SOURCE_IMAGE="ios/App/App/Assets.xcassets/AppIcon.appiconset/ChatGPT Image Jun 7, 2025, 04_40_08 PM.png"
OUTPUT_DIR="ios/App/App/Assets.xcassets/AppIcon.appiconset"

# Make sure output directory exists
mkdir -p "$OUTPUT_DIR"

# Function to generate a high-quality icon with proper resizing
generate_icon() {
  local size=$1
  local output_file=$2
  local temp_file="${OUTPUT_DIR}/temp_icon.png"
  
  # Use sips with high quality settings
  sips -s format png -z $size $size "$SOURCE_IMAGE" --out "$temp_file"
  
  # Apply slight sharpening to improve clarity
  sips -s format png --resampleHeightWidth $size $size "$temp_file" --out "$output_file"
  
  rm -f "$temp_file"
}

# iPhone icons
generate_icon 40 "${OUTPUT_DIR}/Icon-App-20x20@2x.png"
generate_icon 60 "${OUTPUT_DIR}/Icon-App-20x20@3x.png"
generate_icon 58 "${OUTPUT_DIR}/Icon-App-29x29@2x.png"
generate_icon 87 "${OUTPUT_DIR}/Icon-App-29x29@3x.png"
generate_icon 80 "${OUTPUT_DIR}/Icon-App-40x40@2x.png"
generate_icon 120 "${OUTPUT_DIR}/Icon-App-40x40@3x.png"
generate_icon 120 "${OUTPUT_DIR}/Icon-App-60x60@2x.png"
generate_icon 180 "${OUTPUT_DIR}/Icon-App-60x60@3x.png"

# iPad icons
generate_icon 20 "${OUTPUT_DIR}/Icon-App-20x20@1x.png"
generate_icon 40 "${OUTPUT_DIR}/Icon-App-20x20@2x 1.png"  # Name matches Contents.json
generate_icon 29 "${OUTPUT_DIR}/Icon-App-29x29@1x.png"
generate_icon 58 "${OUTPUT_DIR}/Icon-App-29x29@2x 1.png"  # Name matches Contents.json
generate_icon 40 "${OUTPUT_DIR}/ipad-40.png"
generate_icon 80 "${OUTPUT_DIR}/ipad-40@2x.png"
generate_icon 76 "${OUTPUT_DIR}/ipad-76.png"
generate_icon 152 "${OUTPUT_DIR}/ipad-76@2x.png"
generate_icon 167 "${OUTPUT_DIR}/Icon-App-83.5x83.5@2x.png"

# App Store icon (1024x1024) - preserve as is
cp "$SOURCE_IMAGE" "${OUTPUT_DIR}/ChatGPT Image Jun 7, 2025, 04_40_08 PM.png"

echo "All app icon assets have been generated with high quality settings!"
