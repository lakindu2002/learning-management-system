import { StackContext } from "sst/constructs/FunctionalStack";
import { Table } from "sst/constructs";
import { BillingMode, ProjectionType } from "aws-cdk-lib/aws-dynamodb";

export function dynamodb({ stack }: StackContext) {
  const usersTable = new Table(stack, "users", {
    primaryIndex: {
      partitionKey: "id",
    },
    fields: {
      id: "string",
      email: "string",
    },
    globalIndexes: {
      "by-email-index": {
        partitionKey: "email",
        sortKey: "id",
        cdk: {
          index: {
            projectionType: ProjectionType.INCLUDE,
            nonKeyAttributes: ["name"],
          },
        },
      },
    },
    cdk: {
      table: {
        billingMode: BillingMode.PAY_PER_REQUEST,
      },
    },
  });

  const instituteTable = new Table(stack, "institutes", {
    primaryIndex: {
      partitionKey: "id",
    },
    fields: {
      id: "string",
    },
    cdk: {
      table: {
        billingMode: BillingMode.PAY_PER_REQUEST,
      },
    },
  });

  const instituteUserTable = new Table(stack, "institute-users", {
    primaryIndex: {
      partitionKey: "id",
      sortKey: "instituteId",
    },
    fields: {
      id: "string",
      instituteId: "string",
      role: "string",
    },
    globalIndexes: {
      "by-institute-index": {
        partitionKey: "instituteId",
        sortKey: "id",
        cdk: {
          index: {
            projectionType: ProjectionType.INCLUDE,
            nonKeyAttributes: ["email", "role"],
          },
        },
      },
      "by-intitute-id-role-index": {
        partitionKey: "instituteId",
        sortKey: "role",
        cdk: {
          index: {
            projectionType: ProjectionType.INCLUDE,
            nonKeyAttributes: [
              "email",
              "name",
              "createdAt",
              "updatedAt",
              "id",
              "status",
            ],
          },
        },
      },
    },
    cdk: {
      table: {
        billingMode: BillingMode.PAY_PER_REQUEST,
      },
    },
  });

  const courseTable = new Table(stack, "courses", {
    primaryIndex: {
      partitionKey: "id",
    },
    fields: {
      id: "string",
      lecturerId: "string",
      instituteId: "string",
    },
    globalIndexes: {
      "by-institute-index": {
        partitionKey: "instituteId",
        sortKey: "id",
        cdk: {
          index: {
            projectionType: ProjectionType.ALL,
          },
        },
      },
      "by-institute-lecturer-index": {
        partitionKey: "instituteId",
        sortKey: "lecturerId",
        cdk: {
          index: {
            projectionType: ProjectionType.ALL,
          },
        },
      },
    },
    cdk: {
      table: {
        billingMode: BillingMode.PAY_PER_REQUEST,
      },
    },
  });

  const studentCourseTable = new Table(stack, "student-courses", {
    primaryIndex: {
      partitionKey: "id",
    },
    fields: {
      instituteId: "string",
      courseId: "string",
      studentId: "string",
      id: "string",
    },
    globalIndexes: {
      "by-institute-index": {
        partitionKey: "instituteId",
        sortKey: "courseId",
        cdk: {
          index: {
            projectionType: ProjectionType.ALL,
          },
        },
      },
      "by-student-institute-index": {
        partitionKey: "studentId",
        sortKey: "instituteId",
        cdk: {
          index: {
            projectionType: ProjectionType.ALL,
          },
        },
      },
    },
    cdk: {
      table: {
        billingMode: BillingMode.PAY_PER_REQUEST,
      },
    },
  });

  const courseLessonTable = new Table(stack, "course-Lesson-table", {
    primaryIndex: {
      partitionKey: "id",
    },
    fields: {
      id: "string",
      courseIdInstituteId: "string",
      visibility: "string",
    },
    globalIndexes: {
      "by-courseIdInstituteId-visibility": {
        partitionKey: "courseIdInstituteId",
        sortKey: "visibility",
        cdk: {
          index: {
            projectionType: ProjectionType.ALL,
          },
        },
      },
    },
    cdk: {
      table: {
        billingMode: BillingMode.PAY_PER_REQUEST,
      },
    },
  });

  const courseAssignmentTable = new Table(stack, "course-assignment-table", {
    primaryIndex: {
      partitionKey: "id",
    },
    fields: {
      id: "string",
      courseIdInstituteId: "string",
      visibility: "string",
    },
    globalIndexes: {
      "by-courseIdInstituteId-visibility": {
        partitionKey: "courseIdInstituteId",
        sortKey: "visibility",
        cdk: {
          index: {
            projectionType: ProjectionType.ALL,
          },
        },
      },
    },
    cdk: {
      table: {
        billingMode: BillingMode.PAY_PER_REQUEST,
      },
    },
  });

  const courseAssignmentSubmissionTable = new Table(
    stack,
    "course-assignment-submission-table",
    {
      primaryIndex: {
        partitionKey: "id",
      },
      fields: {
        id: "string",
        courseIdInstituteIdAssignmentId: "string",
        courseIdInstituteIdAssignmentIdStudentId: "string",
        assignmentId: "string",
        studentId: "string",
      },
      globalIndexes: {
        "by-courseIdInstituteIdAssignmentId": {
          partitionKey: "courseIdInstituteIdAssignmentId",
          sortKey: "studentId",
          cdk: {
            index: {
              projectionType: ProjectionType.ALL,
            },
          },
        },
        "by-courseIdInstituteIdAssignmentIdStudentId": {
          partitionKey: "courseIdInstituteIdAssignmentIdStudentId",
          cdk: {
            index: {
              projectionType: ProjectionType.ALL,
            },
          },
        },
      },
      cdk: {
        table: {
          billingMode: BillingMode.PAY_PER_REQUEST,
        },
      },
    }
  );

  const stackOutputs = {
    userTableName: usersTable.tableName,
    instituteTableName: instituteTable.tableName,
    instituteUserTableName: instituteUserTable.tableName,
    courseTableName: courseTable.tableName,
    studentCourseTableName: studentCourseTable.tableName,
    courseLessonTableName: courseLessonTable.tableName,
    courseAssignmentTableName: courseAssignmentTable.tableName,
    courseAssignmentSubmissionTableName:
      courseAssignmentSubmissionTable.tableName,
  };

  stack.addOutputs({
    ...stackOutputs,
  });

  return {
    ...stackOutputs,
    usersTable,
    instituteTable,
    instituteUserTable,
    courseTable,
    studentCourseTable,
    courseLessonTable,
    courseAssignmentTable,
    courseAssignmentSubmissionTable,
  };
}
