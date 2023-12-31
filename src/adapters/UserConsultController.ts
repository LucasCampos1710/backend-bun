import Elysia from "elysia";
import UserConsultId from "../core/user/service/UserConsultId";

export default class UserConsultIdController {

  constructor(
    readonly server: Elysia,
    readonly useCase: UserConsultId
  ) {
    server.get('/users/:id', async ({params}) => {
      return useCase.execute(+params.id)

    })
  }
}