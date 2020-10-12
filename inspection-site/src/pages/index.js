import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
const logo = require("../images/oneil.jpg");

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />

      <section className="text-center">
        <div className="mx-auto bg-white">
          <img
            alt="O'Neil Home Inspections Stylized Logo"
            className="block w-1/2 mx-auto mb-8"
            src={logo}
          />

          <h2 className="inline-block p-3 mb-4 text-2xl font-bold bg-yellow-400">
            Over four decades of combined experience.
          </h2>

          <p className="leading-loose">
            Ensuring you get the quality home inspection you deserve.
          </p>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
