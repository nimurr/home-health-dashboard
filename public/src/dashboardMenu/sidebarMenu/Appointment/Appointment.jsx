import { useState } from "react";
import { Table, Modal } from "antd";
import { RiInformation2Line } from "react-icons/ri";

export default function Appointment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  // Fake Data for Table
  const data = [
    {
      key: "1",
      userName: "John Doe",
      package: "Basic Package",
      dateTime: "2024-12-01 10:00 AM",
      caregiverName: "Jane Smith"
    },
    {
      key: "2",
      userName: "Sarah Lee",
      package: "Premium Package",
      dateTime: "2024-12-01 12:00 PM",
      caregiverName: "Emily Clark"
    },
    {
      key: "3",
      userName: "Michael Johnson",
      package: "Standard Package",
      dateTime: "2024-12-02 09:00 AM",
      caregiverName: "David Lee"
    },
    {
      key: "4",
      userName: "Emily Davis",
      package: "Basic Package",
      dateTime: "2024-12-02 11:00 AM",
      caregiverName: "Sarah Lee"
    },
    {
      key: "5",
      userName: "Daniel Brown",
      package: "Standard Package",
      dateTime: "2024-12-03 02:00 PM",
      caregiverName: "Michael Johnson"
    }
  ];

  const columns = [
    {
      title: "#SL",
      key: "sl",
      render: (_, __, index) => index + 1 // Render serial number based on the index
    },
    {
      title: "User name",
      dataIndex: "userName",
      key: "userName"
    },
    {
      title: "Package",
      dataIndex: "package",
      key: "package"
    },
    {
      title: "Time & Date",
      dataIndex: "dateTime",
      key: "dateTime"
    },
    {
      title: "Caregiver Name",
      dataIndex: "caregiverName",
      key: "caregiverName"
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <button
          onClick={() => handleViewUser(record)}
          className="py-2 px-4 rounded-md"
        >
          <RiInformation2Line className="text-2xl" />
        </button>
      )
    }
  ];

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div>
      <div className="sm:px-5">
        <div className="bg-[#e8ebf0] pb-3 rounded-md mt-5">
          <div className="md:flex justify-between p-5 items-center">
            <h3 className="font-semibold text-2xl">Appointment</h3>
          </div>
          <Table
            className="custom-ant-table"
            columns={columns}
            dataSource={data} // Use data directly without pagination
            rowKey="key"
            bordered
            style={{
              //   borderRadius: "10px",
              overflow: "hidden"
            }}
            scroll={{ x: "max-content" }}
            responsive
          />

          {/* Modal for User Details */}
          <Modal open={isModalOpen} footer={null} onCancel={closeModal} centered>
            <h2 className="text-xl font-semibold text-center">User Details</h2>
            <hr className="my-3" />
            <div className="my-10">
              {selectedUser && (
                <>
                  <div className="flex justify-between items-center mt-5 font-semibold">
                    <span>User Name</span>
                    <span>{selectedUser.userName}</span>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between items-center mt-5 font-semibold">
                    <span>Package</span>
                    <span>{selectedUser.package}</span>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between items-center mt-5 font-semibold">
                    <span>Time & Date</span>
                    <span>{selectedUser.dateTime}</span>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between items-center mt-5 font-semibold">
                    <span>Caregiver Name</span>
                    <span>{selectedUser.caregiverName}</span>
                  </div>
                </>
              )}
              <div className="mt-10 flex justify-center gap-5 items-center">
                <button className="border-[#430750] border-[1px] text-[#430750] py-2 rounded-xl px-8 font-semibold">
                  Download
                </button>
                <button className="bg-[#430750] text-white py-2 rounded-xl px-8 font-semibold">
                  Print
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}
