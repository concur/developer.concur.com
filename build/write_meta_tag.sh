#!/bin/bash

BRANCHNAME=$(git rev-parse --symbolic-full-name --abbrev-ref HEAD)

if [ ${BRANCHNAME} == "livesite" ]
then
  echo tag: '<META name="robots" content="noindex">' > _data/meta_tag.yml
  cat _data/meta_tag.yml
fi
