/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CreateSimulatedCardTransaction {
  data: CreateSimulatedAtmWithdrawal;
}
export interface CreateSimulatedAtmWithdrawal {
  type: "cardTransaction";
  attributes: {
    amount: number;
    direction: "Credit" | "Debit";
    summary?: string;
    cardLast4Digits: string;
    internationalServiceFee?: number;
    merchantName: string;
    merchantType: number;
    merchantLocation?: string;
    coordinates?: Coordinates;
    recurring?: boolean;
    merchantId?: string;
  };
  relationships: Relationships;
}
export interface Coordinates {
  longitude: number;
  latitude: number;
}
export interface Relationships {
  account: {
    data: {
      type: "depositAccount";
      id: string;
    };
  };
  authorization?: {
    data: {
      type: "authorization";
      id: string;
    };
  };
}
