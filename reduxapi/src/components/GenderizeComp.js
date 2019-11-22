import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getGenderData } from '../actions';

const GenderizeComp = props => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setSearch(e.target.value);
  };
  const submitRequest = e => {
    e.preventDefault();
    props.getGenderData(search);
    setSearch('');
    //props.something to submit
  };

  return (
    <>
      {props.error && <div>{props.error}</div>}
      {props.isLoading ? (
        <div>loading data...</div>
      ) : (
        <>
          <div>name: {props.person.name}</div>
          <div>gender: {props.person.gender}</div>
          <div>probability: {props.person.probability}</div>
          <div>count: {props.person.count}</div>
        </>
      )}
      <form onSubmit={submitRequest}>
        <input
          type='text'
          name='search'
          value={search}
          onChange={handleChange}
        />
        <button type='submit'>Search Genderize</button>
      </form>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    error: state.error,
    searchName: state.searchName,
    person: state.person
  };
};

export default connect(mapStateToProps, { getGenderData })(GenderizeComp);
