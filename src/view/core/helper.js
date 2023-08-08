import {useTheme} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {isWidthDown} from '@material-ui/core/withWidth';

const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
};

/**
 * Be careful using this hook. It only works because the number of
 * breakpoints in theme is static. It will break once you change the number of
 * breakpoints. See https://reactjs.org/docs/hooks-rules.html#only-call-hooks-at-the-top-level
 */
// const useWidth = () => {
//   const theme = useTheme();
//   const keys = [...theme.breakpoints.keys].reverse();
//
//   return (
//     keys.reduce((output, key) => {
//       const matches = useMediaQuery(theme.breakpoints.up(key));
//       return !output && matches ? key : output;
//     }, null) || 'xs'
//   );
// };

// const useScreenSize = screenSize => ({
//   isSizeDown: isWidthDown(screenSize, useWidth())
// });

export {
  capitalize,
  // useScreenSize
};
