import { useState, useEffect } from "react"
import { collection, query, where, orderBy, onSnapshot } from "firebase/firestore"
import { db } from "configurations/Firebase-config";
import { useGetUserInfo } from "./UseGetUserInfo";

export const useGetTransactions = () => {
    const {userID} = useGetUserInfo()
    const [transactions, setTransactions] = useState([])
    const [transactionTotals, setTransactionTotals] = useState({
        balance: 0.00,
        income: 0.00,
        expenses: 0.00,
      });
    const transactionCollectionRef = collection(db , "transactions")

    const getTransactions = async () => {
        let unsubscribe
        try{
            const transactionQuery = query(transactionCollectionRef, where("userID", "==", userID), orderBy("createdAt"));
            unsubscribe = onSnapshot(transactionQuery, (snapshot) => {
                let docs = [];
                let totalIncome = 0;
                let totalExpenses = 0;
                snapshot.forEach(doc => {
                    const data = doc.data()
                    const id = doc.id
                    const collectionName = "transactions"; 
                    // const documentName = `${collectionName}, ${id.toString()}`
                    
                    docs.push({...data, id, collectionName})
                    if (data.transactionType === "expense") {
                        totalExpenses += Number(data.transactionAmount);
                      } else {
                        totalIncome += Number(data.transactionAmount);
                      }
                })
                setTransactions(docs)
                let balance = totalIncome - totalExpenses;
                setTransactionTotals({
                balance,
                expenses: totalExpenses,
                income: totalIncome,
                });
            })
        } catch(err) {
            console.error(err)
        } 
        return () => unsubscribe();
    }

    useEffect(() => {
      getTransactions()
    }, [])
    
    return {transactions, transactionTotals}
}