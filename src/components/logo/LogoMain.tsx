// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const LogoMain = ({ reverse, ...others }: { reverse?: boolean }) => {
  const theme = useTheme();
  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === 'dark' ? logoDark : logo} alt="Mantis" width="100" />
     *
     */
    <>
      <svg fill="#000000" width="118px" height="35px" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="0" y="0" width="32.00" height="32.00" rx="16" fill="#ffffff" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.156 15.297l6.25 4.927-4.141-10.214zM16 0c-8.839 0-16 7.161-16 16s7.161 16 16 16c8.839 0 16-7.161 16-16s-7.161-16-16-16zM23.729 23.073c-0.016 0.63-0.536 1.125-1.167 1.109-0.313 0-0.552-0.12-0.885-0.391l-8.255-6.667-2.771 6.938h-2.396l6.995-16.807c0.167-0.422 0.568-0.693 1.021-0.677 0.432-0.016 0.839 0.25 0.99 0.677l6.365 15.323c0.057 0.151 0.104 0.313 0.104 0.464 0 0.010 0 0.010 0 0.031z"></path> </g></svg>
    </>
  );
};

export default LogoMain;
