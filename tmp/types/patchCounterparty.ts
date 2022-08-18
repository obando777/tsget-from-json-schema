/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PatchCounterparty {
  data: PatchCounterparty1;
}
export interface PatchCounterparty1 {
  type: "counterparty";
  attributes: {
    plaidProcessorToken?: string;
    name?: string;
    permissions?: "CreditOnly" | "DebitOnly" | "CreditAndDebit";
    verifyName?: boolean;
    tags?: TagsPatch;
  };
}
export interface TagsPatch {
  /**
   * This interface was referenced by `TagsPatch`'s JSON-Schema definition
   * via the `patternProperty` "^[a-zA-Z0-9_]{1,128}$".
   */
  [k: string]: string | null;
}