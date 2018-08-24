#!/bin/bash

# put in your root dev folder
# called as ./publishproject.bash appname* [cname] [-m "commit message for git"]
# appname* doesn't support dashes
# pass cname if your surge domain is somthing other than the app name
appName=$1
cname=$2
commitFlag='false';
commitMsg='';

while getopts ':m' git; do
	case ${git} in
		m)	commitFlag='true'
			commitMsg='${OPTARG}';;
		?) echo 'only -m is an allowed flag, used for git commit'
	esac
done

# enter project directory
cd ${appName}

# optionally commit to git (will not push)
if [[ ${commitFlag} ]] then
	echo 'commiting to git: ' + ${commitMsg}
	git commit -m ${commitMsg} 
fi

# build, enter built app folder, make 200.html file for URL routing
npm run build
cd ./dist/${appName}
cp ./index.html ./200.html

# add CNAME file
if [[ ${cname} == '' ]]	then
	cname=${appName}
fi
echo ${cname}.surge.sh > CNAME

# publish site
surge --project ./

# open ng server to compare new updates
cd ../..
ng serve -o