// Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, 
// чи є у масиві ім’я довжиною 5 символів і під яким індексом.



if (confirm('Почати тестування?')) {
  const names = [
  "Anna",
  "John",
  "Sophia",
  "Elizabeth",
  "Christopher",
  "Mia",
  "Olga",
  "Alexander",
  "Isabella",
  "Peter"
];

    /**
   * Сортує масив включенням 
   * @param {string[]} array масив
   * @returns {string[]}  відсортований масив
  */
    function getInsertionSortArray (arr:string[]):string[]{
      const sortedArr = [...arr]
      for(let k=1; k<sortedArr.length;k++){
        let currentEl,i
        currentEl=sortedArr[k] 
        i=k-1 
        while(i>=0 && sortedArr[i].length>currentEl.length){
          sortedArr[i+1]=sortedArr[i]
          i--
        }
        sortedArr[i+1]=currentEl
      }
      return sortedArr
    }

    const sortedArrayInsertion = getInsertionSortArray(names)

    document.write(`
    <hr/>
    <strong>Отсортований масив включенням</strong><br/>
    ${sortedArrayInsertion.join(', ')}<br/>
    `)

    /**
       * Виконує бінарний пошук у відсортованому масиві рядків за довжиною елемента.
       * Повертає індекс першого знайденого елемента з потрібною довжиною
       * або -1, якщо такого елемента у масиві немає.
       *
       * Алгоритм працює тільки з масивом, попередньо відсортованим
       * за зростанням довжини рядків.
       *
       * @param {string[]} arr - Відсортований масив рядків (за довжиною).
       * @param {number} lengthOfEl - Довжина елемента, яку потрібно знайти.
       * @returns {number} Індекс знайденого елемента в масиві або -1, якщо елемент не знайдений.
       *
    */
    function findIndex__binarySearch(arr:string[],lengthOfEl:number):number{
      let start = 0
      let end = arr.length-1
      while(start<=end){
        const middle = Math.floor((start+end)/2)
        if(arr[middle].length === lengthOfEl) return middle
        if(arr[middle].length < lengthOfEl) start=middle+1
        if(arr[middle].length > lengthOfEl) end = middle-1
      }
      return -1
    }

    const searchIndex = findIndex__binarySearch(sortedArrayInsertion,5)
    if(searchIndex !==-1) document.write(`Перше знайдене ім'я з довжиною 5 символів ${sortedArrayInsertion[searchIndex]}, під індексом: ${searchIndex}`)
    else {document.write('У масиві не має імені з довжиною в 5 символів')}

}