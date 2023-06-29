import "reflect-metadata";
import { Container } from "inversify";
import { ApiManager } from "./../src/webpack/ApiManager";
import { TodoClient } from "../src/webpack/TodoClient";

const container = new Container();

describe("ApiManager IntegrationTest", () => {
  test("should fetch the injected todoClient", async () => {
    const mockTodoClient = {
      fetchAll: jest.fn().mockResolvedValue([
        {
          id: 4,
          userId: 1,
          title: "Unit test",
          completed: true,
        },
        {
          id: 5,
          userId: 1,
          title: "Integration test",
          completed: true,
        },
      ]),
    };

    container.bind<TodoClient>(TodoClient).toConstantValue(mockTodoClient);

    const apiManager = container.resolve(ApiManager);
    await apiManager.fetchData();

    const spyFetchAll = jest.spyOn(mockTodoClient, "fetchAll");
    expect(spyFetchAll).toHaveBeenCalled();
  });
});
