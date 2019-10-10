export class TableField {
  tableName: string;
  tableField: string;
  isActive = true;
  width = 100;
  order?: number;
  constructor(data: Partial<TableField>) {
    Object.assign(this, data);
  }
}
