import { Inject, Injectable } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { KillDrakeCommand } from "./KillDrakeCommand";

@CommandHandler(KillDrakeCommand)
export class KillDrakeCommandHandler implements ICommandHandler<KillDrakeCommand> {

    async execute(command: KillDrakeCommand):Promise<any>{
        const {heroId, dragonId } = command;

        // call repository

        // do something with object get from repo 


        //persist data to DB
        console.log("yikes")
    }
    
}