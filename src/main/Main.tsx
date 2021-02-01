import React, { ReactNode } from 'react';
import Hero from '../components/Hero';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

type IMainProps = {
  meta: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="flex flex-col min-h-screen">
    {props.meta}
    <Header />
    <Hero />
    <Footer />
  </div>
);

export { Main };
