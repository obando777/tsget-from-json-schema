/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface SandboxPurchaseResource {
  data: SandboxPurchase;
}
export interface SandboxPurchase {
  type: "purchaseTransaction";
  id: string;
  attributes: {
    createdAt: string;
    amount: number;
    direction: "Credit" | "Debit";
    balance: number;
    merchantName: string;
    merchantType: number;
    merchantLocation?: string;
    coordinates?: Coordinates;
    last4Digits?: string;
    recurring: boolean;
    tags?: Tags;
    internationalServiceFee?: number;
  };
  relationships: Relationships;
}
export interface Coordinates {
  longitude: number;
  latitude: number;
}
export interface Tags {
  /**
   * This interface was referenced by `Tags`'s JSON-Schema definition
   * via the `patternProperty` "^[a-zA-Z0-9_]{1,128}$".
   */
  [k: string]: string;
}
export interface Relationships {
  account?: {
    data: {
      type: "depositAccount" | "creditAccount" | "account";
      id: string;
    };
  };
  customer?: {
    data: {
      type: "individualCustomer" | "businessCustomer" | "customer";
      id: string;
    };
  };
  authorization?: {
    data: {
      type: "authorization";
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
