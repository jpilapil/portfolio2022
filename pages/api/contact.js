import { WebClient } from "@slack/web-api";

const slackChannel = process.env.SLACK_CHANNEL;
const slackToken = process.env.SLACK_TOKEN;

const slackClient = new WebClient(slackToken);

export default async function handler(req, res) {
  const body = JSON.parse(req.body);
  try {
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
  } catch (e) {
    console.error(`There was an error sending the slack message`);
    throw e;
  }

  // TODO: add form validation
}
