import axios from "axios";
import { injectable } from "inversify";

@injectable()
export class TodoClient {
  // eslint-disable-next-line prettier/prettier
  public async fetchAll(): Promise<any> {
    const url = "https://jsonplaceholder.typicode.com/todos";
    const response = await axios.get(url);

    return response.data;
  }
}
