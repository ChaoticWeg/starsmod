import { ConfigObject } from "../ConfigObject";

export class BadConfigObject extends ConfigObject {
    public readonly shouldFail: string;

    public constructor() {
        super();
        this.shouldFail = ConfigObject.getEnv("FAIL_ME_DADDY");
    }
}
