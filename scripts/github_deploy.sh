#!/usr/bin/env bash
# First we need to synchronize the two www folders
rsync -a \
--exclude '.git' \
--exclude '.gitignore' \
--exclude '.gitkeep' \
--exclude '.nojekyll' \
www/ ../gameleaf.github.io.www/

# Next we need to commit and push
# Do this manually!
echo "Please cd to ../gameleaf.github.io.www/"
echo "Commit and push to deploy to GitHub!"