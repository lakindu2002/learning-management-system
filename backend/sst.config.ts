import { SSTConfig } from "sst";
import { lmsApiGateway } from "./stacks/api-gateway";
import { cognito } from "./stacks/cognito";
import { dynamodb } from "./stacks/dynamodb";

export default {
  config(_input) {
    return {
      name: "lms-backend",
      region: "ap-southeast-1",
    };
  },
  stacks(app) {
    app
      .stack(dynamodb)
      .stack(cognito)
      .stack(lmsApiGateway)
      .setDefaultFunctionProps({
        memorySize: 1024,
      })
  }
} satisfies SSTConfig;
