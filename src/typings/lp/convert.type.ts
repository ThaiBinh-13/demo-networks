export interface INewConversion {
  index: string;
  from: string;
  to: string;
  amount: string;
  feePcnt: string;
  transactionHash: string;
  timeStamp: string;
}

export interface IRedeemedRecorded {
  amtbMxx: string;
  from: string;
  to: string;
  index: string;
  transactionHash: string;
}

export interface IConvertDataETH {
  amount: string;
  from: string;
  to: string;
  fee: string;
  transactionHash: string;
  txUrl: string;
  timestamp: string;
}

export type IConvertDataBSC = Omit<IConvertDataETH, 'fee' | 'timestamp'>;

export enum ECheckerStatus {
  PENDING,
  PASSED,
  FAILED,
}

export interface IConversionCheckerRaw {
  index: string;
  date: string;
  mxx: IConvertDataETH;
  bmxx?: Pick<
    IConvertDataETH,
    'amount' | 'from' | 'to' | 'transactionHash' | 'txUrl'
  >;
}

export type IConversionCheckerRecord = IConversionCheckerRaw & {
  status: ECheckerStatus;
  expectedBmxx: string;
};
