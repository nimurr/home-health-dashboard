import { Modal, Select, Table } from "antd";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import recruitmentUserImage from "../../../../public/image/recruitmentUserImage.png";
import { FaUserEdit } from "react-icons/fa";
import { Option } from "antd/es/mentions";
import { Link } from "react-router-dom";

export default function Recruitment() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryName, setCategoryName] = useState(""); // For input field handling

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    setCategoryName(e.target.value); // Update state as input changes
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // Close modal
    setCategoryName(""); // Reset category name after closing the modal
  };

  const handleUpdateCategory = () => {
    if (categoryName.trim() === "") {
      alert("Please enter a category name!");
      return;
    }
    // Handle category update logic (e.g., add or save the category)
    console.log("Category Name Updated:", categoryName);
    setIsModalOpen(false); // Close modal after update
    setCategoryName(""); // Clear input field
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  // Sample data for jobs
  const data = [
    {
      key: "1",
      jobTitle: "Software Engineer",
      applicants: "12",
      status: "Open",
      deadline: "2024-12-15"
    },
    {
      key: "2",
      jobTitle: "Product Manager",
      applicants: "8",
      status: "Closed",
      deadline: "2024-11-30"
    },
    {
      key: "3",
      jobTitle: "UI/UX Designer",
      applicants: "15",
      status: "Open",
      deadline: "2024-12-20"
    },
    {
      key: "4",
      jobTitle: "Data Scientist",
      applicants: "5",
      status: "Closed",
      deadline: "2024-11-28"
    },
    {
      key: "5",
      jobTitle: "Marketing Specialist",
      applicants: "20",
      status: "Open",
      deadline: "2024-12-25"
    }
  ];

  // Table columns definition
  const columns = [
    {
      title: "Job Title",
      dataIndex: "jobTitle",
      key: "jobTitle"
    },
    {
      title: "Applicants",
      dataIndex: "applicants",
      key: "applicants"
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status"
    },
    {
      title: "Deadline",
      dataIndex: "deadline",
      key: "deadline"
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <button type="primary" onClick={() => handleAction(record)}>
          <FaUserEdit className="text-2xl" />
        </button>
      )
    }
  ];

  // Action button handler
  const handleAction = (record) => {
    // For now, we'll log the clicked record's details to the console
    console.log("View details for:", record);
  };

  return (
    <div className="mx-5">
      <div>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-semibold text-gray-500">Recruitment</h3>
          <button
            onClick={showModal}
            className="flex items-center gap-2 text-white bg-[#3d1852] py-3 px-8 rounded-md"
          >
            <FiPlus />
            Add Recruitment
          </button>

          <Modal
            open={isModalOpen}
            onCancel={handleModalClose} // Close modal without any buttons
            footer={null} // Remove the default footer (OK/Cancel buttons)
            centered
          >
            <h2 className="my-2 text-center text-2xl font-semibold">
              Post Job
            </h2>
            <hr />
            <div className="w-1/3 mx-auto my-3"></div>

            <div className="mt-5">
              <h2 className="font-semibold mb-3">Job Title</h2>
              <input
                className="p-2 w-full border-2 border-gray-500 rounded-md"
                type="text"
                placeholder="Enter category name"
                value={categoryName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-5">
              <h2 className="font-semibold mb-3">Job Title</h2>
              <input
                className="p-2 w-full border-2 border-gray-500 rounded-md"
                type="text"
                placeholder="Enter category name"
                value={categoryName}
                onChange={handleInputChange}
              />
            </div>
            <div className="mt-5">
              <h2 className="font-semibold mb-3">Job Title</h2>
              <input
                className="p-2 w-full border-2 border-gray-500 rounded-md"
                type="text"
                placeholder="Enter category name"
                value={categoryName}
                onChange={handleInputChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-5 mt-5">
              <div >
                <h2 className="font-semibold mb-3">Workplace Type</h2>
                <Select defaultValue="office" style={{ width: "100%" }}>
                  <Option value="office">Office</Option>
                  <Option value="remote">Remote</Option>
                  <Option value="hybrid">Hybrid</Option>
                </Select>
              </div>
              <div>
                <h2 className="font-semibold mb-3">Job Location</h2>
                <Select defaultValue="office" style={{ width: "100%" }}>
                  <Option value="office">Dhaka </Option>
                  <Option value="remote">Rampura</Option>
                  <Option value="hybrid">Mirpur</Option>
                </Select>
              </div>
              <div>
                <h2 className="font-semibold mb-3">Employment Type</h2>
                <Select defaultValue="office" style={{ width: "100%" }}>
                  <Option value="office">Dhaka </Option>
                  <Option value="remote">Rampura</Option>
                  <Option value="hybrid">Mirpur</Option>
                </Select>
              </div>
            </div>


            <button
              onClick={handleUpdateCategory}
              className="mt-5 bg-[#3d1852] text-white py-2 px-5 rounded-md w-full"
            >
              Update
            </button>
          </Modal>
        </div>
      </div>

      <div className="grid grid-cols-4 mt-10">
        {[...Array(4)].map((_, idx) => {
          return (
            <div
              key={idx}
              className="px-5 py-10 w-2/3  rounded-xl bg-[#c3b8ca] clear-start flex flex-col justify-center items-center"
            >
              <img
                className="w-1/3 mx-auto"
                src={recruitmentUserImage}
                alt=""
              />
              <h2 className="text-xl font-semibold my-2">Aruna</h2>
              <h3 className="mb-2">Software Engineer</h3>
              <Link to={`/dashboard/recruitment/:id`} className="py-1 px-8 bg-[#e1dce5] rounded-full">
                View Details
              </Link>
            </div>
          );
        })}
      </div>

      <div>
        <div className=" mt-10">
          <h3 className="text-2xl font-semibold text-gray-500">
            Recent Listings
          </h3>
          <Table
            columns={columns}
            className="custom-ant-table mt-5"
            dataSource={data}
            pagination={{
              current: currentPage,
              pageSize: pageSize,
              onChange: (page, pageSize) => {
                setCurrentPage(page);
                setPageSize(pageSize);
              }
            }}
            rowKey="key"
            bordered
            style={{
              borderRadius: "10px",
              overflow: "hidden"
            }}
            scroll={{ x: "max-content" }}
            responsive
          />
        </div>
      </div>
    </div>
  );
}
