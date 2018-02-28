#!/usr/bin/env bash

cp src/index.html docs
cp src/CNAME docs

./node_modules/.bin/generate-md \
  --layout src/layout \
  --input src/docs \
  --output docs
