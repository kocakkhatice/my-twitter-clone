import React from "react";
import cn from 'classnames'
import style from "./styles.module.css"

function Button({full = false, children, className, ...props }) {
  return <button className={cn(style.button, full && style.fullWidth, className)} {...props}>{children}</button>;
}

export default Button;
