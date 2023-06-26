import React from 'react';

const Pet = (props) => {
  console.log('props', props);
  return <div>{props.name}</div>;
};

export default Pet;
