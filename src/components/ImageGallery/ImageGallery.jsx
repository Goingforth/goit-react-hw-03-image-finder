import { Component } from 'react';
import { nanoid } from 'nanoid';
//import { toast } from 'react-toastify';
import { GalLery } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import Loader from 'components/Loader/Loader';
import { LoaderStyle } from 'components/Loader/Loader.styled';
import Button from 'components/Button/Button';
//import Modal from 'components/Modal/Modal';

const key = '34756753-b2a76777b50bc049ab8c28d3e';
const BASE_URL = 'https://pixabay.com/api/?';
const per_page = 12;

export default class ImageGallery extends Component {
  state = {
    images: null,
    error: null,
    loading: false,
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    console.log(this.state.page);
    if (
      prevProps.searchQuery !== this.props.searchQuery ||
      prevState.page !== this.state.page
    ) {
      const query = this.props.searchQuery;
      this.setState({ loading: true });

      if (prevProps.searchQuery !== this.props.searchQuery) {
        this.setState({ images: null, page: 1 });
      }

      fetch(
        `${BASE_URL}q=${query}&page=${this.state.page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${per_page}`
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(new Error('ERROR request'));
        })
        .then(images => images.hits)
        .then(images => this.setState({ images }))

        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ loading: false });
        });
    }
  }

  incFeedback = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
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
              {images.map(({ webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                  key={nanoid()}
                  webformatURL={webformatURL}
                  tags={tags}
                  largeImageURL={largeImageURL}
                />
              ))}
            </GalLery>
            <Button onLeaveFeedback={this.incFeedback} />
          </>
        )}
      </div>
    );
  }
}
