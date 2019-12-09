import * as React from "react";

import { Layout } from "~/components/templates";

import { Fonts, Async, Seo } from "~/components/sections";

const seoProps = {
  title: "Main",
  desc: "Main page",
};

const IndexPage = () => {
  return (
    <>
      <Seo {...seoProps} />
      <Layout>
        <Async />
        <Fonts />
      </Layout>
    </>
  );
};

export default IndexPage;
