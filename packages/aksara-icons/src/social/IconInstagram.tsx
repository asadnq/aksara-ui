import React from 'react';
import { BaseIconProps, iconDefaultProps } from '../utils/types';

const IconInstagram: React.FC<BaseIconProps> = ({ size, fill, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M15.7112 3.05654C14.0552 2.97929 9.95342 2.98304 8.29592 3.05654C6.83942 3.12479 5.55467 3.47653 4.51892 4.51226C2.78792 6.24323 3.00917 8.57569 3.00917 11.9964C3.00917 15.4973 2.81417 17.7758 4.51892 19.4805C6.25667 21.2175 8.62292 20.9902 12.0032 20.9902C15.4712 20.9902 16.6682 20.9925 17.8944 20.5177C19.5617 19.8705 20.8202 18.3803 20.9432 15.7036C21.0212 14.0468 21.0167 9.94592 20.9432 8.28845C20.7947 5.12875 19.0989 3.21254 15.7112 3.05654ZM18.3324 18.3353C17.1977 19.47 15.6234 19.3688 11.9814 19.3688C8.23142 19.3688 6.72767 19.4243 5.63042 18.324C4.36667 17.0663 4.59542 15.0466 4.59542 11.9844C4.59542 7.84071 4.17017 4.85651 8.32892 4.64351C9.28442 4.60976 9.56567 4.59851 11.9709 4.59851L12.0047 4.62101C16.0014 4.62101 19.1372 4.20252 19.3254 8.36045C19.3682 9.30918 19.3779 9.59418 19.3779 11.9956C19.3772 15.7021 19.4477 17.2148 18.3324 18.3353Z"
      fill={fill}
    />
    <path
      d="M17.8839 7.19572C17.8839 7.79176 17.4007 8.27495 16.8047 8.27495C16.2086 8.27495 15.7254 7.79176 15.7254 7.19572C15.7254 6.59967 16.2086 6.11648 16.8047 6.11648C17.4007 6.11648 17.8839 6.59967 17.8839 7.19572Z"
      fill={fill}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.38467 11.9964C7.38467 9.44642 9.45092 7.37796 12.0032 7.37796C14.5532 7.37796 16.6217 9.44417 16.6217 11.9964C16.6217 14.5463 14.5554 16.6148 12.0032 16.6148C9.45317 16.6148 7.38467 14.5486 7.38467 11.9964ZM9.00542 11.9964C9.00542 13.6524 10.3464 14.9941 12.0032 14.9941C13.6599 14.9941 15.0017 13.6524 15.0009 11.9964C15.0009 10.3404 13.6592 8.99868 12.0032 8.99868C10.3472 8.99868 9.00542 10.3404 9.00542 11.9964Z"
      fill={fill}
    />
  </svg>
);

IconInstagram.defaultProps = {
  ...iconDefaultProps,
};

export default IconInstagram;