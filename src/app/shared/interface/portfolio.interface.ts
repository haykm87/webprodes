import {CategoryInterface} from "./Category.interface";

export interface Portfolio {
  id?: string,
  Name: string,
  Photo: string,
  description : string,
  Category: CategoryInterface,
  Link: string,
}
