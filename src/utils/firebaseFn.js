import {
  getStorage,
  getDownloadURL,
  listAll,
  uploadBytes,
} from "firebase/storage";
import {
  getDatabase,
  set,
  get,
  onValue,
  child,
  push,
  update,
} from "firebase/database";
import { ref as storageRef } from "firebase/storage";
import { ref as databaseRef } from "firebase/database";
import { firebaseConfig } from "@/config/firebase";
import { initializeApp } from "firebase/app";

export const getImgUrl = async function (imgName, path) {
  //gets the URL of the image storead as a blob on firebase cloud storage
  //img name is the corresponding recipe's ID
  try {
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    const imgRef = storageRef(storage, `${path}/${imgName}`);
    const url = await getDownloadURL(imgRef);
    return url;
  } catch (error) {
    console.error(error);
  }
};
export const storeImage = async function (file, path) {
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);
  const imageRef = storageRef(storage, `${path}/${file.name}`);
  await uploadBytes(imageRef, file);
};
export function storeLiveDatabase(path, data) {
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  update(databaseRef(db, path), data);
}

export function getLiveDatabase(path) {
  return new Promise((resolve, reject) => {
    const app = initializeApp(firebaseConfig);
    const db = getDatabase(app);
    onValue(databaseRef(db, path), (snapshot) => {
      resolve(snapshot.val());
    });
  });
}
