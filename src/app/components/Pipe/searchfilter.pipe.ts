import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(value: any,args: any) {
    console.log(args)
    if(args =="All notes"){
      return value
    }else{
      args=args.toLowerCase();
    }
    return value.filter((note:any)=>{
      return note.title.toLowerCase().includes(args) | note.description.toLowerCase().includes(args);
    })
  }

    // if (!value || !args) {
    //   return 
  
    // }

    // return value.filter((item :any) => {
    //   return item.title.includes(args) | item.description.includes(args) ;
    // })
 
    //return null;
  }
  
