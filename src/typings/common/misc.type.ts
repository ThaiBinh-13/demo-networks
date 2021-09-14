export enum ResultPresetEnum {
  CMS = 'cms',
  FAIL = 'initial',
  SUCCESS = 'success',
  REFUND = 'refund',
  GEO_BLOCK = 'geo_block',
  REFUND_SUCCESS = 'refund_success',
  REFUND_FAILED = 'refund_failed',
  WHITELIST = 'whitelist',
  CLAIM_SUCCESS = 'claim_success',
  CLAIM_FAILED = 'claim_failed',
}

export interface GeoIPResponse {
  ip: string;
  country: string;
  iso_code: string;
}

export type CallBackFunc = (...args: any[]) => void;
