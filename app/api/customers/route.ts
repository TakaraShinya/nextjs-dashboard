
import { NextResponse } from "next/server";
import { fetchCustomers } from '@/app/lib/data';

/**
 * @swagger
 * /api/customers:
 *   get:
 *     summary: "Fetch customers data"
 *     description: "Fetch customers data"
 *     parameters: []
 *     responses:
 *       200:
 *         description: ""
 *         schema:
 *           type: "object"
 *           properties:
 *             customers:
 *               type: "array"
 *               items:
 *                 type: "object"
 *                 properties:
 *                   id:
 *                     type: "string"
 *                     description: ""
 *                   name:
 *                     type: "string"
 *                     description: ""
 */
export async function GET() {
    try {
        const customers = await fetchCustomers(); // Fetch data inside the component

        return NextResponse.json({
            customers
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' + error }, { status: 500 })
    }
}