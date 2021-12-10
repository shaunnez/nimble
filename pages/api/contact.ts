// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import SibApiV3Sdk from "sib-api-v3-sdk";

type Data = {
  result: boolean;
  error: string;
  data: any;
};

type FormData = {
  name: string;
  email: string;
  budget: number;
  phone: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = req.body as FormData;

  const defaultClient = SibApiV3Sdk.ApiClient.instance;

  const apiKey = defaultClient.authentications["api-key"];

  apiKey.apiKey =
    "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";

  const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();

  let sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();

  sendSmtpEmail = {
    to: [
      {
        email: "matt@pullmedia.co.nz",
        name: "Pull Media",
      },
    ],
    templateId: 3,
    params: {
      NAME: data.name,
      EMAIL: data.email,
      BUDGET: data.budget,
      PHONE: data.phone,
    },
  };

  apiInstance.sendTransacEmail(sendSmtpEmail).then(
    function (data) {
      console.log("API called successfully. Returned data: " + data);
      res.status(200).json({ result: true, error: "", data: data });
    },
    function (error) {
      res.status(200).json({ result: false, error: error, data: null });
    }
  );
}
