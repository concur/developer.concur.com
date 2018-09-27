#!/bin/bash

if [ ${CIRCLE_BRANCH} = "preview" ]
then 
  echo "server: https://forms.preview.developer.concur.com" > src/_data/forms.yml
elif [ ${CIRCLE_BRANCH} = "livesite" ]
then 
  echo "server: https://forms.developer.concur.com" > src/_data/forms.yml
else
  echo "Branch ${CIRCLE_BRANCH} does not have a known forms server"
fi

cat src/_data/forms.yml
