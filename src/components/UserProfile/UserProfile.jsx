import PropTypes from "prop-types";
import "./UserProfile.css";
import { AuthContext } from "../../context/AuthContextProvider";
import { NavLink } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa";
import Swal from "sweetalert2";
import { useContext } from "react";

const UserProfile = ({ setVisible }) => {
  const { user, logoutUser } = useContext(AuthContext);

  const handleLogout = () => {
    logoutUser()
      .then(() => {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged Out",
          showConfirmButton: false,
          timer: 2000,
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Failed To Logout",
          text: `An Unexpected Error Occurred. Please Try Again. ${error.message}`,
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div
      className={`bg-sky-100 w-[300px] p-5 text-center appear-style relative z-50`}
      onMouseEnter={() => {
        setVisible(true);
      }}
      onMouseLeave={() => {
        setVisible(false);
      }}
    >
      <img
        src={user?.photoURL}
        className="rounded-full w-[64px] object-cover mx-auto"
      />
      <p className="font-medium text-[14px] mt-2">Profile Status</p>
      <p
        className={`${
          user?.emailVerified
            ? "bg-green-300 text-green-600"
            : "bg-red-300 text-red-600"
        }  px-4 py-1 rounded-full  font-medium w-fit mx-auto mb-4`}
      >
        {user?.emailVerified ? "Verified" : "Not Verified"}
      </p>
      <h4 className="text-sky-600 font-medium text-[18px]">
        {user?.displayName}
      </h4>
      <p className="text-[18px] font-semibold text-sky-600 mt-2">
        {user?.email}
      </p>
      <hr className="w-full h-[2px] bg-gray-300 mt-3" />

      {/* Pages */}
      <div className="flex flex-col gap-2 mt-3">
        <NavLink
          className="text-sky-600 font-medium text-[18px] flex justify-center items-center gap-3"
          to="/"
        >
          <RiDashboardFill />
          Dashboard
        </NavLink>
        <NavLink
          className="text-sky-600 font-medium text-[18px] flex justify-center items-center gap-3"
          to="/news-category"
        >
          <FaRegNewspaper />
          News Category
        </NavLink>
      </div>
      <hr className="w-full h-[2px] bg-gray-300 mt-3" />
      <button
        className="px-5 py-2 bg-sky-600 rounded-full font-medium text-white hover:scale-[1.1] hover:bg-red-500 duration-700 my-4"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

UserProfile.propTypes = {
  setVisible: PropTypes.func.isRequired,
};

export default UserProfile;
