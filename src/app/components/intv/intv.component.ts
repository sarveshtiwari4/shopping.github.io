import { Component, OnInit } from '@angular/core';
import {formatDate} from '@angular/common';
import { ApidataService } from '../../services/apidata.service';



@Component({
  selector: 'app-intv',
  templateUrl: './intv.component.html',
  styleUrls: ['./intv.component.css']
})
export class IntvComponent implements OnInit {

  constructor(private data: ApidataService) { }

  public doi : any;
  public shift :any;
  public  examname : any;
  public show=false;
  public  exam1:any;

  public exam =[ 
      {name:'Select Exam Name'},
      {name:'ap-hindi'},
      {name:'ap-sociology'}
              ]; 

 public rollnumber =[{
  _id:'',
  doi:'',
  rollno:0,
  session:0,
  examname:''
}]; 

public selectedrollno =[{
  doi:'',
  rollno:0,
  session:0,
  examname:''
}];

 public rollnoA =0;
 public rollnoB =0;
 public rollnoC =0;

 public filterrollno : any =[];
 public selectedrollnoA =[0];
 public selectedrollnoB =[0];
 public selectedrollnoC =[0];

 public countA : number = 0;
 public countB : number = 0;
 public countC : number = 0;
 public ix: number =0;

interview =[ 
  {rollno:100001, examname:'ap-hindi', shift:1 , doi: "14-05-2021"},
  {rollno:100002, examname:'AP-Hindi', shift:1, doi: "14-05-2021" },
  {rollno:100003, examname:'AP-Hindi', shift:1, doi: "14-05-2021" },
  {rollno:100004, examname:'AP-Hindi', shift:2, doi: "14-05-2021" },
  {rollno:100005, examname:'AP-Hindi', shift:2, doi: "14-05-2021" },
  {rollno:100006, examname:'AP-Hindi', shift:2, doi: "14-05-2021" },

  {rollno:100011, examname:'AP-Sociology', shift:1, doi: "14-05-2021"},
  {rollno:100012, examname:'AP-Sociology', shift:1, doi: "14-05-2021"},
  {rollno:100013, examname:'AP-Sociology', shift:2, doi: "14-05-2021"},
  {rollno:100014, examname:'AP-Sociology', shift:2, doi: "14-05-2021"},

];

  ngOnInit(): void {
    
    this.selectExamname();
    this.onInterviewChange();
    this.doi=formatDate(new Date(), 'dd-MM-yyyy', 'en');

  // this.examname="Select Exam Name";
  // this.shift="Select Shift";
  // this. selectedrollnoA =[];
  // this. selectedrollnoB =[];
  // this. selectedrollnoC =[];
  // this.exam1=this.rollnumber.map(item => item.examname)
  // .filter((value, index, self) => self.indexOf(value) == index);
  // this.exam1=new Set(this.rollnumber.map(x=>x._id))
       
  }


  selectExamname(){
    this.data.GetProducts().subscribe(response=>this.rollnumber=response);

    this.exam1=new Set(this.rollnumber.map(x=>x.examname));
    console.log(this.exam1);
  }


  onInterviewChange(){
  this.data.GetProducts().subscribe(response=>this.rollnumber=response);
  
  this.selectedrollno =this.rollnumber.filter(x=>(x.examname==this.examname && x.doi==this.doi && x.session==this.shift));
  
  console.log(this.selectedrollno);

  if (this.shift==1){
    this.show=true;
  }
  else if(this.shift==2){
  this.show=false;
  }
  }
  
  onClickA(){
    this.selectedrollnoA=[];
    //this.selectedrollnoA=this.filterrollno;
    for (let j of this.filterrollno)
      this.selectedrollnoA.push(j);
   
    this.countA=this.selectedrollnoA.length;
   
    //for(let i of this.selectedrollnoA){
     //this.ix=this.selectedrollno.findIndex(x=> x.rollno == i);

     for(let i of this.selectedrollnoA){
      if(this.shift="1"){
      this.ix=this.selectedrollno.findIndex(x=> x.rollno== i);
      }
      else{
        this.ix=this.selectedrollno.findIndex(x=> x.rollno== i);
      }

     if (this.ix != -1)
     this.selectedrollno.splice(this.ix,1);
    
    }
    
  }


