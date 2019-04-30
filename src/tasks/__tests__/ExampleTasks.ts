/* tslint:disable:max-classes-per-file */

import App from "../../App";
import { Task } from "../Task";
import { TaskResult } from "../TaskResult";

export class SuccessTask extends Task {
    public constructor(app: App) {
        super(app);
    }

    public async run(): Promise<TaskResult> {
        return TaskResult.success(this, "success");
    }
}

export class FailureTask extends Task {
    public constructor(app: App) {
        super(app);
    }

    public async run(): Promise<TaskResult> {
        return TaskResult.failure(this, new Error());
    }
}
