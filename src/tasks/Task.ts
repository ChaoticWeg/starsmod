import App from "../App";
import { TaskResult } from "./TaskResult";

export type TaskConstructor<T extends Task> = new(app: App) => T;

export abstract class Task {
    public readonly app: App;

    protected constructor(app: App) {
        this.app = app;
    }

    public abstract async run(): Promise<TaskResult>;
}
