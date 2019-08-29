import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';


import {
  Button,
  HeaderBack,
  HeadingXL,
  Image,
  Layout,
  SEO,
  TextBody,
} from '../components';

const About = ({ data }) => {
  return (
    <>
      <SEO title="About" />
      <HeaderBack />
      <Layout>
        <HeadingXL>About</HeadingXL>
        <Image fluid={data.jenil01.childImageSharp.fluid} />
        <TextBody>
          Hi 👋, I am Jenil. I recently graduated from San Jose State University with a degree in B.S Software Engineering. 
          For the past 2 years, I've largely invested my time in research about blockchain and cryptocurrencies (you can find my recent publication  
          <Link href='https://ieeexplore.ieee.org/document/8783004/'> here</Link>). Currently, I am working on a blockchain based certification project
          aiming to eliminate physical credentials such as a diploma. I've also contributed to open-source freelance work on Gitcoin (<Link href='https://gitcoin.co/issue/ChainShot/Content/9/3147'>Introduction to Web3.js</Link>).
          Primarily my tech stack involves using React, Node, Solidity, Go, and GraphQL. My previous projects can be found <Link href='github.com/jenil04'> here</Link>. 
        </TextBody>
        <Button href="mailto:your&#64;email.com">Let's Connect</Button>
      </Layout>
    </>
  );
};

export default About;

export const query = graphql`
  query {
    jenil01: file(relativePath: { eq: "jenil01.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
