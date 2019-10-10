export class TransactionError {
  SubledgerStagingId?: number | string;
  coRelationId?: number | string;
  entityCode?: number;
  referenceId?: number | string;
  SubledgerTransactionTypeId?: number | string;
  SubledgerTransactionType?: string;
  errors?: string[];
  date?: string;
}
