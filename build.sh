#!/bin/sh

if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        npm run build && npm start
elif [[ "$OSTYPE" == "darwin"* ]]; then
        # Mac OSX
elif [[ "$OSTYPE" == "cygwin" ]]; then
        # POSIX compatibility layer and Linux environment emulation for Windows
elif [[ "$OSTYPE" == "msys" ]]; then
        npm run build ; npm start
elif [[ "$OSTYPE" == "win32" ]]; then
        npm run build ; npm start
elif [[ "$OSTYPE" == "freebsd"* ]]; then
        echo 'freebsd'
else
        echo 'else!'
        
echo "$OSTYPE"

# this command is used in windows, if haven't S.O else comment next-line
npm run build ; npm start
