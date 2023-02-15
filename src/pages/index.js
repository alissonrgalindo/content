import Head from "next/head";

import Content from "../components/Content";
import { contentMock } from "../components/Content/mock";

export default function Home() {
  return (
    <>
      <Head>
        <title>Be Happy</title>
        <meta name="description" content="Content WebSite" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Content {...contentMock} />
      </main>
    </>
  );
}
