import { getImageListItemBarUtilityClass } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const ImageGallary = () => {
  const images = [
    { id: 1, imgSrc: "/hospital/1.jpg" },
    { id: 4, imgSrc: "/hospital/3.jpg" },
    { id: 3, imgSrc: "/hospital/3.jpg" },
    { id: 5, imgSrc: "/hospital/3.jpg" },
    { id: 2, imgSrc: "/hospital/2.jpg" },
  ];

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
        {images.map((img) => {
          return (
            <div
              className="pics"
              key={img.id}
              onClick={() => getImage(img.imgSrc)}
            >
              <img src={img.imgSrc} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageGallary;
