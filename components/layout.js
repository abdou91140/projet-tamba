import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

export default function Layout({ children, page }) {
  return (
    <div className="flex flex-col min-h-screen  bg-sene-gradient">
      <Head>
        <title>{page}</title>
      </Head>
      <Header></Header> 
      <main className="lg:mx-40 bg-white rounded-lg">
      <section className="mt-12">
        {children}
        </section>
        </main>
      <Footer></Footer>
    </div>
  );
}
