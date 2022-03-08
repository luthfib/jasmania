import "./button.module.scss";

import React from "react";

interface IButtonProps {
  classes?: string;
}

export const Button = ({ classes }: IButtonProps) => (
  <button className={`${classes} button yellow `}>Hello</button>
);
