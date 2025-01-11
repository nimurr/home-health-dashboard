import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "./../../public/image/logo.png";

import { 
  FaRegUser, 
   
} from "react-icons/fa6";
 
import { BiSolidDashboard } from "react-icons/bi"; 
import { CiCalendarDate, CiSettings } from "react-icons/ci";
import Swal from "sweetalert2"; 
import { IoIosLogOut } from "react-icons/io";
import { FaUserFriends } from "react-icons/fa";
import { MdMenu } from "react-icons/md"; 
import { IoSearch } from "react-icons/io5";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to log out from here!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");

        Swal.fire({
          title: "Logged Out!",
          text: "User has been logged out successfully.",
          icon: "success",
          timer: 2000
        });
        navigate("/");
      }
    });
  };

  return (
    <div className="lg:w-[250px] xl:w-[300px] md:w-[200px] sm:w-[120px] w-[70px] flex flex-col justify-between bg-[#3d1852] h-full min-h-screen rounded-md">
      <div>
        <Link
          to={"/dashboard"}
          className="p-[5px] grid justify-items-stretch  sm:p-[16px]"
        >
          <img
            className="w-full sm:w-2/4 my-5 mx-auto  rounded-lg justify-self-center"
            src={logo}
            alt="Logo"
          />
        </Link>
        <div className="sm:ml-5">
          <ul>
            <NavLink
              to="home"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[#000] cursor-pointer items-center text-[18px] bg-gray-400 font-medium p-[10px] m-[6px] rounded-lg"
              }
            >
              <BiSolidDashboard className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Dashboard</span>
            </NavLink>
            <NavLink
              to="earnings"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[#000] cursor-pointer items-center text-[18px] bg-gray-400 font-medium p-[10px] m-[6px] rounded-lg"
              }
            >
              <BiSolidDashboard className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Earnings</span>
            </NavLink>

            <NavLink
              to="userslist"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[#000] cursor-pointer items-center text-[18px] bg-gray-400 font-medium p-[10px] m-[6px] rounded-lg"
              }
            >
              <FaUserFriends className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Users</span>
            </NavLink>

            <NavLink
              to="caregivers"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[#000] cursor-pointer items-center text-[18px] bg-gray-400 font-medium p-[10px] m-[6px] rounded-lg"
              }
            >
              <FaUserFriends className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Caregivers</span>
            </NavLink>

            <NavLink
              to="appointment"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[#000] cursor-pointer items-center text-[18px] bg-gray-400 font-medium p-[10px] m-[6px] rounded-lg"
              }
            >
              <CiCalendarDate className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Appointment</span>
            </NavLink>


            <NavLink
              to="categories"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[#000] cursor-pointer items-center text-[18px] bg-gray-400 font-medium p-[10px] m-[6px] rounded-lg"
              }
            >
              <MdMenu className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Categories</span>
            </NavLink>

            <NavLink
              to="recruitment"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[#000] cursor-pointer items-center text-[18px] bg-gray-400 font-medium p-[10px] m-[6px] rounded-lg"
              }
            >
              <IoSearch className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Recruitment</span>
            </NavLink>



            <NavLink
              to="profile"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[#000] cursor-pointer items-center text-[18px] bg-gray-400 font-medium p-[10px] m-[6px] rounded-lg"
              }
            >
              <FaRegUser className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">My Profile</span>
            </NavLink>



            <NavLink
              to="profile"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[#000] cursor-pointer items-center text-[18px] bg-gray-400 font-medium p-[10px] m-[6px] rounded-lg"
              }
            >
              <FaRegUser className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">My Profile</span>
            </NavLink>
            <NavLink
              to="profile"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[#000] cursor-pointer items-center text-[18px] bg-gray-400 font-medium p-[10px] m-[6px] rounded-lg"
              }
            >
              <FaRegUser className="h-7 w-7 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">My Profile</span>
            </NavLink>

            {/* <NavLink
              to="subscription"
              className={({ isActive }) =>
                isActive
                  ? "flex p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-medium bg-[#FFFFFF] text-[#193664] rounded-lg"
                  : "flex text-[#430750] p-[10px] m-[6px] cursor-pointer items-center text-[18px] font-normal  rounded-lg"
              }
            >
              <FaDollarSign className="h-7 w-7 lg:h-5 lg:w-5"/>
              <span className="hidden ml-2 sm:block">Billing/Payment</span>
            </NavLink> */}

            <NavLink
              to="settings"
              className={({ isActive }) =>
                isActive
                  ? "flex cursor-pointer items-center text-[18px] font-medium p-[10px] bg-[#FFFFFF] text-[#193664] m-[6px] rounded-lg"
                  : "flex text-[#000] cursor-pointer items-center text-[18px] bg-gray-400 font-medium p-[10px] m-[6px] rounded-lg"
              }
            >
              <CiSettings className="h-8 w-8 lg:h-5 lg:w-5" />
              <span className="hidden ml-2 sm:block">Settings</span>
            </NavLink>
            <div className="mt-5">
              <div
                onClick={handleLogOut}
                className="flex items-center ml-[18px] cursor-pointer gap-2 text-[#eb5757] font-medium"
              >
                <IoIosLogOut className="h-8 w-8 lg:h-5 font-bold lg:w-5" />
                <span className="hidden sm:block font-semibold">Log Out</span>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
