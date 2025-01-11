import { Button, DatePicker, Input, Modal, Space, Table } from "antd";
import { BsInfoCircle } from "react-icons/bs";
import { useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import styles from "./../../style.module.css";
import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack, BiArrowFromLeft } from "react-icons/bi";
import { useGetAllInsurenceQuery } from "../../../../redux/features/reporting/getAllinsurence";

const { Search } = Input;

const dataSource = [
  {
    id: "1",

    customerName: "Bashar Islam",
    email: "abc@email.com",
    address: "Dhaka Bangladesh",
    date: "16 Apr 2024",
    phone: "4536656",
  },
  {
    id: "2",
    applicationId: "12345678",
    customerName: "Bashar Islam",
    email: "abc@email.com",
    address: "Dhaka Bangladesh",
    date: "16 Apr 2024",
    phone: "4536656",
  },
  {
    id: "3",
    applicationId: "12345678",
    customerName: "Bashar Islam",
    email: "abc@email.com",
    address: "Dhaka Bangladesh",
    date: "16 Apr 2024",
    phone: "4536656",
  },
];
const InsuranceReport = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState('')



    const {data: allinsurence, error, isLoading} = useGetAllInsurenceQuery(name)
    console.log(allinsurence?.data?.attributes);
    


  const onActionClick = (record) => {
    navigate(`insurancedetail/${record?.id}`, { state: { details: record } });
  };

  const columns = [
    {
      title: "#SI",
      dataIndex: "si",
      key: "si",
      render: (text,_,index) => index + 1,
    },
    {
      title: "User Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
           
          <p className="font-medium">{record?.name}</p>
        </div>
      ),
    },
   
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (_, record) => (
        // <p>{(record?.id) ?  record?.id : "Apple Or Facebook User"}</p>
        <p>{(record?.email) ? record?.email : "Apple Or Facebook User"}</p>
      )
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      render: (_, record) => (
        <p>{(record?.phoneNumber) ? record?.phoneNumber : "Apple Or Facebook User"}</p>
      )
    },
    {
      title: "Date",
      key: "date",
      dataIndex: "date",
      render: (_, record) => (
        <p>{record?.createdAt?.split("T")[0] ? record?.createdAt?.split("T")[0] : "N/A"}</p>
        // <p>34/04/24</p>
      )
    },
    
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
         
            {/* <BsInfoCircle  onClick={() => handleView(record)}  size={18} className="text-[red] cursor-pointer" /> */}
                  
                <button 
                onClick={() => navigate(`insurancedetail/${record?._id}`)}
                 className="bg-[#62D49F] px-2 py-1 rounded-md"> view
                 </button>
            
                {/* <button 
                onClick={() => navigate(`detailscheck/${record.id}`)}
                 className="bg-[#62D49F] px-2 py-1 rounded-md">view</button> */}
                 
        </Space>
      ),
    },
  ];
  

  //   const onChange = (date, dateString) => {
  //     console.log(date, dateString);
  //   };
  //   console.log(user);
  //   const handleChangePage = (page) => {
  //     setCurrentPage(page);
  //     console.log(page);
  //   };
  const onSearch = (value, _e, info) => {
    setName(value)
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <div className="">
      <div className="rounded-t-lg mt-[24px]">
        <div className="flex py-[22px] justify-between items-center">
          <div className="flex items-center gap-2">
            <p
              className="cursor-pointer"
              onClick={() => navigate("/dashboard/reporting")}
            >
              <BiArrowBack />
            </p>
            <p className=" text-[24px]">Insurance-Reporting Form</p>
          </div>
          <div>
            <button
              onClick={() => navigate("/dashboard/reporting/seeinsurance")}
              className="bg-[#2FA3B0] px-2 py-1 text-white rounded-lg mr-3"
            >
              Insurance-Report
            </button>
            {/* <Space direction="vertical">
              <DatePicker onChange={onChange} />
            </Space> */}
            <Search
              style={{
                width: "200px",
                marginLeft: "4px",
              }}
              placeholder="input search text"
              onSearch={onSearch}
              enterButton
            />
          </div>
        </div>

         {
          error ? (
            <p className="text-red-500 text-center mt-10">{error?.data?.message}</p>
          ) : (
            <div>
               <Table
          pagination={{
            total: allinsurence?.data?.attributes.length,
            showTotal: (total, range) =>
              `${range[0]}-${range[1]} of ${total} items`,
            defaultPageSize: 10,
            showSizeChanger: false,
            itemRender: (current, type, originalElement) => {
              if (type === "prev") {
                return (
                  <Button className={styles.paginationButton}>Back</Button>
                );
              }
              if (type === "next") {
                return (
                  <Button className={styles.paginationButton}>Next</Button>
                );
              }
              return originalElement;
            },
            className: styles.paginationCenter,
          }}
          columns={columns}
          dataSource={allinsurence?.data?.attributes}
          // dataSource={dataSource}
        />
            </div>
          )
         }

       
      </div>
      <Modal
        open={isModalOpen}
        onOk={() => setIsModalOpen(false)}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
        closeIcon={
          <CloseOutlined
            style={{
              color: "white", // Icon color
              backgroundColor: "#de0a26", // Background color of the close icon
              borderRadius: "10%", // Rounded background
              padding: "10px", // Padding inside the background
            }}
          />
        }
      >
        <div>
          <div className="flex justify-center items-center gap-2 flex-col py-[16px] border-b border-b-gray-300">
            <h1 className="text-xl font-medium">Users Details</h1>
          </div>
          <div className="p-[20px]">
            <div className="flex justify-between border-b mt-4 py-[16px]">
              <p>Full Name:</p>
              <p>
                {/* {user?.name ? user?.name : "N/A"} */}
                absayed
              </p>
            </div>

            <div className="flex justify-between border-b py-[16px] ">
              <p>Email:</p>
              <p>
                {/* {user?.email ? user?.email : "N/A"} */}
                ab@gmail.com
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Phone:</p>
              <p>
                {/* {user?.phone ? user?.phone : "N/A"} */}
                +45269875
              </p>
            </div>
            <div className="flex justify-between border-b py-[16px]">
              <p>Date:</p>
              <p>
                {/* {user?.createdAt  ? user?.createdAt?.split("T")[0] : "N/A"} */}
                23-11-24
              </p>
            </div>
            <div className="flex justify-between items-center pt-[16px]">
              <p>address:</p>
              <p className="px-[15px] py-[10px] rounded-lg">
                {/* Regular P550 */}
                UK
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default InsuranceReport;
