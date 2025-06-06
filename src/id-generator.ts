export class IdGenerator {
    private motionID: number = 0;
    next(): number {
        return this.motionID++;
    }
}
