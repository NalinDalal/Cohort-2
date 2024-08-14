# Week 23 | WebRTC

WebRTC is the core/only protocol that lets you do `real time media communication` from inside a browser.

You use WebRTC for applications that require sub second latency.
Examples include

1. Zoom/Google meet (Multi party call)
2. Omegle, teaching (1:1 call)
3. 30FPS games (WebRTC can also send data)

a good book -> `https://webrtcforthecurious.com/docs/webrtc-for-the-curious.pdf`

# WebRTC Architecture/jargon

## P2P

WebRTC is a peer to peer protocol. This means the you directly send your media over to the other person without the need of a central server.
It is Browser 1 to Browser 2, browser to browser

<figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-4c68439dc7b448dca1de6133761f63bb"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fd2ac1dd1-0dee-4a95-ac58-480952eddbe1%2FScreenshot_2024-05-04_at_4.08.18_PM.png?table=block&amp;id=4c68439d-c7b4-48dc-a1de-6133761f63bb&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure>

## Signaling Server

Both the browsers need to exchange their `address` before they can start talking to each other. A `signaling server` is used for that.
It is usually a websocket server but can be anything (http)

<figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-7e2e3c43dc2145d988efd0648596f109"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fc790a3de-337f-44a8-887a-64a207f7195c%2FScreenshot_2024-05-04_at_4.16.23_PM.png?table=block&amp;id=7e2e3c43-dc21-45d9-88ef-d0648596f109&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure>

## Stun (Session Traversal Utilities for NAT)

It gives you back your publically accessable IPs. It shows you how the world sees you
Check <a target="_blank" rel="noopener noreferrer" class="notion-link" href="https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/" previewlistener="true">https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/</a>

<figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-d8b50e61842c41e2857cef2753af011f"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fac6c5d61-a704-4ff5-89e5-5d8d887082e1%2FScreenshot_2024-05-04_at_4.57.40_PM.png?table=block&amp;id=d8b50e61-842c-41e2-857c-ef2753af011f&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure>

<figure class="notion-asset-wrapper notion-asset-wrapper-image notion-block-9294085b646243d7bde424deed58f9b8"><div style="position: relative; display: flex; justify-content: center; align-self: center; width: 100%; max-width: 100%; flex-direction: column; height: 100%;"><img src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F3dc43212-493b-44bc-8fb4-7f6d55b16413%2FScreenshot_2024-05-04_at_5.07.21_PM.png?table=block&amp;id=9294085b-6462-43d7-bde4-24deed58f9b8&amp;cache=v2" alt="notion image" loading="lazy" decoding="async" class="medium-zoom-image" style="object-fit: cover;"></div></figure>

## Ice Candidates

ICE (Interactive Connectivity Establishment) candidates are potential networking endpoints that WebRTC uses to establish a connection between peers. Each candidate represents a possible method for two devices (peers) to communicate, usually in the context of real-time applications like video calls, voice calls, or peer-to-peer data sharing.

If two friends are trying to connect to each other in a `hostel wifi` , then they can connect via their private router ice candidates.

If two people from different countries are trying to connect to each other, then they would connect via their public IPs.

## Turn Servers

A lot of times, your network doesn’t allow media to come in from `browser 2` . This depends on how restrictive your network is
Since the `ice candidate` is discovered by the `stun server`, your network might `block` incoming data from `browser 2` and only allow it from the `stun server`.

## Offer

The process of the first browser (the one initiating connection) sending their `ice candidates` to the other side.

## Answer

The other side returning their `ice candidates` is called the answer.

Google has provided a free stun server-> `https://webrtc.github.io/samples/src/content/peerconnection/trickle-ice/`

## SDP - Session description protocol

A single file that contains all your

1.  ice candidates
2.  what media you want to send, what protocols you’ve used to encode the media
    This is the file that is sent in the `offer` and received in the `answer`
    Example

```txt
v=0
o=- 423904492236154649 2 IN IP4 127.0.0.1
s=-
t=0 0
m=audio 49170 RTP/AVP 0
c=IN IP4 192.168.1.101
a=rtpmap:0 PCMU/8000
a=ice-options:trickle
a=candidate:1 1 UDP 2122260223 192.168.1.101 49170 typ host
a=candidate:2 1 UDP 2122194687 10.0.1.1 49171 typ host
a=candidate:3 1 UDP 1685987071 93.184.216.34 49172 typ srflx raddr 10.0.1.1 rport 49171
a=candidate:4 1 UDP 41819902 10.1.1.1 3478 typ relay raddr 93.184.216.34 rport 49172
```

## RTCPeerConnection (pc, peer connection)

`https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection`
This is a class that the browser provides you with which gives you access to the `sdp`, lets you create `answers / offers` , lets you send media.
This class hides all the complexity of webrtc from the developer

## Summary

You need a `signaling server`, `stun server` to initiate the webrtc conn b/w the parties. You can kill these once the conn is made.
You need to include a `turn server` incase any of the users are on a restrictive network so you can get back a `turn` ice candidate as well.

# Connecting the two sides

The steps to create a webrtc connection between 2 sides includes -

1. Browser 1 creates an RTCPeerConnection
2. Browser 1 creates an offer
3. Browser 1 sets the local description to the offer
4. Browser 1 sends the offer to the other side through the signaling server
5. Browser 2 receives the offer from the signaling server
6. Browser 2 sets the remote description to the offer
7. Browser 2 creates an answer
8. Browser 2 sets the local description to be the answer
9. Browser 2 sends the answer to the other side through the signaling server
10. Browser 1 receives the answer and sets the remote description

This is just to `establish` the `p2p connection` b/w the two parties

To actually send media, we have to

1. Ask for camera /mic permissions
2. Get the `audio` and `video` streams
3. Call `addTrack` on the `pc`
4. This would `trigger` a `onTrack` callback on the other side

# Implementation

We will be writing the code in

1. Node.js for the Signaling server. It will be a websocket server that supports 3 types of messages
   1. createOffer
   2. createAnswer
   3. addIceCandidate
2. React + PeerConnectionObject on the frontend

We’re actually building a slightly complex version of https://jsfiddle.net/rainzhao/3L9sfsvf/

coding it-> 23.1\ -> backend, frontend in their own readme file

Famous WebRTC servers-> janus, jitsi, mediasoup, pion
