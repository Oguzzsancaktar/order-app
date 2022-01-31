import Image from "next/image";
import React from "react";
import styles from "../styles/ProductCard.module.css";

const ProductCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <h1 className={styles.title}>PRODUCT NAME</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque, quis.
      </p>
    </div>
  );
};

export default ProductCard;
