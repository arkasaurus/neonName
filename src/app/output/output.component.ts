import { Component, OnInit } from '@angular/core';
import { holdingService} from '../holding.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  constructor(private service:holdingService) { }
  outputText = {
    value : 'string'
  }
  weatherData 
  ngOnInit() {
    this.outputText = this.service.getVar();


    this.service.getWeatherData().subscribe(


      (observableData) => {
        console.log(observableData)
        this.weatherData = observableData
      }
      
      
      ,
      (error) => {console.log(error)},
      ()=>{console.log('completex ')}
    )


  }

  printForecast(forecast){
    return JSON.stringify(forecast)
  }

}


// var functionName = fucntion(paramaters) {
//   return soemthing ,

//   this.
// }


// var Functionname = (paramenters) => {
//   return something;

// }


// OneTHing => OneTHing




// Observable.subscribe (  (data) =>           )