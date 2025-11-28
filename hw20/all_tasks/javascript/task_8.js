//Задача. Дано список автомобілів (марка, рік випуску, ціна). 
// Сформувати елементи для фільтрування з використанням випадаючого списку 
// (контент цих випадаючих списків сформувати у залежності від переданого списку).

class Car{
  constructor(carData){
    this.carData = {...carData}
  }

  getSpanElement(text){
    const spanEl = document.createElement('span')
    spanEl.innerText = text
    return spanEl
  }

  render(parent){
    const carContainer = document.createElement('div')
    const model = this.getSpanElement(this.carData.model)
    const year = this.getSpanElement(this.carData.year)
    const price = this.getSpanElement(this.carData.price)
    carContainer.append(model)
    carContainer.append(' - ')
    carContainer.append(year)
    carContainer.append('р. - ')
    carContainer.append(price)
    carContainer.append('$')
    parent.append(carContainer)
  }
  
}

class CarsList{
  constructor(carsData){
    this.carsData = JSON.parse(JSON.stringify(carsData))
  }
  getUniqueValuesBy(field){
    const valuesArray = []
    this.carsData.forEach(car=>{
      if(!valuesArray.includes(car[field])){
        valuesArray.push(car[field])
      }
    })
    return valuesArray
  }

  render(carsToShow = this.carsData){
    const carListEl = document.querySelector('.carlist-body')
    carListEl.innerHTML = ''
    for (const carData of carsToShow) {
      const car = new Car(carData);
      car.render(carListEl)
    }
  }
}

class SearchFilter{
  constructor(filterData){
    this.filterData = JSON.parse(JSON.stringify(filterData))
  }
  getLabelElement(){
    const label = document.createElement('label')
    label.innerText = this.filterData.filterLabelName+': '
    label.setAttribute('for',this.filterData.filterLabel)
    return label
  }
  getSelectElement(){
    const select = document.createElement('select')
    select.id = this.filterData.filterLabel
    select.name = this.filterData.filterLabel
    this.$el = select
    select.onchange = this.changeActionHandler.bind(this)
    return select
  }
  changeActionHandler(){
    this.sendEvent()
  }
  getSelectOption(text,value, disabled){
    const option = document.createElement('option')
    option.value = value.toString().toLowerCase()
    option.innerText = text
    if(disabled){
      option.disabled = true
      option.selected = true
      option.hidden = true
    }
    return option
  }

  getDropDownList(){
    const select = this.getSelectElement()
    const nullOption = this.getSelectOption(this.filterData.nullOptionName,'',true)
    select.append(nullOption)
    for (const filterValue of this.filterData.filterValuesList) {
      const option = this.getSelectOption(filterValue,filterValue)
      select.append(option)
    }
    return select
  }

  render(){
    const filtersListEl = document.querySelector('.filters-body')
    const filterContainer = document.createElement('div')
    const filterLabel = this.getLabelElement()
    const dropDownList = this.getDropDownList()
    filterContainer.append(filterLabel)
    filterContainer.append(dropDownList)
    filtersListEl.append(filterContainer)
    
  }
  sendEvent(){
    const changeEvent = new CustomEvent('filtered',{
      detail:{
        filterName:this.filterData.filterLabel,
        filterValue:this.$el.value,
        $el:this.$el
      },
      bubbles:true,
    })
    this.$el.dispatchEvent(changeEvent)
  }
}

class SearchFiltersList{
  constructor(filtersData){
    this.filterData = JSON.parse(JSON.stringify(filtersData))
  }
  render(){
    for (const filterData of this.filterData) {
      const filter = new SearchFilter({...filterData})
      filter.render()
    }
  }
}

const carsData = [
  {
    model: 'Mersedes',
    year: 2018,
    price: 25000,
  },
  {
    model: 'Opel',
    year: 2000,
    price: 5000,
  },
  {
    model: 'Opel',
    year: 2004,
    price: 15000,
  },
  {
    model: 'Audi',
    year: 2000,
    price: 7000,
  }
]

const carsList = new CarsList(carsData);
carsList.render()
const carModels = carsList.getUniqueValuesBy('model')
const years = carsList.getUniqueValuesBy('year')

const filtersData = [
  {
    filterLabelName:'Марка',
    filterLabel:'model',
    nullOptionName:'Виберіть марку авто',
    filterValuesList:carModels,
  },
  {
    filterLabelName:'Рік випуску',
    filterLabel:'year',
    nullOptionName:'Виберіть рік випуску',
    filterValuesList: years
  },
]

const filters = new SearchFiltersList(filtersData)
filters.render()

const taskContainer = document.querySelector('.task-container')
const activeFilters = {
  model:'',
  year:'',
}

taskContainer.addEventListener('filtered',(e)=>{
  const {filterName, filterValue} = e.detail
  activeFilters[filterName]=filterValue //оновлюємо стан фільтрів

  //фільтруємо машини
  const filteredCars = carsData.filter(car=>{
    if(activeFilters.model && car.model.toLowerCase() !== activeFilters.model){
      return false
    }
    if(activeFilters.year && String(car.year).toLocaleLowerCase() !== activeFilters.year){
      return false
    }
    return true
  })
  if(!activeFilters.model && !activeFilters.year){
    carsList.render()
  }else{
    carsList.render(filteredCars)
  }
})