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




![Users](docs/outcome/list.PNG)

![Users Edit](docs/outcome/edit.png)
![toast](docs/outcome/toast.png)

## Stack

### Architecture

I structured my Next.js application using a **Ports and Adapters Architecture** (Known also as hexagonal) with three distinct layers:

  1. **Adapters:** This layer encapsulates integrations with external systems and databases. It handles data communication and provides interfaces for accessing external resources.
  2. **Ports (APIs):** This layer defines the contracts between the core application and the adapters. It acts as a boundary, ensuring loose coupling and allowing for easy switching of underlying implementations.
  3. **Use Cases (Core):** This layer contains the heart of the application logic, independent of external infrastructure. It orchestrates business rules and processes data received through the ports.

I effectively utilized Next.js's app router new features to handle client-side navigation and data fetching within the application.

The objective was to enhance code modularity by adhering to the Dependency Inversion Principle, specifically for operations like adding, creating, and deleting users. To achieve this, we introduced an adapters file dedicated to interacting with external APIs.  


#### Project Tree 
```
📦 Feefty-admin-test
├─ prisma
└─ src
   ├─ app
   │  ├─ (adapters)
   │  │  └─ userAdapter.js
   │  ├─ (ports)
   │  │  └─ (ports)
   │  │     └─ api
   │  │        ├─ activestatus
   │  │        │  └─ route.js
   │  │        ├─ user
   │  │        │  └─ route.js
   │  │        └─ users
   │  │           └─ route.js
   │  └─ (useCase)
   │     ├─ editUser
   │     │  └─ page.js
   │     └─ createUser
   │        └─ page.js
   ├─ Components
   │  ├─ Buttons
   │  │  ├─ AddButton
   │  │  └─ ...
   │  └─ icon
   │     └─ ...
   └─ lib
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
