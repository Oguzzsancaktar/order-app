import React from "react";
import styles from "../styles/ProductList.module.css";
import ProductCard from "./ProductCard";

const ProductList = ({ productList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BESR PIZZA</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sunt, unde
        consectetur iure cumque explicabo? Ratione accusantium perspiciatis
        praesentium a autem hic, ab laudantium, voluptatem, fuga laboriosam
        molestiae vero nihil.
      </p>
      <div className={styles.wrapper}>
        {productList.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
