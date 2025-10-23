// Задача 3. Розробити клас MultChecker для перевірки таблиці множення
// Поля
//  Число, яке перевіряємо (наприклад, перевірка частини таблиці множення на 7)
//  Кількість правильних відповідей
//  Кількість неправильних відповідей
// Методи
//  Генерування прикладу (метод випадковим чином визначає друге число, перше число фіксоване)
//  Перевірка правильності вказаної відповіді
//  render - виведення інформації про тестування на екран

if (confirm('Почати тестування?')) {
  class MultChecker{
    number:number;
    countOfCorrectAnswers:number;
    countOfIncorrectAnswers:number;
    randomNumber:number | undefined;

    constructor(numberForChecking:number) {
      this.number = numberForChecking
      this.countOfCorrectAnswers=0
      this.countOfIncorrectAnswers=0
    }
    getRandomNumber():number{
      return 1 + Math.floor(Math.random()*10)
    }
    generateValues():void{
      this.randomNumber = this.getRandomNumber();
    }
    generateExampleText():string{
      return( `
      Приклад таблиці множення числа ${this.number}: \n
      ${this.number}*${this.randomNumber} = ?
      `)
    }
    generateExample():string{
      this.generateValues()
      return this.generateExampleText();
    }
    isAnswerCorrect(userAnswer:number):boolean{
      return userAnswer === this.number*(this.randomNumber ?? 0);
    }
    updateState(correct:boolean):void{
      if(correct) this.countOfCorrectAnswers++
      else this.countOfIncorrectAnswers++
    }
    formatCheckMessage(correct:boolean,rightAnswer:number):string{
      if(correct)
        return `Правильно ${this.number}*${this.randomNumber} = ${userAnswer}`
      return `НЕ правильно. Правильна відповідь ${this.number}*${this.randomNumber} =${rightAnswer}`
    }
    getCheckMessage(userAnswer:number):string{
      const correct = this.isAnswerCorrect(userAnswer)
      const rightAnswer = (this.randomNumber??0) * this.number
      this.updateState(correct)
      return this.formatCheckMessage(correct,rightAnswer)
    }
    render(){
      document.write(`
        Кількість вірних відповідей: ${this.countOfCorrectAnswers}<br/>
        Кількість Не вірних відповідей: ${this.countOfIncorrectAnswers}<br/>
        `)
    }
  }
  let userAnswer:number = 0
  const numberForChecking = parseInt(prompt('Виберіть цифру на яку будемо перевіряти таблицю множення') ?? 'exit')
  if(!isNaN(numberForChecking)){
    const multChecker = new MultChecker(numberForChecking)
    do{
      userAnswer = parseInt(prompt(multChecker.generateExample())?? '')
      if(isNaN(userAnswer)) break
      alert(multChecker.getCheckMessage(userAnswer))
    }while(true)
    multChecker.render()
  }
}

