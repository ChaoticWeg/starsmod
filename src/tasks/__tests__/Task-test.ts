import App from "../../App";
import { TestEnvironment } from "../../utils/testing";
import { TaskResult } from "../TaskResult";
import { FailureTask, SuccessTask } from "./ExampleTasks";

describe("Task", () => {
    const env: TestEnvironment = new TestEnvironment();
    let app: App;

    beforeEach(() => {
        env.setUp();
        app = env.app;
    });

    afterEach(() => {
        env.tearDown();
    });

    it("properly returns a success value", async (done) => {
        const result: TaskResult = await app.runTask(SuccessTask);
        expect(result.success).toBe(true);
        expect(result.resultStr).toStrictEqual("success");
        done();
    });

    it("properly returns a failure value", async (done) => {
        const result: TaskResult = await app.runTask(FailureTask);
        expect(result.success).toBe(false);
        expect(result.error).toBeDefined();
        done();
    });
});
