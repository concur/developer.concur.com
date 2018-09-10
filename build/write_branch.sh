#!/bin/bash

echo branchname: $(git rev-parse --symbolic-full-name --abbrev-ref HEAD) > src/_data/branch.yml
