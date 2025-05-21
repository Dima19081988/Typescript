import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getTotalSum(): number {
        return this._items.reduce((sum, item) => sum + item.price, 0);
    }

    getTotalSumWithDiscount(discount: number): number {
        const total = this.getTotalSum();
        return total - total * (discount / 100);
    }

    removeById(id: number): void {
        const index = this._items.findIndex(item => item.id === id);
        if (index !== -1) {
            this._items.splice(index, 1);
        }
    }
}