#!/bin/bash

echo commit: $(git log -1 --pretty=format:"%h") > src/_data/git.yml
cat src/_data/git.yml
