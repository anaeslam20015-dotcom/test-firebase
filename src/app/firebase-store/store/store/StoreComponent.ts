import { Component, OnInit } from '@angular/core';
import { StoreServiecsService } from '../../services/store.serviecs.service';
import { JsonPipe } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent {
  employees: any[] = [];
  loading = true;
  showInput = false;

  /* Input Value */
  name!: string;
  salary!: any;
  duration!: any;

  constructor(private store: StoreServiecsService) {}

  /* Reactive Form */
  Form = new FormGroup({
    employeeName: new FormControl('', []),
    salary: new FormControl('', []),
    showInput: new FormControl('', []),
  });

  ngOnInit() {
    this.getDoc();
  }

  /* show teamplate */
  show() {
    this.showInput = !this.showInput;
  }

  getDoc() {
    this.store
      .getData()
      .then((data) => {
        this.employees = data;
        this.loading = false;
      })
      .catch(() => alert('No Data'));
    console.log(this.employees);
  }

  /* Add Document */
  AddDoc() {
    if (this.name === '' && this.salary === '' && this.duration === '') {
      alert('Add data');
    } else {
      this.store
        .addEmployee(this.name, this.salary, this.duration)
        .then(() => {
          alert('Add Compelet');
        })
        .catch((error) => {
          alert(error.massage);
        });
      this.store;
      this.getDoc();
      this.name = '';
      this.salary = '';
      this.duration = '';
    }
  }

  /* Delete Document */
  async deleteDoc(id: string) {
    await this.store.deleteEmployee(id);
    this.store
      .getData()
      .then((data) => {
        this.employees = data;
        this.loading = false;
      })
      .catch(() => alert('gggg'));
    console.log(this.employees);
  }
}
