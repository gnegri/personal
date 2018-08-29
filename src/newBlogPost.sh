#!/bin/bash

# call as ./newBlogPost.sh 19700101 to make blog19700101.html and blog19700101.ts
cd ./app/data/blog/posts
date=$(date +%Y.%m.%d)
fileDate=$(date +%Y%m%d)
unixTime=$(date +%s)
pwd=$(pwd)
baseFile="blog$fileDate"
htmlFile="$baseFile.html"
tsFile="$baseFile.ts"

if [[ -f "$pwd/$htmlFile" ]] || [[ -f "$pwd/$tsFile" ]]; then
    echo "trying to make more than one post in a day, eh?"
    echo "you go getter, you!"
    baseFile=$baseFile"_"$unixTime
    htmlFile="$baseFile.html"
    tsFile="$baseFile.ts"
fi

# # copy templates
echo "making files"
cp ./template.html $htmlFile
cp ./template.ts $tsFile

echo "replacing template"
sed -i  "s/template/"$baseFile"/g" $tsFile
sed -i  "s/date: .*/date: '"$date"',/g" $tsFile

cd ..
echo "updating BlogPosts.ts"
echo "adding imports"
sed -i "/import { BlogPost } from '\.\.\/\.\.\/classes\/BlogPost'\;/a\
import { $baseFile } from './posts/$baseFile';" BlogPosts.ts

echo "updating export const"
sed -i "/export const blogPostList: Array<BlogPost> \= \[/a\    $baseFile," BlogPosts.ts