---
sidebar_position: 1
---


# Introduction


### Motivation
>**Code without tests is broken as designed.**

REST framework includes a few helper classes that extend Django's existing test framework, and improve support for making API requests.

So let's try them all!
For this test, I'm using my django project which you can find [here.](https://github.com/YadavGulshan/pharmaService)

Clone the project and open the backend directory where our django project lies.

### So what's the plan??
Since my project is only limited to some bunch of rest api endpoints, so we will be learning how to test them.

What my project consist of?
- **User**:
  - **Register**
    - `api/register/`
  - **UserView**
    - `api/user/`
  - **Token** aka **Login using JWT**
    - `api/token/`
    - `api/token/refresh/`
    - `api/token/verify/`
- **Medical**:
  - **View (GET)**
    - `api/`
    - `api/<int>`
    - `api/search/?query=<str>`
  - **Add Medical (POST)**
    - `api/`
  - **Update/Delete**
    - `api/<int>`
- **Medicine**
  - **View**
    - `api/medicine/`
    - `api/medicine/search/?query=<str>`
  - **Add Medicine (POST)**
    - `api/medicine/`
  - **Update/Delete Medicine**
    - `api/medicine/<int>`

And That's it!

Pretty huge huh? Let's break it down in next chapter.
   