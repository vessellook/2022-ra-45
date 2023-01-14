import { useContext } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../AuthContext';

const propTypes = {
  guestChildren: PropTypes.node,
  children: PropTypes.node,
};

const AuthGuard = ({ children, guestChildren }) => {
  const { guest } = useContext(AuthContext);
  if (guest) {
    return guestChildren;
  }
  return children;
};

AuthGuard.propTypes = propTypes;

export default AuthGuard;
