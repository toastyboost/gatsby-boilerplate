import React from 'react';

import { Layout } from '~/components/templates';
import { Test, Seo } from '~/components/blocks';

const seoProps = {
  title: 'Main',
  desc: 'Main page',
};

const IndexPage = () => {
  return (
    <>
      <Seo {...seoProps} />
      <Layout>
        <Test />
      </Layout>
    </>
  );
};

export default IndexPage;
