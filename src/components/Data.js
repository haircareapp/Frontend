import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Data() {
  const [images, setImages] = useState([]);
  useEffect(() => {
    axios
      .get(`./StylistData.json`)
      .then(res => {
        // console.log("res: ", res.data);
        setImages(res.data);
      })
      .catch(err => {
        console.error("handleSubmit: catch: err: ", err);
      });
  }, []);

  console.log(images);
  return (
    <div>
      {images.map(image => (
        <div key={image.img_id}>
          <img src={image.img_url} alt="profile" />
        </div>
      ))}
    </div>

  );
}
