import "reflect-metadata";
import { Container } from "inversify";
import { ApiManager } from "./ApiManager";
import { ManagerInterface } from "./ManagerInterface";
import { TodoClient } from "./TodoClient";

const container = new Container();
container.bind<ManagerInterface>("ManagerInterface").to(ApiManager);
container.bind<TodoClient>(TodoClient).toSelf();

export default container;
