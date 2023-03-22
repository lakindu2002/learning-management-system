import { StackContext } from "sst/constructs/FunctionalStack";
import { Table } from "sst/constructs";
import { BillingMode } from "aws-cdk-lib/aws-dynamodb";

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
      partitionKey: "userId",
      sortKey: "instituteId",
    },
    fields: {
      userId: "string",
      instituteId: "string",
    },
    cdk: {
      table: {
        billingMode: BillingMode.PAY_PER_REQUEST,
      }
    }
  });

  return {
    userTableName: usersTable.tableName,
    instituteTableName: instituteTable.tableName,
    instituteUserTableName: instituteUserTable.tableName,
  };
}
