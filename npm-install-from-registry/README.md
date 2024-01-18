```bash
npm install

rm -r ../packages/core/src
rm ../packages/core/package.json
cp -r ./node_modules/@cloudcare/browser-core/src ../packages/core/src
cp ./node_modules/@cloudcare/browser-core/package.json ../packages/core/package.json

rm -r ../packages/rum/src
rm ../packages/rum/package.json
rm ../packages/rum/README.md
cp -r ./node_modules/@cloudcare/browser-rum/src ../packages/rum/src
cp ./node_modules/@cloudcare/browser-rum/package.json ../packages/rum/package.json
cp ./node_modules/@cloudcare/browser-rum/README.md ../packages/rum/README.md

rm -r ../packages/worker/src
rm ../packages/worker/package.json
cp -r ./node_modules/@cloudcare/browser-worker/src ../packages/worker/src
cp ./node_modules/@cloudcare/browser-worker/package.json ../packages/worker/package.json
```
