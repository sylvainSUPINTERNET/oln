export class KillDrakeEvent {
    constructor(
      public readonly heroId: string,
      public readonly dragonId: string,
    ) {}
  }