import { FormControl } from "@angular/forms";
export class GreatorThanZeroValidator{
    static greatorThanZero(fc: FormControl){
        if(fc.value < 1){
          return ({greatorThanZero: true});
        } else {
          return (null);
        }
      }
}