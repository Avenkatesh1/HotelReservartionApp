import { Component,OnInit} from '@angular/core';
import { MaterialModule } from '../../Material/material/material.module';
import { TabledataService } from '../../Shered/tabledata.service';
import { BookingTableData} from '../../Material/Modules/Booking'
import { CommonModule } from '@angular/common';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-booking-list',
  standalone: true,
  imports: [MaterialModule,CommonModule,MatTableModule,MatPaginatorModule],
  templateUrl: './booking-list.component.html',
  styleUrl: './booking-list.component.css'
})
export class BookingListComponent implements OnInit{
displayedColumns:string[] = ["Id","Name","Email","Phone","Website","Company Name"];
bookings: BookingTableData[]=[];
dataSource!: MatTableDataSource<any>;


constructor(private tableser:TabledataService){}
  ngOnInit(): void {
    this.getTableData()
  }
  
  getTableData(){
    // debugger
    this.tableser.getTableData().subscribe(
    (response:BookingTableData[])=>{
      this.bookings = response;
    },
    (error)=>{
      console.log(error)
    }
    )
  }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}