  onClickB(){
    this.selectedrollnoB=[];
   for (let j of this.filterrollno)
   this.selectedrollnoB.push(j);
 

  this.countB=this.selectedrollnoB.length;
 
  for(let i of this.selectedrollnoB){
    if(this.shift=1){
    this.ix=this.selectedrollno.findIndex(x=> x.rollno== i);
    }
    else{
      this.ix=this.selectedrollno.findIndex(x=> x.rollno== i);
    }
   if (this.ix != -1)
   this.selectedrollno.splice(this.ix,1);
  
  }
  }
  onClickC(){

    this.selectedrollnoC=[];
    for (let j of this.filterrollno)
    this.selectedrollnoC.push(j);
   
   this.countC=this.selectedrollnoC.length;
  
   for(let i of this.selectedrollnoC){
    if(this.shift=1){
    this.ix=this.selectedrollno.findIndex(x=> x.rollno== i);
    }
    else{
      this.ix=this.selectedrollno.findIndex(x=> x.rollno== i);
    }

    if (this.ix != -1)
    this.selectedrollno.splice(this.ix,1);
   
   }
    
  }

  deleteitemA(){

    this.ix=this.selectedrollnoA.findIndex(x=>x==this.rollnoA);
    this.selectedrollnoA.splice(this.ix,1)
    this.countA=this.selectedrollnoA.length;
    if (this.shift=1){
    this.selectedrollno.push({rollno:this.rollnoA, session:this.shift, examname:this.examname, doi:this.doi})
    }
    else 
    {
      this.selectedrollno.push({rollno:this.rollnoA, session:this.shift, examname:this.examname, doi:this.doi})
    }
  }


  deleteitemB(){

    this.ix=this.selectedrollnoB.findIndex(x=>x==this.rollnoB);
    this.selectedrollnoB.splice(this.ix,1)
    this.countB=this.selectedrollnoB.length;

    //this.selectedrollno.push({rollno:this.rollnoB, examname:this.examname, doi:this.doi, shift:this.shift})

    if (this.shift=1){
      this.selectedrollno.push({rollno:this.rollnoB, session:this.shift, examname:this.examname, doi:this.doi})
      }
      else 
      {
        this.selectedrollno.push({rollno:this.rollnoB, session:this.shift, examname:this.examname, doi:this.doi})
      }
  }
 
 
  deleteitemC(){

    this.ix=this.selectedrollnoC.findIndex(x=>x==this.rollnoC);
    this.selectedrollnoC.splice(this.ix,1)
    this.countC=this.selectedrollnoC.length;
    //this.selectedrollno.push({rollno:this.rollnoC, examname:this.examname, doi:this.doi, shift:this.shift})
  
    if (this.shift=1){
      this.selectedrollno.push({rollno:this.rollnoC,session:this.shift, examname:this.examname, doi:this.doi})
      }
      else 
      {
        this.selectedrollno.push({rollno:this.rollnoC, session:this.shift, examname:this.examname, doi:this.doi})
      }
  }

  dataA ={
    rollno:0,
    doi:'',
    shift:0,
    board:''
    };

dataC ={
rollno:0,
doi:'',
shift:0,
board:''
};

dataB ={
  rollno:0,
  doi:'',
  shift:0,
  board:''
  };



  datasubmit(){
        
    for (let j of this.selectedrollnoA){
      this.dataA={
        rollno:j,
        doi:this.doi,
        shift:this.shift,
        board:'A'
      };
    
      this.data.Updatemany(this.dataA)
      .subscribe(error=>console.log("something went wrong"));
   }



    for (let j of this.selectedrollnoB){
      this.dataB={
        rollno:j,
        doi:this.doi,
        shift:this.shift,
        board:'B'
      };
    
      this.data.Updatemany(this.dataB)
      .subscribe(error=>console.log("something went wrong"));
   }



    for (let j of this.selectedrollnoC){
      this.dataC={
        rollno:j,
        doi:this.doi,
        shift:this.shift,
        board:'C'
      };
    
      this.data.Updatemany(this.dataC)
      .subscribe(error=>console.log("something went wrong"));
   }
   
    alert ("Data Updated");
  location.reload()
  ;}
}
