# What is backend communication?

we have 2-3 asynchronous server, which have a common server which is kinda main server
we don't put everything at same server, instead have 3-4 small server with distributed information

Say a leetcode user submit a problem, it will be stored in the common server but can't do b/c say infinite loop
so my main server will talk to another 2 servers which have their own machine/server, so say 2 users one is normal, other is premium-> be1 talks to normal server, be2 talks to premium server
main server is connected to be1 and be2, database, now the big machine can be more than 3 or whatever, cause they are premium , they don't wanna wait

Queues: A message queue is a form of asynchronous service-to-service communication used in serverless and microservices architectures. Messages are stored on the queue until they are processed and deleted. Each message is processed only once, by a single consumer.

# Types of communication

## Synchronous (Strong coupling)

1. HTTP (REST/GraphQL)
2. Websocket (debatable if sync or async)

## Asynchronous (Weak coupling)

1. Messaging queues
2. Pub subs
3. Server-Sent Events
4. Websocket (debatable if sync or async)

# Websockets

WebSockets provide a way to establish a persistent, full-duplex communication channel over a single TCP connection between the client (typically a web browser) and the server.
full-duplex - server to client, client to server, http doesn't support server to browser.

Browser sends request to server, server reverts back the request to browser, handshake happens

Use Cases for WebSockets:

- Real-Time Applications: Chat applications, live sports updates, real-time gaming, and any application requiring instant updates can benefit from WebSockets.
- Live Feeds: Financial tickers, news feeds, and social media updates are examples where WebSockets can be used to push live data to users.
- Interactive Services: Collaborative editing tools, live customer support chat, and interactive webinars can use WebSockets to enhance user interactio

## Why not use HTTP/REST? Why do you need ws?

1. Network Handshake happens for every request
2. No way to push server side events (You can use polling but not the best approach)

- Leetcode uses polling when you submit a problem
- You can use WebSockets when you want to push server events

implementations of the http protocols:

- express
- koa
- hono

what if when adding to que, the que is down and does not accepts it ?

- revert back the transaction,(shouldn't do it)
- send data to backup storage, revert back when comes online

# Ws in Node.js

make a directory of name `ws-mern` as it would contain frontend with backend
initialize the project

```bash
mkdir Ws-ts
cd Ws-ts
npm init -y
npx tsc --init
npm i ws @types/ws
```

change the tsconfig file to

```tsconfig
"rootDir": "./src",
"outDir": "./dist",
```

write the code-> src/index.ts
compile it down

```bash
tsc
node dist/index.js
```

output:

```text
Sat Jun 29 2024 11:34:12 GMT+0530 (India Standard Time) Server is listening on port 8080

```

go to `https://hoppscotch.io/realtime/websocket` and try it like -> `ws://localhost:8080`, click on connect button, we see some logs
now we added another logic in `src/index.ts` to handle the new connection
now go to `https://hoppscotch.io/realtime/websocket` in other tab and try it like -> `ws://localhost:8080`, click on connect button, we see some logs
this is for client2
when we send data to server, we see it in server console in both the tabs i.e. clinet1, client2
see the connection b/w both client1, client2 is handled by the server-> {WebSocketServer}

## WS using express

```bash
npm install express @types/express
```

add code to index2.ts

# Client side code

`Websocket` is a browser API that you can access (very similar to fetch)
Will work in a `raw project` , `React project` and `Next project` (needs to be client side)

utilise the websocket server in other terminal, create a new project in other

```bash
 npm create vite@latest

> npx
> create-vite

✔ Project name: … ws-react
✔ Select a framework: › React
✔ Select a variant: › TypeScript

```

add the code in App.tsx
now see open 2 tabs of localhost:5173, type message and click on send button, both client see same log

# Ws in Next.js

```bash
npx create-next-app@latest
✔ What is your project named? … ws-next
```
