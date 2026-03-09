#!/usr/bin/env bash

set -e
cleanup() {
  echo "---------------------------------"
  echo "[shutting down]"
  echo "---------------------------------"
  docker compose down -v
}

trap cleanup EXIT

echo "---------------------------------"
echo "[Starting webserver at http://localhost:3000]"
echo "---------------------------------"

echo "Starting webserver at http://localhost:3000"

# docker compose up --build dev
docker compose up 

