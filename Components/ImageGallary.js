import { getImageListItemBarUtilityClass } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const ImageGallary = ({ images }) => {
  const [modal, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState("");
  const getImage = (img) => {
    setTempimgSrc(img);
    setModel(true);
  };
  return (
    <>
      <div className={modal ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallary">
        {images?.map((img) => {
          return (
            <div
              className="pics"
              key={img._id}
              onClick={() => getImage(img?.image)}
            >
              <img src={img?.image} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageGallary;
