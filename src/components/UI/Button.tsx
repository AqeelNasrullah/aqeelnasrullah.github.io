import { Link } from "react-router-dom";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  link?: boolean;
  dark?: boolean;
  href?: string;
  block?: boolean;
  iconClasses?: string;
  onClick?: React.AnchorHTMLAttributes<HTMLAnchorElement>["onClick"];
}

const Button: React.FC<ButtonProps> = ({
  link,
  dark,
  href,
  block,
  onClick,
  iconClasses,
  children,
  ...rest
}) => {
  return (
    <Link
      to={href || ""}
      className={`btn ${
        link
          ? "btn-link"
          : `${dark ? "btn-dark" : "btn-light"}${block ? " btn-blocked" : ""}`
      }`}
      onClick={(e) => {
        if (onClick) {
          e.stopPropagation();
          onClick(e);
        }
      }}
      {...rest}
    >
      {iconClasses ? <i className={`${iconClasses} btn-icon`}></i> : null}
      {children}
    </Link>
  );
};

export default Button;
