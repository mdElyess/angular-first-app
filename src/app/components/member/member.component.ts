import { Component, OnInit } from '@angular/core';
import { Member } from 'src/models/Member';
import { MemberService } from 'src/services/member.service';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
})
export class MemberComponent implements OnInit {
  constructor(
    private _memberService: MemberService,
    private _dialog: MatDialog
  ) {}

  dataSource: Member[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  delete(id: string): void {
    let dialog = this._dialog.open(DialogComponent, {
      height: '200px',
      width: '300px',
    });
    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this._memberService.deleteMember(id).subscribe(
          () => {
            this.fetchData();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  fetchData() {
    this._memberService.getMembers().subscribe(
      (res) => {
        this.dataSource = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  displayedColumns: string[] = ['1', '2', '3', '4', '5', '6', '7'];
}
