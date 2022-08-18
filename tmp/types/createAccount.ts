/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CreateAccount {
  data: CreateDepositAccount | CreateJointDepositAccount | CreateBatchAccount | CreateCreditAccount;
}
export interface CreateDepositAccount {
  type: "depositAccount";
  attributes: {
    depositProduct: string;
    tags?: Tags;
    idempotencyKey?: string;
    overdraftLimit?: number;
  };
  relationships: {
    customer: CustomerLinkage;
  };
}
export interface Tags {
  /**
   * This interface was referenced by `Tags`'s JSON-Schema definition
   * via the `patternProperty` "^[a-zA-Z0-9_]{1,128}$".
   */
  [k: string]: string;
}
export interface CustomerLinkage {
  data: {
    type: "customer" | "businessCustomer" | "individualCustomer";
    id: string;
  };
}
export interface CreateJointDepositAccount {
  type: "depositAccount";
  attributes: {
    depositProduct: string;
    tags?: Tags;
    idempotencyKey?: string;
    overdraftLimit?: number;
  };
  relationships: {
    customers: {};
  };
}
export interface CreateBatchAccount {
  type: "batchAccount";
  attributes: {
    depositProduct: string;
    name: string;
    idempotencyKey?: string;
  };
  relationships: {
    org: OrgRelationship;
  };
}
export interface OrgRelationship {
  data: {
    id: string;
    type: "org";
  };
}
export interface CreateCreditAccount {
  type: "creditAccount";
  attributes: {
    creditTerms: string;
    tags?: Tags;
    idempotencyKey?: string;
    creditLimit?: number;
  };
  relationships: {
    customer: CustomerLinkage;
  };
}