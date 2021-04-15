export interface ScrapperFormValue {
  id: string;
  url: string;
  cssSelector: string;
  outputFormat: 'raw' | 'json' | 'text',
};
