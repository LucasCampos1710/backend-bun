import { User } from "@prisma/client";
import UseCase from "../../shared/UseCase";
import UserRepository from "./UserRepository";

export default class UserConsultId implements UseCase< number, User | null> {

  constructor(private readonly repository: UserRepository) {
    this.repository.consultWithId
  }

  execute(id: number): Promise<User | null> {
    return this.repository.consultWithId(id)
  }

}