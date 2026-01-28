import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
<section className="bg-white dark:bg-black text-neutral-900 dark:text-neutral-100">
  <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
    Jenil Thakker
  </h1>
  <p className="mb-4 text-neutral-900 dark:text-neutral-200">
    {`Building companies that elevate consciousness.`}
  </p>

  <div className="my-8">
    <h2 className="text-xl font-semibold mb-4">Work</h2>
    <ul className="list-disc list-inside space-y-2">
    <li>Built <a href="https://jenil.ai" className="text-neutral-600 dark:text-neutral-400 hover:underline" target="_blank" rel="noopener noreferrer">Jenil AI</a>: my AI co-founder.</li>
        <ul className="list-disc list-inside ml-6 space-y-1 text-neutral-900 dark:text-neutral-200">
          <li>Manages marketing across 4 social accounts.</li>
          <li>Handles sales outreach and user onboarding.</li>
          <li>Creates strategy docs, launch plans, and investor updates.</li>
          <li>Automates operations and systems.</li>
        </ul>
    <li>Founder & CEO, Tokenfi Inc: tools for builders to create without limits.</li>
        <ul className="list-disc list-inside ml-6 space-y-1 text-neutral-900 dark:text-neutral-200">
          <li>Raised $2.6m+ from IDEO CoLab Ventures, Galaxy Digital & others.</li>
          <li>Won <a href='https://pioneer.app/blog/pioneer-interview-jenil-thakker/' className="text-neutral-600 dark:text-neutral-400 hover:underline" target="_blank" rel="noopener noreferrer">Pioneer</a>: an accelerator founded by <a href="https://dcgross.com/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Daniel Gross</a> & <a href="https://x.com/narang_rishi" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Rishi Narang</a>.</li>
          <li>Built <a href='https://minidev.fun' className="text-neutral-600 dark:text-neutral-400 hover:underline" target="_blank" rel="noopener noreferrer">Minidev</a>: build fullstack onchain apps with natural language.</li>
          <li>Built <a href='https://earnkit.com' className="text-neutral-600 dark:text-neutral-400 hover:underline" target="_blank" rel="noopener noreferrer">EarnKit</a>: add monetization to apps created with Minidev.</li>
          <li>Built <a href='https://tokens.fun' className="text-neutral-600 dark:text-neutral-400 hover:underline" target="_blank" rel="noopener noreferrer">Tokens</a>: launch tokens for apps created with Minidev.</li>
          <li>Built <a href='https://coinvise.ai/growth' className="text-neutral-600 dark:text-neutral-400 hover:underline" target="_blank" rel="noopener noreferrer">Coinvise</a>: reward users to drive onchain growth.</li>
        </ul>
      <li>Published papers on<a href="https://ieeexplore.ieee.org/document/8783004" className="text-neutral-600 dark:text-neutral-400 hover:underline"> token locking</a>, <a href="https://ieeexplore.ieee.org/document/9043061" className="text-neutral-600 dark:text-neutral-400 hover:underline">a threshold-based consensus algorithm</a> & <a href="https://ieeexplore.ieee.org/document/9042998" className="text-neutral-600 dark:text-neutral-400 hover:underline">secure data management</a>.</li>
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
  <div className="my-8">
    <h2 className="text-xl font-semibold mb-4">Other</h2>
    <ul className="list-disc list-inside space-y-2 text-neutral-900 dark:text-neutral-200">
      <li>Pro Table Tennis: Nationals, North-West India Champion.</li>
      <li>Started <a href="https://www.facebook.com/NEEDatSJSU/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">Network for Environment & Energy Development</a>.</li>
      <li>Crwodfunded $8.5k & built a <a href="https://www.mercurynews.com/2018/06/11/student-run-program-sends-sjsu-rocket-club-to-new-heights/" target="_blank" rel="noopener noreferrer" className="text-neutral-600 dark:text-neutral-400 hover:underline">rocket</a> crossing 100k ft in space.</li>
      <li>Open Water Diver.</li>
    </ul>
  </div>
</section>
  )
}
