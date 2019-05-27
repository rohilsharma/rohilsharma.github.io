#!/bin/bash

if [[ $# -ne 1 ]]; then 
	echo "Usage: $0 <commit message for development branch>"
	exit 0
fi

npm run deploy

git add .
git commit -m $1
git push 

echo "Pushed development to remote. Resetting master now..."

git checkout master
git reset --hard gh-pages
git push -f origin master

echo "master updated. Merging gh-pages into master"

git checkout gh-pages
git merge master
git checkout master
git merge gh-pages
git push

git checkout development
