type Props = {
  fill?: string;
  filled?: boolean;
  size?: number;
  height?: number;
  width?: number;
  label?: string;
};

export const SendIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  ...props
}: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      id='message'
      width={size || width || 48}
      height={size || height || 48}
      {...props}>
      <path
        fill='#697177'
        d='M20.34,9.32l-14-7a3,3,0,0,0-4.08,3.9l2.4,5.37h0a1.06,1.06,0,0,1,0,.82l-2.4,5.37A3,3,0,0,0,5,22a3.14,3.14,0,0,0,1.35-.32l14-7a3,3,0,0,0,0-5.36Zm-.89,3.57-14,7a1,1,0,0,1-1.35-1.3l2.39-5.37A2,2,0,0,0,6.57,13h6.89a1,1,0,0,0,0-2H6.57a2,2,0,0,0-.08-.22L4.1,5.41a1,1,0,0,1,1.35-1.3l14,7a1,1,0,0,1,0,1.78Z'></path>
    </svg>
  );
};
