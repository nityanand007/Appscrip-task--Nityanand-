import React from "react";
import Home from "@/components/home";
import Head from "next/head";
import Footer from "@/components/footer";
import styles from "../styles/Footer.module.css";
import Footer_mob from "@/components/footer_mob";
export default function index(data) {
  function addProductJsonLd() {
    return {
      _html: `{
      "@context": "https://schema.org/",
      "@type": "Product",
      "name": "Descritption",
      url: "",
      "image": [
        "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
       ],
      "description": "Discover top-quality products and unbeatable deals at our online store! From trendy fashion to must-have gadgets, shop now and enjoy fast shipping. Find everything you need, all in one convenient place. Explore our wide selection today",
    }`,
    };
  }
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Discover top-quality products and unbeatable deals at our online store! From trendy fashion to must-have gadgets, shop now and enjoy fast shipping. Find everything you need, all in one convenient place. Explore our wide selection today!"
          key="desc"
        />
        <meta
          property="og:title"
          content="Your Ultimate Destination for Online Shopping: Shop Trendy Fashion, Electronics, and More!"
        />
        <meta
          property="og:description"
          content="Stay ahead of the trends and shop with confidence! Explore our wide range of products, from fashion to electronics, and discover unbeatable deals. Join our online community of savvy shoppers today"
        />
        <meta
          property="og:image"
          content="https://assets.justinmind.com/wp-content/webp-express/webp-images/uploads/2019/08/ecommerce-website-design.png.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(addProductJsonLd()),
          }}
          key="product-jsonld"
        />
      </Head>
      <Home data={data} />
      <div className={styles.footer_section}>
        <div className={styles.isDesktop}>
          <Footer />
        </div>
        <div className={styles.isMob}>
          <Footer_mob />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  return {
    props: { data },
  };
}
