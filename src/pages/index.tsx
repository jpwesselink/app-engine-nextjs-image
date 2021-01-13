import { NextPage } from 'next';
import getConfig from 'next/config';
import React from 'react';

const Index: NextPage = () => {
  const { serverRuntimeConfig } = getConfig();
  return (
    <div>
      <h2>hello world</h2>
      <pre>{JSON.stringify(serverRuntimeConfig, null, 4)}</pre>
      <img alt="logo" src="/logo.jpg" />
    </div>
  );
};

Index.getInitialProps = () => {
  return {};
};

export default Index;
