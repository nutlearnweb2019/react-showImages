import './ImagePost.css';

function ImagePost(props) {
    const {image, onBgClick} = props;
    return (
        <div className="image-post">
            <div className="image-post-bg" onClick = {onBgClick}></div>
            <div className="image-post-content">
                <img src={image.fullUrl} />
                <h4>{image.title} ถ้ามีไฟล์ภาพขนาดใหญ่</h4>
                <h6></h6>
            </div>
        </div>
    );
}

export default ImagePost;