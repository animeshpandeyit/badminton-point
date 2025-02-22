import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'badminton-point';

  matchpointform: FormGroup;

  matchpointinput: number = 0;

  isDisabled: boolean = false;

  constructor(private _formBuilder: FormBuilder) {
    this.matchpointform = this._formBuilder.group({
      matchpoint: [''],
    });
  }
  ngOnInit(): void {}

  submitMatchPoint() {
    this.matchpointinput = this.matchpointform.value.matchpoint; // Extract value
    this.matchpointform.reset();
    // this.isDisabled = true; // Disable input after submission
    this.matchpointform.get('matchpoint')?.disable(); // D
  }
  // resetInput() {
  //   this.matchpointform.get('matchpoint')?.enable(); // Re-enable input field
  //   this.matchpointform.reset();
  // }
}
