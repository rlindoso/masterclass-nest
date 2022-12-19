import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';

@Controller('app')
export class AppController {
  constructor(private prisma: PrismaService) {}

  @Get('hello')
  async getHello() {
    const member = await this.prisma.rocketTeamMember.create({
      data: {
        id: 'capitao',
        name: 'Rafa Lindoso',
        function: 'Alcançar coisas no alto',
      },
    });

    return {
      member,
    };
  }
}
