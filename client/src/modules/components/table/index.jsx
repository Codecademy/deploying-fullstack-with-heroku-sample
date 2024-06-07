import React from "react";

const Basic = React.lazy(() => import("./Basic"));

export const tableComponentConfigs = [
  {
    path: "/components/table/basic-table",
    element: <Basic />,
  },
];
