// import { prisma } from "@/src/lib/prisma/index.js";
import { prisma } from "@/lib/prisma";

async function getUsers() {
  const users = await prisma.user.findMany();
  return users;
}

export default async function Home() {
  const users = await getUsers();
  console.log(users);

  return (
    <main className="my-2 flex flex-col space-y-4">
      <div className="mx-4">
        <h1 className="text-lg">Users</h1>
      </div>
      <div className="bg-white drop-shadow-lg py-6 px-4 xs:rounded-xl">
        <p className="text-center text-gray-600 font-medium">Oh well...</p>
        <p className="text-center text-gray-600 font-normal">
          Looks like there are no users here yet.
          <br />
          Add a new user to see it here!
        </p>
      </div>
    </main>
  );
}
