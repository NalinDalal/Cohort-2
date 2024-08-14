Let's Understand what is Signaling?

Signaling->
Suppose there are 2 Users, Browser1, Browser2

---

| |-----1.p2p------> | |
| |---2.createOffer(SDP)--> | |
| |<-3.createAnswer(respond back with SDP)---| |
| Browser1 |---4.IceCandidate---> | Browser2 |
-------------------------<-- 5.IceCandidate--- --------------------------

1. Make a backend folder, with typescript, install websocket, it has it's own readme

2. Frontend Folder, react with typescript.Own readme
