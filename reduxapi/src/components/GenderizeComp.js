import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getGenderData } from '../actions';
import styled, { keyframes } from 'styled-components';

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

  const Buttonbo = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
    color: palevioletred;
    background: white;
    border: 2px solid palevioletred;
  `;

  const Divbob = styled.div`
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    color: palevioletred;
    width: 50%;
    margin: 0 auto;
  `;

  const Minidiv = styled.div`
    margin: 1em;
  `;

  const DivboT = styled.div`
    font-size: 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    color: palevioletred;
    height: 10em;
    width: 50%;
    margin: 2em auto 0 auto;
  `;

  return (
    <>
      <DivboT>
        {props.error && <div>{props.error}</div>}
        {props.isLoading ? (
          <Minidiv>Loading data...</Minidiv>
        ) : (
          <>
            <Minidiv>
              <span>Name: </span> {props.person.name}
            </Minidiv>
            <Minidiv>
              <span>Gender: </span>
              {props.person.gender}
            </Minidiv>
            <Minidiv>
              <span>Probability: </span> {props.person.probability}
            </Minidiv>
            <Minidiv>
              <span>Count: </span>
              {props.person.count}
            </Minidiv>
          </>
        )}
      </DivboT>

      <form onSubmit={submitRequest}>
        <input
          type='text'
          name='search'
          value={search}
          onChange={handleChange}
        />
        <Buttonbo type='submit'>Search Genderize</Buttonbo>
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
