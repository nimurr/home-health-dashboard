import RecentUser from "./RecentUser";
import totalEarnings from "../../public/Dashboard/Home/totalEarnings.png";
import totalMembers from "../../public/Dashboard/Home/TotalMembers.png";
import careGivers from "../../public/Dashboard/Home/Organization.png";
import Barchart from './Barchart';


const DashboardHome = () => {
  return (
    <div className="sm:px-5">
      {/* <Card> </Card> */}
      <Barchart />
      <div className="grid sm:grid-cols-1 md:grid-cols-3 sm:gap-5">
        {/* Total User Card */}
        <div className="p-5 bg-[#e8ebf0] rounded-lg flex items-center gap-10">
          <img  src={totalEarnings} alt="" />
          <div>
            <h3 className="text-xl">Total Earnings</h3>
            <h2 className="text-4xl text-[#193664] font-semibold mt-3">$24.88 K</h2>
          </div>
        </div>
        <div className="p-5 bg-[#e8ebf0] rounded-lg flex items-center gap-10">
          <img  src={totalMembers} alt="" />
          <div>
            <h3 className="text-xl">Total Members</h3>
            <h2 className="text-4xl text-[#193664] font-semibold mt-3">9800</h2>
          </div>
        </div>
        <div className="p-5 bg-[#e8ebf0] rounded-lg flex items-center gap-10">
          <img  src={careGivers} alt="" />
          <div>
            <h3 className="text-xl">Care Givers</h3>
            <h2 className="text-4xl text-[#193664] font-semibold mt-3">740</h2>
          </div>
        </div>
      </div>

      {/* Recent Users List */}
      <RecentUser state={"Recent Transactions"} /> 
    </div>
  );
};

export default DashboardHome;
