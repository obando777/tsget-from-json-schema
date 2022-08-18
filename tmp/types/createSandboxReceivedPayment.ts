/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CreateSimulatedReceivedPayment {
  data: CreateSimulatedAchReceivedPayment;
}
export interface CreateSimulatedAchReceivedPayment {
  type: "achReceivedPayment";
  attributes: {
    amount: number;
    description: string;
    companyName: string;
    completionDate: string;
    secCode?: string;
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
