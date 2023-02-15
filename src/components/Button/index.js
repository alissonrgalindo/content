import { object, string } from "prop-types";
import classNames from "classnames/bind";
import styles from "./index.module.scss";

const cn = classNames.bind(styles);

export default function Button({ className, children }) {
  return !children ? null : (
    <button className={cn("wrapper", className)}>{children}</button>
  );
}

Button.propTypes = {
  className: string,
  children: object,
};
