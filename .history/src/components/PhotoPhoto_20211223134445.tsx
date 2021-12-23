import React from "react";
import './PhotoPhoto.scss'

const PhotoPhoto = () => {
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
          {images.map((image, i) => (
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
