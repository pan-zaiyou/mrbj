import { useTheme } from '@mui/material/styles';

// ==============================|| LOGO SVG ||============================== //

const LogoMain = ({ reverse, ...others }: { reverse?: boolean }) => {
  const theme = useTheme();
  
  // 根据主题模式设置 SVG 的填充颜色
  const fillColor = theme.palette.mode === 'dark' ? '#FFFFFF' : '#000000';

  return (
    <div
      style={{
        position: 'absolute',
        top: '0px',  // 进一步向上移动
        left: '0px', // 进一步向左移动
        zIndex: 10,
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="120"  // 图标的宽度
        height="120" // 图标的高度
        viewBox="0 0 375 375"  // 适应新的 viewBox
        preserveAspectRatio="xMidYMid meet"
        version="1.0"
        {...others}
      >
        <defs><g/></defs>
        <path fill={fillColor} d="M 95.734375 31.300781 L 136.476562 72.042969 L 122.609375 85.933594 L 95.734375 59.058594 L 86.289062 68.542969 L 72.378906 54.65625 Z M 68.09375 58.957031 L 81.960938 72.867188 L 95.011719 85.871094 L 81.101562 99.738281 L 54.265625 72.90625 L 32.875 94.300781 L 27.390625 99.742188 L 13.523438 85.875 L 54.265625 45.132812 Z M 68.09375 58.957031" fillOpacity="1" fillRule="nonzero"/>
        <g fill={fillColor} fillOpacity="1">
          <g transform="translate(135.270171, 101.273827)">
            <g>
              <path d="M 61.75 0 L 43.71875 0 L 29.25 -20.859375 L 14.765625 0 L -2.53125 0 L 20.640625 -32.953125 L 1.34375 -61.234375 L 17.96875 -61.234375 L 29.25 -44.53125 L 40.53125 -61.234375 L 57.890625 -61.234375 L 37.859375 -32.953125 Z M 61.75 0"/>
            </g>
          </g>
        </g>
        <g fill={fillColor} fillOpacity="1">
          <g transform="translate(190.783493, 101.273827)">
            <g>
              <path d="M 59.828125 -34.296875 L 59.828125 -21 C 58.242188 -13.726562 54.78125 -8.222656 49.4375 -4.484375 C 44.09375 -0.753906 38.128906 1.109375 31.546875 1.109375 C 23.285156 1.109375 16.242188 -1.976562 10.421875 -8.15625 C 4.609375 -14.34375 1.703125 -21.816406 1.703125 -30.578125 C 1.703125 -39.484375 4.546875 -47.003906 10.234375 -53.140625 C 15.929688 -59.273438 23.035156 -62.34375 31.546875 -62.34375 C 41.492188 -62.34375 49.359375 -58.851562 55.140625 -51.875 L 46.015625 -41.859375 C 42.753906 -47.109375 38.203125 -49.734375 32.359375 -49.734375 C 28.054688 -49.734375 24.382812 -47.863281 21.34375 -44.125 C 18.300781 -40.382812 16.78125 -35.867188 16.78125 -30.578125 C 16.78125 -25.378906 18.300781 -20.9375 21.34375 -17.25 C 24.382812 -13.570312 28.054688 -11.734375 32.359375 -11.734375 C 35.921875 -11.734375 39.023438 -12.804688 41.671875 -14.953125 C 44.316406 -17.109375 45.640625 -19.96875 45.640625 -23.53125 L 31.546875 -23.53125 L 31.546875 -34.296875 Z M 59.828125 -34.296875"/>
            </g>
          </g>
        </g>
        <g fill={fillColor} fillOpacity="1">
          <g transform="translate(248.597503, 101.273827)">
            <g>
              <path d="M 51.4375 0 L 41.640625 -34.359375 L 31.84375 0 L 16.328125 0 L -1.109375 -61.234375 L 14.40625 -61.234375 L 24.859375 -19.21875 L 25.234375 -19.21875 L 36.375 -61.234375 L 46.90625 -61.234375 L 58.046875 -19.21875 L 58.40625 -19.21875 L 68.875 -61.234375 L 84.3125 -61.234375 L 66.875 0 Z M 51.4375 0"/>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default LogoMain;
