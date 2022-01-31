// @flow
import axios from "axios";
import emailjs from "@emailjs/browser";
// import { database } from "./firebase.config";
import cmsHeader from "./cms.config";

export const fetchCMS = async (query: any): any => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_CMS_GRAPHQL_URL || "",
      {
        query,
      },
      cmsHeader
    );
    if (response.status === 200) {
      return response.data.data;
    }
  } catch (err) {
    // console.error(err);
    return null;
  }
};

export const sendForm = async (form: any): any => {
  await emailjs.sendForm(
    process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
    process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
    form,
    process.env.REACT_APP_EMAIL_JS_USER_ID
  );
};

// export const fetchFirebaseDoc = async (
//   collection: string,
//   doc: string
// ): any => {
//   const response = await database.collection(collection).doc(doc).get();

//   return response;
// };
