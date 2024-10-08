import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Member } from 'src/models/Member';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  url: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  // send a http get request to Backend
  getMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.url + 'members');
  }

  getMemberById(id: string) {
    return this.http.get<Member>(this.url + `members/${id}`);
  }

  // send Post method to backend
  createMember(member: Member): Observable<void> {
    return this.http.post<void>(this.url + 'members', member);
  }

  updateMember(member: Member, id: string): Observable<void> {
    return this.http.put<void>(this.url + `members/${id}`,member);
  }

  deleteMember(id: string): Observable<void> {
    return this.http.delete<void>(this.url + `members/${id}`);
  }
}
