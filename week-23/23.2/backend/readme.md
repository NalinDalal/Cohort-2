```bash
npm init -y
npx tsc --init
npm install ws @types/ws
```

update the tsconfig file where we need to update the rootDir,outDir with src,dist

2. Code index.ts file, and run it, required documentation is done there only

```bash
tsc -b
node dist/index.js
```

go to `https://hoppscotch.io/realtime/websocket` and hit the required endpoint, send a message to it in json format. It gets logged locally
