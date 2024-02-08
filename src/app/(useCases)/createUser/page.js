import React from "react";

import BackButton from "@/components/Buttons/BackButton";

import Footer from "@/components/Footer";
import Navbr from "@/components/Navbr";
import { Toaster, toast } from "react-hot-toast";
import { prisma } from "@/lib/prisma";

export default async function Page() {
  // we can get the roles easily from the db
  const roles = await getRoles();

  /**
   * Nextjs will run this function on the server.
   * It is called automatically via a POST request from the frontend, nextjs manages it
   * @param {*} formData
   */
  async function create(formData) {
    "use server";

    /**
     * In a production application, we would add schema validation with Zod
     */
    const rawFormData = {
      email: formData.get("email"),
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      role: formData.get("role"),
    };

    await prisma.user.create({
      data: {
        email: rawFormData.email,
        firstName: rawFormData.firstName,
        lastName: rawFormData.lastName,
        role: {
          connect: {
            slug: rawFormData.role,
          },
        },
      },
    });
  }

  return (
    <div>
      <Navbr />
      <BackButton />
      <div className="bg-white drop-shadow-lg p-4">
        <h1>Create A New User</h1>
        <div>
          <form className="m-4" action={create}>
            <label className="form-control w-full">
              <div className="label pb-1">
                <span className="label-text">First Name</span>
              </div>
              <input
                type="text"
                placeholder="John"
                name="firstName"
                className="input input-bordered w-full rounded-sm h-8"
              />
            </label>

            <label className="form-control w-full">
              <div className="label pb-1">
                <span className="label-text">Last name</span>
              </div>
              <input
                type="text"
                placeholder="Doe"
                name="lastName"
                className="input input-bordered w-full rounded-sm h-8"
              />
            </label>

            <label className="form-control w-full">
              <div className="label pb-1">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                name="email"
                placeholder="john.doe@gmail.com"
                className="input input-bordered w-full rounded-sm h-8"
              />
            </label>

            <label className="form-control w-full mt-2">
              <span className="label-text pb-1">Role</span>
              <select className="select select-bordered w-full rounded-sm h-8" name="role">
                {roles.map((role) => (
                  <option className="rounded-sm h-8" value={role.slug}>
                    {role.label}
                  </option>
                ))}
              </select>
            </label>

            <div className="flex justify-end">
              <button type="submit" className="bg-blue-700 text-white w-16 h-7 mt-10 rounded-sm">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
      <Toaster position="bottom-center" />
    </div>
  );
}

const getRoles = async () => {
  return prisma.role.findMany();
};
