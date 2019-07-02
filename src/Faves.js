import React from 'react';

const Faves = ({onFaveToggle}) => {

  const handleClick = (e) => {
    e.stopPropagation()
    onFaveToggle(handleClick)
  };

  return (
    <div className={`film-row-fave`} onClick={handleClick}>
      <i className="material-icons">add_to_queue</i>
    </div>
  )
};

export default Faves;