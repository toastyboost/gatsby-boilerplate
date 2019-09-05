import React from "react";

import { Layout } from "~/components/templates";
import { Test } from "~/components/blocks";
import { Seo } from "~/components/sections";

const seoProps = {
  title: "Main",
  desc: "Main page",
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
