import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchBar: FormGroup;

  constructor(private fb: FormBuilder) {
    this.searchBar = fb.group({});
  }

  ngOnInit(): void {
      this.searchBar = this.fb.group({
        serachValue: ['']
      })
  }

  public get searchValue(): FormControl {
    return this.searchBar.get('searchValue') as FormControl;
  }

  onSubmit() {
    // event.preventDefault();
    // console.log(this.searchValue().value);
  }
}
