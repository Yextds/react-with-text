import * as React from "react";

type Thumbnail = {
  height: number;
  width: number;
  url: string;
};

type Image = {
  height?: number;
  width?: number;
  url: string;
  thumbnails?: Thumbnail[];
};

type PhotoGallery = {
  photoGallery: any;
};

const PhotoGallery = (props: PhotoGallery) => {
  const { photoGallery } = props;

  return (
    <div className="photoGallery" style={{ display: "flex", height: "400px" }}>
      {photoGallery.map((i: any, index: any) => (
        <img src={i.image.url} key={index} />
      ))}
    </div>
  );
};

export default PhotoGallery;
