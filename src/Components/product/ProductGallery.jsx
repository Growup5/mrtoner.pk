import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

const ProductGallery = () => {
  const images = [
    {
      original: "https://via.placeholder.com/800/0000FF/808080?text=Product+Image+1",
      thumbnail: "https://via.placeholder.com/150/0000FF/808080?text=Thumb+1",
    },
    {
      original: "https://via.placeholder.com/800/008000/FFFFFF?text=Product+Image+2",
      thumbnail: "https://via.placeholder.com/150/008000/FFFFFF?text=Thumb+2",
    },
    {
      original: "https://via.placeholder.com/800/FF0000/FFFFFF?text=Product+Image+3",
      thumbnail: "https://via.placeholder.com/150/FF0000/FFFFFF?text=Thumb+3",
    },
  ];

  return (
    <div className="max-w-3xl mx-auto my-8 p-6 bg-white rounded-lg shadow-lg">
      <h3 className="text-center text-2xl font-bold mb-6">Product Gallery</h3>
      <ImageGallery items={images} showPlayButton={false} showFullscreenButton={true} />
    </div>
  );
};

export default ProductGallery;