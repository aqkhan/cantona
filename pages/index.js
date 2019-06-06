import Head from "next/head";
import ItemSelector from "../components/ItemSelector";
import { rings, stones } from "../data/productsData";
import "../style.css";

// So basically we don't need to anything from API except for posting the order
// Try to do as much locally as possibly

const Index = ({ rings, stones }) => (
  <div>
    <Head>
      <title>Product Customizer Tool</title>
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width"
        key="viewport"
      />
    </Head>
    <div id="container">
      <h2>Product Customizer</h2>
      <ItemSelector items={rings} />
      <ItemSelector items={stones} />
    </div>
  </div>
);
Index.getInitialProps = async () => {
  return { rings, stones };
};

export default Index;
