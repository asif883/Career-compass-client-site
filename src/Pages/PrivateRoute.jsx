import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/Context";
import PropTypes from 'prop-types';


const PrivateRoute = ({children}) => {
    const {user, loading} =useContext(AuthContext)
    const location = useLocation();
    
    if(loading){
        return <span className="loading loading-dots loading-lg mt-10"></span>;
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};
PrivateRoute.propTypes={
    children: PropTypes.node
}

export default PrivateRoute;