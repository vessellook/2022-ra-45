import React from 'react';
import PropTypes from 'prop-types';
import useJsonFetch from '../hooks/useJsonFetch';

const propTypes = {
  endpoint: PropTypes.string.isRequired,
};

const Status = ({ endpoint }) => {
  const [data, loading, error] = useJsonFetch(endpoint);

  let className = 'status';
  let message;
  if (loading) {
    message = 'Загрузка...';
    className = 'status status_loading';
  } else if (error) {
    message = `Ошибка: ${error.message}`;
    className = 'status status_error';
  } else {
    message = `Статус: ${data.status}`;
  }
  return (
    <div className={className}>
      <div className="status__endpoint">Выполнение запроса на {endpoint}</div>
      <div className="status__message">{message}</div>
    </div>
  );
};

Status.propTypes = propTypes;

export default Status;
