import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly originalName: string,
        readonly year: number,
        readonly country: string,
        readonly slogan: string,
        readonly genres: string[],
        readonly duration: number,
        readonly price: number
    ) {}
}