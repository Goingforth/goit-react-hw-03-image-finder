import React from 'react';
import Modal from 'components/Modal/Modal';
// import { nanoid } from 'nanoid';
// import ContactForm from 'components/ContactForm/ContactForm';
// import { Container } from './Container.styled';
// import Filter from 'components/Filter/Filter';
// import ContactList from 'components/ContactList/ContactList';
class App extends React.Component {
  state = {
    showModal: false,
  };
  // componentDidMount() {}

  // componentDidUpdate(prevProps, prevState) {}

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
          Open modal
        </button>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <p>Loren</p>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
