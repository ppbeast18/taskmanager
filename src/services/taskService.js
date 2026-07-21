import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const taskCollection = collection(db, "tasks");

export async function getTasks(uid) {
  const q = query(
    collection(db, "tasks"),
    where("createdBy", "==", uid)
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}

export async function createTask(task) {
  await addDoc(taskCollection, task);
}

export async function updateTask(id, task) {
  await updateDoc(doc(db, "tasks", id), task);
}

export async function deleteTask(id) {
  await deleteDoc(doc(db, "tasks", id));
}