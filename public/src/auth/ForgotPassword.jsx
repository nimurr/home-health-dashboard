import { Form, Input, Button } from "antd";
import character from "../../public/image/forgotpass.png";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import forgotPassword from "./../../public/image/forgotPassword.png";
import logo from "./../../public/image/logo.png";
import { useForgotPasswordMutation } from "../redux/features/auth/forgotPassword";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowLeftLong } from "react-icons/fa6";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [forgotpassword] = useForgotPasswordMutation();

  const handleForgotPassword = async (values) => {
    // console.log("Received values:", values);
    // navigate(`/verifyotp`);
    try {
      const res = await forgotpassword(values).unwrap();
      // console.log(res);

      if (res?.statusCode == 200) {
        toast.success(res?.message);
        setTimeout(() => {
          navigate(`/verifyotp?email=${values?.email}`);
        }, 1000);
      }
    } catch (error) {
      //  console.log(error);
      setError(error?.data?.message);
    }

    // Handle form submission here
  };

  return (
    <div className="md:mt-20 mt-10 md:w-[80%] w-[90%] mx-auto bg-white rounded-[8px]">
      <Toaster position="top-center" reverseOrder={false} />

      <div className="md:grid grid-cols-2 min-h-[80vh]">
        {/* Image Section */}
        <div className=" h-full  hidden md:flex justify-center items-center">
          <div className="mx-auto">
            <img
              src={forgotPassword}
              alt="Signin"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="md:p-10 p-5 flex justify-center items-center">
          <div className=" px-5 py-10 rounded-xl">
            <div className="w-1/4 mx-auto">
              <img src={logo} alt="" />
            </div>
            <div className="flex flex-col my-5">
              <h2 className="flex items-center gap-2 text-xl font-semibold">
                <FaArrowLeftLong /> Forgot Password
              </h2>
              <p>Please enter your email address to reset your password.</p>
            </div>

            <Form
              name="forgot_password"
              layout="vertical"
              onFinish={handleForgotPassword}
              className="mt-5"
            >
              <Form.Item
                name="email"
                label={
                  <span className="text-[16px] mt-5 font-medium">Email</span>
                }
                rules={[
                  {
                    required: true,
                    message: "Please input your email!"
                  },
                  {
                    type: "email",
                    message: "Please enter a valid email address!"
                  },
                  {
                    pattern: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
                    message: "Please enter a Gmail address!"
                  }
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Your Email"
                  name="email"
                  prefix={
                    <HiOutlineMailOpen
                      className="mr-2 bg-white text-black rounded-full p-[6px]"
                      size={28}
                      color="red"
                    />
                  }
                  style={{
                    height: "52px",
                    // background: "#E6F9EF",
                    outline: "none",
                    marginBottom: "20px",
                    // border: "1px solid green"
                  }}
                />
              </Form.Item>
              <p className="text-red-500 font-medium">{error}</p>
              <Form.Item>
                <Button
                  //   loading = {isLoading}
                  type="primary"
                  htmlType="submit"
                  className="block w-full h-[52px] px-2 py-4 mt-2 !text-white !bg-[#3d1852]"
                >
                  Send OTP
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
