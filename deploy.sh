npm run deploy

git checkout master
git reset --hard gh-pages
git push -f origin master

git checkout development
