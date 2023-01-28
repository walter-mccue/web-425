/**
 * Title: composer-details.component.ts
 * Author: Walter McCue
 * Date: 01/21/23
 * Description: composer-details.component.ts file for the enhanced-composer-app project
*/

import { Component, OnInit } from '@angular/core';
import { IComposer } from '../composer.interface';
import { ComposerService } from '../composer.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-composer-details',
  templateUrl: './composer-details.component.html',
  styleUrls: ['./composer-details.component.css']
})
export class ComposerDetailsComponent implements OnInit {

  composerId: number;
  composer!: IComposer;

  constructor(private route: ActivatedRoute, private composerService: ComposerService) {
    this.composerId = parseInt(this.route.snapshot.paramMap.get('composerId')!, 10);

    if (this.composerId) {
      this.composer = this.composerService.getComposer(this.composerId)!;
    }
  }

  ngOnInit(): void {

  }

}
