/* eslint-disable react/prop-types */
import { useState } from "react";
import { Table, Pagination } from "antd";
import { Link } from "react-router-dom";

// Sample data
const data = [
  {
    key: "1",
    name: "John Doe",
    phone: "123-456-7890",
    address: "123 Main St, City, Country",
    feedback: "Great service!",
    image: "../../../../public/image/cagetoriesUser.png", // Add an image URL
    email: "john.doe@example.com"
  },
  {
    key: "2",
    name: "Jane Smith",
    phone: "987-654-3210",
    address: "456 Elm St, Town, Country",
    feedback: "Very satisfied!",
    image: "../../../../public/image/cagetoriesUser.png", // Add an image URL
    email: "jane.smith@example.com"
  },
  {
    key: "3",
    name: "Michael Johnson",
    phone: "555-123-4567",
    address: "789 Oak St, Village, Country",
    feedback: "Could be better.",
    image: "../../../../public/image/cagetoriesUser.png", // Add an image URL
    email: "michael.johnson@example.com"
  },
  {
    key: "4",
    name: "Emily Clark",
    phone: "111-222-3333",
    address: "321 Pine St, Suburb, Country",
    feedback: "Excellent quality.",
    image: "../../../../public/image/cagetoriesUser.png", // Add an image URL
    email: "emily.clark@example.com"
  },
  {
    key: "5",
    name: "David Lee",
    phone: "444-555-6666",
    address: "654 Maple St, City, Country",
    feedback: "Could improve.",
    image: "../../../../public/image/cagetoriesUser.png", // Add an image URL
    email: "david.lee@example.com"
  }
];

// Define the columns for the table
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text, record) => (
      <div className="flex items-center gap-2">
        <img
          src={record.image}
          alt={text}
          style={{ width: 40, height: 40, borderRadius: "50%" }}
        />
        <div>
          <span>{text}</span> <br />
          <span>{record.email}</span>
        </div>
      </div>
    )
  },
  {
    title: "Phone number",
    dataIndex: "phone",
    key: "phone"
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "Feedback",
    dataIndex: "feedback",
    key: "feedback",
    render: (text, record) => (
      <div> 
        <button className="font-semibold text-blue-600"
          onClick={() => handleFeedback(record.key)}
          style={{ marginLeft: 8 }}
        >
          Give Feedback
        </button>
      </div>
    )
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Link to={`/dashboard/caregivers/1`} type="primary" onClick={() => handleAction(record.key)}>
        View
      </Link>
    )
  }
];

// Handle the action click (for demonstration purposes)
const handleAction = (key) => {
  console.log(`Action clicked for record with key: ${key}`);
};

// Handle the feedback button click (for demonstration purposes)
const handleFeedback = (key) => {
  console.log(`Feedback button clicked for record with key: ${key}`);
};

const Categories = () => {
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(3); // Change page size to 3 for testing
  const [totalItems] = useState(data.length); // Set total items count

  // Handle page change
  const handlePageChange = (page, pageSize) => {
    setCurrentPage(page); // Update current page
  };

  // Slice the data based on pagination
  const pagedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div className="px-5 ">
      <Table
        columns={columns}
        dataSource={pagedData} // Use sliced data for the current page
        className="custom-ant-table"
        bordered
        pagination={false} // Disable internal pagination
        rowClassName="table-row"
        style={{
          backgroundColor: "#eee" // Optional background color for the table
        }}
      />

      {/* External Pagination */}
      <div className="flex justify-center bg-[#e8ebf0] py-3">
        <Pagination
          current={currentPage}
          pageSize={pageSize}
          total={totalItems}
          onChange={handlePageChange}
          showSizeChanger={false} // Optional: Disable page size changer
        />
      </div>
    </div>
  );
};

export default Categories;
