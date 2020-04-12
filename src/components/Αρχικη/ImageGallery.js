import React from 'react';

import Gallery from 'react-grid-gallery';



const IMAGES =
[{
    src: "https://ak1.picdn.net/shutterstock/videos/32925031/thumb/1.jpg",
    thumbnail: "https://ak1.picdn.net/shutterstock/videos/32925031/thumb/1.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 212,

    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: "https://ak1.picdn.net/shutterstock/videos/32925031/thumb/1.jpg",
    thumbnail: "https://ak1.picdn.net/shutterstock/videos/32925031/thumb/1.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 212,

    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: "https://ak1.picdn.net/shutterstock/videos/32925031/thumb/1.jpg",
    thumbnail: "https://ak1.picdn.net/shutterstock/videos/32925031/thumb/1.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 212,

    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: "https://ak1.picdn.net/shutterstock/videos/32925031/thumb/1.jpg",
    thumbnail: "https://ak1.picdn.net/shutterstock/videos/32925031/thumb/1.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 212,

    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: "https://ak1.picdn.net/shutterstock/videos/32925031/thumb/1.jpg",
    thumbnail: "https://ak1.picdn.net/shutterstock/videos/32925031/thumb/1.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 212,

    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: "https://ak1.picdn.net/shutterstock/videos/32925031/thumb/1.jpg",
    thumbnail: "https://ak1.picdn.net/shutterstock/videos/32925031/thumb/1.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 212,

    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: "https://ak1.picdn.net/shutterstock/videos/32925031/thumb/1.jpg",
    thumbnail: "https://ak1.picdn.net/shutterstock/videos/32925031/thumb/1.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 212,

    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: "https://ak1.picdn.net/shutterstock/videos/32925031/thumb/1.jpg",
    thumbnail: "https://ak1.picdn.net/shutterstock/videos/32925031/thumb/1.jpg",
    thumbnailWidth: 350,
    thumbnailHeight: 212,

    caption: "Boats (Jeshu John - designerspics.com)"
},
{
    src: "https://ak1.picdn.net/shutterstock/videos/32925031/thumb/1.jpg",
    thumbnail: "https://ak1.picdn.net/shutterstock/videos/32925031/thumb/1.jpg",
    thumbnailWidth: 250,
    thumbnailHeight: 212,

    caption: "Boats (Jeshu John - designerspics.com)"
},
]

const ImageGallery=()=>{
  return(
   <div className="gallery-wrapper">
      <Gallery images={IMAGES} enableImageSelection={false}
     backdropClosesModal={false}
     showImageCount={true}
      />
     
   </div>
  )
}

export default ImageGallery;
