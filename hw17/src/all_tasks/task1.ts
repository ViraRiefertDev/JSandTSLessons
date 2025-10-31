// Створити клас, що дозволяє виконувати такі операції над масивами: 
// знаходження кількості додатних, кількості від’ємних, 
// кількість входжень деякого числа (статичні методи)

if (confirm('Почати тестування?')) {
  class MathArray{
    static countOfPositive(array:number[]){
      return array.reduce((prevCount,el)=> el>0 ? prevCount+1:prevCount,0)
    }
    static countOfNegative(array:number[]){
      return array.reduce((prevCount,el)=>el<0? prevCount+1:prevCount,0)
    }
    static countOccurrences(array:number[],num:number){
      return array.reduce((prevCount,el)=> el===num ? prevCount+1: prevCount,0)
    }
  }

  const array = [1,-2,5,3,2,1,-10,4,9,2,2]

  console.log(MathArray.countOfPositive(array))
  console.log(MathArray.countOfNegative(array))
  console.log(MathArray.countOccurrences(array,2))
}

