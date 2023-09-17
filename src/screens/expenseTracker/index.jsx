import React, { useState } from "react";
import Header from "components/Header";
import { useGetUserInfo } from "hooks/UseGetUserInfo";
import FinanceDetails from "components/FinanceDetails";
import AddTransactionModal from "components/AddTransactionModal";
import Transactions from "components/Transactions";

const ExpenseTracker = () => {
  const [showModal, setShowModal] = useState(false);
  const { name } = useGetUserInfo();

  return (
    <div className="h-[100vh] overflow-auto ">
      <Header />
      <div className="px-[50px] mt-[112px] ">
        <section className="w-full">
          <h1 className="xs:text-[24px] lg:text-[32px] ">
            Welcome to {name}'s Expense Tracker
          </h1>
          <FinanceDetails />
          <button
            className="bg-white p-2 font-[700] rounded-[4px] text-[#333333] float-right hover:scale-[0.95] transform duration-500 "
            onClick={() => setShowModal(true)}
          >
            Add Transaction
          </button>
          {showModal ? (
            <AddTransactionModal setShowModal={setShowModal} />
          ) : null}
        </section>
        <Transactions />
      </div>
    </div>
  );
};

export default ExpenseTracker;
