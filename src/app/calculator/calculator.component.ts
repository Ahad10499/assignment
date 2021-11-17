import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-calculator",
  templateUrl: "./calculator.component.html",
  styleUrls: ["./calculator.component.css"],
})
export class CalculatorComponent implements OnInit {
  // calculatorForm: FormGroup;
  // num1: number;
  // num2: number;
  // add: number;

  title = "angular-calculator-app";
  subDisplayText = "";
  mainDisplayText = "";
  operand1: number;
  operand2: number;
  operator = "";
  calculationString = "";
  // This string  denotes the operation being performed
  answered = false;
  //  flag to check whether the solution has been processed
  operatorSet = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    // this.calculatorForm= this.fb.group({
    //   number1: [''],
    //   number2: ['']
    // })
  }
  pressKey(key: string) {
    debugger
    if (key === "/" || key === "x" || key === "-" || key === "+") {
      const lastKey = this.mainDisplayText[this.mainDisplayText.length - 1];
      if (
        lastKey === "/" ||
        lastKey === "x" ||
        lastKey === "-" ||
        lastKey === "+"
      ) {
        this.operatorSet = true;
      }
      if (this.operatorSet || this.mainDisplayText === "") {
        return;
      }
      this.operand1 = parseFloat(this.mainDisplayText);
      this.operator = key;
      this.operatorSet = true;
    }
    if (this.mainDisplayText.length === 10) {
      return;
    }
    this.mainDisplayText += key;
  }
  allClear() {
    this.mainDisplayText = "";
    this.subDisplayText = "";
    this.operatorSet = false;
  }
  getAnswer() {
    debugger
    this.calculationString = this.mainDisplayText;
    this.operand2 = parseFloat(this.mainDisplayText.split(this.operator)[1]);
    if (this.operator === "/") {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 / this.operand2).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 9) {
        this.mainDisplayText = this.mainDisplayText.substr(0, 9);
      }
    } else if (this.operator === "x") {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 * this.operand2).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 9) {
        this.mainDisplayText = "ERROR";
        this.subDisplayText = "Range Exceeded";
      }
    } else if (this.operator === "-") {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 - this.operand2).toString();
      this.subDisplayText = this.calculationString;
    } else if (this.operator === "+") {
      this.subDisplayText = this.mainDisplayText;
      this.mainDisplayText = (this.operand1 + this.operand2).toString();
      this.subDisplayText = this.calculationString;
      if (this.mainDisplayText.length > 9) {
        this.mainDisplayText = "ERROR";
        this.subDisplayText = "Range Exceeded";
      }
    } else {
      this.subDisplayText = "ERROR: Invalid Operation";
    }
    this.answered = true;
  }
}


// calculorSub(cal:number){
//   debugger
//   this.add= parseInt(cal['number1']) +  parseInt(cal['number2']);
//   this.num2= cal;
// }
