/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type CardToCardPaymentRequest = EnableAstraCardToCardPayment | EnableTabapay;

export interface EnableCardToCardPayment {
  data: CardToCardPaymentRequest;
}
export interface EnableAstraCardToCardPayment {
  type?: "astra";
  attributes: {
    token: string;
    idempotencyKey?: string;
  };
  additionalProperties?: false;
}
export interface EnableTabapay {
  type?: "tabapay";
  attributes: {
    clientId: string;
    token: string;
    idempotencyKey?: string;
  };
  additionalProperties?: false;
}
