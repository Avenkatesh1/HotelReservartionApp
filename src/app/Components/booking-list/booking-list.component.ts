import { Component,OnInit} from '@angular/core';
import { MaterialModule } from '../../Material/material/material.module';
import { TabledataService } from '../../Shered/tabledata.service';
@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent implements OnInit{

  constructor(private tableser:TabledataService){}
  ngOnInit(): void {
    this.getTableData()
  }
  
  getTableData(){
    this.tableser.getTableData().subscribe((res:any)=>{
      console.log(res);
    })
  }
}
