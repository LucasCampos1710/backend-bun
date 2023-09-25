import  app from "./external/api/config"
import UserConsult from "./core/user/service/UserConsult";
import UserConsultController from "./adapters/UserConsultController";
import UserConsultId from "./core/user/service/UserConsultId";
import UserConsultIdController from "./adapters/UserConsultController";
import UserRegister from './core/user/service/UserRegister';
import UserRegisterController from "./adapters/UserRegisterController";
import UserRepositoryMemory from "./external/memory/UserRepositoryMemory";

// register routes

const userRepository = new UserRepositoryMemory()
const userRegister = new UserRegister(userRepository)
new UserRegisterController(app, userRegister)

const userConsult = new UserConsult(userRepository)
new UserConsultController(app, userConsult)

const userConsultId = new UserConsultId(userRepository)
new UserConsultIdController(app, userConsultId)

app.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
