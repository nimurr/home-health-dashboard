import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "./../../public/image/logo.png";
import UpdatePasswordImage from "./../../public/image/updatePassword.png";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useUpdatePasswordMutation } from "../redux/features/auth/updatePassword";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowLeftLong } from "react-icons/fa6";

const UpdatePassword = () => {
  const [form] = Form.useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const [reset, { isLoading }] = useUpdatePasswordMutation();

  const handlePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const handleConfirmPasswordVisibility = () =>
    setConfirmPasswordVisible(!confirmPasswordVisible);

  const validateConfirmPassword = (rule, value) => {
    const { password } = form.getFieldsValue();
    if (value && value !== password) {
      return Promise.reject("Passwords do not match!");
    }
    return Promise.resolve();
  };

  const resetPassword = async (values) => {
    const { password } = values;
    const resetData = {
      password,
      email
    };
    try {
      const res = await reset(resetData).unwrap();
      if (res?.statusCode == 200) {
        toast.success(res?.message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className=" mt-10 md:w-[80%] w-[90%] mx-auto bg-white rounded-[8px]">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="md:grid grid-cols-2 min-h-[80vh]">
        <div className="h-full  hidden md:flex justify-center items-center">
          <div className=" mx-auto">
            <img
              src={UpdatePasswordImage}
              alt="Signin"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="p-5 sm:p-10 flex justify-center items-center">
          <div className=" px-5 py-10 rounded-xl w-full max-w-md">
            <div>
              <div className="w-1/4 mx-auto">
                <img src={logo} alt="" />
              </div>
              <div className="flex flex-col mb-5">
                <h2 className="flex items-center gap-2 text-2xl font-semibold">
                  <FaArrowLeftLong /> Verify Email
                </h2>
                <p>Please enter your email address to reset your password.</p>
              </div>

              <Form
                form={form}
                layout="vertical"
                className="mt-5"
                onFinish={resetPassword}
              >
                <Form.Item
                  label="New Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Please input your new password!"
                    }
                  ]}
                >
                  <Input.Password
                    className="w-full mb-4 h-12 rounded-[6px]"
                    placeholder="New password"
                    iconRender={(visible) =>
                      visible ? (
                        <EyeOutlined onClick={handlePasswordVisibility} />
                      ) : (
                        <EyeInvisibleOutlined
                          onClick={handlePasswordVisibility}
                        />
                      )
                    }
                  />
                </Form.Item>

                <Form.Item
                  label="Confirm Password"
                  name="confirmPassword"
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your new password!"
                    },
                    { validator: validateConfirmPassword }
                  ]}
                >
                  <Input.Password
                    className="w-full mb-4 h-12 rounded-[6px]"
                    placeholder="Confirm Password"
                    iconRender={(visible) =>
                      visible ? (
                        <EyeOutlined
                          onClick={handleConfirmPasswordVisibility}
                        />
                      ) : (
                        <EyeInvisibleOutlined
                          onClick={handleConfirmPasswordVisibility}
                        />
                      )
                    }
                  />
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  className="block w-full h-[52px] px-2 py-4 mt-2 !text-white !bg-[#3d1852]"
                >
                  Update Password
                </Button>
              </Form>
            </div>

            <div className="flex justify-between items-center mt-4 sm:mt-6">
              <small className="text-[14px] sm:text-[16px] font-normal">
                Didn’t receive the code?
              </small>
              <small className="text-[14px] sm:text-[16px] font-medium text-[#3d1852] cursor-pointer">
                Resend
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
