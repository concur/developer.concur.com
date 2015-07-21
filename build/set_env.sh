#!/bin/bash

BRANCHNAME=$(git describe --contains --all HEAD)
echo $BRANCHNAME

if [ ${BRANCHNAME} == "meta-tag" ]
then
  export JEKYLL_ENV="production"
  echo "ENV set: ${JEKYLL_ENV}"
fi
