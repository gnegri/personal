#!/bin/bash

# called as ./publishproject.bash appname* [cname] [path]
# appname* doesn't support dashes
# pass cname if your surge domain is somthing other than the app name
# pass path if you aren't in your root dev folder
appName=$1
cname=$2
path=$3

if [[ ${cname} == '' ]]
	then
		cname=${appName}
fi

# if path passed in
if [[ ${path} != '' ]]
	then
		cd ${path}
fi

# enter project directory and build it
cd ${appName}
npm run build

# enter built app folder, make 200.html file for URL routing
cd ./dist/${appName}
cp ./index.html ./200.html

# add CNAME file
echo ${cname}.surge.sh > CNAME

# publish site
surge --project ./

# open ng server to compare new updates
cd ../..
ng serve -o