import './App.css';
import Header from './components/Header'
import ImageItem from './components/ImageItem'
import ImagePost from './components/ImagePost';
import images from './data/images';
import React, { useEffect, useState } from "react";
import Search from './components/Search';

   
function App() { 
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchText, setSearchText] = useState('');

  function onImageOpenClick(theImage) {
    setSelectedImage(theImage);
  }

  function onImageCloseClick() {
    setSelectedImage(null);
  }

  const imageElements = images.filter((image) => {
    return image.title.includes(searchText);
  }).map((image, index) => {
    return <ImageItem key = {index} image = {image} onImageClick = {onImageOpenClick} />;
  });

  let imagePost = null;
  if(!!selectedImage) {
    imagePost = <ImagePost image = {selectedImage} onBgClick = {onImageCloseClick} />
  }

  return (
    <div className="app">
      <Header />
      <section className="app-section">
        <div className="app-container">
          <Search value={searchText} onValueChange={setSearchText} />
          <div className="app-grid">
            {imageElements}
          </div>
        </div>
      </section>
      {imagePost}
    </div>    
  );
}

export default App;
