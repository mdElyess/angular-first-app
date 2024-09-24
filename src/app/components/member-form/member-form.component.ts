import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
})
export class MemberFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private _memberService: MemberService, private _router: Router) {}

  ngOnInit() {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
    });
  }

  submitData(): void {
    console.log(this.form.value);
    const member: Member = { ...this.form.value, createdDate: new Date() };
    this._memberService.createMember(member).subscribe(
      () => {
        this._router.navigate(['']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
