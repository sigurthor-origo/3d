import React, { FC } from "react";

interface IPage {
  children?: JSX.Element | string;
}

export const Page: FC<IPage> = ({ children }): JSX.Element => {
  return <div className="Page">{children}</div>;
};
