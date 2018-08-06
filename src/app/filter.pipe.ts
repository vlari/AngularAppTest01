import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageFilter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], category: string): any {
    
    if(category === 'all'){return value}
    else{
      return value.filter(item => {
        return item.category === category;
      })
    }
  
  }

}
