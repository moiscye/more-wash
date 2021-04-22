import { API } from "aws-amplify";

export const sendContactEmail = async (contactDetails) => {
  try {
    console.log("here");
    const res = await API.post("emailLambda", "/send", {
      body: {
        contactDetails,
      },
    });
    console.log(res);
    return Promise.resolve({ ok: true, data: res.data });
  } catch (e) {
    return Promise.resolve({ ok: false, error: e });
  }
};
