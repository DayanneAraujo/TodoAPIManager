import "reflect-metadata";
import { ManagerInterface } from "./ManagerInterface";
import container from "./inversify.config";

async function fetchData() {
  const apiManager = container.get<ManagerInterface>("ManagerInterface");
  await apiManager.fetchData();
}

fetchData();
