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
        <Image fluid={data.jenil.childImageSharp.fluid} />
        <TextBody>
          Hi, I am Jenil 👋. I recently graduated from San Jose State University with a degree in B.S Software Engineering. 
          For the past 2 years, I've largely invested my time in research about blockchain and cryptocurrencies (you can find my recent publication  
          <Link href='https://ieeexplore.ieee.org/document/8783004/'> here</Link>). 

          <br/>
          <br/>
          Currently, I am working on a blockchain based certification project
          aiming to eliminate physical credentials such as a diploma. I've also contributed to open-source freelance work on Gitcoin (<Link href='https://gitcoin.co/issue/ChainShot/Content/9/3147'>Introduction to Web3.js</Link>).
          Primarily my tech stack involves using React, Node, Solidity, Go, and GraphQL. My previous projects can be found <Link href='github.com/jenil04'> here</Link>. 

          <br/>
          <br/>

          <Image fluid={data.need1.childImageSharp.fluid} />

          In 2017 I started a student organization at San Jose State University called Network for Environment and Energy Development 🌎.
          
          <br/>
          <br/>

          <Image fluid={data.need2.childImageSharp.fluid} />

          <br/>
          <br/>
  
        </TextBody>
        <Button href="mailto:your&#64;email.com">Let's Connect</Button>
      </Layout>
    </>
  );
};

export default About;

export const query = graphql`
  query {
    jenil: file(relativePath: { eq: "jenil.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    need1: file(relativePath: { eq: "need1.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    need2: file(relativePath: { eq: "need2.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;



