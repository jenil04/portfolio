import { XIcon, WarpcastIcon, LinkedInIcon, InstagramIcon, YouTubeIcon, ZoraIcon } from './icons'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-row space-x-4 text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/0xjenil"
          >
            <XIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://farcaster.xyz/jenil"
          >
            <WarpcastIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/jenilthakker/"
          >
            <LinkedInIcon />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/0xjenil" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://youtube.com/@0xjenil"
          >
            <YouTubeIcon />
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://zora.co/@jenil"
          >
            <ZoraIcon />
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300">
      <a href="mailto: j@jenil.com" className="h-7 hover:underline">j@jenil.com</a>
      </p>
    </footer>
  )
}
