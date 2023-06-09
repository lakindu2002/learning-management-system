import { StackContext } from "sst/constructs/FunctionalStack";
import { Api, use } from "sst/constructs";
import { dynamodb } from "./dynamodb";
import { cognito } from "./cognito";

export function lmsApiGateway({ stack }: StackContext) {
  const {
    usersTable,
    instituteTable,
    instituteUserTable,
    courseTable,
    studentCourseTable,
    courseLessonTable,
    courseAssignmentTable,
    courseAssignmentSubmissionTable,
  } = use(dynamodb);
  const { clientId, userPoolId } = use(cognito);
  const apiGateway = new Api(stack, "lms-api-gateway", {
    routes: {
      "GET /me": "packages/functions/src/lambda.getLoggedInUserInformation",
      "POST /me/activate": "packages/functions/src/lambda.activateUser",
      "GET /institutes/{instituteId}/courses":
        "packages/functions/src/lambda.getCourses",
      "POST /institutes/{instituteId}/courses":
        "packages/functions/src/lambda.createCourse",
      "POST /institutes/{instituteId}/courses/{courseId}/students":
        "packages/functions/src/lambda.assignStudentsToCourse",
      "DELETE /institutes/{instituteId}/courses/{courseId}/lessons/{lessonId}":
        "packages/functions/src/lambda.removeLessonFromCourse",
      "DELETE /institutes/{instituteId}/courses/{courseId}/assignments/{assignmentId}":
        "packages/functions/src/lambda.removeAssignmentFromCourse",
      "POST /institutes/{instituteId}/users": {
        function: {
          handler: "packages/functions/src/lambda.addUsersToInstitute",
          environment: {
            USER_POOL_ID: userPoolId,
          },
        },
      },
      "POST /institutes/{instituteId}/users/get":
        "packages/functions/src/lambda.getAllUsersInAnInstitute",
      "POST /institutes/{instituteId}/courses/{courseId}/lessons":
        "packages/functions/src/lambda.createLessonCourse",
      "POST /institutes/{instituteId}/courses/{courseId}/assignments":
        "packages/functions/src/lambda.createAssignmentCourse",
      "POST /institutes/{instituteId}/courses/{courseId}/assignments/{assignmentId}/submissions":
        "packages/functions/src/lambda.createAssignmentSubmission",
      "DELETE /institutes/{instituteId}/courses/{courseId}":
        "packages/functions/src/lambda.deleteCourseById",
      "POST /institutes/{instituteId}/courses/{courseId}/lessons/get":
        "packages/functions/src/lambda.getCourseLessons",
      "POST /institutes/{instituteId}/courses/{courseId}/assignments/get":
        "packages/functions/src/lambda.getCourseAssignments",
      "POST /institutes/{instituteId}/courses/{courseId}/assignments/{assignmentId}/submissions/get":
        "packages/functions/src/lambda.getAssignmentSubmissions",
      "GET /institutes/{instituteId}/courses/{courseId}":
        "packages/functions/src/lambda.getCourseById",
      "PATCH /institutes/{instituteId}/courses/{courseId}/lessons/{lessonId}":
        "packages/functions/src/lambda.updateCourseLesson",
      "PATCH /institutes/{instituteId}/courses/{courseId}/assignments/{assignmentId}":
        "packages/functions/src/lambda.updateCourseAssignment",
      "PATCH /institutes/{instituteId}/courses/{courseId}/assignments/{assignmentId}/submissions/{assignmentSubmissionId}":
        "packages/functions/src/lambda.updateAssignmentSubmission",
    },
    defaults: {
      function: {
        environment: {
          USER_TABLE_NAME: usersTable.tableName,
          INSTITUTE_TABLE_NAME: instituteTable.tableName,
          INSTITUTE_USER_TABLE_NAME: instituteUserTable.tableName,
          COURSES_TABLE: courseTable.tableName,
          STUDENT_COURSE_TABLE: studentCourseTable.tableName,
          COURSE_LESSON_TABLE: courseLessonTable.tableName,
          COURSE_ASSIGNMENT_TABLE: courseAssignmentTable.tableName,
          COURSE_ASSIGNMENT_SUBMISSION_TABLE:
            courseAssignmentSubmissionTable.tableName,
        },
      },
      authorizer: "Authorizer",
    },
    authorizers: {
      Authorizer: {
        type: "user_pool",
        userPool: {
          id: userPoolId,
          clientIds: [clientId],
        },
      },
    },
  });

  apiGateway.attachPermissionsToRoute(
    "POST /institutes/{instituteId}/users/get",
    [instituteUserTable]
  );
  apiGateway.attachPermissionsToRoute("POST /institutes/{instituteId}/users", [
    usersTable,
    instituteUserTable,
    "cognito-idp:AdminCreateUser",
  ]);
  apiGateway.attachPermissionsToRoute("GET /institutes/{instituteId}/courses", [
    courseTable,
    studentCourseTable,
  ]);
  apiGateway.attachPermissionsToRoute(
    "GET /institutes/{instituteId}/courses/{courseId}",
    [courseTable]
  );
  apiGateway.attachPermissionsToRoute(
    "POST /institutes/{instituteId}/courses",
    [courseTable]
  );
  apiGateway.attachPermissionsToRoute("GET /me", [
    usersTable,
    instituteTable,
    instituteUserTable,
  ]);
  apiGateway.attachPermissionsToRoute("POST /me/activate", [
    usersTable,
    instituteUserTable,
  ]);
  apiGateway.attachPermissionsToRoute(
    "POST /institutes/{instituteId}/courses/{courseId}/students",
    [studentCourseTable]
  );
  apiGateway.attachPermissionsToRoute(
    "POST /institutes/{instituteId}/courses/{courseId}/lessons",
    [courseLessonTable]
  );
  apiGateway.attachPermissionsToRoute(
    "POST /institutes/{instituteId}/courses/{courseId}/lessons/get",
    [courseLessonTable]
  );

  apiGateway.attachPermissionsToRoute(
    "PATCH /institutes/{instituteId}/courses/{courseId}/lessons/{lessonId}",
    [courseLessonTable]
  );

  apiGateway.attachPermissionsToRoute(
    "POST /institutes/{instituteId}/courses/{courseId}/assignments",
    [courseAssignmentTable]
  );

  apiGateway.attachPermissionsToRoute(
    "POST /institutes/{instituteId}/courses/{courseId}/assignments/{assignmentId}/submissions",
    [courseAssignmentSubmissionTable]
  );

  apiGateway.attachPermissionsToRoute(
    "POST /institutes/{instituteId}/courses/{courseId}/assignments/get",
    [courseAssignmentTable]
  );

  apiGateway.attachPermissionsToRoute(
    "POST /institutes/{instituteId}/courses/{courseId}/assignments/{assignmentId}/submissions/get",
    [courseAssignmentSubmissionTable]
  );

  apiGateway.attachPermissionsToRoute(
    "PATCH /institutes/{instituteId}/courses/{courseId}/assignments/{assignmentId}",
    [courseAssignmentTable,studentCourseTable,usersTable,courseTable, "ses:SendTemplatedEmail", "ses:SendEmail"]
  );

  apiGateway.attachPermissionsToRoute(
    "PATCH /institutes/{instituteId}/courses/{courseId}/assignments/{assignmentId}/submissions/{assignmentSubmissionId}",
    [courseAssignmentSubmissionTable]
  );

  apiGateway.attachPermissionsToRoute(
    "DELETE /institutes/{instituteId}/courses/{courseId}",
    [courseAssignmentTable, courseLessonTable, courseTable, studentCourseTable]
  );

  apiGateway.attachPermissionsToRoute(
    "DELETE /institutes/{instituteId}/courses/{courseId}/assignments/{assignmentId}",
    [courseAssignmentTable]
  );

  apiGateway.attachPermissionsToRoute(
    "DELETE /institutes/{instituteId}/courses/{courseId}/lessons/{lessonId}",
    [courseLessonTable]
  );

  const stackOutputs = {
    apiUrl: apiGateway.url,
  };

  stack.addOutputs({
    ...stackOutputs,
  });
  return {
    ...stackOutputs,
  };
}
