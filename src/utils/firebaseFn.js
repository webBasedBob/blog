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
  equalTo,
  orderByChild,
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

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  query,
  where,
  limit,
  getDoc,
  startAfter,
  orderBy,
} from "firebase/firestore";
import { dateObjToStr, transormDataForArticleCard } from "./helperFn";

export async function setFirestoreDoc(path, data) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  try {
    const docRef = await addDoc(collection(db, path), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

export async function getFirestoreDocs(path) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const querySnapshot = await getDocs(collection(db, "path"));
  const dataArr = [];
  querySnapshot.forEach((doc) => {
    dataArr.push(doc.data());
  });
  return dataArr;
}
export async function getFirestoreArticles() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const querySnapshot = await getDocs(collection(db, "articles"));
  const articlesArr = [];
  querySnapshot.forEach((doc) => {
    articlesArr.push(doc.data());
  });
  return articlesArr;
}
// getFirestoreData();
// setFirestoreData();
export async function getFirestoreRelatedArticles(
  category,
  tagsArr,
  maxresults = 8
) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const articlesRef = collection(db, "articles");
  const q = query(
    articlesRef,
    where("metaData.label", "==", category),
    where("metaData.tags", "array-contains-any", tagsArr),
    limit(maxresults)
  );
  // debugger;
  const querySnapshot = await getDocs(q);
  const articlesArr = [];
  querySnapshot.forEach((doc) => {
    const article = doc.data();
    article.metaData.date = article.metaData.date.seconds;
    articlesArr.push(transormDataForArticleCard(article));
  });
  return articlesArr;
}
// getFirestoreRelatedArticles();

export const getArticle = async (url) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const articlesRef = collection(db, "articles");
  const q = query(articlesRef, where("url", "==", url));
  const querySnapshot = await getDocs(q);
  const articlesArr = [];
  querySnapshot.forEach((doc) => {
    const article = doc.data();
    article.metaData.date = article.metaData.date.seconds;
    articlesArr.push(article);
  });
  //handle not finding an article
  return articlesArr[0];
};

export const getArticlesBySearch = async (
  category,
  tagsArr,
  maxresults = 8
) => {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const articlesRef = collection(db, "articles");
  const q = query(
    articlesRef,
    where("metaData.label", "==", category),
    where("metaData.tags", "array-contains-any", tagsArr),
    limit(maxresults)
  );
  // debugger;
  const querySnapshot = await getDocs(q);
  const articlesArr = [];
  querySnapshot.forEach((doc) => {
    articlesArr.push(doc.data());
  });
  return articlesArr;
};

export async function getArticlesFromEachCategory(numArticles) {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const articlesRef = collection(db, "articles");
  const categories = [
    "Side Hustler",
    "Corporate Hustler",
    "Entrepreneur Hustler",
  ];
  const result = [];

  for (let i = 0; i < categories.length; i++) {
    const q = query(
      articlesRef,
      where("metaData.label", "==", categories[i]),
      limit(numArticles)
    );
    const querySnapshot = await getDocs(q);
    const dataArr = [];
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      const fullUrl = `https://hustlinginsights.com/article/${docData.url}`;
      docData.fullUrl = fullUrl;
      docData.metaData.date = dateObjToStr(docData.metaData.date);
      dataArr.push(transormDataForArticleCard(docData));
    });
    result.push({
      title: categories[i],
      articles: dataArr,
    });
  }

  return result;
}
