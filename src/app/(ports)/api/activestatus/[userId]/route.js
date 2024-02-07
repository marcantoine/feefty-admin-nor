// API Endpoint for Updating User Status
// This endpoint allows updating the status of a user in the database.

import { prisma } from '@/lib/prisma';

import { NextResponse, NextRequest } from "next/server";

/**
 * Handles PATCH requests to update the status of a user.
 * @param {NextRequest} req - The incoming request object.
 * @param {Object} context - The context object containing parameters and other information.
 * @returns {NextResponse} The response object indicating the success or failure of the operation.
 */
export async function PATCH(req, context) {
    try {
        const { status } = await req.json();
        const { params } = context;

        const result = await prisma.user.update({
            where: {
                id: params.userId,
            },
            data: {
                status: status,
            },
        });
        
        return NextResponse.json({ message: "Status updated" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error updating status" }, { status: 500 });
    }
}
