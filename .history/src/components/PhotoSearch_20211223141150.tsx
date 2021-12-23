import axios from "axios";
import React, { useState } from "react";

import { SRLWrapper } from "simple-react-lightbox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const PhotoSearch = () => {
  const [image, setImage] = useState("");
  const [result, setResult] = useState<any>([]);
  const ACCESS_KEY = "rQsXbMPq-RiKyskiyx0FgMQE2rspqOMwbjc6o6Iel2s"; //

  const getValue = (event: any) => {
    setImage(event.target.value);
  };

  const getImages = () => {
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      image +
      "&client_id=" +
      ACCESS_KEY;
    axios.get(url).then((response) => {
      setResult(response.data.results);
      console.log(response);
    });
  };
  return <div>PhotoSearch</div>;
};

export default PhotoSearch;
