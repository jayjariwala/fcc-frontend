import React from 'react'
import '../styles/grid.css';
import ImageCard from './ImageCard';

const ImageList = ({photos}) => {
  const images = photos.map((image) => {
    return <ImageCard key={image.id} image={image} />
  })

  return (
    <div className="image-list">{images}</div>
  )
}

export default ImageList;
