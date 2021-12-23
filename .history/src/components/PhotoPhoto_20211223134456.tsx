import React from "react";
import './PhotoPhoto.scss'

const PhotoPhoto = () => {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = (count = 10) => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then((res) => {
        setImage([...images, ...res.data]);
      });
  };

  const handleClick = (image) => {
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
