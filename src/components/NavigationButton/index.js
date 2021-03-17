import React from "react";
import Button from "../Button";
import cn from 'classnames';
import style from "./styles.module.css";
function NavigationButton({ notify, children, selected, ...props}) {
  return <Button className={cn(style.navigationButton, selected && style.navigationButtonSelected )} {...props}>{children}
  {notify && <span className={style.notify}>{notify}</span>}
  </Button>;
}

export default NavigationButton;
