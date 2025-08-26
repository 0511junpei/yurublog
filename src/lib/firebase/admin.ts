import * as admin from "firebase-admin";

const accountKey = process.env.FIREBASE_SERVICE_ACCOUNT_KEY || "";

// サービスアカウントキーを環境変数から取得し、JSONにパース
const serviceAccount = JSON.parse(accountKey);

// Firebase Admin SDKが初期化されていなければ初期化する
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    // データベースURLを設定
    databaseURL: process.env.FIREBASE_DATABASE_URL,
  });
}

// Realtime Databaseへの参照を取得
const db = admin.database();

export { db };
