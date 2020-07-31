import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO";

function NotFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not found" /> 
      <div class="bg-gray-200 mx-auto text-center">
        <h2 className="bg-gray-200 text-2xl font-bold inline-block my-8 p-3 font-soehne">
          Looks like this page is a ghost that got abducted by aliens.
        </h2>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
