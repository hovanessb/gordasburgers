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
      location: string;
      email: string;
      phone: string;
      hours: string;
      data: string;
    };

      sendEmail({
      from: "booking@lasgordasburgers.com",
      to: requestBody.email,
      subject: "Booking Request",
      template: "thankyou",
      parameters: {
      },
    });

      sendEmail({
      from: "booking@lasgordasburgers.com",
      to: "booking@lasgordasburgers.com",
      subject: "Booking Request",
      template: "inquiry",
      parameters: {
            name: requestBody.name,
            location: requestBody.location,
            hours: requestBody.hours,
            email: requestBody.email,
            phone: requestBody.phone,
            data: requestBody.data
      },
    });

  } catch (error) {
    console.log(error)
    return {
      statusCode: 400,
      body: error,
    };
  }
  

  return {
    statusCode: 200,
    body: JSON.stringify("Success!"),
  };
};

export { handler };
