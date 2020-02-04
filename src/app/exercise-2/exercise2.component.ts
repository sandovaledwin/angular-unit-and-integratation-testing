import { Component } from "@angular/core";

@Component({
  selector: "exercise-2",
  templateUrl: "./exercise2.component.html",
  styleUrls: ["./exercise2.component.css"]
})
export class Exercise2Component {
  _currentVal: number = 0;
  _operation: string = "+";
  _total: number = 0;

  set currentVal(value: number) {
    this._currentVal = 0;
    if (value) this._currentVal = +value;
  }

  get currentVal(): number {
    return this._currentVal;
  }

  set operation(op: string) {
    this._operation = op;
  }

  get operation(): string {
    return this._operation;
  }

  set total(value: number) {
    this._total = value;
  }

  get total(): number {
    return this._total;
  }

  add(num: number): void {
    if (this.operation === "+") this.total += num;
    if (this.operation === "-") this.total -= num;
    if (this.operation === "*") this.total *= num;
    if (this.operation === "/") this.total /= num;
    this.currentVal = 0;
  }

  div(): void {
    this.operation = "/";
  }

  mul(): void {
    this.operation = "*";
  }

  reset(): void {
    this.sum();
    this.total = 0;
  }

  subs(): void {
    this.operation = "-";
  }

  sum(): void {
    this.operation = "+";
  }
}
