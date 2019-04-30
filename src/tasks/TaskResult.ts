import { Task } from "./Task";

interface ITaskResult {
    task: Task;
    success: boolean;
    resultStr?: string;
    error?: Error;
}

export class TaskResult implements ITaskResult {
    public static success(task: Task, resultStr?: string): TaskResult {
        return new TaskResult(task, true, resultStr);
    }

    public static failure(task: Task, error?: Error): TaskResult {
        return new TaskResult(task, false, undefined, error);
    }

    public readonly task: Task;
    public readonly success: boolean;
    public readonly resultStr?: string;
    public readonly error?: Error;

    private constructor(task: Task, success: boolean, resultStr?: string, error?: Error) {
        this.task = task;
        this.success = success;
        this.resultStr = resultStr;
        this.error = error;
    }
}
