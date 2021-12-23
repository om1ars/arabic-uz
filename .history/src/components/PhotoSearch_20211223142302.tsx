import axios from "axios";
import React, { useState } from "react";
import "./PhSearch.scss";
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
  return (
    <div>
      <SRLWrapper>
        <>
          <h1 className="title">📷 React Image Search with Unsplash API</h1>
          <div className="formSection">
            <input
              type="text"
              name="image"
              placeholder="Search images..."
              onChange={getValue}
            />
            <button onClick={getImages} type="submit">
              Search
            </button>
          </div>

          <div className="result">
            {result.map((image:any, id:any) => (
              <div className="card" key={image.id}>
                <a>
                  <LazyLoadImage
                    className="resultImage"
                    src={image.urls.full}
                    effect="blur"
                    delayTime='300'
                  />
                  <p className="username">Photo by {image.user.name}</p>
                </a>
              </div>
            ))}
          </div>
        </>
      </SRLWrapper>
    </div>
  );
};

export default PhotoSearch;
