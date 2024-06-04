import { lazy } from 'react'
import { ConfigFunctions } from "../ConfigFiles/ConfigFunctions";

const UnAuthorisedAccess = lazy(() => import("../Components/Authentication/UnAuthorisedAccess"))

const PrivateRoute = ({ children }) => {
    const { checkLoginStatus } = ConfigFunctions();
    return checkLoginStatus() ? children : <UnAuthorisedAccess />
};

export default PrivateRoute;
