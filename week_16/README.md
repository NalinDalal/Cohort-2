# 16.1 | MonoRepo

Initialise the Turbo Repo Appliction

```bash
 npx create-turbo@latest

 ? Where would you like to
create your turborepo? 16.1
? Which package manager do you
want to use? npm workspaces
```

to run->

```bash
npm install
npm run dev
```

2 ports given -> 3000(web folder) and 3001(docs folder)

single repo sharing multiple projects which share code from packages

package.json->

```json
{"name":"16.1", //name of package
scripts":{"build":"turbo build","dev":"turbo dev","lint":"turbo lint","format":"prettier --write \"**/*.{ts,tsx,md}\""} // turbo build system
"workspaces":["apps/*","packages/*"]} // workspaces
}
```

```bash
turbo build
```

goes into all package,apps and packages and builds them

```bash
npm run build
```
