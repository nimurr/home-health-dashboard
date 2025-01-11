import { Link, useNavigate } from "react-router-dom";
import {
  Menu,
  Dropdown,
  Avatar,
  Badge,
  Button,
  Modal,
  Form,
  Input
} from "antd";
import { DownOutlined } from "@ant-design/icons";
import {
  EyeInvisibleOutlined,
  EyeTwoTone,
  LockOutlined
} from "@ant-design/icons";

import { IoIosNotificationsOutline,  IoMdNotificationsOutline } from "react-icons/io";
// import { FaRegUser } from "react-icons/fa6";
import "./header.css";
import Swal from "sweetalert2";
import dashboard_welcome_Image from "../../public/Dashboard/Dashboard_welcome.png";
import User_profile_image from "../../public/Dashboard/User_profile_image.png";

import { useState } from "react";
import { useCahngePasswordMutation } from "../redux/features/auth/changePassword";
import toast, { Toaster } from "react-hot-toast";
import { useGetProfileQuery } from "../redux/features/profile/profile";
import url from "../redux/api/baseUrl";

// import SearchBox from "../SearchBox/SearchBox";

const Header = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { data: profile } = useGetProfileQuery();
  // console.log(profile?.data?.attributes);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

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

  const [passwordChange, { isLoading }] = useCahngePasswordMutation();

  const changePassword = async (values) => {
    const { confirmPassword, ...ChangePassword } = values;
    // console.log("Form valuessssss: ", ChangePassword);
    try {
      const res = await passwordChange(ChangePassword).unwrap();
      // console.log("essssssssseeee",res);
      if (res?.statusCode == 200) {
        toast.success(res?.message);
        closeModal(true);
      }
      // setTimeout(() => {
      //   navigate('/dashboard/home')
      // }, 1000);
    } catch (error) {
      console.log(error?.data?.message);
      setError(error?.data?.message);
    }
  };

  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuVisibility = (visible) => {
    setMenuVisible(visible);
  };

  const menu = (
    <Menu
      className={`transition ease-in-out duration-300 transform ${
        menuVisible ? "custom-dropdown-menu-visible" : "custom-dropdown-menu"
      }`}
    >
      <Menu.Item className=" hover:!bg-[#101625]" key="1">
        <Link to="/dashboard/profile" className=" hover:!text-white">
          Profile
        </Link>
      </Menu.Item>
      <Menu.Item className=" hover:!bg-[#101625]" key="2">
        <p onClick={openModal} className=" hover:!text-white">
          Change Password
        </p>
      </Menu.Item>
      <Menu.Item className=" hover:!bg-[#101625]" key="3">
        <p onClick={handleLogOut} className=" hover:!text-white">
          Logout
        </p>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="sm:w-auto w-full mb-[24px] rounded-md bg-white">
      <Toaster reverseOrder={false} />
      <div className="grid lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 md:flex justify-between items-center bg-[#e8ebf0] sm:p-8 p-5 rounded-xl">
          <div>
            <div className="flex items-center gap-2 mb-5">
              <p className="text-3xl font-semibold text-[#430750] ">Welcome,</p>
              <h1>{profile?.data?.attributes?.name}</h1>
            </div>
            <p className="sm:text-left text-center">Have a nice day at work</p>
          </div> 
        </div>

        <div className=" lg:col-span-1 flex items-center justify-end sm:flex-row flex-col gap-8 p-8 rounded-xl">
          <Link to={'/dashboard/notification'} className="w-14 h-14 bg-gray-100 rounded-full relative flex justify-center items-center">
            <IoMdNotificationsOutline className="text-4xl text-[#430750]" />
            <span className="w-5 h-5 bg-[#430750] absolute top-0 right-0 text-white flex justify-center items-center rounded-full">0</span>
          </Link>
          <img className="w-14 rounded-full" src={User_profile_image} alt="" />
          <div className="text-center">
            <h3 className="text-xl font-semibold text-[#430750]">
              Jane Cooper
            </h3>
            <p>Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
