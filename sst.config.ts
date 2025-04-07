export default $config({
  app(input) {
    return {
      name: "swiftbharat-website",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    new sst.aws.Nextjs("swiftbharat-website", {
      domain: {
        name: "www.swiftbharat.org",
        redirects: ["swiftbharat.org"]
      },
    });
  },
});
