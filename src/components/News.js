import React, { useContext, useEffect } from 'react';
import useJsonFetch from '../hooks/useJsonFetch';
import { newsEndpoint } from '../api';
import Card from './Card';
import useAuthHeader from '../hooks/useAuthHeader';
import AuthContext from '../AuthContext';
import { HttpError } from '../errors';

const NewsView = ({ news, loading, error }) => {
  if (loading) {
    return <div className="news news_loading">Загрузка новостей</div>;
  }

  if (error) {
    return (
      <div className="news news_loading">
        Возникла внутренняя ошибка, попробуйте позже
      </div>
    );
  }

  const cards = news.map(({ id, title, image, content }) => (
    <Card key={id} ratio={0.75} img={image} title={title} description={content} />
  ));

  return <div className="news">{cards}</div>;
};

const News = () => {
  const { token, logout } = useContext(AuthContext);
  const opts = useAuthHeader(token);
  const [news, loading, error] = useJsonFetch(newsEndpoint, opts);
  useEffect(() => {
    if (error && error instanceof HttpError && error.code === 401) {
      logout();
    }
  }, [error, logout]);
  return <NewsView news={news} loading={loading} error={error} />;
};

export default News;
