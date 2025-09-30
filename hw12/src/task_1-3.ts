// Задача 1. Дано масив 30 випадкових цілих чисел. 
// Підрахувати скільки було обмінів під час сортування бульбашкою

// Задача 2. Дано масив 30 випадкових цілих чисел. 
// Підрахувати скільки було обмінів під час сортування змішуванням

// Задача 3. Дано масив 30 випадкових цілих чисел. 
// Підрахувати скільки було обмінів під час сортування включеннями.


if (confirm('Почати тестування?')) {
  /**
   * Функція генерування рандомного числа
   * @param {number} minNum мінімальне число у діапазоні
   * @param {number} maxNum максимальне число у діапазоні
   * @returns рандомне число
   */
    function getRandomIntNumber(minNum:number, maxNum:number):number{
      return Math.floor(minNum+Math.random()*(maxNum-minNum+1))
    }

  /**
   * Функція генерує масив заданої довжини, заповнений рандомними числами у заданому діапазоні
   * @param {number} minNum мінімальне значення діапазону  
   * @param {number} maxNum максимальне значення діапазону
   * @param {number} arrLength довжина масива
   * @returns {number[]} масив з рандомними числами
   */
  function getArrayWithRandomNumbers(minNum:number,maxNum:number,arrLength:number):number[]{
    return Array.from({ length: arrLength }, () => getRandomIntNumber(minNum, maxNum));
  }

  const randomArray = getArrayWithRandomNumbers(1,100,30)
  document.write(`
    <strong>Початковий масив</strong><br/>
    ${randomArray.join(', ')}<br/>
    `)

  //=====ЗАДАЧА 1================
  /**
   * Функція міняє 2 числа масиву місцями за індексом
   * @param {number[]} arr масив чисел
   * @param index iндекс першого числа
   * @param prevIndex індекс другого числа
   */
  
  function swap(arr:number[],index:number,prevIndex:number):void{
    const temp = arr[prevIndex]
    arr[prevIndex]=arr[index]
    arr[index]=temp
  }

  type SortResult = [number[],number]

  /**
 * Виконує один прохід бульбашкового сортування зліва направо.
 * Порівнює сусідні елементи та міняє їх місцями, якщо вони стоять у неправильному порядку.
 *
 * @param {number[]} arr - Масив чисел, який сортується (змінюється напряму).
 * @param {number} leftIndexLimit - Ліва межа проходу (з якого індексу починаємо).
 * @param {number} rightIndexLimit - Права межа проходу (до якого індексу перевіряємо).
 * @returns {[number, number, boolean]} 
 * - Кортеж із трьох значень:
 *   1. Кількість обмінів, зроблених під час проходу.
 *   2. Нова права межа (зменшена на 1).
 *   3. Ознака, чи відбулися зміни (true, якщо був хоча б один обмін).
 */
  function bubblePassLeftToRight(arr:number[],leftIndexLimit:number,rightIndexLimit:number):[number,number,boolean]{
    let swapsNumber:number = 0
    let changed:boolean = false
      for(let i=leftIndexLimit+1;i<rightIndexLimit; i++){
        if(arr[i-1]>arr[i]){
          swap(arr,i,(i-1))
          changed=true
          swapsNumber++
        }
      }
      rightIndexLimit--
      return [swapsNumber,rightIndexLimit,changed]
    }
  


  /**
   * Сортує масив бульбашкою та підраховує кількість обмінів під час сортування
   * @param {number[]} array масив
   * @returns {SortResult}  Кортеж:
   *  - новий відсортований масив;
   *  - загальна кількість обмінів, виконаних під час сортування.
   */
  function sortArrayBubble(array:number[]):SortResult{
    console.log('sort bubble')
    let sortedArray = [...array]
    let rightIndexLimit:number = sortedArray.length
    let leftIndexLimit = 0
    let swapsNumber=0
    let changed = false
    do{
      const sortResult = bubblePassLeftToRight(sortedArray, leftIndexLimit,rightIndexLimit)
      changed=sortResult[2]
      swapsNumber+=sortResult[0]
      rightIndexLimit = sortResult[1]
    }while(changed)
    return [sortedArray,swapsNumber]
  }

  const [sortedArrayBubble,swapsNumberBubble] = sortArrayBubble(randomArray)

  document.write(`
    <hr/>
    <strong>Отсортований масив бульбашкою</strong><br/>
    ${sortedArrayBubble.join(', ')}<br/>
    Кількість обмінів: <strong>${swapsNumberBubble.toString()}</strong><br/>
    `)


    //=====ЗАДАЧА 2================
    /**
   * Виконує один прохід бульбашкового сортування зправа на ліво.
   * Порівнює сусідні елементи та міняє їх місцями, якщо вони стоять у неправильному порядку.
   *
   * @param {number[]} arr - Масив чисел, який сортується (змінюється напряму).
   * @param {number} leftIndexLimit - Ліва межа проходу (з якого індексу починаємо).
   * @param {number} rightIndexLimit - Права межа проходу (до якого індексу перевіряємо).
   * @returns {[number, number, boolean]} 
   * - Кортеж із трьох значень:
   *   1. Кількість обмінів, зроблених під час проходу.
   *   2. Нова ліва межа (збільшена на 1).
   *   3. Ознака, чи відбулися зміни (true, якщо був хоча б один обмін).
   */
    function bubblePassRightToLeft(arr:number[],leftIndexLimit:number,rightIndexLimit:number):[number,number,boolean]{
      let swapsNumber = 0
      let changed = false
      for(let i = rightIndexLimit-1; i>leftIndexLimit; i--){
        if(arr[i-1]>arr[i]){
          swap(arr,i-1,i)
          changed=true
          swapsNumber++
        }
      }
        leftIndexLimit++
        return [swapsNumber,leftIndexLimit,changed]
    }

    /**
   * Сортує масив змішуванням та підраховує кількість обмінів під час сортування
   * Послідовно виконує прохід зліва направо та справа наліво, щораз звужуючи межі.
   * @param {number[]} array масив
   * @returns {SortResult}  Кортеж:
 *  - новий відсортований масив;
 *  - загальна кількість обмінів, виконаних під час сортування.
 */
    function sortArrayCoctail(arr:number[]):SortResult{
      let swapsNumber = 0
      const sortedArray = [...arr]
      let leftIndexLimit = 0
      let rightIndexLimit = sortedArray.length
      let changed = false
      while(leftIndexLimit<rightIndexLimit){
        let sortResult = bubblePassLeftToRight(sortedArray, leftIndexLimit,rightIndexLimit)
        rightIndexLimit=sortResult[1]
        swapsNumber += sortResult[0]
        changed = sortResult[2]
        if(!changed) break
        sortResult = bubblePassRightToLeft(sortedArray,leftIndexLimit,rightIndexLimit)
        leftIndexLimit = sortResult[1]
        swapsNumber +=sortResult[0]
        changed = sortResult[2]
        if(!changed) break
      }
      return [sortedArray,swapsNumber]
    }

    const [sortedArrayCoctail,swapsNumberCoctail] = sortArrayCoctail(randomArray)

  document.write(`
    <hr/>
    <strong>Отсортований масив змішуванням</strong><br/>
    ${sortedArrayCoctail.join(', ')}<br/>
    Кількість обмінів: <strong>${swapsNumberCoctail.toString()}</strong>
    `)

     //=====ЗАДАЧА 3================

  /**
   * Сортує масив включенням та підраховує кількість обмінів під час сортування
   * @param {number[]} array масив
   * @returns {SortResult}  Кортеж:
   *  - новий відсортований масив;
   *  - загальна кількість обмінів, виконаних під час сортування.
  */
    function getInsertionSortArray (arr:number[]):SortResult{
      const sortedArr = [...arr]
      let swapsNumber = 0
      for(let k=1; k<sortedArr.length;k++){
        let currentEl,i
        currentEl=sortedArr[k] // y currenteEl  копіюємо sortedArr[k], яке треба поставити у правильну позицію
        i=k-1            //i-індекс елемента з яким порівнюємо наш currentEl (копія того, який треба правильно розмістити)
        while(i>=0 && sortedArr[i]>currentEl){//якщо елемент більше за currentEl та переставляємо його правіше
          sortedArr[i+1]=sortedArr[i]
          i--            //переходимо до порівняння з попереднього елементу
          swapsNumber++
        }
        sortedArr[i+1]=currentEl
      }
      return [sortedArr,swapsNumber]
    }

    const [sortedArrayInsertion,swapsNumberInsertion] = getInsertionSortArray(randomArray)

    document.write(`
    <hr/>
    <strong>Отсортований масив включенням</strong><br/>
    ${sortedArrayInsertion.join(', ')}<br/>
    Кількість обмінів: <strong>${swapsNumberInsertion.toString()}</strong>
    `)


}
