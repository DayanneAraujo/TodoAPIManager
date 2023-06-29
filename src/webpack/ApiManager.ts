import { injectable, inject } from "inversify";
import { ManagerInterface } from "./ManagerInterface";
import { TodoClient } from "./TodoClient";

@injectable()
export class ApiManager implements ManagerInterface {
  private todoClient: TodoClient;

  constructor(@inject(TodoClient) todoClient: TodoClient) {
    this.todoClient = todoClient;
  }

  public async fetchData(): Promise<any> {
    try {
      const todos = await this.todoClient.fetchAll();
      console.log(todos);
    } catch (error) {
      console.log(error);
    }
  }
}
