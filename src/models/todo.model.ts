import { Guid } from "guid-typescript";

export class Todo {
  constructor(
    public id: Guid,
    public text: string,
    public isDone: boolean
  ) {
  }
}
