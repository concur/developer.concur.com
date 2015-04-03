#!/bin/bash

mkdir ~/.aws
echo [default]\noutput = text\nregion = us-west-2\naws_access_key_id = $PORTAL_AWS_ACCESS_KEY_ID\naws_secret_access_key = $PORTAL_AWS_SECRET_ACCESS_KEY > ~/.aws/config
cat ~/.aws/config
