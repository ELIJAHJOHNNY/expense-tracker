import React from "react";
import { useGetTransactions } from "hooks/UseGetTransactions";
import incomeIcon from "assets/incomeIcon.png";
import expenseIcon from "assets/expenseIcon.png";
import accountBalanceIcon from "assets/accountBalanceIcon.jpg";

const FinanceDetails = () => {
  // Use the hook within the component function
  const { transactionTotals } = useGetTransactions();
  const { balance, income, expenses } = transactionTotals;

  // Create your financeDetails array here
  const financeDetails = [
    {
      title: "Balance",
      value: balance,
      icon: accountBalanceIcon,
    },
    {
      title: "Expenses",
      value: expenses,
      icon: expenseIcon,
    },
    {
      title: "Income",
      value: income,
      icon: incomeIcon,
    },
  ];

  return (
    <div className="flex items-center justify-between my-[40px] flex-wrap ">
      {financeDetails.map((item, index) => {
        return (
          <div
            key={index}
            className="md:w-[350px] md:h-[100px] xs:w-[140px] xs:h-[80px] bg-[#1c2842] shadow- rounded-[8px] flex items-center flex-wrap px-4 hover:scale-[1.03] transform duration-500 hover:shadow-2xl hover:bg-gradient-to-l from-black via-transparent to-rgb-23-68-163 xs:mx-1 xs:my-2 lg:m-0 "
          >
            <img
              src={item.icon}
              alt="finance icon"
              className="md:w-[50px] md:h-[50px] xs:w-[20px] xs:h-[20px] rounded-[8px] mr-4  "
            />
            <div className="flex flex-col ">
              <p className="text-[#aebee4] ">{item.title}</p>
              <p className="font-[700] "> ₦{item.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FinanceDetails;
