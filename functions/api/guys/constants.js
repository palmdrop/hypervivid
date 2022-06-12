export const PUBLISH_INDICATORS = [ 'y', 'yes' ];

export const DOCUMENT_CACHE_TTL = 60 * 60; // in seconds
export const EDGE_CACHE_TTL = DOCUMENT_CACHE_TTL / 2;
export const RETRY_TIMEOUT = 10;
export const ENTRIES_PER_PAGE = 50;

export const ENTRY_COUNT_KEY = 'entry_count';
export const PAGE_COUNT_KEY = 'page_count';
export const PAGE_PREFIX = 'page_';
export const LAST_UPDATE_KEY = 'last_update';

export const CACHE_STATUS = {
  none: 'none',
  valid: 'valid',
  stale: 'stale'
};

export const CORS_HEADERS = {
  // 'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Origin': 'https://palmdrop.github.io',
  'Access-Control-Allow-Methods': 'GET,HEAD,POST,OPTIONS',
  'Access-Control-Max-Age': '86400',
};

export const STARTING_YEAR = '2021';
export const YEAR_REGEX = /^20[0-9]{2}$/;
export const MONTH_DAY_REGEX = /([0-9]{1,2}).([a-zA-Z]{3})/;