import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

const Notification = () => {
  return (
    <div className="mx-6 bg-gray-200 rounded-lg">
      <h1 className="font-semibold text-[30px] p-5">Notifications</h1>

      {[...Array(5)].map((_, idx) => (
        <div
          key={idx}
          className="flex gap-5 border-t-2 border-[#4c1d95] items-center w-full h-[85px]"
        >
          <div>
            <p className="">
              <IoMdNotificationsOutline className="h-12 w-12 ml-4 border rounded-full p-2 border-[#193664] text-[#193664]" />
            </p>
          </div>
          <div>
            <p className="text-[18px] ml-8 font-medium text-[#333333]">
              You have received $500 from John Doe
            </p>
            <p className="text-[18px] ml-8 font-medium text-gray-400">
              Fri, 12:30pm
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
