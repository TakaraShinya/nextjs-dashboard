"use client"

import { Metadata } from 'next';

// export const metadata: Metadata = {
//   title: 'Customers desu',
// };

console.log("NODE_ENV = " + process.env.NODE_ENV);
console.info("NODE_ENV = " + process.env.NODE_ENV);
console.warn("NODE_ENV = " + process.env.NODE_ENV);
console.error("NODE_ENV = " + process.env.NODE_ENV);

export default function Page() {
    return <p>Customers Page</p>;
}