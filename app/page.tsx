import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
<section className="bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">
  <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
    Jenil Thakker
  </h1>
  <p className="mb-4 text-neutral-700 dark:text-neutral-300">
    {`Focused on building and investing in frontier technology that contributes to human progress.`}
  </p>

  <div className="my-8">
    <h2 className="text-xl font-semibold mb-4">Work</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>
        Founder and CEO at <a href="https://coinvise.co" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Coinvise</a>:
        <ul className="list-disc list-inside ml-6 space-y-1 text-neutral-800 dark:text-neutral-300">
          <li>Pioneer Winner: A startup accelerator founded by <a href="https://dcgross.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Daniel Gross</a> & <a href="https://x.com/narang_rishi" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Rishi Narang</a>.</li>
          <li>Raised 2.6m+ from IDEO CoLab Ventures, Galaxy Digital (Morgan Beller, Jon Kol), Scalar Capital, Acapital, The LAO, Volt Capital and others.</li>
          <li>Highlights: <a href="https://x.com/CoinbaseWallet/status/1738232055341760996" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Base Spotlight</a>, Created <a href="https://www.coindesk.com/learn/what-is-desk-coindesks-social-token-explained/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">CoinDesk’s DESK token</a>, <a href="https://community.theblock.co/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">The Block’s Community Pass</a> & Featured on <a href="https://yourstory.com/the-decrypting-story/coinvise-no-code-tooling-platform-creator-community-web3" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">YourStory</a>.</li>
        </ul>
      </li>
      <li>Previously: Software Engineer at <a href="https://zus.network/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Züs</a>.</li>
      <li>Publications: Token locking reward model, a threshold-based consensus algorithm, and secure data management for IoT devices.</li>
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
    <h2 className="text-xl font-semibold mb-4">Podcasts & Talks</h2>
    <ul className="list-disc list-inside space-y-2">
      <li>Superteam Podcast with <a href="https://www.youtube.com/@tanmaybhat" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Tanmay Bhat</a> & <a href="https://www.akshaybd.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Akshay BD</a> on Social Tokens.</li>
      <li>How to Build at IIM, Ahmedabad & <a href="https://x.com/iaruniversity/status/1834462359521222847" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">IAR</a>.</li>
      <li>Introduction to Web3 at IIT Gandhinagar.</li>
      <li>Mint Podcast with Adam Levy: <a href="https://youtu.be/_LLcewxkSeE?si=EV6xML56S7bfakBP" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Tools for Airdrops</a>, <a href="https://youtu.be/iV-Lcr04wcc?si=T6MXGCm1iNniiQxw" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Membership NFTs</a>, <a href="https://youtu.be/pjn_-6GBGRY?si=TvcSRhnOkqUIsSe_" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Web3 Creator Economy</a>.</li>
      <li><a href="https://pods.media/behind-the-builder/jenil-thakker-coinvise" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Behind the Builder</a> with Lindsay Gaziano.</li>
      <li>The Encrypted Economy with Eric Hess on <a href="https://youtu.be/KPhJYzF56ng?si=p2BhO0HZcDwisO8y" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">DAOs & Social Graphs</a>.</li>
      <li>The Proof of Talk Podcast with Andrei on <a href="https://youtu.be/0SZjpxhKPWk?si=4SD4qydp29NTk_pD" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">onchain rewards</a>.</li>
      <li>Crypto Native with Future Alisha on <a href="https://youtu.be/tSM2VsLH9Yc?si=FMY4gerQOQwzgZNz" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Creators & Communities</a>.</li>
      <li><a href="https://youtu.be/OxiN27wb-_A?si=BRvgfZPwFBiXh5pG" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Community 101</a> on 247Artists.</li>
      <li><a href="https://podbay.fm/p/tokens-but-how/e/1646332196" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Launching Tokens</a> with Sari Azout & Joey DeBruin on TBH.</li>
      <li><a href="https://youtu.be/xYGNhzd2ebA?si=lyvkgPU6qlyxlp6C" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Cooperative Creativity</a> at ETH Denver 2023.</li>
      <li>Dr. Sid Warrier’s Podcast: <a href="https://www.youtube.com/live/Fvbfgn0lCX0?si=uMxaT15LPERlEA9S" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">AI</a>, <a href="https://www.youtube.com/live/gFJ0mB_qBng?si=SgXPjZ0hWRJTiA_b" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Learning Coding</a>.</li>
    </ul>
  </div>

  <div className="my-8">
  <h2 className="text-xl font-semibold mb-4">Writing</h2>
    <BlogPosts />
  </div>
</section>

  )
}
