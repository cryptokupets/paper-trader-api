export interface PaperTraderDto {
  id?: string;
  currencyAvailable?: number;
  assetAvailable?: number;
  exchange?: string;
  currency?: string;
  asset?: string;
  period?: number;
  indicatorInputs?: Array<{
    key: string;
    name: string;
    options: number[];
  }>;
  warmup?: number;
  strategy?: string;
  trades?: Array<{
    time: string;
    side: string;
    price: number;
    quantity: number;
    amount: number;
  }>;
}
