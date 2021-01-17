import { Discord } from "@typeit/discord";
import { join } from "path";

@Discord("event", { import: [join(__dirname, "events", "*.js")] })
export abstract class BotEvents {}
