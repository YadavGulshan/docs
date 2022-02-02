---
sidebar_position: 2
---

# Understanding the Project
The main motive of this service is to provide a platform for the pharmaceutical industry to connect with the patients.

Imagine a situation where you want to buy some medicine, and you can't afford to wait for one or two days to get the medicine delivered.
You just want the medicine from your nearby pharmacy.

And this is the where a problem arises,

## The Problem
Let's say the medicine you're looking for is not available, that means you have to either wait for medicine to be available or you have to wait for the pharmacy to deliver the medicine.

If you don't want to wait, or it's very urgent, then you have to check other pharmacies. But in this case you have to check all the pharmacies and there is also a possibility that you won't find the medicine.

And at last you will be sad of not getting the medicine.

This service is designed to allow you to check if certain medicine is available in your nearby pharmacy or not.

So that you don't have to waste you time and energy in roaming around the city to find the medicine.


## Senarios
Hmm, Let's think of a senario where our code can have the critical issue.

1. Program has some bugs and it is not able to create or login user.
2. Tokens are not generated and user is not able to login.
   1. As we know, when dealing with jwt our frontend application needs to store the jwt access token in local storage and then it needs to verify them on every request.
   2. So, we need to make sure that our backend is able to generate the jwt access token.

3. Invalid token is provided to user.
   1. In this case we need to write a test case where backend will make a login request and verify if the token is valid or not, using the `verify` endpoint.
4. User is not able to create, update, and delete the medical shops.
5. User is not able to create, update, and delete the medicines.
6. And the last thing is some random user is able to change the details of a medical shop or a medicine.


**That's it! I hope we're clear about what we are going to do.**

