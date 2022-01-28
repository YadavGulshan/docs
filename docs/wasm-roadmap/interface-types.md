---
sidebar_position: 6
---

# Interface type

The WebAssembly runtime only supports numeric types, and there are no immediate plans to add more complex types (strings, arrays, objects). In order for a WebAssembly module to exchange complex types with the host, it needs to do so via linear memory as we saw in previous chapters. Unfortunately, this requires glue code to perform the necessary encoding/decoding, adding bloat and affecting performance.

Since the release of the WebAssembly MVP, there have been a few different proposals that tackle this issue, including host bindings, which made it easier to generate the required glue code, and Web IDL bindings that allowed direct invocation of browser APIs. However, both have been replaced with a more far-reaching proposal, interface types. There has also been significant interest in using WebAssembly outside of the browser, both as a standalone runtime, and within a wide variety of hosts. As a result, any solution to the interoperability problem needs to be sufficiently generic. Ideally it should be possible to write a single WebAssembly module that can be used anywhere.

The interface types proposal adds a new set of interface types to WebAssembly that describe high-level values (like strings, sequences, records, and variants) but not their memory representation. The interface types proposal will significantly reduce the friction that currently exists when interoperating with WebAssembly modules, making it easier to share native code across platforms and runtimes.