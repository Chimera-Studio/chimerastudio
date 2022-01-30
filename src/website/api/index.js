// @flow
import axios from "axios";
// import sgMail from "@sendgrid/mail";
// import { database } from "./firebase.config";
import cmsHeader from "./cms.config";

// sgMail.setApiKey(process.env.REACT_APP_SENDGRID_API_KEY);

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

// export const sendForm = async (message: string): any => {
//   try {
//     // await sgMail.send({
//     //   to: "contact@dariodumlijan.com",
//     //   from: "contact@dariodumlijan.com",
//     //   subject: "Chimera - Hire form",
//     //   text: message,
//     //   // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
//     // });
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const fetchFirebaseDoc = async (
//   collection: string,
//   doc: string
// ): any => {
//   const response = await database.collection(collection).doc(doc).get();

//   return response;
// };
