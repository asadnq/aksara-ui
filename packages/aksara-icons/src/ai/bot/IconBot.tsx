import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../../utils/types';

const IconBot: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 13.787V5.03a1 1 0 10-2 0v3.505A7.624 7.624 0 007.883 6.7 6.964 6.964 0 006 8.288V5.03A1.015 1.015 0 005 4a1.015 1.015 0 00-1 1.03v8.757a1.016 1.016 0 00-1 1.03v3.092a1.016 1.016 0 001 1.03h.128a2.14 2.14 0 001.628 1.531c2.04.32 4.1.498 6.163.53a46.412 46.412 0 006.337-.53 2.142 2.142 0 001.628-1.53H20a1.016 1.016 0 001-1.031v-3.091a1.016 1.016 0 00-1-1.03zm-2.055 3.005a1.015 1.015 0 01-1 1.03s-3.767.151-5.019.151c-1.247 0-4.977-.15-4.977-.15a.993.993 0 01-.949-.77 1.02 1.02 0 01-.051-.26v-2.075c0-.152.018-.303.051-.45a2.013 2.013 0 011.949-1.61s3.019-.055 4.025-.055c.993 0 3.971.054 3.971.054a2.03 2.03 0 012 2.061v2.074zm-3-.68c.553 0 1-.46 1-1.03 0-.569-.447-1.03-1-1.03-.552 0-1 .461-1 1.03 0 .57.448 1.03 1 1.03zm-4.997-1.03c0 .57-.448 1.03-1 1.03s-1-.46-1-1.03c0-.569.448-1.03 1-1.03s1 .461 1 1.03z"
      fill={fill}
    />
  </svg>
);

IconBot.defaultProps = {
  ...iconDefaultProps,
};

export default IconBot;
