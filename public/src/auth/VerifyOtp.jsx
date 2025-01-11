import logo from "../../public/image/logo.png";
import verifyOtpImage from "../../public/image/verifyotp.png";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import { Button } from "antd";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useVerifyOtpMutation } from "../redux/features/auth/verifyOtp";
import toast, { Toaster } from "react-hot-toast";
import { FaArrowLeftLong } from "react-icons/fa6";

const VerifyOtp = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [error, setError] = useState("");
  const email = queryParams.get("email");

  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const [verifyOtp] = useVerifyOtpMutation();

  const verifyData = {
    code: otp,
    email: email,
  };

  const sendOtp = async () => {
    try {
      const res = await verifyOtp(verifyData).unwrap();

      if (res?.statusCode == 200) {
        toast.success(res?.message);
        setTimeout(() => {
          navigate(`/updatepassword?email=${email}`);
        }, 1000);
      }
    } catch (error) {
      setError(error?.data?.message);
    }
  };

  return (
    <div className="md:mt-20 mt-10 md:w-[80%] w-[90%] mx-auto bg-white rounded-[8px]">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="md:grid grid-cols-2 min-h-[80vh]">
        <div className=" h-full hidden md:flex justify-center items-center">
          <div className=" hidden md:block w-4/6  mx-auto">
            <img
              src={verifyOtpImage}
              alt="Signin"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="md:p-10 p-5 flex justify-center items-center">
          <div className=" px-5 py-10 rounded-xl w-full">
            <div >
            <div className="w-1/4 mx-auto">
              <img src={logo} alt="" />
            </div>
              <div className="flex flex-col  my-5">
                <h2 className="flex items-center gap-2 text-2xl font-semibold">
                  <FaArrowLeftLong /> Verify Email
                </h2>
                <p>Please enter your email address to reset your password.</p>
              </div>

              <div className="flex justify-center sm:justify-start items-center gap-2 outline-none focus:border-blue-400 w-full">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
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
              <div className="flex justify-between items-center mt-4 sm:mt-6">
                <small className="text-[14px] sm:text-[16px] font-normal">
                  Didn’t receive the code?
                </small>
                <small className="text-[14px] sm:text-[16px] font-medium text-[#3d1852] cursor-pointer">
                  Resend
                </small>
              </div>
            </div>
            <p className="text-red-500 font-medium">{error}</p>

            <Button
              onClick={sendOtp}
              className="block w-full h-[52px] px-2 py-4 mt-2 !text-white !bg-[#3d1852] rounded-xl"
            >
              Verify
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
