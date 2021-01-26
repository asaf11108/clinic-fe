import { APIService } from './../../API.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { from } from 'rxjs';
import { take } from 'rxjs/operators';

interface ToDo {
  id: string;
  name: string;
}

interface ToDoFilter {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.sass']
})
export class SearchTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<ToDo>;
  dataSource = new MatTableDataSource<ToDo>();
  isLoadingResults = true;

  constructor(private apiService: APIService) { }

  filters: ToDoFilter[] = [
    {value: 'id', viewValue: 'Id'},
    {value: 'name', viewValue: 'Name'}
  ];
  displayedColumns = ['id', 'name'];
  selectedFilter = this.filters[0].value;

  ngOnInit() {
    from(this.apiService.ListTodos()).pipe(
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
