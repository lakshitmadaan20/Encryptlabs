import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: "images/engagement.jpeg",
        thumbnail:"images/engagement.jpeg" 
    },
    {
        original: "images/bridal.jpeg",
        thumbnail:"images/bridal.jpeg"      
    }
  ];

const Gallery = () => {

    return (
        <div className="mt-3">
            <ImageGallery items={images} />
        </div>
    )
}

export default Gallery
