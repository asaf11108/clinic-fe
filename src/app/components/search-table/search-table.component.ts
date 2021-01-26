import { Patient } from './../../model/patient';
import { APIService } from './../../API.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { from } from 'rxjs';
import { take } from 'rxjs/operators';
import { displayedColumnsTranslate } from './column.translate';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.sass']
})
export class SearchTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Patient>;
  dataSource = new MatTableDataSource<Patient>();
  isLoadingResults = true;

  constructor(private apiService: APIService) { }

  columns = ['id', 'firstName', 'lastName'];
  displayedColumns = displayedColumnsTranslate;

  ngOnInit() {
    from(this.apiService.ListPatients()).pipe(
      take(1)
    ).subscribe(res => {
      this.dataSource.data = res?.items || [];
      this.isLoadingResults = false;
    })
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
