import { PrismaClient } from "@prisma/client";
import User from "../../core/user/model/User";
import UserRepository from "../../core/user/service/UserRepository";

export default class UserRepositoryPrismaPg implements UserRepository {
  private prisma: PrismaClient

  constructor() {
    this.prisma = new PrismaClient()
  }
  consultWithId(id: number): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        id,
      }
    })
  }
  
  consultAll(): Promise<User[]> {
    return this.prisma.user.findMany()
  }

  consultWithEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email,
      }
    })
  }
  create(user: User): Promise<User> {
    return this.prisma.user.create({ data: user })
  }
}