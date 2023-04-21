import { HttpMethods } from "aws-cdk-lib/aws-s3";
import { Bucket } from "sst/constructs";
import { StackContext } from "sst/constructs/FunctionalStack";

export function s3({ stack }: StackContext) {
  const staticContent = new Bucket(stack, "static-content", {
    cdk: {
      bucket: {
        publicReadAccess: true,
        cors: [
          {
            allowedMethods: [
              HttpMethods.DELETE,
              HttpMethods.GET,
              HttpMethods.POST,
              HttpMethods.PUT,
              HttpMethods.HEAD,
            ],
            allowedOrigins: [
              "http://localhost:3000",
              "https://learning-management-system-13zdot6i3-lakinduhewa.vercel.app",
              "https://learning-management-system-iota.vercel.app",
              "https://learning-management-system-lakinduhewa.vercel.app",
              "https://learning-management-system-git-main-lakinduhewa.vercel.app"
            ],
            allowedHeaders: ["*"],
            exposedHeaders: [
              "x-amz-server-side-encryption",
              "x-amz-request-id",
              "x-amz-id-2",
              "ETag",
            ],
            maxAge: 3000,
          },
        ],
      },
    },
  });

  stack.addOutputs({
    staticBucketName: staticContent.bucketName,
    staticBucketArn: staticContent.bucketName,
  });

  return {
    staticContent,
  };
}
