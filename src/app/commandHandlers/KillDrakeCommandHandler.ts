import { Inject } from "@nestjs/common";
import { CommandHandler, ICommand, ICommandHandler } from "@nestjs/cqrs";
import { KillDrakeCommand } from "../commands/KillDrakeCommand";


@CommandHandler(KillDrakeCommand)
export class KillerDrakeCommandHandler implements ICommandHandler<KillDrakeCommand> {

    async execute(command: KillDrakeCommand):Promise<any>{
        const {heroId, dragonId } = command;

        // call repository

        // do something with object get from repo 


        //persist data to DB
        console.log("yikes")
    }
    
}