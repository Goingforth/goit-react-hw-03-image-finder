import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Modal from 'components/Modal/Modal';
import { Container } from './App.styled';
// import Button from 'components/Button/Button';

class App extends React.Component {
  state = {
    showModal: false,
    searchQuery: '',
  };
  componentDidMount() {}

  onSubmit = ({ searchQuery }) => {
    this.setState({ searchQuery: searchQuery });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery searchQuery={this.state.searchQuery} />
        {/* <Button /> */}

        {/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <p>Loren</p>
          </Modal>
        )}
        <ToastContainer autoClose={3000} theme={'colored'} />
      </Container>
    );
  }
}

export default App;
