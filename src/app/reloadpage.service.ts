import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReloadpageService {

constructor() { }

reload_about : number = 0;

reloadAbout(){
  if(this.reload_about == 0){
    this.reload_about = 1;
    window.location.reload()
  }
  else{
    this.reload_about = 0
  }
}


}
