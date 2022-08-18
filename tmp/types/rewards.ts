/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface RewardsResource {
  data: Reward[];
}
export interface Reward {
  type: "reward";
  id: string;
  attributes: {
    createdAt: string;
    amount: number;
    description: string;
    status: "Rejected" | "Sent";
    rejectReason?: string;
    tags: Tags;
  };
  relationships: Relationships;
}
export interface Tags {
  /**
   * This interface was referenced by `Tags`'s JSON-Schema definition
   * via the `patternProperty` "^[a-zA-Z0-9_]{1,128}$".
   */
  [k: string]: string;
}
export interface Relationships {
  receivingAccount: {
    data: {
      type: "account" | "depositAccount" | "batchAccount";
      id: string;
    };
  };
  fundingAccount: {
    data: {
      type: "account" | "depositAccount" | "batchAccount";
      id: string;
    };
  };
  customer: {
    data: {
      type: "businessCustomer" | "individualCustomer" | "customer";
      id: string;
    };
  };
  rewardedTransaction?: {
    data: {
      type: "transaction";
      id: string;
    };
  };
  transaction?: {
    data: {
      type: "transaction";
      id: string;
    };
  };
  card?: {
    data: {
      type: "card";
      id: string;
    };
  };
}
