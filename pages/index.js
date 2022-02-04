import axios from "axios";
import Head from "next/head";
import Featured from "../components/Featured";
import ProductList from "../components/ProductList";

export default function Home({ productList, admin }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />

      {admin && <span>Hello</span>}
      <ProductList productList={productList} />
    </div>
  );
}

export const getServerSideProps = async (ctx) => {
  const myCookie = ctx.req?.cookies || "";
  let admin = false;
  if (myCookie.token === process.env.TOKEN) {
    admin = true;
  }
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,
      admin,
    },
  };
};
