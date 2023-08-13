interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  source: string;
  alt?: string;
  className?: string;
}

const Image: React.FC<ImageProps> = ({
  source,
  alt = "Not Found",
  className,
  ...rest
}) => {
  return (
    <img
      src={source}
      alt={alt}
      width="100%"
      height="100%"
      className={`img ${className}`}
      {...rest}
    />
  );
};

export default Image;
