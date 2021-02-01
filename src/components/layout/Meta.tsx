import React from 'react';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import { Config } from '../../utils/Config';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
};

const Meta = (props: IMetaProps) => (
  <>
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
      <link
        rel="apple-touch-icon"
        href={`${process.env.baseUrl}/logo.png`}
        key="apple"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${process.env.baseUrl}/logo.png`}
        key="icon32"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${process.env.baseUrl}/logo.png`}
        key="icon16"
      />
      <link rel="icon" href={`/logo.png`} key="favicon" />
    </Head>
    <NextSeo
      title={props.title}
      description={props.description}
      canonical={props.canonical}
      openGraph={{
        title: props.title,
        description: props.description,
        url: props.canonical,
        locale: Config.locale,
        site_name: Config.site_name,
      }}
    />
  </>
);

export { Meta };
