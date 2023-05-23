import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterSlice } from '../../redux/Filter/FilterSlice';
import { FilterTitle, FilterInput, FilterContainer } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter.filter);
  return (
    <FilterContainer>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput
        type="text"
        value={filter}
        onChange={e => dispatch(filterSlice(e.target.value))}
        placeholder="Enter name"
      />
    </FilterContainer>
  );
};

export default Filter;