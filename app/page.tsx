import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
<section className="bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">
  <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
    Jenil Thakker
  </h1>
  <p className="mb-4 text-neutral-900 dark:text-neutral-200">
    {`Focused on building and investing in frontier technology that contributes to human progress.`}
  </p>

  <div className="my-8">
    <h2 className="text-xl font-semibold mb-4">Work</h2>
    <ul className="list-disc list-inside space-y-2">
    <li>Building <a href="https://earnkit.com" className="text-neutral-600 dark:text-neutral-400 hover:underline">EarnKit</a>⸺infrastructure for creating onchain AI agents.</li>
      <li>
        Founder and CEO at <a href="https://coinvise.co" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Coinvise</a>⸺create, trade & distribute tokens:
        <ul className="list-disc list-inside ml-6 space-y-1 text-neutral-900 dark:text-neutral-200">
          <li>Won <a href='https://pioneer.app/blog/pioneer-interview-jenil-thakker/' className="text-neutral-600 dark:text-neutral-400 hover:underline" target="_blank" rel="noopener noreferrer">Pioneer</a>⸺an accelerator founded by <a href="https://dcgross.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Daniel Gross</a> & <a href="https://x.com/narang_rishi" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Rishi Narang</a>.</li>
          <li>Raised $2.6m+ from IDEO CoLab Ventures, Galaxy Digital, Scalar Capital, Acapital, The LAO, Volt Capital & others.</li>
          <li>Created <a href="https://x.com/0xPolygon/status/1726683350818238795" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Polygon's Social Switch</a>, <a href="https://x.com/CoinbaseWallet/status/1738232055341760996" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Base Spotlight</a>, <a href="https://www.coindesk.com/learn/what-is-desk-coindesks-social-token-explained/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">CoinDesk’s DESK token</a>, <a href="https://community.theblock.co/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">The Block’s Community Pass</a>.</li>
        </ul>
      </li>
      <li>Published <a href="https://ieeexplore.ieee.org/document/8783004" className="text-neutral-600 dark:text-neutral-400 hover:underline">token locking reward model</a>, <a href="https://ieeexplore.ieee.org/document/9043061" className="text-neutral-600 dark:text-neutral-400 hover:underline">a threshold-based consensus algorithm</a> & <a href="https://ieeexplore.ieee.org/document/9042998" className="text-neutral-600 dark:text-neutral-400 hover:underline">secure data management for IoT devices</a>.</li>
    </ul>
  </div>

  <div className="my-8">
    <h2 className="text-xl font-semibold mb-4">Investments</h2>
    <ul className="list-disc list-inside space-y-2">
      <li><a href="https://coinlist.co/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">CoinList</a></li>
      <li><a href="https://cyber.co" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Cyber</a></li>
      <li><a href="https://www.jokerace.io/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">JokeRace</a></li>
      <li><a href="https://globalcoinresearch.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Global Coin Research (GCR)</a></li>
      <li><a href="https://guild.xyz" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Guild</a></li>
      <li><a href="https://zerion.io/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Zerion</a></li>
    </ul>
  </div>

  <div className="my-8">
    <h2 className="text-xl font-semibold mb-4">Interviews & Talks</h2>
    <ul className="list-disc list-inside space-y-2 text-neutral-900 dark:text-neutral-200">
      <li>How to Build at <a href="https://x.com/0xjenil/status/1855491574035341419" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">IIM Ahmedabad</a>, <a href="https://x.com/0xjenil/status/1855877805126676790" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">IIT Gandhinagar</a> & <a href="https://x.com/iaruniversity/status/1834462359521222847" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">IAR</a>.</li>
      <li>Superteam Podcast with <a href="https://www.youtube.com/@tanmaybhat" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Tanmay Bhat</a> & <a href="https://www.akshaybd.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Akshay BD</a> on Social Tokens.</li>
      <li>Mint Podcast with Adam Levy: <a href="https://youtu.be/_LLcewxkSeE?si=EV6xML56S7bfakBP" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Tools for Airdrops</a>, <a href="https://youtu.be/iV-Lcr04wcc?si=T6MXGCm1iNniiQxw" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Membership NFTs</a>, <a href="https://youtu.be/pjn_-6GBGRY?si=TvcSRhnOkqUIsSe_" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Web3 Creator Economy</a>.</li>
      <li><a href="https://pods.media/behind-the-builder/jenil-thakker-coinvise" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Behind the Builder</a> with Lindsay Gaziano.</li>
      <li><a href="https://youtu.be/KPhJYzF56ng?si=p2BhO0HZcDwisO8y" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">The Encrypted Economy</a> with Eric Hess on DAOs & Social Graphs.</li>
      <li>Crypto Native with Future Alisha on <a href="https://youtu.be/tSM2VsLH9Yc?si=FMY4gerQOQwzgZNz" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Creators & Communities</a>.</li>
    </ul>
  </div>
</section>
  )
}
