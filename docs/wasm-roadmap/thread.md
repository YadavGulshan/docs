---
sidebar_position: 2
---

# Threads

JavaScript has had multithreading capabilities for a number of years via Web Workers, a feature which is now widely used. However, the mechanism for sharing data between threads is quite basic, relying on message-passing via postMessage. As a result, large volumes of data cannot practically be shared across Web Workers. More recently, a shared memory specification was finalized, allowing Web Workers to share memory and use it safely via atomic operations.

This proposal for WebAssembly closely mirrors the browser’s, allowing shared access to linear memory and providing atomic operations. Notably, this proposal does not introduce a mechanism for creating threads - instead, this functionality is supplied by the host. For WebAssembly modules within the browser you’ll still be relying on Web Workers as a mechanism for thread creation. Although Emscripten does simplify this task for those using pthreads (POSIX threads) by handling Web Worker instantiation on your behalf.

This proposal is quite mature and has already been implemented in a number of web browsers.

Annotate
