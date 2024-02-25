export abstract class MembersRepository {
  abstract create(name: string, functionMember: string): Promise<void>
}