import { Component } from 'react';
import { GalLery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const key = '34756753-b2a76777b50bc049ab8c28d3e';
const BASE_URL = 'https://pixabay.com/api/?';
const per_page = 12;
const page = 1;
export default class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      const query = this.props.searchQuery;
      this.setState({ loading: true });
      fetch(
        `${BASE_URL}q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${per_page}`
      )
        .then(res => res.json())
        .then(images => this.setState({ images }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  render() {
    return (
      <div>
        {this.state.loading && <div>Loading</div>}
        {this.state.images && (
          <GalLery>
            {this.state.images.hits.map(
              ({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                  key={id}
                  webformatURL={webformatURL}
                  tags={tags}
                />
              )
            )}
          </GalLery>
        )}
      </div>
    );
  }
}
// const FriendList = ({ friends }) => (
//   <ListFriend>
//     {friends.map(({ avatar, name, isOnline, id }) => (
//       <FriendListCard
//         key={id}
//         avatar={avatar}
//         name={name}
//         isOnline={isOnline}
//       />
//     ))}
//   </ListFriend>
// );
