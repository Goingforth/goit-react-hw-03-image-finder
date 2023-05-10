import React from 'react';
import Searchbar from 'components/Searchbar/Searchbar';
import Modal from 'components/Modal/Modal';
import { Container } from './App.styled';

class App extends React.Component {
  state = {
    images: null,
    showModal: false,
    searchQuery: null,
  };
  componentDidMount() {}

  // componentDidUpdate(prevProps, prevState) {}

  // createContact = data => {
  //   const newContact = {
  //     id: nanoid(),
  //     ...data,
  //   };
  //   const contactsName = this.state.contacts.map(el => el.name);
  //   const name = data.name;
  //   contactsName.includes(name)
  //     ? alert(`${name} is already in contacts`)
  //     : this.setState(prevState => {
  //         return {
  //           contacts: prevState.contacts.concat(newContact),
  //         };
  //       });
  // };

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
        {/* <button type="button" onClick={this.toggleModal}>
          Open modal
        </button> */}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <p>Loren</p>
          </Modal>
        )}
      </Container>
    );
  }
}

export default App;
