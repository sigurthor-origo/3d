import React, { FC } from "react";
import Head from "next/head";
import { HomePage } from "@views/HomePage/HomePage";

const Home: FC = () => (
  <>
    <Head>
      <title>3D</title>
    </Head>
    <HomePage />
  </>
);
export default Home;
