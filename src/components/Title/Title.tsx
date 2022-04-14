import React, { FC } from "react";

const titleConfig = {
  small: "text-4xl",
  normal: "text-6xl",
};

interface ITitle {
  size?: "small";
  children: JSX.Element | string;
}

export const Title: FC<ITitle> = ({
  size = "normal",
  children,
}): JSX.Element => {
  return <div className={`${titleConfig[size]} font-bold`}>{children}</div>;
};
