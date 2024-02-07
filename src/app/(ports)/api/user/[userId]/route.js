// User Endpoint for Managing Individual Users
// This endpoint handles GET, DELETE, and PATCH requests for individual users.

// Note: This user endpoint is separate from the users endpoint (that handles listing and creating users)
// because we use Next.js 14 API dynamic router, which sends the user ID through [id].

import { prisma } from '@/lib/prisma';
import { NextResponse, NextRequest } from "next/server";

/**
 * Handles GET requests to fetch details of a specific user.
 * @param {NextRequest} req - The incoming request object.
 * @param {Object} context - The context object containing parameters and other information.
 * @returns {NextResponse} The response object containing user details or an error message.
 */
export async function GET(req, context) {
    const { params } = context;
    try {
        // Fetch user details from the database using Prisma
        const users = await prisma.user.findFirst({
            where: {
                id: params.userId,
            },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: {
                    select: {
                        slug: true,
                    },
                },
            },
        });

        // Return user details in the response
        return NextResponse.json(users, { status: 200 });
    } catch (error) {
        // Return an error response in case of failure
        return NextResponse.json({ message: "Could not fetch user details" }, { status: 500 });
    }
}

/**
 * Handles DELETE requests to delete a specific user.
 * @param {NextRequest} req - The incoming request object.
 * @param {Object} context - The context object containing parameters and other information.
 * @returns {NextResponse} The response object indicating the success or failure of the deletion.
 */
export async function DELETE(req, context) {
    try {
        const { params } = context;

        // Delete the user from the database using Prisma
        const result = await prisma.user.delete({
            where: {
                id: params.userId,
            },
        });

        // Return a success response
        return NextResponse.json({ message: "Successfully deleted user" }, { status: 200 });
    } catch (error) {
        // Return an error response in case of failure
        return NextResponse.json({ message: "Failed to delete user" }, { status: 500 });
    }
}

/**
 * Handles PATCH requests to update details of a specific user.
 * @param {NextRequest} req - The incoming request object.
 * @param {Object} context - The context object containing parameters and other information.
 * @returns {NextResponse} The response object indicating the success or failure of the update.
 */
export async function PATCH(req, context) {
    const { firstName, lastName, email, role } = await req.json();
    try {
        const { params } = context;

        // Update user details in the database using Prisma
        const result = await prisma.user.update({
            where: {
                id: params.userId,
            },
            data: {
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
        return NextResponse.json({ message: "Successfully updated user's details" }, { status: 200 });
    } catch (error) {
        // Return an error response in case of failure
        return NextResponse.json({ message: "Failed to update user's details" }, { status: 500 });
    }
}
