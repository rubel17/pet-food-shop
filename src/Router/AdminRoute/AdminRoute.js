// import React, { useContext } from "react";
// import { Navigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
// import useAdmin from "../../hooks/useAdmin";

// const AdminRoute = ({ children }) => {
//   const { user, loading } = useContext(AuthContext);
//   const [isAdmin, adminLoading] = useAdmin(user?.email);
//   const location = useLocation();
//   if ((loading, adminLoading)) {
//     return (
//       <div className="text-center m-56">
//         <button className="btn btn-square loading"></button>
//       </div>
//     );
//   }

//   if (user && isAdmin) {
//     return children;
//   }
//   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
// };

// export default AdminRoute;
