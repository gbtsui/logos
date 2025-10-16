import {
    App,
    LogLevel,
} from "@slack/bolt";
import type {
    KnownEventFromType,
    SayFn,
    AllMiddlewareArgs,
    SlackEventMiddlewareArgs
} from "@slack/bolt";
import "dotenv/config"

const SLACK_APP_TOKEN: string = process.env.SLACK_APP_TOKEN as string;
const SLACK_BOT_TOKEN: string = process.env.SLACK_BOT_TOKEN as string;
const SIGNING_SECRET: string = process.env.SIGNING_SECRET as string;

const app = new App({
    token: SLACK_BOT_TOKEN,
    signingSecret: SIGNING_SECRET,
    socketMode: true,
    appToken: SLACK_APP_TOKEN,
    logLevel: LogLevel.DEBUG
});

app.message("hi logos", async ({
    context,
    say,
    logger
}: AllMiddlewareArgs & SlackEventMiddlewareArgs<'message'>) => {
    try {
        logger.debug(context)
        await say(`hi <@${context.userId}>`)
    } catch(err) {
        console.error(err)
    }
});



/*
app.message("logos say something", async ({
    message,
    say,
}) => {
    await say({
        blocks: [{
            "type": "section",
            "text": {
                "type": "mrkdwn",
                "text": `hi <@${message.user}>`
            },
            "accessory": {
                "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "idk"
                },
                "action_id": "button_click"
            },
        }, ],
        "text": `hi <@${message.user}>`
    });
});

app.action('button_click', async ({ body, ack, say }) => {
  // Acknowledge the action
  await ack();
  await say(`<@${body.user.id}> clicked the button`);
});
*/

(async () => {
    await app.start(process.env.PORT || 3000);
    app.logger.info("bolt app is running :3")
})()