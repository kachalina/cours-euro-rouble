import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { catchError, concatMap } from 'rxjs/operators';
import { Observable, timer, throwError, of } from 'rxjs';
import { CoursEuroRoubleService } from 'src/app/services/cours-euro-rouble.service';
import { ParamsRequest } from 'src/app/models/paramsRequest.model';
import { sources } from './sources';


@Component({
  selector: 'app-cours-euro-rouble',
  templateUrl: './cours-euro-rouble.component.html',
  styleUrls: ['./cours-euro-rouble.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursEuroRoubleComponent implements OnInit {
  cource$: Observable<number>;
  constructor(private service: CoursEuroRoubleService) { }

  ngOnInit() {
    const intervalMs = 10000;
    const params = new ParamsRequest(sources, 0);
    this.cource$ = timer(0, intervalMs)
      .pipe(
        concatMap(() => this.sendRequst(params))
      );
  }

  private sendRequst(params: ParamsRequest): Observable<number | undefined> {
    return this.service.getCoursEuroRouble(params.sources[params.currentSourseIndex]).pipe(
      catchError((error) => {
        if ( params.currentSourseIndex >= params.sources.length - 1) {
          return of(undefined);
        }
        params.currentSourseIndex += 1;
        return this.sendRequst(params);
      })
    );
  }
}


