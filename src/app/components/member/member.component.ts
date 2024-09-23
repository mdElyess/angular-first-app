import { Component, OnInit } from '@angular/core';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/services/member.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {
  constructor(private _memberService: MemberService) {}

  dataSource: Member[] = [];

  ngOnInit(): void {
    this._memberService.getMembers().subscribe(
      (res) => {
        this.dataSource = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  delete(e: Member) {}

  displayedColumns: string[] = [
    'id',
    'cin',
    'name',
    'createDate',
    'cv',
    'type',
  ];
}
