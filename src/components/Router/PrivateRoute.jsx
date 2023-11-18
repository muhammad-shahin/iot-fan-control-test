import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
import { Navigate, useNavigate } from "react-router-dom";
import Modal from "../Utility/Modal";
import Swal from "sweetalert2";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  if (user === undefined) {
    return <Modal title="Please Wait" message="Please Wait" />;
  } else if (user) {
    return children;
  } else if (!user) {
    Swal.fire({
      title: "Please Login",
      text: "You have to login to access News Category Page. If You don't have an account go to sign up page and create an account.",
      icon: "error",
      confirmButtonText: "Create Account",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/sign-up");
      }
    });
  }
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
