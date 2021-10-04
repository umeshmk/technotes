#!/usr/bin/env sh

# abort on errors
set -e

# build
yarn run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo "Deploying....."
echo "https://umeshmk.github.io/technotes/" 
# echo "https://umeshmk.github.io/<REPO>/" > CNAME

git init
git add -A
git commit -m "deploy" &&

git push -f git@github.com:umeshmk/technotes.git master:gh-pages

cd -