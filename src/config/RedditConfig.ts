import { ConfigObject } from "./ConfigObject";

interface IRedditConfig {
    token: string;
    secret: string;
}

export class RedditConfig extends ConfigObject implements IRedditConfig {
    private static readonly TOKEN_KEY: string = "REDDIT_TOKEN";
    private static readonly SECRET_KEY: string = "REDDIT_SECRET";

    public readonly token: string;
    public readonly secret: string;

    public constructor() {
        super();
        this.token = ConfigObject.getEnv(RedditConfig.TOKEN_KEY);
        this.secret = ConfigObject.getEnv(RedditConfig.SECRET_KEY);
    }
}
