import { NgxXml2jsonService } from 'ngx-xml2json';

abstract class Parser {
  abstract parse(str: string): any;
}

export class XmlParser extends Parser {
  constructor(private ngxXml2jsonService: NgxXml2jsonService) {
    super();
  }
  parse(str: string): any {
    const parser = new DOMParser();
    const xml = parser.parseFromString(str, 'text/xml');
    return this.ngxXml2jsonService.xmlToJson(xml);
  }
}

export class JsonParser extends Parser {
  parse(str: string): any {
    return JSON.parse(str);
  }
}
