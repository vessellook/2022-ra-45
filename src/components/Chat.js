import React, { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api/messages';
import Message from './Message';
import { randomColor } from '../utils';
import useRecursiveTimeout from '../hooks/useRecursiveTimeout';

const propTypes = {
  userId: PropTypes.string.isRequired,
};

const waitingMessageColor = '#ccc';
const currentUserMessageColor = '#5dd';

function updateUserColors(userColors, newMessages) {
  let hasNewUsers = false;
  newMessages.forEach(({ userId }) => {
    if (userId in userColors) {
      return;
    }
    hasNewUsers = true;
    userColors[userId] = randomColor();
  });
  if (hasNewUsers) {
    return { ...userColors };
  }
  return userColors;
}

const Chat = ({ userId: currentUserId }) => {
  const [sending, setSending] = useState(false);
  const [content, setContent] = useState('');
  const [messages, setMessages] = useState([]);
  const [waitingMessage, setWaitingMessage] = useState(null);
  const [userColors, setUserColors] = useState({
    [currentUserId]: currentUserMessageColor,
  });
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current && inputRef.current.focus();
  }, []);

  const loadNewMessages = useCallback(async () => {
    const nextMessageId = messages.length > 0 ? messages.at(-1).id : 0;
    try {
      const newMessages = await api.loadMessages(nextMessageId);
      if (newMessages.length === 0) {
        return;
      }
      setUserColors((userColors) => updateUserColors(userColors, newMessages));
      setMessages((oldMessages) => oldMessages.concat(newMessages));
    } catch (e) {
      return;
    }
    inputRef.current && inputRef.current.focus();
    setWaitingMessage(null);
  }, [messages]);

  useRecursiveTimeout(loadNewMessages, 500);

  async function sendMessage(event) {
    event.preventDefault();
    const validatedContent = content.trim();
    if (validatedContent.length === 0) {
      return;
    }
    if (waitingMessage != null) {
      return;
    }
    const id = 0;
    setSending(true);
    setContent('');
    const message = { id, userId: currentUserId, content: validatedContent };
    setWaitingMessage(message);
    await api.sendMessage(message);
    setSending(false);
  }

  const handleChangeInput = (event) => {
    setContent(event.target.value);
  };

  const history = messages.map(({ id, userId, content }) => (
    <Message
      key={id}
      color={userColors[userId]}
      content={content}
      mine={userId === currentUserId}
    />
  ));

  const waitingMessageEl = waitingMessage && (
    <Message
      content={waitingMessage.content}
      color={waitingMessageColor}
      mine
    />
  );

  return (
    <div className="chat">
      <div>
        {history}
        {waitingMessageEl}
      </div>
      <div className="chat__form-wrapper">
        <form className="chat__form" onSubmit={sendMessage}>
          <input
            ref={inputRef}
            className="chat__input"
            disabled={sending}
            value={content}
            onChange={handleChangeInput}
          />
          <button className="chat__send-button" disabled={sending}>
            &#10148;
          </button>
        </form>
      </div>
    </div>
  );
};

Chat.propTypes = propTypes;

export default Chat;
