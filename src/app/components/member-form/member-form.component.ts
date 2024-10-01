import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.css'],
})
export class MemberFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private _memberService: MemberService, private _router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.form = new FormGroup({
      cin: new FormControl(null, [Validators.required]),
      name: new FormControl(null, [Validators.required]),
      cv: new FormControl(null, [Validators.required]),
      type: new FormControl(null, [Validators.required]),
    });
  }

  submitData(): void {
    const idcourant = this.activatedRoute.snapshot.params['id'];
    if (!!idcourant) {
      const m: Member= {... this.form.value, createdDate: new Date()}
      this._memberService.updateMember(m, idcourant);
      // this._router.navigate(['']);
    } else {
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
}
