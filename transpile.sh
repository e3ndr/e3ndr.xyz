#!/bin/bash

# rm -rf build/compiled
# mkdir build/raw
# mkdir build/compiled
# mv build/* build/raw

npx babel build/raw --config-file ./babel.config.json --out-dir build/compiled --copy-files