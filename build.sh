#!/bin/bash
set -e

echo "Building Root (Round 3)..."
npm install
npm run build:vite

echo "Building Round 1..."
cd round-1
npm install
npm run build
cd ..
mkdir -p dist/round-1
cp -r round-1/dist/* dist/round-1/

echo "Building Admin..."
cd admin
npm install
npm run build
cd ..
mkdir -p dist/admin
cp -r admin/dist/* dist/admin/

echo "Build complete! All apps are in dist/"
