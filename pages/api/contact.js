import { WebClient } from "@slack/web-api";

const slackChannel = process.env.SLACK_CHANNEL;
const slackToken = process.env.SLACK_TOKEN;
const slackClient = new WebClient(slackToken);

const handler = async (req, res) => {
  const body = JSON.parse(req.body);
  try {
    // require all inputs are filled out
    if (!body.name || !body.contact || !body.message) {
      return res
        .status(400)
        .send({ message: "Missing name, contact, or message" });
    } else {
      await slackClient.chat.postMessage({
        channel: slackChannel,
        text: "@here You've received a message from your contact form!",
        blocks: [
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: "@here You've received a message from your contact form!",
            },
            fields: [
              {
                type: "mrkdwn",
                text: `*Name*\n${body.name}`,
              },
              {
                type: "mrkdwn",
                text: `*Contact*\n${body.contact}`,
              },
            ],
          },
          {
            type: "section",
            text: {
              type: "mrkdwn",
              text: `*Message*:\n>${body.message}`,
            },
          },
        ],
      });
      return res.status(200).send({ message: "Successfully sent message" });
    }
  } catch (e) {
    console.error(`There was an error sending the slack message`);
    res
      .status(500)
      .send({ message: "There was an error sending the slack message" });
  }
};

export default handler;
