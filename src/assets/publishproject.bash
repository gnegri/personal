#!/bin/bash

# called as ./generateproject.bash <appname*> <surgeSite>
# * doesn't support dashes
appName=$1
surgeSite=$2

cd /mnt/h/dev/${appName}
npm run build
cd ./dist/${appName}
cp ./index.html ./200.html
echo ${surgeSite}.surge.sh > CNAME
surge

