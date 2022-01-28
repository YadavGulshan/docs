---
sidebar_position: 1
---
# FIXED WIDTH SIMD

SIMD stands for Single Instruction Multiple Data and is a class of parallel computing. In practice it adds a range of additional instructions to the WebAssembly virtual machine that allow it to perform simple arithmetic operations simultaneously across a number of values. The specification is fixed-width, operating on 128-bit data, which can be interpreted in various different ways (e.g. 16x 8-bit lanes, 8x 16-bit lanes, etc.). Whilst the SIMD operations are quite simple, they can provide a significant performance boost for certain algorithmic computation.

Fixed-width SIMD was a relatively simple WebAssembly specification, and as a result it is already in the ‘implementation phase’, which means you can expect to see it implemented in most browsers (and standalone WebAssembly runtimes) in the near future.

In practice, SIMD is already proving valuable, with the TensorFlow library for example, which provides a range of neural network and machine learning tools, already seeing a significant performance boost where this feature is supported.