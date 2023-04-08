import { Hono } from "hono";
import { serveStatic } from 'hono/serve-static.bun';
import {fun1, fun2} from './util';
const port = parseInt(process.env.PORT) || 3000;

const app = new Hono();

app.use('/favicon.ico', serveStatic({ path: './public/favicon.ico' }));

app.get("/getInfo", async(c) => {
	console.log("Getting info")
	const a = new Promise((res) => setTimeout(() => res({a:fun1()}), 1000));
	const text = await a;
	console.log(text)
	console.log("Found info")
	  return c.json({text});
});


export default {
  port,
  fetch: app.fetch
};
