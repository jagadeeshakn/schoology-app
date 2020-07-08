import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
@Component({templateUrl: 'home.component.html'})
export class HomeComponent implements OnInit {
  homeForm: FormGroup;
  searchResult;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private restService: RestService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.homeForm = this.formBuilder.group({
      searchKey: [],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.homeForm.controls; }

  onSubmit() {
    const searchKey = this.homeForm.value;
    this.restService.search(searchKey).subscribe((data: any) => {
      this.searchResult = data.response;
  });
   }
}
