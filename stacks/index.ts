// import { MyStack } from "./MyStack";
import { DNS } from "./DNS"
import { Web } from "./Web"
import { App } from "@serverless-stack/resources"

export default function (app: App) {
  app.setDefaultFunctionProps({
    runtime: "nodejs16.x",
    srcPath: "services",
    bundle: {
      format: "esm",
    },
  })
  // app.stack(MyStack);
  app.stack(DNS).stack(Web)
}
