import { Bucket } from "sst/constructs";
import { StackContext } from "sst/constructs/FunctionalStack";

export function s3({ stack }: StackContext) {
    const staticContent = new Bucket(
        stack,
        "static-content",
    )

    stack.addOutputs({
        staticBucketName: staticContent.bucketName,
        staticBucketArn: staticContent.bucketName,
    })

    return {
        staticContent,
    }
}