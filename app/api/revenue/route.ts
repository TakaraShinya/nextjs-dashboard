
import { NextResponse } from "next/server";
import { fetchRevenue } from '@/app/lib/data';

/**
 * @swagger
 * /api/revenue:
 *   get:
 *     summary: "Fetch revenue data"
 *     description: "Fetch revenue data"
 *     parameters: []
 *     responses:
 *       200:
 *         description: ""
 *         schema:
 *           type: "object"
 *           properties:
 *             revenue:
 *               type: "array"
 *               items:
 *                 type: "object"
 *                 properties:
 *                   month:
 *                     type: "string"
 *                     description: ""
 *                   revenue:
 *                     type: "number"
 *                     description: ""
 *       500:
 *         description: "500 error"
 *         schema:
 *           type: "object"
 *           properties:
 *             error:
 *               type: "string"
 */
export async function GET() {
    try {
        const revenue = await fetchRevenue(); // Fetch data inside the component

        return NextResponse.json({
            revenue
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' + error }, { status: 500 })
    }
}