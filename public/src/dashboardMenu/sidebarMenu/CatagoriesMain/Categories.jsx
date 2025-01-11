import { FiPlus } from "react-icons/fi";
import CategoriesUserImage from "../../../../public/image/handsome-man.png";
import { useState } from "react";
import { Image, Modal } from "antd";

export default function Categories() {
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

  return (
    <div className="mx-5">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-gray-500">Category</h3>
        <button
          onClick={showModal}
          className="flex items-center gap-2 text-white bg-[#3d1852] py-3 px-8 rounded-md"
        >
          <FiPlus />
          Add Category
        </button>

        <Modal
          open={isModalOpen}
          onCancel={handleModalClose} // Close modal without any buttons
          footer={null} // Remove the default footer (OK/Cancel buttons)
          centered
        >
          <h2 className="my-2 text-center text-2xl font-semibold">Add Category</h2>
          <hr />
          <div className="w-1/3 mx-auto my-3">
            <Image
              className="w-full"
              src={CategoriesUserImage}
              alt="Category"
            />
          </div>
          <h2 className="text-xl font-semibold mb-3">Category Name</h2>
          <input
            className="p-2 w-full border-2 border-gray-500 rounded-md"
            type="text"
            placeholder="Enter category name"
            value={categoryName}
            onChange={handleInputChange}
          />
          <button
            onClick={handleUpdateCategory}
            className="mt-5 bg-[#3d1852] text-white py-2 px-5 rounded-md w-full"
          >
            Update
          </button>
        </Modal>
      </div>

      <div className="mt-10 grid grid-cols-5 gap-5">
        {[...Array(5)].map((_, idx) => (
          <div key={idx} className="text-center border p-4 rounded-md">
            <img className="w-full" src={CategoriesUserImage} alt="Category" />
            <h2 className="my-5 text-xl font-semibold">Category Name</h2>
            <div className="flex justify-center gap-3">
              <button className="border-[1px] border-[#3d1852] text-[#3d1852] py-2 px-5 rounded-md w-full">
                Delete
              </button>
              <button className="bg-[#3d1852] text-white py-2 px-5 rounded-md w-full">
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
