export abstract class ConfigObject {
    protected static getEnv(name: string): string {
        const value: string | undefined = process.env[name];
        if (value === undefined) {
            throw new Error(`missing env key: ${name}`);
        }
        return value;
    }
}
