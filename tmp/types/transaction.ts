/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type Transaction =
  | OriginatedACH
  | ReceivedACH
  | ReturnedACH
  | ReturnedReceivedACH
  | DishonoredReturnACH
  | Purchase
  | Book
  | ATM
  | Fee
  | Reversal
  | CardTransaction
  | ReleaseTransaction
  | WireTransaction
  | InterchangeShareTransaction
  | InterestShareTransaction
  | InterestTransaction
  | AdjustmentTransaction
  | DisputeSettlementTransaction
  | DisputeTransaction
  | CheckDepositTransaction
  | ReturnedCheckDepositTransaction
  | BillPayTransaction
  | SettlementTransaction
  | SponsoredInterestTransaction
  | PaymentAdvanceTransaction
  | RepaidPaymentAdvanceTransaction
  | Chargeback
  | Reward
  | NegativeBalanceCoverage
  | AccountLowBalanceClosure;

export interface TransactionResource {
  data: Transaction;
}
export interface OriginatedACH {
  id: string;
  type: "originatedAchTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    description: string;
    addenda?: string;
    counterparty: Counterparty;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface Counterparty {
  routingNumber: string;
  accountNumber: string;
  accountType: "Checking" | "Savings";
  name: string;
}
export interface Tags {
  /**
   * This interface was referenced by `Tags`'s JSON-Schema definition
   * via the `patternProperty` "^[a-zA-Z0-9_]{1,128}$".
   */
  [k: string]: string;
}
export interface Relationships {
  account: {
    data: {
      type: "depositAccount" | "glAccount" | "account";
      id: string;
    };
  };
  customer?: {
    data: {
      type: "businessCustomer" | "individualCustomer" | "customer";
      id: string;
    };
  };
  customers?: CustomersRelationship;
  counterpartyAccount?: {
    data: {
      type: "account";
      id: string;
    };
  };
  counterpartyCustomer?: {
    data: {
      type: "customer";
      id: string;
    };
  };
  relatedTransaction?: RelatedTransaction;
  disputedTransaction?: RelatedTransaction;
  authorization?: {
    data: {
      type: "authorization";
      id: string;
    };
  };
  returned?: {
    data: {
      type: "transaction";
      id: string;
    };
  };
  payment?: {
    data: {
      type: "payment";
      id: string;
    };
  };
  recurringPayment?: {
    data: {
      type: "recurringPayment";
      id: string;
    };
  };
  org?: {
    data: {
      type: "org";
      id: string;
    };
  };
  card?: {
    data: {
      type: "card";
      id: string;
    };
  };
  incomingAch?: {
    data: {
      type: "incomingAch";
      id: string;
    };
  };
  checkDeposit?: {
    data: {
      type: "checkDeposit";
      id: string;
    };
  };
  authorizationRequest?: {
    data: {
      type: "authorizationRequest";
      id: string;
    };
  };
  paymentAdvanceTransaction?: RelatedTransaction;
  receivedPayment?: {
    data: {
      type: "receivedPayment";
      id: string;
    };
  };
  chargeback?: {
    data: {
      type: "chargeback";
      id: string;
    };
  };
  reward?: {
    data?: {
      type: "reward";
      id: string;
    };
  };
}
export interface CustomersRelationship {
  data?: {
    id?: string;
    type?: "customer";
  }[];
}
export interface RelatedTransaction {
  data: {
    type: "transaction";
    id: string;
  };
}
export interface ReceivedACH {
  id: string;
  type: "receivedAchTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    description: string;
    addenda?: string;
    companyName: string;
    counterpartyName?: string;
    counterpartyRoutingNumber: string;
    traceNumber?: string;
    secCode?: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface ReturnedACH {
  id: string;
  type: "returnedAchTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    companyName: string;
    counterpartyName: string;
    counterpartyRoutingNumber: string;
    reason: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface ReturnedReceivedACH {
  id: string;
  type: "returnedReceivedAchTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    companyName: string;
    reason: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface DishonoredReturnACH {
  id: string;
  type: "dishonoredAchTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    description: string;
    companyName: string;
    counterpartyName?: string;
    counterpartyRoutingNumber: string;
    traceNumber?: string;
    reason?: string;
    secCode?: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface Purchase {
  id: string;
  type: "purchaseTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    cardLast4Digits: string;
    merchant: Merchant;
    coordinates?: Coordinates;
    recurring: boolean;
    tags?: Tags;
    networkTransactionId?: string;
    interchange?: string | null;
    ecommerce: boolean;
    cardPresent: boolean;
    internationalServiceFee?: number;
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
export interface Coordinates {
  longitude: number;
  latitude: number;
}
export interface CardVerificationData {
  verificationMethod: string;
}
export interface Book {
  id: string;
  type: "bookTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    counterparty: Counterparty;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface ATM {
  id: string;
  type: "atmTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    cardLast4Digits: string;
    atmName: string;
    atmLocation?: string;
    surcharge: number;
    tags?: Tags;
    networkTransactionId?: string;
    interchange?: string | null;
    internationalServiceFee?: number;
    cardNetwork?: string;
  };
  relationships: Relationships;
}
export interface Fee {
  id: string;
  type: "feeTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface Reversal {
  id: string;
  type: "cardReversalTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    cardLast4Digits: string;
    tags?: Tags;
    networkTransactionId?: string;
    internationalServiceFee?: number;
  };
  relationships: Relationships;
}
export interface CardTransaction {
  id: string;
  type: "cardTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    cardLast4Digits: string;
    tags?: Tags;
    networkTransactionId?: string;
    interchange?: string | null;
    internationalServiceFee?: number;
    merchant: Merchant;
    recurring: boolean;
    paymentMethod?: string;
    digitalWallet?: string;
    cardVerificationData?: CardVerificationData;
    cardNetwork?: string;
  };
  relationships: Relationships;
}
export interface ReleaseTransaction {
  id: string;
  type: "releaseTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    senderName?: string;
    description?: string;
    senderAccountNumber?: string;
    senderAddress?: Address | Address1 | Address2;
    counterparty: Counterparty;
    tags?: Tags;
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
export interface WireTransaction {
  id: string;
  type: "wireTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    counterparty: Counterparty;
    description?: string;
    senderReference?: string;
    referenceForBeneficiary?: string;
    originatorToBeneficiaryInformation?: string;
    beneficiaryInformation?: string;
    beneficiaryAdviceInformation?: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface InterchangeShareTransaction {
  id: string;
  type: "interchangeShareTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface InterestShareTransaction {
  id: string;
  type: "interestShareTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface InterestTransaction {
  id: string;
  type: "interestTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface AdjustmentTransaction {
  id: string;
  type: "adjustmentTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    description?: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface DisputeSettlementTransaction {
  id: string;
  type: "disputeSettlementTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface DisputeTransaction {
  id: string;
  type: "disputeTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    reason: string;
    disputeId: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface CheckDepositTransaction {
  id: string;
  type: "checkDepositTransaction";
  attributes: {
    createdAt: string;
    amount: number;
    direction: "Credit" | "Debit";
    balance: number;
    summary: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface ReturnedCheckDepositTransaction {
  id: string;
  type: "returnedCheckDepositTransaction";
  attributes: {
    createdAt: string;
    amount: number;
    direction: "Credit" | "Debit";
    balance: number;
    summary: string;
    reason?: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface BillPayTransaction {
  id: string;
  type: "billPayTransaction";
  attributes: {
    createdAt: string;
    amount: number;
    direction: "Credit" | "Debit";
    balance: number;
    summary: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface SettlementTransaction {
  id: string;
  type: "settlementTransaction";
  attributes: {
    createdAt: string;
    amount: number;
    direction: "Credit" | "Debit";
    balance: number;
    summary: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface SponsoredInterestTransaction {
  id: string;
  type: "sponsoredInterestTransaction";
  attributes: {
    createdAt: string;
    amount: number;
    direction: "Credit" | "Debit";
    balance: number;
    summary: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface PaymentAdvanceTransaction {
  id: string;
  type: "paymentAdvanceTransaction";
  attributes: {
    createdAt: string;
    amount: number;
    direction: "Credit" | "Debit";
    balance: number;
    summary: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface RepaidPaymentAdvanceTransaction {
  id: string;
  type: "repaidPaymentAdvanceTransaction";
  attributes: {
    createdAt: string;
    amount: number;
    direction: "Credit" | "Debit";
    balance: number;
    summary: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface Chargeback {
  id: string;
  type: "chargebackTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    counterparty?: Counterparty;
    amount: number;
    balance: number;
    summary: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface Reward {
  id: string;
  type: "rewardTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    receiverCounterparty: Counterparty;
    amount: number;
    balance: number;
    summary: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface NegativeBalanceCoverage {
  id: string;
  type: "negativeBalanceCoverageTransaction";
  attributes: {
    createdAt: string;
    direction: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    tags?: Tags;
  };
  relationships: Relationships;
}
export interface AccountLowBalanceClosure {
  id: string;
  type: "accountLowBalanceClosure";
  attributes: {
    createdAt: string;
    direction?: "Credit" | "Debit";
    amount: number;
    balance: number;
    summary: string;
    tags?: Tags;
  };
  relationships: Relationships;
}