
import { NextRequest, NextResponse } from "next/server";
import { db } from '@vercel/postgres';

/**
 * @swagger
 * /api/invoice:
 *   get:
 *     summary: "Returns the latest invoices"
 *     description: "Returns the latest invoices"
 *     parameters: []
 *     responses:
 *       200:
 *         description: ""
 *         schema:
 *           type: "object"
 *           properties:
 *             LatestInvoices:
 *               type: "object"
 *               properties:
 *                 command:
 *                   type: "string"
 *                   description: ""
 *                 rowCount:
 *                   type: "number"
 *                   description: ""
 *                 oid:
 *                   type: "string"
 *                   description: ""
 *                 rows:
 *                   type: "array"
 *                   items:
 *                     type: "object"
 *                     properties:
 *                       amount:
 *                         type: "number"
 *                         description: ""
 *                       name:
 *                         type: "string"
 *                         description: ""
 *                       image_url:
 *                         type: "string"
 *                         description: ""
 *                       email:
 *                         type: "string"
 *                         description: ""
 *                       id:
 *                         type: "string"
 *                         description: ""
 *                 fields:
 *                   type: "array"
 *                   items:
 *                     type: "object"
 *                     properties:
 *                       name:
 *                         type: "string"
 *                         description: ""
 *                       tableID:
 *                         type: "number"
 *                         description: ""
 *                       columnID:
 *                         type: "number"
 *                         description: ""
 *                       dataTypeID:
 *                         type: "number"
 *                         description: ""
 *                       dataTypeSize:
 *                         type: "number"
 *                         description: ""
 *                       dataTypeModifier:
 *                         type: "number"
 *                         description: ""
 *                       format:
 *                         type: "string"
 *                         description: ""
 *                 _parsers:
 *                   type: "array"
 *                   items:
 *                     type: "string"
 *                     description: ""
 *                 _types:
 *                   type: "object"
 *                   properties:
 *                     _types:
 *                       type: "object"
 *                       properties:
 *                         arrayParser:
 *                           type: "object"
 *                           properties: {}
 *                         builtins:
 *                           type: "object"
 *                           properties:
 *                             BOOL:
 *                               type: "number"
 *                               description: ""
 *                             BYTEA:
 *                               type: "number"
 *                               description: ""
 *                             CHAR:
 *                               type: "number"
 *                               description: ""
 *                             INT8:
 *                               type: "number"
 *                               description: ""
 *                             INT2:
 *                               type: "number"
 *                               description: ""
 *                             INT4:
 *                               type: "number"
 *                               description: ""
 *                             REGPROC:
 *                               type: "number"
 *                               description: ""
 *                             TEXT:
 *                               type: "number"
 *                               description: ""
 *                             OID:
 *                               type: "number"
 *                               description: ""
 *                             TID:
 *                               type: "number"
 *                               description: ""
 *                             XID:
 *                               type: "number"
 *                               description: ""
 *                             CID:
 *                               type: "number"
 *                               description: ""
 *                             JSON:
 *                               type: "number"
 *                               description: ""
 *                             XML:
 *                               type: "number"
 *                               description: ""
 *                             PG_NODE_TREE:
 *                               type: "number"
 *                               description: ""
 *                             SMGR:
 *                               type: "number"
 *                               description: ""
 *                             PATH:
 *                               type: "number"
 *                               description: ""
 *                             POLYGON:
 *                               type: "number"
 *                               description: ""
 *                             CIDR:
 *                               type: "number"
 *                               description: ""
 *                             FLOAT4:
 *                               type: "number"
 *                               description: ""
 *                             FLOAT8:
 *                               type: "number"
 *                               description: ""
 *                             ABSTIME:
 *                               type: "number"
 *                               description: ""
 *                             RELTIME:
 *                               type: "number"
 *                               description: ""
 *                             TINTERVAL:
 *                               type: "number"
 *                               description: ""
 *                             CIRCLE:
 *                               type: "number"
 *                               description: ""
 *                             MACADDR8:
 *                               type: "number"
 *                               description: ""
 *                             MONEY:
 *                               type: "number"
 *                               description: ""
 *                             MACADDR:
 *                               type: "number"
 *                               description: ""
 *                             INET:
 *                               type: "number"
 *                               description: ""
 *                             ACLITEM:
 *                               type: "number"
 *                               description: ""
 *                             BPCHAR:
 *                               type: "number"
 *                               description: ""
 *                             VARCHAR:
 *                               type: "number"
 *                               description: ""
 *                             DATE:
 *                               type: "number"
 *                               description: ""
 *                             TIME:
 *                               type: "number"
 *                               description: ""
 *                             TIMESTAMP:
 *                               type: "number"
 *                               description: ""
 *                             TIMESTAMPTZ:
 *                               type: "number"
 *                               description: ""
 *                             INTERVAL:
 *                               type: "number"
 *                               description: ""
 *                             TIMETZ:
 *                               type: "number"
 *                               description: ""
 *                             BIT:
 *                               type: "number"
 *                               description: ""
 *                             VARBIT:
 *                               type: "number"
 *                               description: ""
 *                             NUMERIC:
 *                               type: "number"
 *                               description: ""
 *                             REFCURSOR:
 *                               type: "number"
 *                               description: ""
 *                             REGPROCEDURE:
 *                               type: "number"
 *                               description: ""
 *                             REGOPER:
 *                               type: "number"
 *                               description: ""
 *                             REGOPERATOR:
 *                               type: "number"
 *                               description: ""
 *                             REGCLASS:
 *                               type: "number"
 *                               description: ""
 *                             REGTYPE:
 *                               type: "number"
 *                               description: ""
 *                             UUID:
 *                               type: "number"
 *                               description: ""
 *                             TXID_SNAPSHOT:
 *                               type: "number"
 *                               description: ""
 *                             PG_LSN:
 *                               type: "number"
 *                               description: ""
 *                             PG_NDISTINCT:
 *                               type: "number"
 *                               description: ""
 *                             PG_DEPENDENCIES:
 *                               type: "number"
 *                               description: ""
 *                             TSVECTOR:
 *                               type: "number"
 *                               description: ""
 *                             TSQUERY:
 *                               type: "number"
 *                               description: ""
 *                             GTSVECTOR:
 *                               type: "number"
 *                               description: ""
 *                             REGCONFIG:
 *                               type: "number"
 *                               description: ""
 *                             REGDICTIONARY:
 *                               type: "number"
 *                               description: ""
 *                             JSONB:
 *                               type: "number"
 *                               description: ""
 *                             REGNAMESPACE:
 *                               type: "number"
 *                               description: ""
 *                             REGROLE:
 *                               type: "number"
 *                               description: ""
 *                     text:
 *                       type: "object"
 *                       properties: {}
 *                     binary:
 *                       type: "object"
 *                       properties: {}
 *                 RowCtor:
 *                   type: "string"
 *                   description: ""
 *                 rowAsArray:
 *                   type: "boolean"
 *                   description: ""
 */
