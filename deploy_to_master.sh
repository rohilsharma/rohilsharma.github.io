#!/bin/bash

if [[ $# -ne 1 ]]; then 
	echo "Usage: $0 <commit message for development branch>"
	exit 0
fi

npm run deploy

git add .
git commit -m $1
git push 

#git checkout master
#git reset --hard gh-pages
#git push -f origin master

git checkout development
