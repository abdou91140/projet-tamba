import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children, page }) {
  return (
    <div className="md:max-h-screen ">
      <Head>
        <title>{page}</title>
      </Head>
      <Header></Header> <main className="lg:mx-20 ">{children}</main>
      <Footer></Footer>
    </div>
  );
}
