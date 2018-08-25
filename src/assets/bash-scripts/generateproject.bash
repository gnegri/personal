#!/bin/bash

# called as ./generateproject.bash appname* [path]
# appname* doesn't support dashes
# pass path if you aren't in your root dev folder
appName=$1
path=$2

# need an app name
if [[ $appName == '' ]]
	then
		exit 2;
fi

# make app
if [[ ${path} != '' ]]
	then
		cd ${path}
fi
ng new ${appName} --style=scss

# install bootstrap
cd ${appName}
npm install --save bootstrap @ng-bootstrap/ng-bootstrap font-awesome

# modify angular.json for bootstrap
eval "bootstrap='.projects."${appName}".architect.build.options.styles[.projects."${appName}".architect.build.options.styles | length]'"
eval "bootstrap+=' += \"node_modules/bootstrap/dist/css/bootstrap.min.css\"'"
eval "cat angular.json | jq '"${bootstrap}"' >> angular_temp1.json"
mv angular_temp1.json angular.json
#
eval "fa='.projects."${appName}".architect.build.options.styles[.projects."${appName}".architect.build.options.styles | length]'"
eval "fa+=' += \"node_modules/font-awesome/css/font-awesome.min.css\"'"
eval "cat angular.json | jq '"${fa}"' >> angular_temp1.json"
mv angular_temp2.json angular.json

# modify app.module.ts for bootstrap
cd src/app
sed -i "/import { AppComponent } from '\.\/app\.component';/aimport { NgbModule } from \'@ng-bootstrap\/ng-bootstrap\'\;" app.module.ts
sed -i "/\  imports: \[/a\    NgbModule\.forRoot\(\),/a" app.module.ts

# add router
ng generate module app-routing --flat --module=app

# add core module
ng generate module core

# start server
ng serve -o