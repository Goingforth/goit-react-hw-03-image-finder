import { Component } from 'react';
//import { toast } from 'react-toastify';
import { GalLery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import { LoaderStyle } from 'components/Loader/Loader.styled';
import Button from 'components/Button/Button';

const key = '34756753-b2a76777b50bc049ab8c28d3e';
const BASE_URL = 'https://pixabay.com/api/?';
const per_page = 12;
// let page = 1;
export default class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
    loading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.page !== prevState.page) {
    //   console.log('Page обновился');
    //console.log(this.state.page);
    // }
    if (prevProps.searchQuery !== this.props.searchQuery) {
      const query = this.props.searchQuery;
      this.setState({ loading: true, images: null });
      fetch(
        `${BASE_URL}q=${query}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${per_page}`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error('ERROR request'));
        })
        .then(images => this.setState({ images }))
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  updatePage = value => {
    this.setState({ page: value });
  };

  render() {
    const { error, loading, images } = this.state;
    return (
      <div>
        {error && <h1>{error.message}</h1>}
        {loading && (
          <LoaderStyle>
            <Loader />
          </LoaderStyle>
        )}
        {images && (
          <>
            <GalLery>
              {images.hits.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                  key={id}
                  webformatURL={webformatURL}
                  tags={tags}
                />
              ))}
            </GalLery>
            <Button updatePage={this.updatePage} />
          </>
        )}
      </div>
    );
  }
}

//   <GalLery>
//     {this.state.images.total !== 0
//       ? this.state.images.hits.map(
//           ({ id, webformatURL, largeImageURL, tags }) => (
//             <ImageGalleryItem
//               key={id}
//               webformatURL={webformatURL}
//               tags={tags}
//             />
//           )
//         )
//       : toast.error('No result find!')}
//  </GalLery>

//||
//   prevState.page !== this.state.page
