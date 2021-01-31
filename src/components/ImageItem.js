import './ImageItem.css';

function ImageItem(props) {
  const {image, onImageClick} = props;
    return (
        <div className="image-item">
          <img src={image.thumbnailUrl} onClick = {() => {onImageClick(image)}}/> 
          <h4>{image.title}</h4>
        </div>
    );
}

export default ImageItem;