import { Source } from 'src/app/models/source.interface';

export const sources: Source[] = [
  {
    url: 'https://www.cbr-xml-daily.ru/daily_utf8.xml',
    template: '${ this.json.ValCurs.Valute.find(x => x.CharCode === \'EUR\').Value }',
    type: 'xml',
    delimitr: ',',
    order: 0
  },
  {
    url: 'https://www.cbr-xml-daily.ru/daily_json.js',
    template: '${ this.json.Valute.EUR.Value }',
    type: 'json',
    delimitr: '.',
    order: 1
  },
  {
    url: 'https://www.cbr-xml-daily.ru/daily_json.js',
    template: '${ this.json.Valute.EUR.Value }',
    type: 'json',
    delimitr: '.',
    order: 2
  }
];
