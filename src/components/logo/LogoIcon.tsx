// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoIconDark from 'assets/images/logo-icon-dark.svg';
 * import logoIcon from 'assets/images/logo-icon.svg';
 *
 */

// ==============================|| LOGO ICON SVG ||============================== //

const LogoIcon = () => {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === 'dark' ? logoIconDark : logoIcon} alt="HEYCLOUD" width="100" />
     *
     */
    <svg fill="#000000" width="256px" height="256px" viewBox="-1.92 -1.92 35.84 35.84" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-1.92" y="-1.92" width="35.84" height="35.84" rx="0" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21.396 6.719l10.604 10.604-3.609 3.615-6.995-6.995-2.458 2.469-3.62-3.615zM14.203 13.917l3.609 3.62 3.396 3.385-3.62 3.609-6.984-6.984-5.568 5.568-1.427 1.417-3.609-3.609 10.604-10.604z"></path> </g></svg>
  );
};

export default LogoIcon;
