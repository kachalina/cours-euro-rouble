import { Source } from './source.interface';

export class ParamsRequest {
    readonly sources: Source[];
    currentSourseIndex: number;

    constructor(sources: Source[], currentSourseIndex: number) {
        this.sources = sources.sort((a, b) => a.order - b.order);
        this.currentSourseIndex = currentSourseIndex;
    }
}
