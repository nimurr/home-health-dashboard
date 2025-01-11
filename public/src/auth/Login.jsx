import { Button, Checkbox, Form, Input } from "antd";
import signin from "./../../public/image/signin.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiLock } from "react-icons/bi";
import logo from "./../../public/image/logo.png";
import sideImage from "./../../public/image/Isometric.png";
import { useAdminLoginMutation } from "../redux/features/auth/Login";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [checkboxError, setCheckboxError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [adminLogin, { isLoading }] = useAdminLoginMutation();

  // const handleCheckboxChange = (e) => {
  //     setIsChecked(e.target.checked);
  //     if (e.target.checked) {
  //         setCheckboxError('');
  //     }
  // };

  const onFinish = async (values) => {
    // if (!isChecked) {
    //     setCheckboxError('You must agree to the terms');
    //     return;
    // }

    try {
      const res = await adminLogin(values).unwrap();
      // console.log(res);
      if (res?.statusCode == 200) {
        toast.success(res?.message);
        localStorage.setItem("token", res?.data?.token);
        localStorage.setItem("user", JSON.stringify(res?.data));
      }
      setTimeout(() => {
        navigate("/dashboard/home");
      }, 1000);
    } catch (error) {
      // console.log(error);
      setError(error?.data?.message);
    }

    // console.log('Form submitted:', values);
  };

  // name="normal_login"
  // layout="vertical"
  // initialValues={{ remember: true }}
  // onFinish={onFinish}

  return (
    <div className=" md:mt-20 mt-10 md:w-[80%] w-[90%] mx-auto bg-white rounded-[8px]">
      <Toaster reverseOrder={false}></Toaster>

      <div className="md:grid grid-cols-2 min-h-[80vh]">
        <div className=" h-full  hidden md:flex justify-center items-center">
          <div className=" mx-auto">
            <img
              src={sideImage}
              alt="Signin"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:p-10 p-5 flex justify-center items-center">
          <Form
            onFinish={onFinish}
            className="login-form w-full p-5 rounded-xl "
          >
            <div className="w-1/4 mx-auto">
              <img src={logo} alt="" />
            </div>
            <h2 className="text-3xl">Hello,Welcome!</h2>
            <br />
            <p className="my-5 block">Please Enter Your Details Below to Continue</p>
            <br />
            <div className="mb-4">
              {/* Email Field */}
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" }
                ]}
              >
                <p className=" mb-3 font-semibold">Email *</p>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 mt-3"
                  autoComplete="off"
                />
              </Form.Item>
            </div>

            <div className="mb-4">
              {/* Password Field */}
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" }
                ]}
              >
                <p className=" mb-3 font-semibold">Password *</p>
                <Input.Password
                  placeholder="Enter your password"
                  className="w-full p-2 mt-3"
                  autoComplete="off"
                />
              </Form.Item>
            </div>

            <div className="flex justify-between items-center">
              {/* Remember Me Checkbox */}
              <Form.Item>
                <Checkbox className="text-[#3d1852] ">Remember me</Checkbox>
              </Form.Item>

              {/* Forgot Password Link */}
              <div className="mb-4 flex justify-between items-center">
                <Link to="/forgotpassword">
                  <p className="cursor-pointer text-[14px] font-medium text-[#3d1852]">
                    Forgot password?
                  </p>
                </Link>
              </div>
            </div>

            {/* Error Message */}
            <p className="text-red-500 font-medium">{error}</p>

            <div className="mb-4">
              {/* Submit Button */}
              <Form.Item>
                <Button
                  loading={isLoading}
                  htmlType="submit"
                  className="block w-full h-[52px] px-2 py-4 mt-2 !text-white !bg-[#3d1852]"
                >
                  Log in
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
