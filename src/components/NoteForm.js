import React, { useState } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  disabled: PropTypes.bool,
  onSendNote: PropTypes.func,
};

const defaultProps = {
  disabled: false,
};

const NoteForm = ({ disabled, onSendNote }) => {
  const [content, setContent] = useState('');
  const handleChangeInput = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = content;
    setContent('');
    onSendNote?.(text);
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <textarea
        className="form__input"
        value={content}
        onChange={handleChangeInput}
      />
      <button className="form__button" disabled={disabled}>
        &#10148;
      </button>
    </form>
  );
};

NoteForm.propTypes = propTypes;
NoteForm.defaultProps = defaultProps;

export default NoteForm;
