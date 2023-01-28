/**
 * Title: composer-list.component.ts
 * Author: Walter McCue
 * Date: 01/13/23
 * Description: composer list component for the composer-app project
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { FormControl } from "@angular/forms";
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

//exports the component and the composers array

export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;
  txtSearchControl = new FormControl('');

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
    this.txtSearchControl.valueChanges.pipe(debounceTime(500)).subscribe(val => this.filterComposers(val!));
  }

  ngOnInit(): void {

  }

  filterComposers(name: string) {
    alert(name);
  }

}
