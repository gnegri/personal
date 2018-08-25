#!/bin/bash

# put in your root dev folder
# called as ./publishproject.bash -a appname* [cname] [-m "commit message for git"] [-o] [-t]
# appname* doesn't support dashes
# pass cname if your surge domain is somthing other than the app name
appName=''
cname=''
commitFlag='false';
commitMsg='';
ngServeFlag='false';
publishFlag='true';

while getopts 'a:c:m:ot' arg; do
	case $arg in
		a)	appName=$OPTARG
			echo 'appName: '$appName;;
		c)	cname=$OPTARG
			echo 'cname: '$cname;;
		m)	commitFlag='true'
			commitMsg=$OPTARG;;
		o)	ngServeFlag='true';;
		t)	echo 'running in test mode; will not push to surge.sh'
			publishFlag='false';;
		?)	echo '-a appname [-c cname] [-m "commit message"] [-o] [-t]'
			exit 2;;
	esac
done

if [[ $appName == '' ]]
	then
		echo 'must pass -a flag'
		exit 2
fi

# enter project directory
cd $appName


# optionally commit to git (will not push)
if [[ $commitFlag == 'true' ]]
	then
		echo 'commiting to git: "'$commitMsg'"'
		git add --all
		git commit -m "$commitMsg"
fi

# open ng server to compare new updates
if [[ $ngServeFlag == 'true' ]]
	then
		ng serve -o
fi

# publish site
if [[ $publishFlag == 'true' ]]
	then
		# build, enter built app folder, make 200.html file for URL routing
		npm run build
		cd ./dist/$appName
		cp ./index.html ./200.html

		# add CNAME file
		if [[ $cname == '' ]]
			then
				cname=$appName
		fi
		echo $cname.surge.sh > CNAME

		# push to surge.sh
		surge --project ./
fi