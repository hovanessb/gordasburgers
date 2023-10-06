import type { Handler } from "@netlify/functions";
import { sendEmail } from "@netlify/emails";

const handler: Handler = async function(event) {
  if (event.body === null) {
    return {
      statusCode: 400,
      body: JSON.stringify("Payload required"),
    };
  }

  try {
    const requestBody = JSON.parse(event.body) as {
      name: string;
      org: string;
      email: string;
      phone: string;
      data: string;
    };

      sendEmail({
      from: "info@facilitiesfusion.com",
      to: requestBody.email,
      subject: "Inquiry Request",
      template: "thankyou",
      parameters: {
      },
    });

      sendEmail({
      from: "inquiries@facilitiesfusion.com",
      to: "info@facilitiesfusion.com",
      subject: "Inquiry Request",
      template: "inquiry",
      parameters: {
            name: requestBody.name,
            org: requestBody.org,
            email: requestBody.email,
            phone: requestBody.phone,
            data: requestBody.data
      },
    });

  } catch (error) {
    console.log(error)
    return {
      statusCode: 400,
      body: error.message,
    };
  }
  

  return {
    statusCode: 200,
    body: JSON.stringify("Success!"),
  };
};

export { handler };
