import { User } from "@prisma/client";
import UseCase from "../../shared/UseCase";
import UserRepository from "./UserRepository";

export default class UserConsult implements UseCase<void, User[]> {
  constructor(readonly repository: UserRepository) { }

  execute(): Promise<User[]> {
    return this.repository.consultAll()
  }
}