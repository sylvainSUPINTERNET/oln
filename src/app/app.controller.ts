import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { KillDrakeCommand } from './commands/KillDrakeCommand';
import { KillDrakeDto } from './dto/KillDrakeDto';

@Controller('app')
export class AppController {

    constructor(private readonly commandBus: CommandBus,private readonly queryBus: QueryBus) {}

    @Post(':id/kill')
    async killDrake(@Param('id') id: string, @Body() body: KillDrakeDto) {
        return this.commandBus.execute(new KillDrakeCommand(body.killerId, id))
    }
}
