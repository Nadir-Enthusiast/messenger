import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  //config
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export {app, analytics};
