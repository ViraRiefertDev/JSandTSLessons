"use strict";
// Наплічник
//  Клас із полями #weight і #items. Дозвольте додавати предмети, якщо вага не перевищує 10 кг.
//Нотатка для вчителя
// Я довго думала чи потрібен сеттер для _items масива і прийшла к висновку що він зайвий
// якщо элементы добавляються інкрементально, а не замінюються повністю 
// сеттер для ваги наплічника також зайвий ми його на пряму не змінюємо а тільки коли добавляемо новий предмет
// в таких випадках можливо краще варто контролювати зміни через методи, а не через перезапис властивості.
// І мені здається конструктор тут також не потрібен, усі поля відразу ініціалізовані
if (confirm('Почати тестування?')) {
    class Backpack {
        constructor() {
            this._items = [];
            this._weight = 0;
            this.MAX_WEIGHT = 10;
        }
        get TotalWeightOfBackpack() {
            return this._weight;
        }
        get Items() {
            return JSON.parse(JSON.stringify(this._items));
        }
        addItem(item) {
            if (item.weight > 0) {
                const newTotalWeight = this.TotalWeightOfBackpack + item.weight;
                if (newTotalWeight > this.MAX_WEIGHT) {
                    throw new Error(`${item.title} не додано. Перевищення ваги: ${newTotalWeight}кг > ${this.MAX_WEIGHT}кг`);
                }
                this._items.push(item);
                this._weight = newTotalWeight;
            }
            else {
                throw new Error(`Вага предмета повинна бути > 0. Вага ${item.title}=${item.weight}`);
            }
        }
        removeItemByTitle(title) {
            const index = this._items.findIndex(item => item.title === title);
            if (index === -1)
                return;
            const [removed] = this._items.splice(index, 1);
            this._weight -= removed.weight;
        }
        render() {
            document.write(`<h2>Backpack</h2>`);
            document.write(`Загальна вага: ${this.TotalWeightOfBackpack} кг<br/>`);
            document.write(`Максимум: ${this.MAX_WEIGHT} кг<br/>`);
            document.write(`<ul>`);
            for (const item of this._items) {
                document.write(`<li>${item.title} (${item.weight} кг)</li>`);
            }
            document.write(`</ul>`);
        }
    }
    const bp = new Backpack();
    try {
        bp.addItem({ title: "Ноутбук", weight: 2 });
        bp.addItem({ title: "Вода", weight: 1 });
        bp.addItem({ title: "Книга", weight: 0.5 });
        // попробуєм перегрузити
        bp.addItem({ title: "Гиря", weight: 8 });
    }
    catch (err) {
        console.error(err.message);
    }
    // видаляємо предмет
    bp.removeItemByTitle("Книга");
    // виводимо вміст наплічника
    bp.render();
}
