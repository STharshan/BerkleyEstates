import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteTitle } from "../config/crawlableRoutes";

const RouteSeo = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = getRouteTitle(pathname);
  }, [pathname]);

  return null;
};

export default RouteSeo;
