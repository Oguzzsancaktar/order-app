import React from "react";
import styles from "../styles/AddButton.module.css";

const AddButton = ({setClose}) => {
  return <div onClick={()=> setClose(false)} className={styles.mainAddButton}>

  </div>;
};

export default AddButton;
