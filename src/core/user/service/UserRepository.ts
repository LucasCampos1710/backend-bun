import User from "../model/User";

export default interface UserRepository {
  consultAll(): Promise<User[]>
  consultWithEmail(email: string): Promise<User | null>
  consultWithId(id: number): Promise<User | null>
  create(user: User): Promise<User>
}