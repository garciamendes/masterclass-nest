import { Injectable } from "@nestjs/common";
import { randomUUID } from "node:crypto";
import { PrismaService } from "src/database/prisma.service";
import { MembersRepository } from "src/repositories/members-repository";

@Injectable()
export class PrismaMembersRepository implements MembersRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, functionMember: string): Promise<void> {
    await this.prisma.member.create({
      data: {
        id: randomUUID(),
        name,
        function: functionMember
      }
    })
  }
}