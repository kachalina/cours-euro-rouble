import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Source } from '../models/source.interface';
import { fillTemplate } from '../utils';
import { XmlParser, JsonParser } from '../models/parsers.model';
import { NgxXml2jsonService } from 'ngx-xml2json';


@Injectable({
  providedIn: 'root'
})
export class CoursEuroRoubleService {
  constructor(
    private httpClient: HttpClient,
    private ngxXml2jsonService: NgxXml2jsonService
  ) { }

  getCoursEuroRouble(source: Source): Observable<number> {
    return this.httpClient.get(source.url, { responseType: 'text' })
    .pipe(
      map(value => {
        let json: any;
        switch (source.type) {
          case 'xml':
            json = new XmlParser(this.ngxXml2jsonService).parse(value);
            break;

          case 'json':
            json = new JsonParser().parse(value);
            break;
        }
        return Number(fillTemplate(source.template, {json}).replace(source.delimitr, '.'));
      }),
      catchError(error => throwError(error)));
  }
}
