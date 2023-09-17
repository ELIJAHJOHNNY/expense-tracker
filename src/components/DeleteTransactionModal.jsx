import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "configurations/Firebase-config";

const DeleteTransactionModal = ({ setShowDeleteModal, description, id }) => {
  const deleteTransaction = async id => {
    try {
      await deleteDoc(doc(db, "transactions", id));
      setShowDeleteModal(false);
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };
  return (
    <div>
      <div className="w-full justify-center items-center flex fixed inset-0 bg-transparent bg-opacity-100 z-50 text-[#333333]">
        <div className="p-8 items-center lg:w-[573px] lg:h-[400px] xs:w-full xs:h-[60%] border-0 lg:rounded-lg xs:rounded-[50px] shadow-lg flex flex-col bg-white outline-none focus:outline-none">
          <div className="p-8 items-center justify-center w-[573px] h-[373px] border-0 rounded-lg shadow-lg flex flex-col bg-white outline-none focus:outline-none">
            <p className="text-center font-nunito font-[600] text-[16px] ">
              Delete Transaction
            </p>
            <p className="text-[16px] text-center font-nunito font-500 mt-[40px] ">
              Are you sure you want to delete <b>{description}</b>
              ?
              <br />
              This action cannot be undone.
            </p>
            <div className="flex justify-between w-[55%] mt-[40px]  ">
              <button
                className="w-[115px] font-[600] h-[40px] font-nunito text-[12px] bg-white text-[#247B7B] rounded-[4px] border-[1px] border-[#247B7B] hover:scale-[1.07] hover:border-[2px] duration-300  "
                type="button"
                onClick={() => setShowDeleteModal(false)}
              >
                Cancel
              </button>
              <button
                className=" w-[115px] font-[600] h-[40px] font-nunito text-[12px] text-white bg-[#990000] rounded-[4px]  "
                type="button"
                onClick={() => deleteTransaction(id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-60 fixed inset-0 z-40 bg-black" />
    </div>
  );
};

export default DeleteTransactionModal;
