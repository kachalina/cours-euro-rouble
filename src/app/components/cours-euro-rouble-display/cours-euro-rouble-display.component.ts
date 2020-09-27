import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cours-euro-rouble-display',
  templateUrl: './cours-euro-rouble-display.component.html',
  styleUrls: ['./cours-euro-rouble-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursEuroRoubleDisplayComponent {
  @Input() course: number | undefined;
}
