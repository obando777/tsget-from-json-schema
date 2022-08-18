/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CounterpartyBalance {
  data: CounterpartyBalance1;
}
export interface CounterpartyBalance1 {
  type: "counterpartyBalance";
  id: string;
  attributes?: {
    balance: number;
    available?: number;
  };
  relationships: Relationships;
}
export interface Relationships {
  counterparty: {
    data: {
      type: "counterparty";
      id: string;
    };
  };
  customer: {
    data: {
      type: "customer";
      id: string;
    };
  };
}