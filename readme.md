# Hono with Bun runtime

## Getting Started

### Cloning the repo

```sh
bun create hono ./NAME_HERE
```

### Development

```
bun run start
```

Open http://localhost:3000 with your browser to see the result.

### For more information

See <https://honojs.dev/>

-------
Project installation
1 install bun
2 create hono project with bun create
3 add bun-types in tsconfig

------------Progress-------
1. With Bun, unable to generate build. Currently being fixed: https://github.com/oven-sh/bun/pull/2312
   bun run build


2. With esbuild, build getting generated. with --format=node, dead code (Tree shaking) elimination happening
   bun run build_v2

3. Docker commands
	docker build -t sdey/bun_hono_without_pm2  .
	docker run -p80:3000 sdey/bun_hono_without_pm2

4. pm2 works only with node, exec_mode: cluster is not possible in Bun.
	Need to look for process management tools for Bun as well. As we have for Node: PM2