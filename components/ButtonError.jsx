import React from 'react';
import PropTypes from 'prop-types';

import ButtonErrorStyled from './ButtonErrorStyled';

//const ButtonError = props => <ButtonErrorStyled onClick={props.onClick}>{props.children}</ButtonErrorStyled>;

const ButtonError = props => <ButtonErrorStyled onClick={props.onClick}>{props.children}><div class="Some kind of button"></ButtonErrorStyled>;

ButtonError.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default ButtonError;