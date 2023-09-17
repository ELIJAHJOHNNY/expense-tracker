import { doc, deleteDoc } from "firebase/firestore"
import { db } from "configurations/Firebase-config";

export const useDeleteTransaction = async(transactionPath) => {
    try {
      const documentRef = doc(db, transactionPath);
      await deleteDoc(documentRef);
      console.log('Document successfully deleted.');
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  }
  