import React from "react";

import styles from "./tournament-item.module.css";
import { IMAGE_API_ROOT, DEFAULT_IMAGE_URL } from "../../../constants/constants";

export default function Tournament({data, onClick}) {
  const {  images, title, description, id, } = data;
  return (
    <div
      onClick={() => onClick({ images: { banner: images?.banner }, title, description, id })}
      className={styles.container}
    >
      <img
        className={styles.image}
        src={images ? (IMAGE_API_ROOT + images.banner.filePath) : DEFAULT_IMAGE_URL}
        alt="banner"
      />
      <div className={styles.infoBlock}>
        <h3>{title}</h3>
        <span>{description}</span>
      </div>
    </div>
  );
}
