#!/bin/bash

BRANCHNAME=$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)

if [ ${BRANCHNAME} == "livesite" ]
then
  export JEKYLL_ENV="production"
fi
