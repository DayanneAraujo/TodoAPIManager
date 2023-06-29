import "reflect-metadata";
import axios from "axios";
import { TodoClient } from "../src/webpack/TodoClient";

jest.mock("axios");

describe("TodoClient", () => {
  let todoClient: TodoClient;

  beforeEach(() => {
    todoClient = new TodoClient();
  });

  test("fetchAll should return a list of todos", async () => {
    const mockResponse = {
      data: [
        {
          id: 1,
          userId: 1,
          title: "Todo class injected via DI",
          completed: true,
        },
        {
          id: 2,
          userId: 1,
          title: "Client handles call",
          completed: true,
        },
        {
          id: 3,
          userId: 1,
          title: "Api manager implements interface",
          completed: true,
        },
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
      ],
    };

    const mockAxiosGet = jest.mocked(axios.get);
    mockAxiosGet.mockResolvedValue(mockResponse);

    const todos = await todoClient.fetchAll();

    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/todos"
    );
    expect(todos).toEqual(mockResponse.data);
  });
});
