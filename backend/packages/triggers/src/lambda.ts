import { PostConfirmationTriggerEvent, PreTokenGenerationTriggerEvent } from "aws-lambda";

export const handlePostConfirmationOnCognito = async (event: PostConfirmationTriggerEvent) => {
  const {
    triggerSource,
    request: { userAttributes },
  } = event;

  // ignore any forgot password events
  if (triggerSource === "PostConfirmation_ConfirmForgotPassword") {
    return;
  }

  const { name, sub, email } = userAttributes;
  const instituteName = userAttributes['custom:institute_name'];

  console.log({ name, sub, email, instituteName });
};

export const handlePreTokenGenerationOnCognito = async (event: PreTokenGenerationTriggerEvent) => {
  const { request: { userAttributes: { sid } }, response } = event;
  const customClaims = {};

  // TODO: Fetch institutes for this user
  // TODO: Fetch user information for user belonging to this institute

  response.claimsOverrideDetails = {
    claimsToAddOrOverride: {
      ...customClaims,
    }
  };

  return event;
}