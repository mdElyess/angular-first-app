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
      },
      (err) => {
        console.log(err);
      }
    );
  }

  delete(id: string): void {
    this._memberService.deleteMember(id).subscribe(
      res => {
        this.ngOnInit();
      },
      err => {
        console.log(err);
      }
    );
  }
  update(e: Member) {
    console.log('updated');
  }

  displayedColumns: string[] = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7'
  ];
}
