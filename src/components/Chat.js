import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import * as api from '../api/messages';
import Message from './Message';
import MessageForm from './MessageForm';
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
  const [messages, setMessages] = useState([]);
  const [waitingMessage, setWaitingMessage] = useState(null);
  const [userColors, setUserColors] = useState({
    [currentUserId]: currentUserMessageColor,
  });

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
    setWaitingMessage(null);
  }, [messages]);

  useRecursiveTimeout(loadNewMessages, 500);

  async function sendMessage(message) {
    setWaitingMessage(message);
    await api.sendMessage(message);
  }

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
        <MessageForm
          disabled={waitingMessage != null}
          onSendMessage={sendMessage}
          userId={currentUserId}
        />
      </div>
    </div>
  );
};

Chat.propTypes = propTypes;

export default Chat;
