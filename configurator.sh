#!/usr/bin/env bash

# Configuration
IMAGE_NAME="next-builder"
CONTAINER_NAME="builder-tui"

# 1. Build the Image (Ensures changes to Dockerfile/requirements are picked up)
echo "🔨 Building Docker Image: $IMAGE_NAME..."
docker build -t "$IMAGE_NAME" .

# 2. Run the Container
echo "🐳 Launching $CONTAINER_NAME..."
echo "📂 Live-syncing local folder to /app..."

# The Command:
# -it: Interactive mode (Required for TUI)
# --rm: Clean up container on exit
# -p 3000:3000: Expose Next.js server
# -v "$(pwd):/app": Mounts your code so changes are instant

docker run -it --rm \
  --name "$CONTAINER_NAME" \
  -v "$(pwd):/app" \
  "$IMAGE_NAME"
