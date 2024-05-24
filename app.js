'use strict';

// console.log('Hello')
//set
// const flights = ['Russia', 'USA', 'London', 'London', 'USA'];
// const setFligts = new Set(flights);
// console.log(setFligts);
// console.log(setFligts.size);
// console.log(setFligts.has('Russia'));
// setFligts.add('Paris');
// setFligts.delete('London');
// console.log(setFligts);
// for(const flight of setFligts) {
//     console.log(flight)
// };
// console.log([...setFligts])
// const setObj = new Set({a:1}, {b:2}, {c:3});
// console.log(setObj);
// const weatherMap = new Map();
// weatherMap.set('London', '10').set('Moscow', '7');
// console.log(weatherMap.get('Moscow'));
// console.log(weatherMap.get('not found'));
// console.log(weatherMap.has('Moscow'));
// console.log(weatherMap.has('not found'));
// weatherMap
//     .set(1, 5)
//     .set(true, 'yes')
//     .set(false, 'no')
//     .set([1, 2, 3], 'array')
//     .set({ a: 1 }, { b: 1 })
// console.log(weatherMap)
// console.log(weatherMap.size)
// const weatherMap = new Map([
//     ['London', '7'],
//     ['Moscow', '10']
// ])
// console.log(weatherMap);
// const weatherObj = {
//     london: 10,
//     moscow: 7,
//     paris: 14
// }
// console.log(Object.entries(weatherObj))
// const weatherMap2 = new Map(Object.entries(weatherObj))
// console.log(weatherMap2.size)
// const weatherMap = new Map([
//     ['London', '7'],
//     ['Moscow', '10']
// ])
// for (const [key, value] of weatherMap) {
//     console.log(key)
//     console.log(value)
// }
// console.log([...weatherMap])
// console.log([...weatherMap.keys()])
// console.log([...weatherMap.values()])
// let weatherMap = new Map([
//     ['London', '7'],
//     ['Moscow', '10']
// ])
// weatherMap = new Map([...weatherMap].map(el => el.reverse()));
// console.log(weatherMap);
// let a = { a: 1 }
// let b = { b: 2 }
// const map = new WeakMap();
// map.set(a, 'testA');
// map.set(b, 'testB');
// console.log(map.get(a))
// console.log(map.has(b))
// console.log(map)
// a = null;
// setTimeout(() => {
//     console.log(map)
// }, 1000)
// let cache = new WeakMap();
// function getValue(obj) {
//     if (!cache.has(obj)) {
//         const res = 1;
//         cache.set(obj, res)
//     }
//     return cache.get(obj)
// }
// const res = getValue(b)
// console.log(res)
// const res2 = getValue(b)
// console.log(res2)
// let a = { a: 1 }
// let b = { b: 2 }
// const set = new WeakSet([a, b]);
// a = null;
// setTimeout(() => {
//     console.log(set)
// }, 1000)
// function pizzaTimer(ms) {
//     const end = new Date().getTime() + ms;
//     const interval = setInterval(() => {
//         console.log(
//             new Intl.DateTimeFormat('ru-RU', {
//                 minute: 'numeric',
//                 second: 'numeric'
//             }).format(end + 100 - new Date())
//         );
//     }, 1000);
//     setTimeout(() => {
//         clearInterval(interval)
//         console.log('Pizzaaa!!!')
//     }, ms)
// }
// pizzaTimer(5000)
// function convert(sum, initialCurrency, convertCurrency) {
//     const allCurrencies = [
//         { name: 'USD', mult: 1 },
//         { name: 'RUB', mult: 1 / 60 },
//         { name: 'EUR', mult: 1.1 },
//     ];
//     const initial = allCurrencies.find(c => c.name === initialCurrency)
//     if (!initial) {
//         return null
//     }
//     const convert = allCurrencies.find(c => c.name === convertCurrency)
//     if (!convert) {
//         return null;
//     }
//     return new Intl.NumberFormat('ru-RU', { style: 'currency', currency: convert.name })
//         .format(sum * initial.mult / convert.mult)
// }
// console.log(convert(10000, 'RUB', 'USD'))
// const User = function (email, password) {
//     this.email = email;
//     this.password = password + '%%%';
// }
// const user1 = new User('a@a.ru', '123');
// console.log(user1);
// const user2 = new User('a@a.ru', '1234');
// console.log(user2);
// console.log(user2 instanceof User);
// const Book = function (title, author) {
//     this.author = author;
//     this.title = title;
//     this.isRead = false;
// }
// Book.prototype.read = function () {
//     this.isRead = true
// }
// Book.prototype.cover = 'Paper'
// const lordOfTheRing = new Book('Lord Of The Ring', 'Tolkien');
// console.log(lordOfTheRing);
// lordOfTheRing.read()
// console.log(lordOfTheRing);
// const product = { id: 1, name: 'Bread', count: 1 };
// const Cart = function () {
//     this.products = [];
// }
// Cart.prototype.addProduct = function (product) {
//     if (this.products.find(product => product.id === product.id)) {
//         return
//     }
//     this.products.push(product)
// }
// Cart.prototype.increaseAmount = function (id) {
//     this.products = this.products.map(product => {
//         if (product.id == id) {
//             product.count++;
//             return product;
//         }
//         return product;
//     })
// }
// Cart.prototype.decreaseAmount = function (id) {
//     this.products = this.products.map(product => {
//         if (product.id == id) {
//             product.count--;
//             return product;
//         }
//         return product;
//     }).filter(product => product.count > 0)
// }
// const cart = new Cart();
// console.log(cart);
// cart.addProduct(product)
// console.log(cart);
// cart.increaseAmount(1)
// cart.increaseAmount(1)
// cart.increaseAmount(1)
// cart.decreaseAmount(1)
// const request = new XMLHttpRequest();
// request.open('GET', 'https://dummyjson.com/products');
// request.send();
// request.addEventListener('load', function () {
//     const { products } = JSON.parse(this.responseText);
//     const sum = products.reduce((acc, p) => acc += p.price, 0);
//     console.log(sum / products.length)
// })