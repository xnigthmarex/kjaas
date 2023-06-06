import React from 'react'
import {prisma} from "@/db"

export default async function AlterationPricing() {
    const items = await prisma.itemstable.findMany();

  return (
    <>
    <div className="grid justify-items-center text-3xl md:text-3xl bg-blue-600 ">
        <div>
          <h1 className="p-4 text-white">Alteration Pricing</h1>
        </div>
      </div>
      <div className = "grid justify-center p-10">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="md:px-2 px-2 py-2 md:text-3xl text-xl  border-4 border-black">NO.</th>
              <th className="md:px-44 px-10 py-2 md:text-3xl text-xl border-4 border-black">TYPE</th>
              <th className="md:px-2 px-2 py-2 md:text-3xl  text-xl border-4 border-black">COST</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id}>
                <td className="border-4 border-black py-2  md:text-3xl text-xl p-5" >{item.id}</td>
                <td className="border-4 border-black py-2  md:text-3xl text-xl">{item.description}</td>
                <td className="border-4 border-black py-2  md:text-3xl text-xl p-6">${item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
