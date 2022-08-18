/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface AuthorizationsDocument {
  data: AuthorizationResource[];
  included?: unknown[];
}
export interface AuthorizationResource {
  type: "authorization";
  id: string;
  attributes?: {
    createdAt: string;
    amount: number;
    cardLast4Digits: string;
    merchant: Merchant;
    recurring: boolean;
    status: string;
    declineReason?: string;
    tags?: Tags;
    paymentMethod?: string;
    digitalWallet?: string;
    cardVerificationData?: CardVerificationData;
    cardNetwork?: string;
  };
  relationships: Relationships;
}
export interface Merchant {
  name: string;
  type: number;
  category: string;
  location?: string;
  id?: string;
}
export interface Tags {
  /**
   * This interface was referenced by `Tags`'s JSON-Schema definition
   * via the `patternProperty` "^[a-zA-Z0-9_]{1,128}$".
   */
  [k: string]: string;
}
export interface CardVerificationData {
  verificationMethod: string;
}
export interface Relationships {
  customer: {
    data: {
      type: "customer";
      id: string;
    };
  };
  account: {
    data: {
      type: "account";
      id: string;
    };
  };
  card: {
    data: {
      type: "card";
      id: string;
    };
  };
  authorizationRequest?: {
    data: {
      type: "authorizationRequest";
      id: string;
    };
  };
}