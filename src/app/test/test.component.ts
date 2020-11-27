import { Component, Input, OnInit } from '@angular/core';
import { pipe } from 'rxjs';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //public name="santh";

  @Input() public childval;

  public chval="child value";

  public bank=[];
  constructor(private temp:BankService) { }
public bid=[];
public bname=[];
  ngOnInit() {
//   this.temp.getBankData().subscribe(data => {
//     pipe(
// this.bid=data.map( data => data.id),
// this.bname=data.map(data => data.name)
//     )
//   });
  //  for(let i=1;i<=5;i++)
  //  {
  //    this.bank.push(i);
  //  }

 this.temp.getBankData().subscribe(data => this.bid=data);
  }


}
