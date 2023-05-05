import React from "react";
import { Outlet, useLocation, useNavigationType } from "react-router-dom";

const DebugLayout = () => {
  const location = useLocation();
  const navigationType = useNavigationType(); // "POP" | "PUSH" | "REPLACE"

  React.useEffect(() => {
    console.log("The current URL is", { ...location });
    console.log("The last navigation action was", navigationType);
  }, [location, navigationType]);

  return (
    <>
      <h1>Debug</h1>
      <Outlet />
    </>
  );
};

export default DebugLayout;
