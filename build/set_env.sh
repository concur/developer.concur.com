#!/bin/bash

BRANCHNAME=$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)
echo $BRANCHNAME

if [ ${BRANCHNAME} == "meta-tag" ]
then
  export JEKYLL_ENV="production"
  echo "ENV set: ${JEKYLL_ENV}"
fi
