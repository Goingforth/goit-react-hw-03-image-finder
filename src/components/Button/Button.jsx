import { Component } from 'react';
import { LocationButton, LoadMore } from './Button.styled';

export default class Button extends Component {
  state = {
    page: 1,
  };

  incPage = () => {
    this.setState(state => ({
      page: state.page + 1,
    }));
    console.log(this.state.page);
    this.props.updatePage(this.state.page);
  };

  render() {
    return (
      <LocationButton>
        <LoadMore type="button" onClick={this.incPage}>
          Load more
        </LoadMore>
      </LocationButton>
    );
  }
}
