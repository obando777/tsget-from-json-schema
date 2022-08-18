/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CreateSimulatedAtmDeposit {
  data: CreateSimulatedAtmDeposit1;
}
export interface CreateSimulatedAtmDeposit1 {
  type: "atmTransaction";
  attributes: {
    amount: number;
    atmName: string;
    atmLocation?: string;
    last4Digits: string;
    internationalServiceFee?: number;
    surcharge?: number;
    cardNetwork?: "Visa" | "Interlink" | "Accel" | "Allpoint" | "Other";
  };
  relationships: Relationships;
}
export interface Relationships {
  account: {
    data: {
      type: "depositAccount";
      id: string;
    };
  };
}