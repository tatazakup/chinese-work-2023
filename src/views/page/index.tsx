import { Suspense } from "react";
import { useRoutes } from "react-router-dom";

import Page1 from "./page-1";
import Page2 from "./page-2";
import Page3 from "./page-3";

const PageViews = () => {
  const routesConfig = [
    {
      index: true,
      path: `/`,
      element: <Page1 />,
    },
    {
      index: true,
      path: `/selection`,
      element: <Page2 />,
    },
    {
      index: true,
      path: `/selection/:id`,
      element: <Page3 />,
    },
  ];

  const routes = useRoutes(routesConfig);

  return <Suspense fallback={<></>}>{routes}</Suspense>;
};

export { PageViews };
