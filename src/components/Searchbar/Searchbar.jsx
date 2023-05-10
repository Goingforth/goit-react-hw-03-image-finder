// import { FormContact } from './FormContact.styled';
// import { Border } from './Border.styled';
import {
  SearchbarHead,
  SearchForm,
  SearchFormButton,
  Input,
  ButtonLabel,
} from './Searchbar.styled';
const { Component } = require('react');

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = evt => {
    const { value } = evt.target;
    this.setState({ searchQuery: value });
  };
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({
      searchQuery: this.state.searchQuery,
    });
    this.reset();
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <>
        <SearchbarHead>
          <SearchForm onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit">
              <ButtonLabel>Search</ButtonLabel>
            </SearchFormButton>
            <Input
              type="text"
              name="searchQuery"
              autocomplete="off"
              autoFocus={true}
              placeholder="Search images and photos"
              value={this.state.searchQuery}
              onChange={this.handleChange}
            />
          </SearchForm>
        </SearchbarHead>
      </>
    );
  }
}
export default Searchbar;
