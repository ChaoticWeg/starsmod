import { TestEnvironment } from "../../utils/testing";
import { BadConfigObject } from "./BadConfigObject";

describe("ConfigObject", () => {
    const env: TestEnvironment = new TestEnvironment();

    beforeEach(() => {
        env.setUp();
    });

    afterEach(() => {
        env.tearDown();
    });

    it("properly initializes with App", () => {
        expect(() => {
            // tslint:disable-next-line:no-unused-expression
            env.app;
        }).not.toThrow();
    });

    it("properly throws when a key is not provided", () => {
        expect(() => {
            // tslint:disable-next-line:no-unused-expression
            new BadConfigObject();
        }).toThrow();
    });
});
