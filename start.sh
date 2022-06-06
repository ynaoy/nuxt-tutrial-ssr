#!/bin/sh

if [ "${NODE_ENV}" = "production" ]
then
 yarn build && yarn start
else
 yarn dev -p ${PORT:-3000}