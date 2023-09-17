import React from "react";
import { useGetTransactions } from "hooks/UseGetTransactions";
import TransactionRows from "./TransactionRows";

const Transactions = () => {
  const { transactions } = useGetTransactions();
  return (
    <div className="mt-[112px] mb-[40px] ">
      <h3 className="text-[24px] font-[700] "> Transactions</h3>
      <table className=" w-full  ">
        <thead className="font-nunito w-full h-[40px] text-[#455454] ">
          <tr className="w-full bg-[#F0F4F4] text-left ">
            <th className="w-[20%] pl-4  ">S/N</th>
            <th className="w-[20%] ">Description</th>
            <th className="w-[20%]">Type</th>
            <th className="w-[20%]">Amount</th>
            <th className="w-[20%] pr-[24px] ">Action</th>
          </tr>
        </thead>

        <tbody className="text-[14px] font-nunito text-[#666666]">
          {transactions.map((transaction, index) => {
            const {
              description,
              transactionAmount,
              transactionType,
              id,
              documentName,
            } = transaction;
            return (
              <TransactionRows
                key={index}
                index={index}
                description={description}
                transactionAmount={transactionAmount}
                transactionType={transactionType}
                documentName={documentName}
                id={id}
              />
            );
          })}
        </tbody>
      </table>
      {/* <ul>
        {transactions.map(transaction => {
          const { description, transactionAmount, transactionType } =
            transaction;
          return (
            <li>
              <h4> {description} </h4>
              <p>
                transactionAmount • {transactionAmount}
                <label
                  style={{
                    color: transactionType === "expense" ? "red" : "green",
                  }}
                >
                  transactionType • {transactionType}
                </label>
              </p>
            </li>
          );
        })}
      </ul> */}
    </div>
  );
};

export default Transactions;
