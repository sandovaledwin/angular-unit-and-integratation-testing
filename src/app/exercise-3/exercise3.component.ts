import { Component } from "@angular/core";

@Component({
  selector: "exercise-3",
  templateUrl: "./exercise3.component.html",
  styleUrls: ["./exercise3.component.css"]
})
export class Exercise3Component {

  customer: Object = {
    name: "",
    last_name: "",
    address: "",
    city: "",
    state: "",
    zip: 45057
  };

}
