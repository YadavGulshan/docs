---
sidebar_position: 7
---

# Serverless WebAssembly

Cloud technology is continually on the rise, with more and more companies making use of the wide array of platforms and services that are on offer. The whole premise of this approach is that you allow the cloud provider to manage various aspects of technology stack (hardware, operating system, database instances) on your behalf. This results in potential cost savings and considerable agility, with the cloud providers having invested in technology that allow them to provision resources quickly and easily.

Serverless is a relative newcomer, with a very simple promise - you relinquish control of everything to the cloud provider other than your application code itself. In other words, you deploy your code (functions) to the cloud and they take care of provisioning a suitable runtime.

In order for a cloud provider to execute serverless functions, it still needs to provision hardware, operating systems and suitable runtime environments. As a result, there is some significant overhead to servicing requests. This provisioning time is visible to the consumer as a noticeable delay in response when additional resources are required to service a request - an effect known as a ‘cold start’.

Security and isolation are of critical importance to any cloud-based service, which is what makes WebAssembly an interesting prospect for serverless computing. The lightweight WebAssembly runtime, which has isolation/sandboxing built in, has the potential to be a very efficient approach to serverless.

At the moment it is not the big three cloud providers (Amazon, Microsoft, Google) that are exploring this potential - it is instead the smaller CDN and Edge network companies that are leading the charge. Cloudflare and Fastly have already demonstrated new serverless platforms built on WebAssembly, allowing them to service more requests on equivalent hardware (when compared to the conventional model of virtualization) and eliminating cold start times.

In the future it is likely that an increasing number of cloud-based compute platforms will be based on the WebAssembly runtime.