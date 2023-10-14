import { PropTypes } from 'prop-types';
import useRedirect from './useRedirect';

const RedirectTo = ({ path }) => {
  useRedirect(path);
  return ('');
};

RedirectTo.propTypes = {
  path: PropTypes.string.isRequired,
};

export default RedirectTo;
