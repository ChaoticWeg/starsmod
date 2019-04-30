import ProcessEnv = NodeJS.ProcessEnv;
import App from "../../App";

const testCredentials = {
    REDDIT_SECRET: "test_reddit_secret",
    REDDIT_TOKEN: "test_reddit_token"
};

export class TestEnvironment {
    private readonly oldEnv: ProcessEnv;

    public constructor() {
        this.oldEnv = process.env;
    }

    public setUp(): void {
        jest.resetModules();
        process.env = { ...this.oldEnv, ...testCredentials };
    }

    public tearDown(): void {
        process.env = this.oldEnv;
    }

    // noinspection JSMethodCanBeStatic
    public get app(): App {
        return new App();
    }
}
