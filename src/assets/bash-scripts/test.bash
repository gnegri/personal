#!/bin/bash
a='dev'

eval "q1='.projects."${a}".architect.build.options.styles[.projects."${a}".architect.build.options.styles | length]'"
eval "q1+=' += \"node_modules/bootstrap/dist/css/bootstrap.min.css\"'"
echo "cat angular.json | jq '"${q1}"' >> angular_temp1.json"
eval "cat angular.json | jq '"${q1}"' >> angular_temp1.json"

#cat angular.json | jq '.projects.dev.architect.build.options.styles[.projects.dev.architect.build.options.styles | length] += "node_modules/bootstrap/dist/css/bootstrap.min.css"' >> angular_temp1.json

ls
