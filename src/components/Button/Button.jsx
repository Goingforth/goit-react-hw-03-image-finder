import { LocationButton, LoadMore } from './Button.styled';

const Button = ({ onLeaveFeedback }) => {
  return (
    <LocationButton>
      <LoadMore type="button" onClick={() => onLeaveFeedback()}>
        Load more
      </LoadMore>
    </LocationButton>
  );
};

export default Button;
