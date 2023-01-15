import { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { APP_PREFIX_PATH, MONITOR_PATH } from "../../config/AppConfig";

import MonitorPage from "./monitor-page";

const MonitorViews = () => {
  const routesConfig = [
    {
      index: true,
      path: `${APP_PREFIX_PATH}/${MONITOR_PATH}`,
      element: <MonitorPage />,
    },
  ];

  const routes = useRoutes(routesConfig);

  return <Suspense fallback={<></>}>{routes}</Suspense>;
};

export { MonitorViews };
