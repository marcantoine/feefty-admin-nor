# Feefty admin test

[Github Repository](https://github.com/Feefty/feefty-admin-test)

## Intro

Welcome to Feefty Admin Test!

The goal of this repo is to be a base to build on, in order to see how you approach web development on a stack similar to ours.

And hopefully, to make it worthwhile for you, we'll use recent tech so you can discover and try new things!

The test is simple, it focuses on creating a simple web app from scratch with a CRUD interface for a list of users.

Please fork this repo first and push it on your own github repo in public.

Feefty is a design-driven company, we'll pay attention to the delivered interface and its closeness to the mockups.

To deliver the test please send us the link to your repo. You don't have to host it anywhere, we'll run it locally.

## Outcome



![Users Empty](docs/Users_empty.png)
![Users](docs/Users.png)
![Users Edit](docs/Users_edit.png)
![Components](docs/Components.png)

## Stack

### Architecture

I followed a ports and adapters architecture with three layers (Adapters, ports (Apis), Use cases(core)) while using NextJS app router features.
I used parenthesus to seperate betwen the layers logic ().

The objective was to enhance code modularity by adhering to the Dependency Inversion Principle, which involves isolating external dependencies from the core application logic, specifically for operations like adding, creating, and deleting users. To achieve this, we introduced an adapters file dedicated to interacting with external APIs, particularly those provided by Prisma. This adapters file acts as an intermediary layer, handling the retrieval of data from Prisma APIs, and is subsequently invoked by the user interface components to obtain the required data. 

#### Project Tree 
```
📦 Feefty
└─ src
   ├─ app 
   │  ├─ (adapters)
   │  ├─ (ports)
   │  ├─ api
   │  │  ├─ activestatus
   │  │  ├─ user
   │  │  └─ users
   │  └─ (useCases)
   │     ├─ createUser
   │     └─ editUser
   ├─ components
   │  ├─ Buttons
   │  └─ Icons
   └─ l
      └─ prisma
```


### Libraries:

  - radix-ui/themes
  - daisyui
  - react-hot-toast for toasts
  - react hook form
  - heroicons for icons

## Getting Started

First, install dependencies :

```bash
yarn
#or
yarn install
```

Create a database for your project, either locally or on a cloud provider.

> **_⚠️_** On cloud provider, you will need to create a [shadow database](https://www.prisma.io/docs/concepts/components/prisma-migrate/shadow-database) manually

Create a `.env` file and setup your database connection :

```env
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

Run the prisma migration to create the database schema :

```bash
yarn prisma migrate dev
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
