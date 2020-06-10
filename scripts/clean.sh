#!/usr/bin/env bash

# If there is no .next folder, we cannot clean it!
if [ ! -d ".next" ]; then
    echo "There is no .next/ folder to clean!!!"
    exit 1
fi
echo
echo "Your current folder is:"
echo "    $(pwd)"
echo
echo "We will run rm -rf on:"
echo "    $(pwd)/.next/"
echo
echo "The .next/ folder currently has $(ls -UbA1 .next/ | wc -l | bc) files."
echo 
read -n1 -r -p "Press any key to clean .next/"$'\n\n' key
# rm -rf .next/*
echo
echo "Cleaned!"
echo "$(ls .next/)"