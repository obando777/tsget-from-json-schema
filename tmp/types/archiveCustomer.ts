/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ArchiveCustomer {
  data?: ArchiveCustomer1;
}
export interface ArchiveCustomer1 {
  type: "archiveCustomer";
  attributes: {
    reason:
      | "Inactive"
      | "FraudACHActivity"
      | "FraudCardActivity"
      | "FraudCheckActivity"
      | "FraudApplicationHistory"
      | "FraudAccountActivity"
      | "FraudClientIdentified"
      | "FraudLinkedToFraudulentCustomer";
  };
  additionalProperties?: false;
}
