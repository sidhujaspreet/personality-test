#!/bin/sh

cat >clientScript <<EOF
#!/bin/sh
cd ./client && npm install && npm start
EOF
chmod +x clientScript

cat >serverScript <<EOF
#!/bin/sh
cd ./server && npm install && npm start
EOF
chmod +x serverScript

open -a Terminal.app clientScript
open -a Terminal.app serverScript
