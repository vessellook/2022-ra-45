import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  children: PropTypes.node.isRequired,
  onDelete: PropTypes.func,
};

const Note = ({ children, onDelete }) => {
  const deleteButton = onDelete != null && (
    <button className="note__delete-button" onClick={onDelete}>
      &#215;
    </button>
  );

  return (
    <div className="note">
      {children}
      {deleteButton}
    </div>
  );
};

Note.propTypes = propTypes;

export default Note;
