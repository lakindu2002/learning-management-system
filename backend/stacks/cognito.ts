import { StackContext } from "sst/constructs/FunctionalStack";
import { Cognito, use, Function } from "sst/constructs";
import { StringAttribute } from "aws-cdk-lib/aws-cognito";
import { dynamodb } from "./dynamodb";
import { Duration } from "aws-cdk-lib";
import { s3 } from "./s3";
import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";

export function cognito({ stack }: StackContext) {
  const { instituteTableName, instituteUserTableName, userTableName } = use(dynamodb);
  const { staticContent } = use(s3);

  const postConfirmationTrigger = new Function(stack, "post-confirmation-trigger", {
    handler: "packages/triggers/src/lambda.handlePostConfirmationOnCognito",
    environment: {
      INSTITUTE_TABLE_NAME: instituteTableName,
      USER_TABLE_NAME: userTableName,
      INSTITUTE_USER_TABLE_NAME: instituteUserTableName,
    },
  })

  const preTokenTrigger = new Function(stack, "pre-token-trigger", {
    handler: "packages/triggers/src/lambda.handlePreTokenGenerationOnCognito",
    environment: {
      INSTITUTE_TABLE_NAME: instituteTableName,
      USER_TABLE_NAME: userTableName,
      INSTITUTE_USER_TABLE_NAME: instituteUserTableName,
    },
  })

  postConfirmationTrigger.attachPermissions(["dynamodb:TransactWriteItem", "dynamodb:PutItem"])
  preTokenTrigger.attachPermissions(["dynamodb:Query", "dynamodb:BatchGetItem"])

  const auth = new Cognito(stack, "lms-auth", {
    login: ["email"],
    triggers: {
      postConfirmation: postConfirmationTrigger,
      preTokenGeneration: preTokenTrigger
    },
    cdk: {
      userPool: {
        customAttributes: {
          institute_name: new StringAttribute({ minLen: 1, maxLen: 255 }),
        },
        passwordPolicy: {
          minLength: 6,
          requireDigits: false,
          requireLowercase: true,
          requireSymbols: false,
          requireUppercase: false,
          tempPasswordValidity: Duration.days(30)
        },
        userInvitation: {
          emailSubject: 'Invite to join MyLMS!',
          emailBody: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta name="x-apple-disable-message-reformatting" />
              <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
              <meta name="color-scheme" content="light dark" />
              <meta name="supported-color-schemes" content="light dark" />
              <title></title>
              <style type="text/css" rel="stylesheet" media="all">
              
              @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");
              body {
                width: 100% !important;
                height: 100%;
                margin: 0;
                -webkit-text-size-adjust: none;
              }
              
              a {
                color: #3869D4;
              }
              
              
              .preheader {
                display: none !important;
                visibility: hidden;
                mso-hide: all;
                font-size: 1px;
                line-height: 1px;
                max-height: 0;
                max-width: 0;
                opacity: 0;
                overflow: hidden;
              }
              
              body,
              td,
              th {
                font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
              }
              
              h1 {
                margin-top: 0;
                color: #333333;
                font-size: 22px;
                font-weight: bold;
                text-align: left;
              }
              
              h2 {
                margin-top: 0;
                color: #333333;
                font-size: 16px;
                font-weight: bold;
                text-align: left;
              }
              
              h3 {
                margin-top: 0;
                color: #333333;
                font-size: 14px;
                font-weight: bold;
                text-align: left;
              }
              
              td,
              th {
                font-size: 16px;
              }
              
              p,
              ul,
              ol,
              blockquote {
                margin: .4em 0 1.1875em;
                font-size: 16px;
                line-height: 1.625;
              }
              
              p.sub {
                font-size: 13px;
              }
              
              .align-right {
                text-align: right;
              }
              
              .align-left {
                text-align: left;
              }
              
              .align-center {
                text-align: center;
              }
              
              .u-margin-bottom-none {
                margin-bottom: 0;
              }
              
              .button {
                background-color: #3869D4;
                border-top: 10px solid #3869D4;
                border-right: 18px solid #3869D4;
                border-bottom: 10px solid #3869D4;
                border-left: 18px solid #3869D4;
              border-radius: 3px;
              text-align: left;
              color: white;
              box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
              box-sizing: border-box;
              display: inline-block;
              padding: 10px;
              }
          
              
              body {
                background-color: #F2F4F6;
                color: #51545E;
              }
              
              p {
                color: #51545E;
              }
              
              .email-wrapper {
                width: 100%;
                margin: 0;
                padding: 0;
                -premailer-width: 100%;
                -premailer-cellpadding: 0;
                -premailer-cellspacing: 0;
                background-color: #F2F4F6;
              }
              
              .email-content {
                width: 100%;
                margin: 0;
                padding: 0;
                -premailer-width: 100%;
                -premailer-cellpadding: 0;
                -premailer-cellspacing: 0;
              }
              
              .email-masthead {
                padding: 25px 0;
                text-align: center;
              }
              
              .email-masthead_logo {
                width: 94px;
              }
              .bg-theme-color{
                background-color: #070C27;
              }
              
              .email-masthead_name {
                font-size: 16px;
                font-weight: bold;
                color: #A8AAAF;
                text-decoration: none;
                text-shadow: 0 1px 0 white;
              }
              
              .email-body {
                width: 100%;
                margin: 0;
                padding: 0;
                -premailer-width: 100%;
                -premailer-cellpadding: 0;
                -premailer-cellspacing: 0;
              }
              
              .email-body_inner {
                width: 570px;
                margin: 0 auto;
                padding: 0;
                -premailer-width: 570px;
                -premailer-cellpadding: 0;
                -premailer-cellspacing: 0;
                background-color: #FFFFFF;
              }
              
              .email-footer {
                width: 570px;
                margin: 0 auto;
                padding: 0;
                -premailer-width: 570px;
                -premailer-cellpadding: 0;
                -premailer-cellspacing: 0;
                text-align: center;
              }
              
              .email-footer p {
                color: #A8AAAF;
              }
              
              .body-action {
                width: 100%;
                margin: 30px auto;
                padding: 0;
                -premailer-width: 100%;
                -premailer-cellpadding: 0;
                -premailer-cellspacing: 0;
                text-align: center;
              }
              
              .body-sub {
                margin-top: 25px;
                padding-top: 25px;
                border-top: 1px solid #EAEAEC;
              }
              
              .content-cell {
                padding: 45px;
              }
              </style>
          
            </head>
            <body>
              <span class="preheader">Use this link to reset your password. The link is only valid for 24 hours.</span>
              <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td align="center">
                    <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td class="email-masthead">
                          <a href="https://learning-management-system-iota.vercel.app/" class="f-fallback email-masthead_name">
                          <p>MyLMS <br>
                          Learning Management System</p>
                        </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="email-body" width="570" cellpadding="0" cellspacing="0">
                          <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td class="content-cell">
                                <div class="f-fallback">
                                  <h1>Hi,</h1>
                                  <p >We are from MyLMS Learning Management System. You have been invited to join MyLMS App !<br> To login, please use following temporary password. Your username is, <strong>{username}</strong></p>
                                  
                                  <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                      <td align="center">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                          <tr>
                                            <td align="center">
                                              <div class="button">
                                                <label style="color:white;">Password:<b> {####} </b></label>
                                              </div>
          
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                  
                                  <p>
                                    <strong>Use following url to access the LMS:</strong><br> https://learning-management-system-iota.vercel.app/
                                  </p>
          
                                  <p>If you are unable to login or if you have questions, please <a href="{{support_url}}">contact support</a>.</p>
                                  <hr>
                                  <p>Thank You,<br>The MyLMS team <br>mylms.learn@gmail.com</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>`,
          smsMessage: 'Your username is {username} and temporary password is {####}.',
        },
        userVerification: {
          emailSubject: 'Verify your email for MyLMS!',
          emailBody: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta name="x-apple-disable-message-reformatting" />
              <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
              <meta name="color-scheme" content="light dark" />
              <meta name="supported-color-schemes" content="light dark" />
              <title></title>
              <style type="text/css" rel="stylesheet" media="all">
              
              @import url("https://fonts.googleapis.com/css?family=Nunito+Sans:400,700&display=swap");
              body {
                width: 100% !important;
                height: 100%;
                margin: 0;
                -webkit-text-size-adjust: none;
              }
              
              a {
                color: #3869D4;
              }
              
              
              .preheader {
                display: none !important;
                visibility: hidden;
                mso-hide: all;
                font-size: 1px;
                line-height: 1px;
                max-height: 0;
                max-width: 0;
                opacity: 0;
                overflow: hidden;
              }
              
              body,
              td,
              th {
                font-family: "Nunito Sans", Helvetica, Arial, sans-serif;
              }
              
              h1 {
                margin-top: 0;
                color: #333333;
                font-size: 22px;
                font-weight: bold;
                text-align: left;
              }
              
              h2 {
                margin-top: 0;
                color: #333333;
                font-size: 16px;
                font-weight: bold;
                text-align: left;
              }
              
              h3 {
                margin-top: 0;
                color: #333333;
                font-size: 14px;
                font-weight: bold;
                text-align: left;
              }
              
              td,
              th {
                font-size: 16px;
              }
              
              p,
              ul,
              ol,
              blockquote {
                margin: .4em 0 1.1875em;
                font-size: 16px;
                line-height: 1.625;
              }
              
              p.sub {
                font-size: 13px;
              }
              
              .align-right {
                text-align: right;
              }
              
              .align-left {
                text-align: left;
              }
              
              .align-center {
                text-align: center;
              }
              
              .u-margin-bottom-none {
                margin-bottom: 0;
              }
              
              .button {
                background-color: #3869D4;
                border-top: 10px solid #3869D4;
                border-right: 18px solid #3869D4;
                border-bottom: 10px solid #3869D4;
                border-left: 18px solid #3869D4;
              border-radius: 3px;
              text-align: left;
              color: white;
              box-shadow: 0 2px 3px rgba(0, 0, 0, 0.16);
              box-sizing: border-box;
              display: inline-block;
              padding: 10px;
              }
          
              
              body {
                background-color: #F2F4F6;
                color: #51545E;
              }
              
              p {
                color: #51545E;
              }
              
              .email-wrapper {
                width: 100%;
                margin: 0;
                padding: 0;
                -premailer-width: 100%;
                -premailer-cellpadding: 0;
                -premailer-cellspacing: 0;
                background-color: #F2F4F6;
              }
              
              .email-content {
                width: 100%;
                margin: 0;
                padding: 0;
                -premailer-width: 100%;
                -premailer-cellpadding: 0;
                -premailer-cellspacing: 0;
              }
              
              .email-masthead {
                padding: 25px 0;
                text-align: center;
              }
              
              .email-masthead_logo {
                width: 94px;
              }
              .bg-theme-color{
                background-color: #070C27;
              }
              
              .email-masthead_name {
                font-size: 16px;
                font-weight: bold;
                color: #A8AAAF;
                text-decoration: none;
                text-shadow: 0 1px 0 white;
              }
              
              .email-body {
                width: 100%;
                margin: 0;
                padding: 0;
                -premailer-width: 100%;
                -premailer-cellpadding: 0;
                -premailer-cellspacing: 0;
              }
              
              .email-body_inner {
                width: 570px;
                margin: 0 auto;
                padding: 0;
                -premailer-width: 570px;
                -premailer-cellpadding: 0;
                -premailer-cellspacing: 0;
                background-color: #FFFFFF;
              }
              
              .email-footer {
                width: 570px;
                margin: 0 auto;
                padding: 0;
                -premailer-width: 570px;
                -premailer-cellpadding: 0;
                -premailer-cellspacing: 0;
                text-align: center;
              }
              
              .email-footer p {
                color: #A8AAAF;
              }
              
              .body-action {
                width: 100%;
                margin: 30px auto;
                padding: 0;
                -premailer-width: 100%;
                -premailer-cellpadding: 0;
                -premailer-cellspacing: 0;
                text-align: center;
              }
              
              .body-sub {
                margin-top: 25px;
                padding-top: 25px;
                border-top: 1px solid #EAEAEC;
              }
              
              .content-cell {
                padding: 45px;
              }
              </style>
          
            </head>
            <body>
              <span class="preheader">Use this link to reset your password. The link is only valid for 24 hours.</span>
              <table class="email-wrapper" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td align="center">
                    <table class="email-content" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td class="email-masthead">
                          <a href="https://learning-management-system-iota.vercel.app/" class="f-fallback email-masthead_name">
                          <p>MyLMS <br>
                          Learning Management System</p>
                        </a>
                        </td>
                      </tr>
                      <tr>
                        <td class="email-body" width="570" cellpadding="0" cellspacing="0">
                          <table class="email-body_inner" align="center" width="570" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td class="content-cell">
                                <div class="f-fallback">
                                  <h1>Hello,</h1>
                                  <h2>Thanks for signing up to MyLMS !</h2>
                                  <p >We are from MyLMS Learning Management System. To verify your new MyLMS account, Use following verification code.</p>
                                  
                                  <table class="body-action" align="center" width="100%" cellpadding="0" cellspacing="0" role="presentation">
                                    <tr>
                                      <td align="center">
                                        <table width="100%" border="0" cellspacing="0" cellpadding="0" role="presentation">
                                          <tr>
                                            <td align="center">
                                              <div class="button">
                                                <label style="color:white;"><b> {####} </b></label>
                                              </div>
          
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                  
                                  <p>
                                    <strong>Use following url to access the LMS:</strong><br> https://learning-management-system-iota.vercel.app/
                                  </p>
          
                                  <p>If you have any questions, please <a href="{{support_url}}">contact support</a>.</p>
                                  <hr>
                                  <p>Thank You,<br>The MyLMS team <br>mylms.learn@gmail.com</p>
                                </div>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </body>
          </html>`,
          smsMessage: 'Thanks for signing up to MyLMS app! Your verification code is {####}',
        },
      },
    },
  });

  auth.attachPermissionsForAuthUsers(stack, [
    staticContent,
    new PolicyStatement({
      effect: Effect.ALLOW,
      actions: ["s3:PutObject"],
      resources: [`${staticContent.bucketArn}/\${aws:PrincipalTag/username}/*`]
    })
  ])

  // auth.attachPermissionsForAuthUsers(stack, [
  //   staticContent,
  //   new PolicyStatement({
  //     effect: Effect.ALLOW,
  //     actions: ["s3:GetObject"],
  //     resources: [`${staticContent.bucketArn}/*`]
  //   })
  // ])

  const stackOutputs = {
    userPoolId: auth.userPoolId,
    clientId: auth.userPoolClientId,
    userPoolArn: auth.userPoolArn,
    identityPoolId: auth.cognitoIdentityPoolId as string,
  }

  stack.addOutputs({
    ...stackOutputs
  })

  return {
    ...stackOutputs,
  };
}
