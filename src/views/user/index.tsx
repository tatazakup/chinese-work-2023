import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { APP_PREFIX_PATH, USER_PATH } from "../../config/AppConfig";

import RiskyPage from "./risky-page";

const AdminViews = () => {
  const routesConfig = [
    {
      index: true,
      path: `${APP_PREFIX_PATH}/${USER_PATH}`,
      element: <RiskyPage />,
    },
  ];

  const routes = useRoutes(routesConfig);

  return <Suspense fallback={<></>}>{routes}</Suspense>;
};

export { AdminViews };
