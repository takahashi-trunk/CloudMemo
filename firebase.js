// 必要なSDKから必要な関数をインポートする。
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // 追加
import { getFirestore } from 'firebase/firestore'; // 追加

// ウェブアプリのFirebase設定
const firebaseConfig = {
  apiKey: 'AIzaSyDKGGm4tsi6xEKXFbx0VPN8132ZYaXjuWo',
  authDomain: 'cloudmemo-71405.firebaseapp.com',
  projectId: 'cloudmemo-71405',
  storageBucket: 'cloudmemo-71405.firebasestorage.app',
  messagingSenderId: '405832133268',
  appId: '1:405832133268:web:c8f6c21bc87de03fd0a281',
};

// Firebaseの初期化
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // 追加
export const db = getFirestore(app); // 追加
