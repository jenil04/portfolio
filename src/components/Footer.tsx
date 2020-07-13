import cxs from "cxs/component"
import { ReactElement } from "react"
import { Atoms, Link, Small } from "./designSystem"

const StyledFooter = cxs("footer")({
  borderTop: "1px solid",
  fontFamily: Atoms.font.family.sans,
  marginTop: Atoms.spacing.xlarge,
  paddingBottom: Atoms.spacing.large,
  paddingLeft: Atoms.widths.content,
  paddingTop: Atoms.spacing.small,
})

const FooterWrapper = cxs("div")({
  maxWidth: Atoms.widths.container,
})

export default function Footer(): ReactElement<typeof StyledFooter> {
  return (
    <StyledFooter>
      <FooterWrapper>
        <Small display="block">
          Jenil Thakker's website inspired by
          {" "}<Link href="https://twitter.com/_dte">Daniel Eden</Link>. You can find me on
          {" "}<Link href="https://github.com/jenil04">GitHub</Link>, or send 
          an <Link href="mailto:jenilkthakker@gmail.com">Email</Link>.
        </Small>
      </FooterWrapper>
    </StyledFooter>
  )
}
