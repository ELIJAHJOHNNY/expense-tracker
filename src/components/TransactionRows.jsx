import React, { useState } from "react";
import deleteIcon from "assets/deleteIcon.svg";
import DeleteTransactionModal from "./DeleteTransactionModal";

const TransactionRows = ({
  description,
  transactionAmount,
  transactionType,
  index,
  id,
}) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  return (
    <tr className="text-[#f2f2f2] w-full border-b-[1px] border-[#aebee4] ">
      <td className="py-[12px] w-[4%] pl-4  ">{index + 1} </td>
      <td className="w-[32%] ">{description}</td>
      <td className="w-[32%] ">
        {transactionType === "expense" ? "Expense" : "Income"}{" "}
      </td>
      <td className="w-[32%] ">₦{transactionAmount}</td>
      <td>
        <button onClick={() => setShowDeleteModal(true)}>
          <img src={deleteIcon} alt="delete icon" />
        </button>
      </td>
      {showDeleteModal && (
        <DeleteTransactionModal
          setShowDeleteModal={setShowDeleteModal}
          description={description}
          id={id}
        />
      )}
    </tr>
  );
};

export default TransactionRows;
