import { Button, Form, Input, Modal, Typography } from "antd";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { FaArrowLeftLong } from "react-icons/fa6";
import OTPInput from "react-otp-input";
// import ChangePassword from "./demo";

const { Text } = Typography;

const Settings = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);
  const [otp, setOtp] = useState("");
  const [form] = Form.useForm();


  console.log(otp)
  // console.log(form)

  const showModal = () => setIsModalOpen(true);
  const handleOk = () => setIsModalOpen(false);
  const handleCancel = () => setIsModalOpen(false);

  const onFinish = (values) => {
    console.log("Form Submitted: ", values );
    if (isForgotPassword && !isOtpSent) {
      // Logic for sending OTP
      console.log("Sending OTP to:", values.email);
      setIsOtpSent(true);
    } else if (isForgotPassword && isOtpSent && !isOtpVerified) {
      // Logic for verifying OTP
      console.log("Verifying OTP:", otp);
      setIsOtpVerified(true);
    } else if (isOtpVerified) {
      // Logic for resetting password
      console.log("Resetting Password:", values.newPassword);
      setIsModalOpen(false); // Close modal after resetting
    } else {
      // Logic for changing password
      console.log("Changing Password:", values.newPassword);
      setIsModalOpen(false); // Close modal after changing
    }
  };

  return (
    <div className="mt-8 sm:mx-6">
      <h1 className="font-semibold text-[30px]">Settings</h1>
      <div>
      <div>
         {/* Trigger Button */}
          <div
            onClick={showModal}
            className="mt-8 pl-4 cursor-pointer flex justify-between bg-[#F7F7F7] hover:bg-[#430750] hover:text-white rounded items-center w-full h-[75px]"
          >
            <p className="text-[18px] ml-8 font-medium text-center">
              Change Password
            </p>
            <IoIosArrowForward className="mr-8" />
          </div>

          {/* Modal */}
          <Modal
            open={isModalOpen}
            onCancel={handleCancel}
            footer={null}
            width={500}
          >
            <div className="my-10">
              <h2 className="text-center text-xl flex justify-center items-center gap-5">
                <FaArrowLeftLong />
                {isForgotPassword ? "Forgot Password" : "Change Password"}
              </h2>
              <Text className="block mb-4 text-gray-700 text-center">
                {isForgotPassword
                  ? isOtpSent
                    ? "Enter the OTP sent to your email."
                    : "Enter your email to reset your password."
                  : "Your password must be 8-10 characters long."}
              </Text>
              <Form
                form={form}
                layout="vertical"
                onFinish={onFinish}
                className="space-y-4"
              >
                {/* Forgot Password Step */}
                {isForgotPassword && !isOtpSent && (
                  <>
                    <Form.Item
                      name="email"
                      label="Email"
                      rules={[
                        { required: true, message: "Please enter your email" },
                        { type: "email", message: "Please enter a valid email" },
                      ]}
                    >
                      <Input
                        placeholder="Email address"
                        className="rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 h-12"
                      />
                    </Form.Item>
                    <div className="flex justify-between">
                      <button
                        onClick={() => setIsForgotPassword(false)}
                        className="text-[#430750] font-semibold"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="text-white font-semibold bg-[#430750] hover:bg-[#430750dc] rounded-lg p-2 h-12"
                      >
                        Send OTP
                      </button>
                    </div>
                  </>
                )}

                {/* OTP Verification Step */}
                {isForgotPassword && isOtpSent && !isOtpVerified && (
                  <>
                    <Form.Item
                      name="otp"
                      label="OTP"
                      rules={[
                        { required: true, message: "Please enter the OTP" },
                      ]}
                    >
                      {/* <Input
                        placeholder="Enter OTP"
                        className="rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 h-12"
                      /> */}
                      <div className="flex justify-center sm:justify-start items-center gap-2 outline-none focus:border-blue-400 w-full">
                      <OTPInput
                        value={otp}
                        onChange={setOtp}
                        required
                        numInputs={6}
                        inputStyle={{
                          height: "52px",
                          width: "100%", // Default full width
                          background: "transparent",
                          border: "1px solid #ccc",
                          borderRadius: "10px",
                          marginRight: "8px",
                          outline: "none",
                          padding: "0 12px", // Padding for better input appearance
                        }}
                        renderSeparator={<span className="md:w-6"> </span>}
                        renderInput={(props) => (
                          <input {...props} className="w-full sm:w-[55px] md:w-[60px] text-center" />
                        )}
                      />
              </div>
                    </Form.Item>
                    <div className="flex justify-between">
                      <button
                        onClick={() => setIsOtpSent(false)}
                        className="text-[#430750] font-semibold"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="text-white font-semibold bg-[#430750] hover:bg-[#430750dc] rounded-lg p-2 h-12"
                      >
                        Verify OTP
                      </button>
                    </div>
                  </>
                )}

                {/* Reset Password Step */}
                {isOtpVerified && (
                  <>
                    <Form.Item
                      name="newPassword"
                      label="New Password"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your new password",
                        },
                        {
                          min: 8,
                          message: "Password must be at least 8 characters",
                        },
                      ]}
                    >
                      <Input.Password
                        placeholder="New password"
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                        className="rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 h-12"
                      />
                    </Form.Item>
                    <Form.Item
                      name="confirmPassword"
                      label="Confirm Password"
                      dependencies={["newPassword"]}
                      rules={[
                        {
                          required: true,
                          message: "Please confirm your new password",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (
                              !value ||
                              getFieldValue("newPassword") === value
                            ) {
                              return Promise.resolve();
                            }
                            return Promise.reject(
                              new Error("Passwords do not match")
                            );
                          },
                        }),
                      ]}
                    >
                      <Input.Password
                        placeholder="Confirm password"
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                        className="rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 h-12"
                      />
                    </Form.Item>
                    <div className="flex justify-between">
                      <button
                        onClick={() => {
                          setIsOtpVerified(false);
                          setIsOtpSent(true);
                        }}
                        className="text-[#430750] font-semibold"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="text-white font-semibold bg-[#430750] hover:bg-[#430750dc] rounded-lg p-2 h-12"
                      >
                        Reset Password
                      </button>
                    </div>
                  </>
                )}

                {/* Change Password Step */}
                {!isForgotPassword && (
                  <>
                    <Form.Item
                      name="currentPassword"
                      label="Current Password"
                      rules={[
                        { required: true, message: "Please enter your current password" },
                      ]}
                    >
                      <Input.Password
                        placeholder="Current password"
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                        className="rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 h-12"
                      />
                    </Form.Item>
                    <Form.Item
                      name="newPassword"
                      label="New Password"
                      rules={[
                        { required: true, message: "Please enter your new password" },
                        { min: 8, message: "Password must be at least 8 characters" },
                      ]}
                    >
                      <Input.Password
                        placeholder="New password"
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                        className="rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 h-12"
                      />
                    </Form.Item>
                    <Form.Item
                      name="re-enterYourPassword"
                      label="Re-enter Your Password"
                      rules={[
                        { required: true, message: "Please enter your New Password" },
                        { min: 8, message: "Password must be at least 8 characters" },
                      ]}
                    >
                      <Input.Password
                        placeholder="Re-enter Your Password"
                        iconRender={(visible) =>
                          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                        }
                        className="rounded-lg border-gray-300 focus:ring-2 focus:ring-purple-500 h-12"
                      />
                    </Form.Item>
                    <Form.Item className="text-center">
                      <button
                        type="button"
                        onClick={() => setIsForgotPassword(true)}
                        className="text-[#430750] font-semibold"
                      >
                        Forgot Password?
                      </button>
                    </Form.Item>
                    <Form.Item>
                      <button
                        type="submit"
                        className="w-full text-white font-semibold bg-[#430750] hover:bg-[#430750dc] rounded-lg p-2 h-12"
                      >
                        Change Password
                      </button>
                    </Form.Item>
                  </>
                )}
              </Form>
            </div>
          </Modal>
      </div>


        <div
          onClick={() => navigate("/dashboard/settings/termcondition")}
          className="mt-8 pl-4 cursor-pointer flex justify-between bg-[#F7F7F7] hover:bg-[#430750] hover:text-white rounded items-center w-full h-[75px]"
        >
          <p className="text-[18px] ml-8 font-medium text-center">
            Terms & Condition
          </p>
          <Link
            to="/dashboard/settings/termcondition"
            className="mr-8 px-2 py-1 rounded cursor-pointer"
          >
            <IoIosArrowForward />
          </Link>
        </div>

        <div
          onClick={() => navigate("/dashboard/settings/privacypolicy")}
          className="mt-8 pl-4 cursor-pointer flex justify-between bg-[#F7F7F7] hover:bg-[#430750] hover:text-white rounded items-center w-full h-[75px]"
        >
          <p className="text-[18px] ml-8 font-medium text-center">
            Privacy & Policy
          </p>
          <Link
            to="/dashboard/settings/privacypolicy"
            className="mr-8 px-2 py-1 rounded cursor-pointer"
          >
            <IoIosArrowForward />
          </Link>
        </div>

        <div
          onClick={() => navigate("/dashboard/settings/aboutus")}
          className="mt-8 pl-4 cursor-pointer flex justify-between bg-[#F7F7F7] hover:bg-[#430750] hover:text-white rounded items-center w-full h-[75px]"
        >
          <p className="text-[18px] ml-8 font-medium text-center">About Us</p>
          <Link
            to="/dashboard/settings/aboutus"
            className="mr-8 px-2 py-1 rounded cursor-pointer"
          >
            <IoIosArrowForward />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Settings;
