import { AppConfig } from "./config";
import { TaskResult } from "./tasks";
import { Task, TaskConstructor } from "./tasks/Task";

export default class App {
    public readonly config: AppConfig;

    public constructor() {
        this.config = new AppConfig();
    }

    public async runTask<T extends Task>(ctor: TaskConstructor<T>): Promise<TaskResult> {
        const task = new ctor(this);
        return task.run();
    }
}
