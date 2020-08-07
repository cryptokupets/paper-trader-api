import { Injectable } from '@nestjs/common';
// import { PaperTrader } from 'paper-trader';
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

// interface IStrategyDataItem {
//   time: string;
//   indicators: Array<{
//     key: string;
//     name: string;
//     options: number[];
//     outputs: number[];
//   }>;
//   indicator: (key: string) => number[];
// }

@Injectable()
export class PaperTradersService {
  paperTraders: PaperTraderDto[] = [];

  get(): PaperTraderDto[] {
    return this.paperTraders;
  }

  getOne(id: string): PaperTraderDto {
    return this.paperTraders.find(e => e.id === id);
  }

  createPaperTrader(data?: PaperTraderDto) {
    // const {
    //   id,
    //   currencyAvailable,
    //   assetAvailable,
    //   exchange,
    //   currency,
    //   asset,
    //   period,
    //   indicatorInputs,
    //   warmup,
    //   strategy,
    // } = data;

    // const strategyFunction = new Function('data', strategy) as (
    //   data: IStrategyDataItem[],
    // ) => string;

    // const instance = new PaperTrader({
    //   currencyAvailable,
    //   assetAvailable,
    //   exchange,
    //   currency,
    //   asset,
    //   period,
    //   indicatorInputs,
    //   warmup,
    //   strategy: strategyFunction,
    // });

    this.paperTraders.push(data);
  }

  startPaperTrader(id: string) {
    // const paperTrader = this.paperTraders.find(e => e.id === id);
    // const { instance, trades } = paperTrader;
    // instance.onTrade(trade => {
    //   paperTrader.trades = [
    //     ...trades,
    //     {
    //       ...trade,
    //     },
    //   ];
    // });
    // instance.start();
  }

  deletePaperTrader(id) {
    this.paperTraders = this.paperTraders.filter(p => p.id != id);
  }
}
