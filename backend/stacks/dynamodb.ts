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
    },
    cdk: {
      table: {
        billingMode: BillingMode.PAY_PER_REQUEST,
      }
    }
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
      }
    }
  });

  const instituteUserTable = new Table(stack, "institute-users", {
    primaryIndex: {
      partitionKey: "id",
      sortKey: "instituteId",
    },
    fields: {
      id: "string",
      instituteId: "string",
    },
    globalIndexes: {
      'by-institute-index': {
        partitionKey: "instituteId",
        sortKey: "id",
        cdk: {
          index: {
            projectionType: ProjectionType.INCLUDE,
            nonKeyAttributes: ["email", "role"]
          }
        }
      }
    },
    cdk: {
      table: {
        billingMode: BillingMode.PAY_PER_REQUEST,
      }
    }
  });

  const courseTable = new Table(stack, "courses", {
    primaryIndex: {
      partitionKey: "id",
    },
    fields: {
      id: "string",
      lecturerId: "string",
      instituteId: "string"
    },
    globalIndexes: {
      'by-institute-index': {
        partitionKey: "instituteId",
        sortKey: "id",
        cdk: {
          index: {
            projectionType: ProjectionType.ALL,
          }
        }
      },
      'by-institute-lecturer-index': {
        partitionKey: "instituteId",
        sortKey: "lecturerId",
        cdk: {
          index: {
            projectionType: ProjectionType.ALL,
          }
        }
      }
    },
    cdk: {
      table: {
        billingMode: BillingMode.PAY_PER_REQUEST,
      }
    }
  });

  const stackOutputs = {
    userTableName: usersTable.tableName,
    instituteTableName: instituteTable.tableName,
    instituteUserTableName: instituteUserTable.tableName,
    courseTableName: courseTable.tableName
  }

  stack.addOutputs({
    ...stackOutputs
  })

  return {
    ...stackOutputs,
    usersTable,
    instituteTable,
    instituteUserTable,
    courseTable
  };
}
