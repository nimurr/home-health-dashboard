import React, { useState } from "react";
import { BsCalendar3 } from "react-icons/bs";
import chaka from './../../../../../public/chaka.png'
 
import ship1 from './../../../../../public/ship1.png'
import ship2 from './../../../../../public/ship2.png'
import { BiArrowBack } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { useGetByIdIncidentQuery } from "../../../../redux/features/reporting/getByIdIncident";
import url from "../../../../redux/api/baseUrl";
import { DatePicker, Space } from "antd";

const IncidentDetails = () => {
  const {id} = useParams()
 
  const [date, setDate] = useState('')
  const onChange = (date, dateString) => {
     setDate(dateString)
  };


const {data: singelIndident,error, isLoading} =  useGetByIdIncidentQuery({id,date})
console.log(singelIndident?.data?.attributes);

const imageurl = url
 

    const navigate = useNavigate()
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
    {/* Header */}
    <div className="flex justify-between items-center mb-6">
    <div className="flex items-center gap-2">
          <p className="cursor-pointer" onClick={() => navigate('/dashboard/reporting/incidentreport')}> 
        <BiArrowBack />
          </p>
          <h1 className="text-xl font-semibold">Incident-Reporting Details</h1>
        </div>
     
        <Space direction="vertical">
    <DatePicker onChange={onChange}/>
   
  </Space>
    </div>
 
    {
      error ? (
        <div className="text-red-500 text-center mt-10">{error?.data?.message}</div>
      ) : (
        <div>
            {/* Checklist Card */}
    {singelIndident?.data?.attributes?.map((details, index) => {
      const user = new Date(details.createdAt);
     
      
      const repoterDate = user.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const repoterTime = user.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });

      return (

<div key={details._id} className="bg-[#E0F7F9] rounded-lg p-6 shadow-md border mb-6">
  {/* Report Details */}
  <div className="mb-6 space-y-2 w-[30%]">
    <div className="grid grid-cols-2">
      <p className="text-sm font-semibold"><strong>Report Date:</strong></p>
      <p className="text-sm text-left">{repoterDate}</p>
    </div>
    <div className="grid grid-cols-2">
      <p className="text-sm font-semibold"><strong>Time:</strong></p>
      <p className="text-sm text-left">{repoterTime}</p>
    </div>
    <div className="grid grid-cols-2">
      <p className="text-sm font-semibold"><strong>Weather:</strong></p>
      <p className="text-sm text-left">{details.weather}</p>
    </div>
    <div className="grid grid-cols-2">
      <p className="text-sm font-semibold"><strong>User Name:</strong></p>
      <p className="text-sm text-left">{details.user?.name}</p>
    </div>
    <div className="grid grid-cols-2">
      <p className="text-sm font-semibold"><strong>Email:</strong></p>
      <p className="text-sm text-left">{details.user?.email}</p>
    </div>

    <div className="grid grid-cols-2">
      <p className="text-sm font-semibold"><strong>Notes:</strong></p>
      <p className="text-sm text-left">{details?.reportNote}</p>
    </div>

    <div className="grid grid-cols-2">
      <p className="text-sm font-semibold"><strong></strong></p>
      <p className="text-sm text-left"> 
      {details.reportImage?.map((image, idx) => (
      <img
        key={idx}
        src={url + image?.publicFileUrl}
        alt="Checklist Image"
        className="w-32 h-20 rounded-lg object-cover border-2 border-gray-300"
      />
    ))}
      </p>
    </div>

    <div className="grid grid-cols-2">
      <p className="text-sm font-semibold"><strong>E-sign</strong></p>
      <div className="border border-gray-300 p-4 mt-2 rounded-lg w-48 h-20 flex items-center justify-center">
      {details.user?.eSign?.publicFileUrl ? (
        <img className="h-16 w-40" src={url + details.user?.eSign?.publicFileUrl} alt="E-Sign" />
      ) : (
        <p className="italic text-gray-400">Signature not available</p>
      )}
    </div>
      
    </div>
    
  </div> 
  
</div>


      

      
      
      );

    })}

        </div>
      )
    }

  
     
  </div>
  );
};

export default IncidentDetails;
