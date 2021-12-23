import axios from "axios";
import React, { useEffect, useState } from "react";
import "./PhotoPhoto.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";
import Loader from "./Loader";
import { UnsplashImage } from "./UnsplashImage";

const WrapperImages = styled.section`
  max-width: 70rem;
  margin: 4rem auto;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-auto-rows: 300px;
`;

const PhotoPhoto = () => {
  const [images, setImage] = useState<any>([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then((res: any) => {
        setImage([...images, ...res.data]);
      });
  };

  const handleClick = (image: any) => {
    console.log(image);
  };

  return (
    <div>
      <div>
        {/* <Heading /> */}
        {/* <GlobalStyle /> */}
        <InfiniteScroll
          dataLength={images.length}
          next={fetchImages}
          hasMore={true}
          loader={<Loader />}
        >
          <WrapperImages>
            {images.map((image:any, i:any) => (
              <UnsplashImage
                onClick={handleClick(image)}
                url={image.urls.thumb}
                key={i}
              />
            ))}
          </WrapperImages>
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default PhotoPhoto;
