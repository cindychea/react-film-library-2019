import React from 'react';

const Faves = ({onFaveToggle, favorite}) => {

  const handleClick = (e) => {
    e.stopPropagation()
    onFaveToggle(handleClick)
  };

  

  return (
    <div className={`film-row-fave ${favorite}`} onClick={handleClick}>
      <i className="material-icons">add_to_queue</i>
    </div>
  )
};

export default Faves;