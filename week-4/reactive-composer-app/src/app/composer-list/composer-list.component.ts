/**
 * Title: composer-list.component.ts
 * Author: Walter McCue
 * Date: 01/13/23
 * Description: composer list component for the composer-app project
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';


@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})

//exports the component and the composers array

export class ComposerListComponent implements OnInit {

  composers: Array<IComposer>;

  constructor(private composerService: ComposerService) {
    this.composers = this.composerService.getComposers();
  }
  ngOnInit(): void {

  }
}
