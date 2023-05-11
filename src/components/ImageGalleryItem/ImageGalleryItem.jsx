import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ id, webformatURL, largeImageURL, tags }) => {
  return (
    <GalleryItem>
      <GalleryImage src={webformatURL} alt={tags} />
    </GalleryItem>
  );
};
export default ImageGalleryItem;
