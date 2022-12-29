export const authEndpoint = process.env.REACT_APP_AUTH_URL;
export const newsEndpoint = process.env.REACT_APP_NEWS_URL;
export const profileEndpoint = process.env.REACT_APP_PROFILE_URL;

export const getAuthorizationHeader = (token) => `Bearer ${token}`;
