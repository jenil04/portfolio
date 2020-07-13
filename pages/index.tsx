import HomeContent from "@/components/HomeContent"
import Layout from "@/components/Layout"
import { Atoms, Link, P } from "@/designSystem"
import { ReactElement } from "react"

export default function HomePage(): ReactElement<typeof Layout> {
  return (
    <Layout>
      <style global jsx>
        {`
          html {
            --site-color: ${Atoms.colors.siteDark} !important;
            --text-color: ${Atoms.colors.wash} !important;
            --wash-color: ${Atoms.colors.text} !important;
            --meta-color: ${Atoms.colors.whiteAlpha} !important;
          }
        `}
      </style>

      <HomeContent>
        <P>
        I'm Jenil, a developer based out of San Francisco. I believe in building minimal, well-designed and simplistic products
          . I spend time <Link href="/blog">writing</Link>, thinking,{" "}
          <Link href="https://twitter.com/jenilkr">tweeting</Link>, and talking
          about crypto, startups and design.
        </P>
      </HomeContent>
    </Layout>
  )
}
