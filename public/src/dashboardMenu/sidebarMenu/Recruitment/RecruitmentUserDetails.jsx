import { MdEmail } from "react-icons/md";
import recruitmentUserImage from "../../../../public/image/recruitmentUserImage.png";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
export default function RecruitmentUserDetails() {
  return (
    <div className="mx-5 grid grid-cols-3">
      <div className="col-span-1">
        <div className="px-5 py-10 rounded-xl bg-[#fff] border-[2px]  clear-start flex flex-col justify-center items-center">
          <img className="w-1/3 mx-auto" src={recruitmentUserImage} alt="" />
          <h2 className="text-xl font-semibold my-2">Aruna</h2>
          <h3 className="mb-2">Software Engineer</h3>
          <button className="py-2 px-8 bg-[#e5fcec] rounded-lg">
            In Inerview
          </button>
        </div>
        <div className="my-5 bg-[#d9d9d9] p-5 rounded-lg">
          <div className="flex items-center gap-4 font-semibold ">
            <MdEmail className="text-xl" /> demo@gmail.com
          </div>
          <div className="flex items-center gap-4 font-semibold my-2">
            <IoCall className="text-xl" /> +88 01**********
          </div>
          <div className="flex items-center gap-4 font-semibold ">
            <FaLocationDot className="text-xl" /> Dhaka, Bangladesh
          </div>
        </div>
        <div className="my-5 bg-[#e0f5f0] p-5 rounded-lg">
          <h3 className="text-2xl font-semibold">Experience</h3>
          <p className="font-semibold my-1">
            3 Years <br /> UI Design - XY IT Industries.
          </p>
        </div>
      </div>
    </div>
  );
}
