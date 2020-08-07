import { Injectable } from '@nestjs/common';
import { PaperTrader } from 'paper-trader';
import { PaperTraderDto } from './papertraders.dto';

// interface IAdvisorDataItem {
//   time: string;
//   indicators: Array<{
//     key: string;
//     name: string;
//     options: number[];
//     outputs: number[];
//   }>;
//   indicator: (key: string) => number[];
// }

interface IStrategyDataItem {
  time: string;
  indicators: Array<{
    key: string;
    name: string;
    options: number[];
    outputs: number[];
  }>;
  indicator: (key: string) => number[];
}

@Injectable()
export class PaperTradersService {
  paperTraders: Array<{
    id: string;
    instance: PaperTrader;
    trades: Array<{
      time: string;
      side: string;
      price: number;
      quantity: number;
      amount: number;
    }>;
  }> = [];

  getPaperTraders() {
    return this.paperTraders;
  }

  createPaperTrader(data?: PaperTraderDto) {
    const {
      id,
      currencyAvailable,
      assetAvailable,
      exchange,
      currency,
      asset,
      period,
      indicatorInputs,
      warmup,
      strategy,
    } = data;

    const strategyFunction = new Function('data', strategy) as (
      data: IStrategyDataItem[],
    ) => string;

    const instance = new PaperTrader({
      currencyAvailable,
      assetAvailable,
      exchange,
      currency,
      asset,
      period,
      indicatorInputs,
      warmup,
      strategy: strategyFunction,
    });

    this.paperTraders = [
      ...this.paperTraders,
      {
        ...{
          id,
          instance,
          trades: [],
        },
      },
    ];
  }

  startPaperTrader(id: string) {
    const paperTrader = this.paperTraders.find(e => e.id === id);
    const { instance, trades } = paperTrader;
    instance.onTrade(trade => {
      paperTrader.trades = [
        ...trades,
        {
          ...trade,
        },
      ];
    });
    instance.start();
  }

  deletePaperTrader(id) {
    this.paperTraders = this.paperTraders.filter(p => p.id != id);
  }
}
