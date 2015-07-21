#!/bin/bash

BRANCHNAME=$(git describe --contains --all HEAD)

if [ BRANCHNAME == "livesite" ]
then
  export JEKYLL_ENV="production"
fi
