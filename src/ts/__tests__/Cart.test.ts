import Cart from '../service/Cart';
import Movie from '../domain/Movie';

describe ('cart', () => {

  test('new card should be empty', () => {
    const cart = new Cart();
    expect(cart.items.length).toBe(0);
  });

  test('should add Movie to cart', () => {
    const cart = new Cart();
    const movie = new Movie(
      1009,
      'Мстители',
      'The Avengers',
      2012,
      'США',
      'Avengers Assemble!',
      ['фантастика', 'боевик', 'фэнтези', 'приключения'],
      137,
      500
    );
    cart.add(movie);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0]).toEqual(movie);
  });

  test('should return total summ without discount', () => {
    const cart = new Cart();
    cart.add(new Movie(1, 'a', 'b', 1928, 'Russia', 'slogan', ['genre'], 120, 250));
    cart.add(new Movie(1, 'a', 'b', 1928, 'Russia', 'slogan', ['genre'], 120, 300));
    expect(cart.getTotalSum()).toBe(550);
  });

  test('should return total summ with discount', () => {
    const cart = new Cart();
    cart.add(new Movie(1, 'a', 'b', 1928, 'Russia', 'slogan', ['genre'], 120, 300));
    cart.add(new Movie(2, 'c', 'd', 1950, 'USA', 'slogan', ['genre'], 150, 500));
    expect(cart.getTotalSumWithDiscount(20)).toBe(640);
  })

  test('should remove item by id', () => {
    const cart = new Cart();
    cart.add(new Movie(1, 'a', 'b', 1928, 'Russia', 'slogan', ['genre'], 120, 300));
    cart.add(new Movie(2, 'c', 'd', 1950, 'USA', 'slogan', ['genre'], 150, 500));
    cart.removeById(1);
    expect(cart.items.length).toBe(1);
    expect(cart.items[0].id).toBe(2);
  });
})


