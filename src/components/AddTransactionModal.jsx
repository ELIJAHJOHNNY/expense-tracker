import React, { useState } from "react";
import { useAddTransaction } from "hooks/UseAddTransaction";
import dropdown from "assets/dropdown.svg";

const AddTransactionModal = ({ setShowModal }) => {
  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");
  const [showTransactionTypes, setShowTransactionTypes] = useState(false);
  const { addTransaction } = useAddTransaction();
  const handleSubmitTransaction = e => {
    e.preventDefault();
    addTransaction({
      description,
      transactionAmount,
      transactionType,
    });
    setTransactionAmount("");
    setDescription("");
    setShowModal(false);
  };
  return (
    <div>
      <div className="w-full justify-center items-center flex fixed inset-0 bg-transparent bg-opacity-100 z-50">
        <div className="p-8 items-center lg:w-[573px] lg:h-[400px] xs:w-full xs:h-[60%] border-0 lg:rounded-lg xs:rounded-[50px] shadow-lg flex flex-col bg-white outline-none focus:outline-none">
          <p className=" font-nunito font-[700] text-[#333333] mb-4">
            Add Transaction
          </p>
          <form>
            <label className="text-[#333333] flex flex-col">
              Description
              <input
                type="text"
                className="w-[350px] h-[40px] border-[1px] border-[#666666] outline-none rounded-[4px] p-2 mb-4 "
                placeholder="Add a transacrion description"
                value={description}
                required
                name="description"
                onChange={e => {
                  setDescription(e.target.value);
                }}
              />
            </label>
            <label className="text-[#333333] flex flex-col">
              Transaction Amount
              <input
                type="number"
                className="w-[350px] h-[40px] border-[1px] border-[#666666] outline-none rounded-[4px] p-2 "
                placeholder="Amount"
                value={transactionAmount}
                required
                name="transactionAmount"
                onChange={e => setTransactionAmount(e.target.value)}
              />
            </label>
            <div className="flex flex-col text-[#333333] mt-4 relative">
              <p>Transaction Type</p>
              <div className="w-[350px] h-[40px] border-[#666666] border-[1px] rounded-[4px] relative p-2">
                <p>{transactionType === "income" ? "Income" : "Expense"}</p>
                <button
                  onClick={() => setShowTransactionTypes(!showTransactionTypes)}
                >
                  <img
                    src={dropdown}
                    alt="dropdown icon"
                    className="absolute top-4 right-2 "
                  />
                </button>
              </div>
              {showTransactionTypes ? (
                <div className="bg-white shadow-lg w-full flex flex-col py-2 rounded-[4px] z-[50] absolute top-[64px] ">
                  <button
                    onClick={() => {
                      setTransactionType("expense");
                      setShowTransactionTypes(false);
                    }}
                    className="text-left my-2 hover:bg-gradient-to-l from-black via-transparent to-[#1c2842] hover:text-white px-2 rounded-[4px] "
                  >
                    Expense
                  </button>
                  <button
                    onClick={() => {
                      setTransactionType("income");
                      setShowTransactionTypes(false);
                    }}
                    className="text-left hover:bg-gradient-to-l from-black via-transparent to-[#1c2842] hover:text-white px-2 rounded-[4px] "
                  >
                    Income
                  </button>
                </div>
              ) : null}
            </div>
          </form>
          <div className="flex justify-between lg:w-[55%] xs:w-[80%] mt-[24px]  ">
            <button
              className="w-[115px] font-[600] h-[40px] font-nunito text-[12px] bg-white text-[#1c2842] rounded-[4px] border-[1px] border-[#1c2842] hover:scale-[1.07] hover:border-[2px] duration-300  "
              type="button"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>
            <button
              className=" w-[115px] font-[600] h-[40px] font-nunito text-[12px] text-white bg-[#1c2842] rounded-[4px]  "
              type="button"
              disabled={description === "" || transactionAmount < 1}
              onClick={handleSubmitTransaction}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div className="opacity-60 fixed inset-0 z-40 bg-black" />
    </div>
  );
};

export default AddTransactionModal;
