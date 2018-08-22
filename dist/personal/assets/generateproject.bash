#!/bin/bash

# called as ./generateproject.bash <appname> <-- doesn't support dashes
appName=$1

# make app
cd /mnt/h/dev/
ng new ${appName} --style=scss
# install bootstrap
cd ${appName}
npm install --save bootstrap @ng-bootstrap/ng-bootstrap font-awesome
# modify angular.json for bootstrap
cat angular.json | jq '.projects.'${appName}'.architect.build.options.styles[.projects.'${appName}'.architect.build.options.styles | length] += "node_modules/bootstrap/dist/css/bootstrap.min.css"' >> angular_temp1.json
mv angular_temp1.json angular.json
cat angular.json | jq '.projects.'${appName}'.architect.build.options.styles[.projects.'${appName}'.architect.build.options.styles | length] += "node_modules/font-awesome/css/font-awesome.min.css"' >> angular_temp2.json
mv angular_temp2.json angular.json
# modify app.module.ts for bootstrap
cd src/app
sed -i "/import { AppComponent } from '\.\/app\.component';/aimport { NgbModule } from \'@ng-bootstrap\/ng-bootstrap\'\;" app.module.ts
sed -i "/\  imports: \[/a\    NgbModule\.forRoot\(\),/a" app.module.ts
# add router
ng generate module app-routing --flat --module=app
# add core module
ng generate module core
# start server to validate things work!
ng serve -o