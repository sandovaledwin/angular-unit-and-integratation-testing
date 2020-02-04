import { Component } from "@angular/core";

@Component({
  selector: "exercise-4",
  templateUrl: "./exercise4.component.html",
  styleUrls: ["./exercise4.component.css"]
})
export class Exercise4Component {

  title: String = 'Star Wars';

  subTitle: String = 'Planets List';

  starWarsPlanets: Array<Object> = [
    {
      name: "Alderaan",
      diameter: "12500",
      terrain: "grasslands, mountains",
      population: "2000000000"
    },
    {
      name: "Yavin IV",
      diameter: "10200",
      terrain: "jungle, rainforests",
      population: "1000"
    },
    {
      name: "Hoth",
      diameter: "7200",
      terrain: "tundra, ice caves, mountain ranges",
      population: "unknown"
    },
    {
      name: "Dagobah",
      diameter: "8900",
      terrain: "swamp, jungles",
      population: "unknown"
    },
    {
      name: "Bespin",
      diameter: "118000",
      terrain: "gas giant",
      population: "6000000"
    },
    {
      name: "Endor",
      diameter: "4900",
      terrain: "forests, mountains, lakes",
      population: "30000000"
    },
    {
      name: "Naboo",
      diameter: "12120",
      terrain: "grassy hills, swamps, forests, mountains",
      population: "4500000000"
    },
    {
      name: "Coruscant",
      diameter: "12240",
      terrain: "cityscape, mountains",
      population: "1000000000000"
    },
    {
      name: "Kamino",
      diameter: "19720",
      terrain: "ocean",
      population: "1000000000"
    },
    {
      name: "Geonosis",
      diameter: "11370",
      terrain: "rock, desert, mountain, barren",
      population: "100000000000"
    }
  ];

}