export async function GET() {
    try {
        const client = await db.connect();
        const LatestInvoices = await client.sql`
        SELECT invoices.amount, customers.name, customers.image_url, customers.email, invoices.id
        FROM invoices
        JOIN customers ON invoices.customer_id = customers.id
        ORDER BY invoices.date DESC
        LIMIT 5;`;

        return NextResponse.json({
            LatestInvoices
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' + error }, { status: 500 })
    }
}

/**
 * @swagger
 * /api/invoice:
 *   post:
 *     summary: "Create invoice data"
 *     description: "Create invoice data"
 *     parameters:
 *       -
 *         name: "customer_id"
 *         type: "string"
 *         in: "customer_id"
 *         description: ""
 *         required: true
 *       -
 *         name: "amount"
 *         type: "number"
 *         in: "amount"
 *         description: ""
 *         required: true
 *       -
 *         name: "status"
 *         type: "string"
 *         in: "status"
 *         description: "paid or pending"
 *         required: true
 *     responses:
 *       200:
 *         description: ""
 *         schema:
 *           type: "object"
 *           properties:
 *             message:
 *               type: "string"
 *               description: ""
 *       500:
 *         description: ""
 *         schema:
 *           type: "object"
 *           properties:
 *             message:
 *               type: "string"
 *               description: ""
 */
export async function POST(request: NextRequest) {
    const body =await request.json()

    try {
        const client = await db.connect();
        // Prepare data for insertion into the database
        const { customer_id, amount, status } = body;
        const amountInCents = amount * 100;
        const date = new Date().toISOString().split('T')[0];

        try {
            await client.sql`
                INSERT INTO invoices (customer_id, amount, status, date)
                VALUES (${customer_id}, ${amountInCents}, ${status}, ${date})
            `;
        } catch (error) {
            return NextResponse.json({
                message: 'Database Error: Failed to Create Invoice.',
            }, { status: 500 })
        }

        return NextResponse.json({
            message: 'Create Invoice Successful.',
        }, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' + error }, { status: 500 })
    }
}