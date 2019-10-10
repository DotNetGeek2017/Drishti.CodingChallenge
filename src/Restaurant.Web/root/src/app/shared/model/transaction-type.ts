export class TransactionType {
  name: string;
  description: string;
  subledgerGroupId: string;
  entityCode: string;
}

export enum TransactionTypesEnum {
  "GR",
  "IR",
  "GR-R",
  "IR-R",
  "Manual Adjustment",
  "Inventory Goods Received",
  "GR-PPV",
  "IR-PPV",
  "GRIR Settlement"
}
