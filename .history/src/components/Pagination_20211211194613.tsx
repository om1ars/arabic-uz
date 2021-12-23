import React, { useState } from "react";

interface Props {
  data: any;
  RenderComponent: any;
  pagelimit: any;
  dataLimit: any;
}

export const Pagination: React.FC<Props> = ({
  data,
  RenderComponent,
  pagelimit,
  dataLimit,
}) => {
    const [pages, setPages] = useState()
  return <div></div>;
};
