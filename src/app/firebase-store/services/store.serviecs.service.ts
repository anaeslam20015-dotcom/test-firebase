import { Injectable } from '@angular/core';
import { Firestore, doc } from '@angular/fire/firestore';
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  addDoc,
  deleteDoc,
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class StoreServiecsService {
  constructor(private firestore: Firestore) {}
  db = getFirestore();
  colRef = collection(this.db, 'employees');
  /*  q = query(this.colRef, orderBy('id', 'asc')); */

  async getData() {
    const data = await getDocs(this.colRef);

    return data.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }
  async addEmployee(name: string, salary: number, workDuration: number) {
    const employee = {
      name: name,
      salary: salary,
      workDuration: workDuration,
    };
    await addDoc(this.colRef, employee);
  }
  async deleteEmployee(id: string) {
    const employeesDoc = doc(this.firestore, 'employees', id);
    await deleteDoc(employeesDoc);
  }
}
