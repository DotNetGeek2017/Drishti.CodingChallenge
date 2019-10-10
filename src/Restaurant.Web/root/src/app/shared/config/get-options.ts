export interface GetOptions {
  skip: number;
  query: string;
  props: string;
  take: number;
  orderBy: string;
  orderByDescending?: boolean;
}
