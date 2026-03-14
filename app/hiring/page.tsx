import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'BD & Marketing Lead — tokens.fun',
  description:
    'tokens.fun is hiring a BD & Marketing Lead. Help us bring the next generation of builders to their onchain startup.',
  openGraph: {
    title: 'BD & Marketing Lead — tokens.fun',
    description: 'Launch your onchain startup. We\'re hiring.',
    url: 'https://jenil.com/hiring',
  },
}

export default function HiringPage() {
  return (
    <section>
      {/* Hero */}
      <div className="pb-10 border-b border-neutral-200 dark:border-neutral-800">
        <p className="text-xs text-neutral-500 dark:text-neutral-500 mb-4">
          tokens.fun — Open Role
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.08] mb-5">
          BD & Marketing Lead
        </h1>
        <p className="text-base text-neutral-500 dark:text-neutral-400 max-w-lg leading-relaxed">
          Help us bring the next generation of builders to their onchain startup.
        </p>
        <div className="flex gap-10 mt-10 flex-wrap">
          <div className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-500 font-medium">
              Type
            </span>
            <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              Full-time / Contract
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-500 font-medium">
              Location
            </span>
            <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              Remote, Worldwide
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-500 font-medium">
              Comp
            </span>
            <span className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
              Token + Rev Share
            </span>
          </div>
        </div>
      </div>

      {/* About */}
      <div className="py-12 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="text-xl font-semibold tracking-tight mb-6">About tokens.fun</h2>
        <p className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
          <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">
            tokens.fun is a platform where anyone can become a builder by launching their onchain startup.
          </strong>{' '}
          Create an appcoin, generate your app for free, and let early backers support you from day one.
        </p>
        <p className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
          Tokens today lack durability. They launch, trade, and die within weeks — not because the
          ideas behind them are bad, but because there's nothing generating value after launch. No
          app. No revenue. No reason for anyone to hold beyond speculation. tokens.fun fixes this by
          vertically integrating everything a builder needs: a token launch, an app with built-in
          monetization, and a platform for getting discovered. We're the home for builders — where
          they launch their onchain startup.
        </p>
        <div className="border-l-2 border-neutral-900 dark:border-neutral-100 pl-5 my-7">
          <p className="text-[15px] text-neutral-900 dark:text-neutral-100 leading-relaxed">
            We're not another launchpad. We're building the first platform where a token's durability
            is tied to a real product generating real revenue — where launch day is the beginning,
            not the peak.
          </p>
        </div>
        <p className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
          tokens.fun is live on Base. The infrastructure is built. Now we need to grow the builder
          community around it.
        </p>
      </div>

      {/* The Role */}
      <div className="py-12 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="text-xl font-semibold tracking-tight mb-6">The Role</h2>
        <p className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
          You're the first dedicated growth hire. Your job is to bring builders into tokens.fun —
          people with ideas, audiences, and the conviction to validate those ideas through a token
          launch. You'll own the full funnel: awareness, conversion, and onboarding.
        </p>
        <p className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
          This is not a traditional marketing role. There's no playbook. You're going to be finding
          the right people, convincing them this is worth their time, and walking them through the
          process — end to end, without hand-holding from us.
        </p>
        <ul className="flex flex-col gap-4 mt-6">
          <li className="flex gap-3 items-start text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
            <span className="text-neutral-400 dark:text-neutral-500 shrink-0 mt-0.5 text-sm">—</span>
            <span>
              <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Find and onboard builders</strong> — Identify builders with real audiences and real ideas. Convince them. Get them live on the platform.
            </span>
          </li>
          <li className="flex gap-3 items-start text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
            <span className="text-neutral-400 dark:text-neutral-500 shrink-0 mt-0.5 text-sm">—</span>
            <span>
              <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Design and run campaigns</strong> — Think beyond standard crypto Twitter plays. Invent formats. Run experiments. Own the results.
            </span>
          </li>
          <li className="flex gap-3 items-start text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
            <span className="text-neutral-400 dark:text-neutral-500 shrink-0 mt-0.5 text-sm">—</span>
            <span>
              <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Create content that converts</strong> — Videos, threads, demos, whatever it takes. You produce the content, not just the strategy.
            </span>
          </li>
          <li className="flex gap-3 items-start text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
            <span className="text-neutral-400 dark:text-neutral-500 shrink-0 mt-0.5 text-sm">—</span>
            <span>
              <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Monitor performance and iterate</strong> — Track what's working. Kill what isn't. Bring new initiatives without being asked.
            </span>
          </li>
          <li className="flex gap-3 items-start text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
            <span className="text-neutral-400 dark:text-neutral-500 shrink-0 mt-0.5 text-sm">—</span>
            <span>
              <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">Represent the brand</strong> — You're often the first impression a builder has of tokens.fun. Make it count.
            </span>
          </li>
        </ul>
      </div>

      {/* Who We're Looking For */}
      <div className="py-12 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="text-xl font-semibold tracking-tight mb-6">Who We're Looking For</h2>
        <p className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-5">
          We care more about what you've done than what you say you can do. Here's the profile:
        </p>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-3 items-start text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
            <span className="text-neutral-400 dark:text-neutral-500 shrink-0 mt-0.5 text-sm">—</span>
            <span>
              <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">You have an audience.</strong> Real followers, real engagement, real reach in the crypto or builder space. Not inflated vanity metrics — actual influence.
            </span>
          </li>
          <li className="flex gap-3 items-start text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
            <span className="text-neutral-400 dark:text-neutral-500 shrink-0 mt-0.5 text-sm">—</span>
            <span>
              <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">You have a track record.</strong> You've found people, convinced them of something, and made it happen — without someone managing every step. Show us the receipts.
            </span>
          </li>
          <li className="flex gap-3 items-start text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
            <span className="text-neutral-400 dark:text-neutral-500 shrink-0 mt-0.5 text-sm">—</span>
            <span>
              <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">You operate end to end.</strong> Strategy, execution, design, video — you don't outsource your output. You own the full stack of getting something done.
            </span>
          </li>
          <li className="flex gap-3 items-start text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
            <span className="text-neutral-400 dark:text-neutral-500 shrink-0 mt-0.5 text-sm">—</span>
            <span>
              <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">You believe in what we're building.</strong> You're here because you see what tokens.fun can become — and you want to be the one who makes it happen. That conviction is what drives the best work.
            </span>
          </li>
          <li className="flex gap-3 items-start text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
            <span className="text-neutral-400 dark:text-neutral-500 shrink-0 mt-0.5 text-sm">—</span>
            <span>
              <strong className="text-neutral-900 dark:text-neutral-100 font-semibold">You understand the thesis.</strong> You get why tokens fail. You understand why connecting token launches to real revenue is a different model. You can articulate this to a builder who's never heard of us.
            </span>
          </li>
        </ul>
      </div>

      {/* The Process */}
      <div className="py-12 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="text-xl font-semibold tracking-tight mb-6">The Process</h2>
        <p className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">
          We keep it simple — but we do have an assignment. We want to see you execute, not just
          interview well.
        </p>
        <div className="flex flex-col mt-2">
          {[
            {
              num: '01',
              title: 'Intro Call',
              desc: "We'll cover the basics — vision, the role, what work actually looks like, logistics. You'll tell us who you are and why you're here. We'll tell you why we think this is worth your time.",
            },
            {
              num: '02',
              title: 'Assignment',
              desc: 'Onboard 5 builders using your referral link — including yourself if you want. These need to be real people who are genuinely serious about the token. Your ability to communicate the value prop is being evaluated here. Referral links are generated directly from tokens.fun.',
            },
            {
              num: '03',
              title: 'Assignment Review',
              desc: "We go through what you did, how you did it, and what you'd do differently. You'll walk us through your approach, your campaigns, and what kind of execution you'd bring at scale. We'll share KPIs and goals. You tell us honestly whether you can hit them.",
            },
            {
              num: '04',
              title: 'Offer & Contract',
              desc: "If we're aligned, we draft the contract. Terms are agreed on before anything is signed.",
            },
            {
              num: '05',
              title: 'Onboarding',
              desc: "You're in. Let's build.",
            },
          ].map((step, i, arr) => (
            <div
              key={step.num}
              className={`grid grid-cols-[32px_1fr] gap-5 py-6 ${
                i < arr.length - 1
                  ? 'border-b border-neutral-200 dark:border-neutral-800'
                  : ''
              }`}
            >
              <div className="text-xs font-medium text-neutral-400 dark:text-neutral-500 pt-0.5">
                {step.num}
              </div>
              <div>
                <h3 className="text-base font-semibold mb-1.5 text-neutral-900 dark:text-neutral-100">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Compensation */}
      <div className="py-12 border-b border-neutral-200 dark:border-neutral-800">
        <h2 className="text-xl font-semibold tracking-tight mb-6">Compensation</h2>
        <p className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
          We pay in alignment. If tokens.fun grows, you grow with it.
        </p>
        <div className="flex flex-col border border-neutral-200 dark:border-neutral-800 mt-2">
          <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 flex flex-col gap-1.5">
            <div className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-500 font-medium">
              Token Allocation
            </div>
            <div className="text-xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
              1% of $MINI supply
            </div>
            <div className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
              Tied to platform growth — when tokens.fun wins, so do you.
            </div>
          </div>
          <div className="p-6 border-b border-neutral-200 dark:border-neutral-800 flex flex-col gap-1.5">
            <div className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-500 font-medium">
              Revenue Share
            </div>
            <div className="text-xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
              % of builder fees
            </div>
            <div className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
              A percentage of fees routed to every builder you onboard. Recurring, compounding income
              tied directly to your work.
            </div>
          </div>
          <div className="p-6 flex flex-col gap-1.5">
            <div className="text-[11px] uppercase tracking-wider text-neutral-500 dark:text-neutral-500 font-medium">
              Base Salary
            </div>
            <div className="text-xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
              Monthly base from day one
            </div>
            <div className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
              A fixed monthly base included in your compensation from the start. Terms are agreed on before you begin.
            </div>
          </div>
        </div>
        <p className="mt-4 text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
          Note: We're also open to an Ambassador structure for strong candidates who aren't the right
          fit for the full BD & Marketing Lead role.
        </p>
      </div>

      {/* CTA */}
      <div className="py-14">
        <h2 className="text-xl font-semibold tracking-tight mb-2">Apply</h2>
        <p className="text-[15px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-7">
          Reply to the post below — tell us who you are and why you're the right person for this. Or
          skip ahead and book the intro call directly.
        </p>
        <div className="flex gap-3 flex-wrap items-center">
          <a
            href="https://x.com/jenilt/status/2031996097267380381"
            className="inline-block bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black text-sm font-semibold px-7 py-3 transition-opacity hover:opacity-70"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apply on X &rarr;
          </a>
          <a
            href="/chat"
            className="inline-block border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-neutral-100 text-sm font-semibold px-7 py-3 transition-colors hover:border-neutral-400 dark:hover:border-neutral-500"
          >
            Schedule Intro Call
          </a>
        </div>
      </div>
    </section>
  )
}
