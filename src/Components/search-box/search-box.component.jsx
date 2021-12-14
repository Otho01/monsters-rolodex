import React from 'react';
import { InputWrapper } from './search-box.styles';

export const SearchBox = ({ placeholder, handleChange }) => (
  <InputWrapper
    type='search'
    placeholder={placeholder}
    onChange={handleChange}
  />
);
