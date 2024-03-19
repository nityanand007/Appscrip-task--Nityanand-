import React from "react";
import Header from "./header";
import styles from "@/styles/Home.module.css";
import Filter from "./filter";
import Description from "./decription";
import Item from "./item";
function Home(data) {
  const product_data=data?.data
  return (
    <>
      <div className={styles.main}>
        <Header />
        <Description/>
      </div>
      <Filter data={product_data}/>
      <Item data={product_data}/>
    </>
  );
}

export default Home;
