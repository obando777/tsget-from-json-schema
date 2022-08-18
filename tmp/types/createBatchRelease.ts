/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CreateBatchRelease {
  data: BatchRelease[];
}
export interface BatchRelease {
  type: "batchRelease";
  attributes: {
    senderName: string;
    senderAddress?: Address | Address1 | Address2;
    senderAccountNumber: string;
    amount: number;
    description: string;
    tags?: Tags;
    idempotencyKey?: string;
  };
  relationships: Relationships;
}
export interface Address {
  street: string;
  street2?: string | null;
  city: string;
  state: string;
  postalCode: string;
  country: "US";
}
export interface Address1 {
  street: string;
  street2?: string | null;
  city: string;
  state: string;
  postalCode: string;
  country: "CA";
}
export interface Address2 {
  street: string;
  street2?: string | null;
  city: string;
  state?: null | string;
  postalCode: string;
  country: string;
}
export interface Tags {
  /**
   * This interface was referenced by `Tags`'s JSON-Schema definition
   * via the `patternProperty` "^[a-zA-Z0-9_]{1,128}$".
   */
  [k: string]: string;
}
export interface Relationships {
  batchAccount: {
    data: {
      type: "account" | "batchAccount";
      id: string;
    };
  };
  receiver: {
    data: {
      type: "account" | "depositAccount";
      id: string;
    };
  };
}
