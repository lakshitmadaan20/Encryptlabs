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
    ,
    {
        original: "images/p1 (1).jpeg",
        thumbnail:"images/p1 (1).jpeg"      
    }
    ,
    {
        original: "images/p1 (3).jpeg",
        thumbnail:"images/p1 (3).jpeg"      
    }
    ,
    {
        original: "images/p1 (4).jpeg",
        thumbnail:"images/p1 (4).jpeg"      
    }
    ,
    {
        original: "images/p1 (5).jpeg",
        thumbnail:"images/p1 (5).jpeg"      
    }
    ,
    {
        original: "images/p1 (6).jpeg",
        thumbnail:"images/p1 (6).jpeg"      
    },
    {
        original: "images/p1 (7).jpeg",
        thumbnail:"images/p1 (7).jpeg"      
    },
    {
        original: "images/p1 (8).jpeg",
        thumbnail:"images/p1 (8).jpeg"      
    },
    {
        original: "images/p1 (9).jpeg",
        thumbnail:"images/p1 (9).jpeg"      
    },
    {
        original: "images/p1 (10).jpeg",
        thumbnail:"images/p1 (10).jpeg"      
    },
    {
        original: "images/p1 (11).jpeg",
        thumbnail:"images/p1 (11).jpeg"      
    },
    {
        original: "images/p1 (12).jpeg",
        thumbnail:"images/p1 (12).jpeg"      
    },
    {
        original: "images/p1 (13).jpeg",
        thumbnail:"images/p1 (13).jpeg"      
    },
    {
        original: "images/p1 (14).jpeg",
        thumbnail:"images/p1 (14).jpeg"      
    },
    {
        original: "images/p1 (15).jpeg",
        thumbnail:"images/p1 (15).jpeg"      
    },
    {
        original: "images/p1 (16).jpeg",
        thumbnail:"images/p1 (16).jpeg"      
    },
    {
        original: "images/p1 (17).jpeg",
        thumbnail:"images/p1 (17).jpeg"      
    },
    {
        original: "images/p1 (18).jpeg",
        thumbnail:"images/p1 (18).jpeg"      
    },
    {
        original: "images/p1 (19).jpeg",
        thumbnail:"images/p1 (19).jpeg"      
    },
    {
        original: "images/p1 (20).jpeg",
        thumbnail:"images/p1 (20).jpeg"      
    },
    {
        original: "images/p1 (21).jpeg",
        thumbnail:"images/p1 (21).jpeg"      
    },
    {
        original: "images/p1 (22).jpeg",
        thumbnail:"images/p1 (22).jpeg"      
    },
    {
        original: "images/p1 (23).jpeg",
        thumbnail:"images/p1 (23).jpeg"      
    },
    {
        original: "images/p1 (24).jpeg",
        thumbnail:"images/p1 (24).jpeg"      
    },
    {
        original: "images/p1 (25).jpeg",
        thumbnail:"images/p1 (25).jpeg"      
    },
    {
        original: "images/p1 (26).jpeg",
        thumbnail:"images/p1 (26).jpeg"      
    },
    {
        original: "images/p1 (27).jpeg",
        thumbnail:"images/p1 (27).jpeg"      
    },
    {
        original: "images/p1 (28).jpeg",
        thumbnail:"images/p1 (28).jpeg"      
    },
    {
        original: "images/p1 (29).jpeg",
        thumbnail:"images/p1 (29).jpeg"      
    },
    {
        original: "images/p1 (30).jpeg",
        thumbnail:"images/p1 (30).jpeg"      
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
