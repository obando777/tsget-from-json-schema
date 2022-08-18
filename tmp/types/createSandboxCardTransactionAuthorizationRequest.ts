/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CreateSimulatedCardTransactionAuthorizationRequest {
  data: CreateSimulatedCardTransactionAuthorizationRequest1;
}
export interface CreateSimulatedCardTransactionAuthorizationRequest1 {
  type: "cardTransactionAuthorizationRequest";
  attributes: {
    amount: number;
    merchantName: string;
    merchantType: number;
    merchantLocation?: string;
    recurring?: boolean;
    merchantId?: string;
  };
  relationships: Relationships;
}
export interface Relationships {
  card: {
    data: {
      type: "card";
      id: string;
    };
  };
}