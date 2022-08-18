/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type AuthorizationRequest =
  | PurchaseAuthorizationRequestResource
  | CardTransactionAuthorizationRequestResource
  | AtmAuthorizationRequestResource;

export interface AuthorizationRequestsDocument {
  data: AuthorizationRequest[];
  included?: unknown[];
}
export interface PurchaseAuthorizationRequestResource {
  type: "purchaseAuthorizationRequest";
  id: string;
  attributes?: {
    createdAt: string;
    amount: number;
    status: string;
    partialApprovalAllowed: boolean;
    approvedAmount?: number;
    declineReason?: string;
    merchant: Merchant;
    recurring: boolean;
    tags?: Tags;
    healthcareAmounts?: HealthcareAmounts;
    paymentMethod?: string;
    digitalWallet?: string;
    cardVerificationData?: CardVerificationData;
    ecommerce?: boolean;
    cardPresent?: boolean;
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
export interface HealthcareAmounts {
  transitAmount: number;
  prescriptionRXAmount: number;
  visionOpticalAmount: number;
  clinicOtherQualifiedMedicalAmount: number;
  dentalAmount: number;
  totalHealthcareAmount: number;
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
  fundingAccount?: {
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
}
export interface CardTransactionAuthorizationRequestResource {
  type: "cardTransactionAuthorizationRequest";
  id: string;
  attributes?: {
    createdAt: string;
    amount: number;
    status: string;
    partialApprovalAllowed: boolean;
    approvedAmount?: number;
    declineReason?: string;
    merchant: Merchant;
    recurring: boolean;
    tags?: Tags;
    paymentMethod?: string;
    digitalWallet?: string;
    cardVerificationData?: CardVerificationData;
    cardNetwork?: string;
  };
  relationships: Relationships;
}
export interface AtmAuthorizationRequestResource {
  type: "atmAuthorizationRequest";
  id: string;
  attributes?: {
    createdAt: string;
    amount: number;
    status: string;
    partialApprovalAllowed: boolean;
    approvedAmount?: number;
    declineReason?: string;
    direction: string;
    atmName: string;
    atmLocation?: string;
    surcharge: number;
    internationalServiceFee?: number | null;
    tags?: Tags;
    cardNetwork?: string;
  };
  relationships: Relationships;
}