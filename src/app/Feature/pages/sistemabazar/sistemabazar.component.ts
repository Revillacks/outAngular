import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal} from '@angular/core';
import { BazarComponent } from '../../components/bazar/bazar.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-sistemabazar',
  standalone: true,
  imports: [
    CommonModule, BazarComponent, ReactiveFormsModule
  ],
  templateUrl: './sistemabazar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class SistemabazarComponent {

  public prodSig:any = signal([]);

}
