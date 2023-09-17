import {addDoc, collection, serverTimestamp} from "firebase/firestore"
import { db } from "configurations/Firebase-config"
import { useGetUserInfo } from "./UseGetUserInfo"

export const useAddTransaction = () => {
    const { userID } = useGetUserInfo()
    const transactionCollectionReference = collection(db, "transactions")
    const addTransaction = async ({description,transactionAmount,transactionType}) => {
        await addDoc(transactionCollectionReference, {
            userID,
            description,
            transactionAmount,
            transactionType,
            createdAt:serverTimestamp()
        })
    }
    return {addTransaction}
}