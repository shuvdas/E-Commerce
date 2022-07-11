import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import { Post } from '../post';
import { Card } from '../card';
import { DataService } from '../data.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogbodyComponent } from '../dialogbody/dialogbody.component';

// export interface dialogData {
//   source: string;
// }

@Component({
  selector: 'app-Shops',
  templateUrl: './Shops.component.html',
  styleUrls: ['./Shops.component.scss']
})
export class ShopsComponent implements OnInit, AfterViewInit{

  flag:boolean = false;

  src: String = "";
  title: String = "";
  // cards: any[] = [
  //   { title: 'Airplane', src: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'},
  //   { title: 'Baboon', src: 'https://homepages.cae.wisc.edu/~ece533/images/baboon.png'},
  //   { title: 'Boat', src: 'https://homepages.cae.wisc.edu/~ece533/images/boat.png'},
  //   { title: 'Cat', src: 'https://homepages.cae.wisc.edu/~ece533/images/cat.png'},
  //   { title: 'Girl', src: 'https://homepages.cae.wisc.edu/~ece533/images/girl.png'}
  // ];
  cards: Card[] = [];
  // noOfCards: number;

  public post: Post[] = [];

  displayedColumns: String[] = ["Id","Name","Title"];

  dataSource = new MatTableDataSource<Post>(this.post);

  constructor(public dataservice: DataService, public dialog: MatDialog) {} 

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit(): void {
    this.firstFunction();
    this.getShopList();   
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  firstFunction(): void {
    $('#home').removeClass('active');
    $('#shops').addClass('active');
  }

  getShopList(): void {
    this.dataservice.getPosts().subscribe(posts =>{     
      this.post = posts;
      this.dataservice.postsData = posts;  
      this.dataSource.data = posts as Post[];      
    });
  }

  onMatCardClicked(event): void{
    if(event.target.tagName.toLowerCase() === 'mat-card-title')
    {
      this.src = event.target.parentElement.children[2].firstChild.src;
      this.title = event.target.innerHTML;
      // alert(event.target.parentElement.children[0].innerHTML);
      // var c = document.getElementsByTagName("img");
      // this.src = c[0].getAttribute("src");
    }
    else if(event.target.tagName.toLowerCase() === 'mat-card-content')
    {
      this.src = event.target.firstChild.src;
      this.title = event.target.parentElement.children[0].innerHTML;
    }
    else if(event.target.tagName.toLowerCase() === 'mat-card')
    {
      this.src = event.target.children[2].firstChild.src;
      this.title = event.target.children[0].innerHTML;
    }
    else {
    this.src = event.target.src;
    this.title = event.target.parentElement.parentElement.children[0].innerHTML;
    }
    // alert('Calling open method ' +this.src);
    this.openDialog(this.src, this.title);
  }
  
  public openDialog(src,title): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.panelClass = 'dialogCard';
    dialogConfig.data = {
      sourceRef : src, titleRef : title
    }
    let dialogVar = this.dialog.open(DialogbodyComponent, dialogConfig);
    // $('.dialogCard').css('height','70%');
    // $('.dialogCard').css('width','70%');
    // $('img').css('height','60%');
    // $('img').css('width','30%');
   
    // $('.mat-card-image').css('height','10%');
    // $('.dialogCard').css('padding-bottom','200px');
    // $('.dialogCard').css('padding-top','200px');
    // let dialogVar = this.dialog.open(DialogbodyComponent, { data: src });
    // dialogVar.afterClosed().subscribe(result => {
    //   this.animal = result;
    // });
  } 
  
  onSelectedOption(e) {
    this.getFilteredExpenseList();
    $('.block').fadeOut(300);
    $('.container').fadeOut(300);
    setTimeout(function(){$('.container').css('display','none');},300);
    setTimeout(function(){$('.block').css('display','none');},300);
    setTimeout(function(){$('#shopTable').fadeIn(2000);},300);
    $('h2').html('Data');
  }

//Used this function to create cardArray to decide the number of cards to show 
// getCardArray(): number {
//     // this.cards.length = 2;
//     // this.cards.push(1);
//     // this.cards.push(2);
//     return 2;
// }

  getFilteredExpenseList() {
    if (this.dataservice.searchOptions.length > 0) { 
      this.post = this.dataservice.filteredListOptions();
      this.dataSource.data = this.post as Post[]; 
    }
    else {
      this.post = this.dataservice.postsData;
      this.dataSource.data = this.post as Post[];
    }
  }
  
onRowClicked(row): void {
  $('#shopTable').fadeOut(300);  
  this.getCardList();
  setTimeout(function(){$('.container').fadeIn(2000);},300);
  setTimeout(function(){$('.container').css('display','flex');},300);
  setTimeout(function(){$('.block').css('display','inline');},300); 
  $('h2').html('Cards');
}

getCardList(): void {
  this.dataservice.getCards().subscribe(results => {
    this.cards = results as Card[];
  });
}

}
