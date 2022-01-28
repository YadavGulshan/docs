---
sidebar_position: 3
---

# Exception Handling

Exceptions are a common language feature that allow the developer to identify ‘exceptional’ problems relating to the applications state. When an exception is identified and thrown, the runtime will unwind the call stack until a suitable handler is found - in other words, the standard call/return flow is not followed when exceptions occur.

The WebAssembly MVP doesn’t have any features that resemble exceptions within its current control flow instructions. As a result, tools like Emscripten have to emulate this functionality, which has an inherent cost. Currently, catching C++ exceptions is turned off by default, and other languages face similar challenges.

Rather than just adding exceptions to WebAssembly, this proposal looks to introduce a more generic concept of events, that look a lot like interrupts. When an event occurs, execution is suspended, and a suitable handler is located within a new events section.

This proposal should make it easier to port pre-existing applications that rely on exception handling semantics to WebAssembly.