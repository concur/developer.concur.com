#!/bin/bash

echo branchname: $(git rev-parse --symbolic-full-name --abbrev-ref HEAD) > _data/branch.yml
