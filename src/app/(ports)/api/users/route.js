// Users Endpoint for Managing User List and Creation
// This endpoint handles GET and POST requests for managing the list of users.

import { prisma } from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

/**
 * Handles POST requests to create a new user.
 * @param {NextRequest} req - The incoming request object containing user details.
 * @returns {NextResponse} The response object indicating the success or failure of user creation.
 */
export async function POST(req) {
  const { firstName, lastName, email, role } = await req.json();
  try {
    // Upsert (update or insert) the user into the database using Prisma
    const result = await prisma.user.upsert({
      where: { email: email },
      update: {},
      create: {
        email: email,
        firstName: firstName,
        lastName: lastName,
        role: {
          connect: {
            slug: role,
          },
        },
      },
    });

    // Return a success response
    return NextResponse.json({ message: "Successfully created new user" }, { status: 200 });
  } catch (error) {
    // Return an error response in case of failure
    return NextResponse.json({ message: "Failed to create user" }, { status: 500 });
  }
}
