import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  disabled: PropTypes.bool,
  onSendMessage: PropTypes.func,
};

const defautProps = {
  disabled: false,
};

const MessageForm = ({ userId, onSendMessage, disabled }) => {
  const [content, setContent] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  const handleChangeInput = (event) => {
    setContent(event.target.value);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const validatedContent = content.trim();
    if (validatedContent.length === 0) {
      return;
    }
    if (disabled) {
      return;
    }
    setContent('');
    const message = { id: 0, userId, content: validatedContent };
    await onSendMessage?.(message);
    inputRef.current && inputRef.current.focus();
  }

  return (
    <form className="chat__form" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        className="chat__input"
        disabled={disabled}
        value={content}
        onChange={handleChangeInput}
      />
      <button className="chat__send-button" disabled={disabled}>
        &#10148;
      </button>
    </form>
  );
};

MessageForm.propTypes = propTypes;
MessageForm.defautProps = defautProps;

export default MessageForm;
