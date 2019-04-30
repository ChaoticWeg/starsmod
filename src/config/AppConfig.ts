import { RedditConfig } from "./RedditConfig";

interface IAppConfig {
    reddit: RedditConfig;
}

export class AppConfig implements IAppConfig {
    public readonly reddit: RedditConfig;

    public constructor() {
        this.reddit = new RedditConfig();
    }
}
