Enums

- Follow near-identical syntax rules as normal objects
- Creates an object with the same keys and values when converted from TS to JS
- Primary goal to signal to other engineers that these are all closely related values
- Use whenever we have a small fixed set of values that are all closely related and known at
  compile time

  Example
  <!--
  export enum MatchResult {
    HomeWin = 'H',
    AwayWin = 'A',
    Draw = 'D',
  }

  MatchResult.HomeWin
  -->

Generics

- Like function arguments, but for types in class/function definitions
- Allows us to define the type of a property/argument/return value at a future point
- Used heavily when writing reusable code

Example

<!--
class HoldAnything<TypeOfData> {
  data: TypeOfData
}

const holdNumber = new HoldAnything<number>();
holdNumber.data = 123

const holdString = new HoldAnything<string>();
holdString.data = 'String'

* By convention TypeOfData would be referenced by using T
class HoldAnything<T> {
  data: T
}
-->
