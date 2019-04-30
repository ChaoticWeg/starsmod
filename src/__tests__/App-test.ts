import App from "../App";

describe("App", () => {

    it("has an async start function", async (done) => {
        await App.start();
        done();
    });

});
