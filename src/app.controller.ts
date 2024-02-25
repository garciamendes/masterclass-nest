import { Body, Controller, Post } from '@nestjs/common';
import { CreateMenberDTO } from './dtos/create-menber';
import { MembersRepository } from './repositories/members-repository';

@Controller()
export class AppController {
  constructor(private memberRepository: MembersRepository) {}

  @Post()
  async getHello(@Body() body: CreateMenberDTO) {
    const { name, function: functionMember } = body

    await this.memberRepository.create(name, functionMember)
  }
}
