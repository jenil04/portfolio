import React from 'react';
import Link from 'next/link';

export default function Token(): JSX.Element {
  return (
<section className="text-black font-b">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-black">$JENIL</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-md text-black">Below, you'll find latest quests to earn $JENIL and spend them to redeem exclusive rewards.</p>
    </div>
    <div className="lg:w-2/3 w-full mx-auto overflow-auto">
      <table className="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th className="px-4 py-3 title-font font-b text-white text-lg bg-black rounded-tl">Quest</th>
            <th className="pxpx-4 py-3 title-font font-b text-white text-lg bg-black">Earn</th>
            <th className="px-4 py-3 title-font font-b text-white text-lg bg-black">Redeem</th>
            <th className="px-4 py-3 title-font font-b text-white text-lg bg-black rounded-tr">Spend</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-3">Refer engineers to join Coinvise</td>
            <td className="px-4 py-3">5,000 $JENIL</td>
            <td className="px-4 py-3">Access to my subscriptions</td>
            <td className="px-4 py-3 text-lg text-gray-900">7,500 $JENIL</td>
          </tr>
          <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3">Onboard creators to Coinvise</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">2,500 $JENIL</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">Exclusive Coinvise Merch</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">3,000 $JENIL</td>
          </tr>
          <tr>
            <td className="border-t-2 border-gray-200 px-4 py-3">Shoutout Coinvise on twitter, your podcast or newsletter</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">500 $JENIL</td>
            <td className="border-t-2 border-gray-200 px-4 py-3">Book of your choice</td>
            <td className="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">1,000 $JENIL</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>
  );
}