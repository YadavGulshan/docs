---
sidebar_position: 5
---

# Garbage Collection

Many modern programming languages use garbage collection as their primary mechanism for managing the allocation of memory. With garbage collected languages the runtime takes care of determining when objects are no longer in active use, freeing the memory that is used for their storage.

WebAssembly doesn’t enforce a specific approach to memory management, in fact, it doesn’t have any built-in tools for memory management. Instead it just provides a contiguous block of memory (linear memory), which the runtime can use in various ways.

For languages that require garbage collection (e.g. JavaScript, Java, C#, Python) this presents an additional challenge - a suitable WebAssembly-based garbage collector needs to be shipped alongside the application logic.

This proposal adds garbage collection capabilities to WebAssembly. However, rather than design and ship a garbage collector as part of the runtime, this proposal puts in place mechanisms for interoperating with the host’s garbage collector. This will ultimately make it easier to pass garbage collected objects across the host/WebAssembly boundary.

This is a relatively complex proposal, which is why it is still at an early stage in the development process.