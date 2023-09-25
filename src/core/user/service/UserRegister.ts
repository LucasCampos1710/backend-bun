import UseCase from "../../shared/UseCase";
import UserRepository from "./UserRepository";

type Enter = {
  name: string
  email: string
  password: string
}

export default class UserRegister implements UseCase<Enter, void> {
  constructor(private readonly repository: UserRepository) {}

  async execute(dados: Enter): Promise<void> {
    const { name, email, password } = dados

    const userExist = await this.repository.consultWithEmail(email)
    if (userExist) {
      throw new Error("User already exists")
    }

    await this.repository.create({ name, email, password })
  }

}