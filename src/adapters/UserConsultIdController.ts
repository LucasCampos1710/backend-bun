import Elysia from "elysia";
import UserConsult from "../core/user/service/UserConsult";

export default class UserConsultController {

  constructor(
    readonly server: Elysia,
    readonly useCase: UserConsult
  ) {
    server.get('/users', async () => {
      return useCase.execute()

    })
  }
}