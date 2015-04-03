#!/bin/bash

echo commit: $(git log -1 --pretty=format:"%h") > _data/git.yml
cat _data/git.yml
