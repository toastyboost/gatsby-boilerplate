import * as React from "react";

import { Layout } from "src/ui/templates";
import { Seo } from "src/ui/organisms";

const seoProps = {
  title: "Main",
  desc: "Main page",
};

const IndexPage: React.FC = () => {
  return (
    <>
      <Seo {...seoProps} />
      <Layout>content</Layout>
    </>
  );
};

export default IndexPage;
