import Head from "next/head";
import SearchPage from "../components/SearchPage";
import SearchPageUsingHooks from "../components/SearchPageUsingHooks";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dogg Treats</title>
        <meta
          name="description"
          content="Just a bunch of totally fairly priced dog treats"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <SearchPage /> */}
      <SearchPageUsingHooks />
    </div>
  );
}
