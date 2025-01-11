import totalEarnings from "../../../../public/Dashboard/Home/totalEarnings.png";
import RecentTransaction from "../../../dashboardHome/RecentTransaction";

export default function Earnings() {
  return (
    <div className="mx-5">
      <div className="grid grid-cols-3">
        <div className="p-5 bg-[#e8ebf0] rounded-lg flex items-center gap-10">
          <img src={totalEarnings} alt="" />
          <div>
            <h3 className="text-xl">Total Earnings</h3>
            <h2 className="text-4xl text-[#193664] font-semibold mt-3">
              $24.88 K
            </h2>
          </div>
        </div>
      </div>

        <RecentTransaction></RecentTransaction>

    </div>
  );
}
