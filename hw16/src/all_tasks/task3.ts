// Задача 3. Об’єкт “Фірма” (використати члени-класи)
// поля
//  назва фірми;
//  дата заснування (рік, місяць);
//  послуги (назва послуги, вартість, термін виконання);
//  адреси філіалів (країна, місто, вулиця, номер будинку);
// методи
//  визначення кількості років існування фірми;
//  виведення всіх філіалів фірми у вказаному місті;
//  виведення на екран послуг, що можуть бути виконані за вказану суму грошей та вказаний термін часу;

if (confirm('Почати тестування?')) {
  enum DurationUnit {
    Hours = 1,
    Days = 24,
    Weeks = 24*7
  }

  type Service = {
    title:string
    price:number
    duration: number
    durationUnit:DurationUnit
  }

  type Branch ={
    country:string
    city:string
    street:string
    buildingNumber:number
  }

  class Firm{
    private _name:string =''
    private _foundationDate:Date = new Date()
    private _services:Service[] = []
    private _branches:Branch[]= []

    constructor(firmName:string, foundationDate:Date, initServices:Service[], initBranches:Branch[]){
      this.FirmName = firmName
      this.FoundationDate = foundationDate
      this.Services = initServices
      this.Branches = initBranches
    } 

    private set FirmName(firmName:string){
      if(firmName ===''){
        throw new Error("Об'єкт Фірма не створен бо назва фірми пустий рядок")
      }
      this._name = firmName
    }

    public get FirmName(){
      return this._name
    }

    private set FoundationDate (foundationDate:Date){
      if(foundationDate > new Date()){
        throw new Error("Об'єкт Фірма не створен бо дата заснування не може бути пізніше поточної дати!")
      }
      this._foundationDate = foundationDate
    }

    private set Services(initServices:Service[]){
      if(this.isValuesInObjectsArrayValid(initServices)){
        this._services = initServices
      }else{
        throw new Error("Об'єкт Фірма не створен. Невалідні дані у списку послуг!");
      }
    }

    private set Branches(initBranches:Branch[]){
      if(this.isValuesInObjectsArrayValid(initBranches)){
        this._branches = initBranches
      }else{
        throw new Error("Об'єкт Фірма не створен. Невалідні дані у списку філій!");
      }
    } 

    private isValuesInObjectsArrayValid(arrayOfObjects:Object[]):boolean{
      for (const obj of arrayOfObjects) {
        const anyObj:any = obj
        for (const key in anyObj) {
          const value = anyObj[key]
          if(typeof value === 'string' && value.trim() === '') return false
          if(typeof value === 'number' && value<=0) return false
        }
      }
      return true
    }

    private convertToHours(value:number, unit:DurationUnit):number{
      return value*unit
    }

    public getYearsOfFirmExistence(){
      const now = new Date()
      return now.getFullYear() - this._foundationDate.getFullYear()
    }

    public showBranchesByCity(cityName:string){
      const branchesInCity = this._branches.filter(b=>b.city.toLowerCase() === cityName.toLowerCase())
      document.write(`
          <h3>Філії у місті ${cityName}</h3>`)
      if (branchesInCity.length === 0) {
        document.write(`Немає філій у цьому місті.`);
        return;
      }
      for (const branch of branchesInCity) {
        document.write(`${branch.country}, ${branch.city}, ${branch.street} ${branch.buildingNumber}<br/>`);
      }
    }

    public showServicesByPriceAndDuration(maxPrice: number, maxDuration: number, unit:DurationUnit){
      const suitableServices = this._services.filter(service => {
        const serviceDurationInHours = this.convertToHours(service.duration, service.durationUnit)
        const maxDurationInHours = this.convertToHours(maxDuration,unit)
        return service.price<=maxPrice && serviceDurationInHours<=maxDurationInHours
        })
      document.write(`<h3>Послуги в межах ${maxPrice} грн і ${maxDuration} ${DurationUnit[unit].toLowerCase()}</h3>`);  
      if (suitableServices.length === 0) {
        document.write(`Немає послуг, що відповідають умовам.<br/>`);
        return;
      }
      for (const s of suitableServices) {
        document.write(`${s.title} — ${s.price} грн, ${s.duration} ${DurationUnit[s.durationUnit].toLowerCase()}<br/>`);
      }
    }
  }

  const services: Service[] = [
    { title: "Web Development", price: 1200, duration: 2, durationUnit: DurationUnit.Weeks },
    { title: "SEO Optimization", price: 600, duration: 5, durationUnit: DurationUnit.Days },
    { title: "UI/UX Design", price: 900, duration: 7, durationUnit: DurationUnit.Days },
    { title: "Technical Support", price: 300, duration: 48, durationUnit: DurationUnit.Hours },
    { title: "Mobile App Development", price: 2000, duration: 3, durationUnit: DurationUnit.Weeks },
    { title: "Copywriting", price: 250, duration: 2, durationUnit: DurationUnit.Days },
    { title: "Social Media Marketing", price: 800, duration: 10, durationUnit: DurationUnit.Days },
    { title: "Cloud Infrastructure Setup", price: 1500, duration: 1, durationUnit: DurationUnit.Weeks },
    { title: "IT Consulting", price: 400, duration: 6, durationUnit: DurationUnit.Hours },
    { title: "QA & Testing", price: 700, duration: 4, durationUnit: DurationUnit.Days }
  ]

  const branches: Branch[] = [
  { country: "Україна", city: "Київ", street: "Хрещатик", buildingNumber: 10 },
  { country: "Україна", city: "Львів", street: "Проспект Свободи", buildingNumber: 22 },
  { country: "Україна", city: "Одеса", street: "Дерибасівська", buildingNumber: 7 },
  { country: "Німеччина", city: "Берлін", street: "Friedrichstraße", buildingNumber: 20 },
  { country: "Німеччина", city: "Мюнхен", street: "Leopoldstraße", buildingNumber: 55 },
  { country: "Німеччина", city: "Гамбург", street: "Mönckebergstraße", buildingNumber: 14 },
  { country: "США", city: "Нью-Йорк", street: "Broadway", buildingNumber: 1500 },
  { country: "США", city: "Сан-Франциско", street: "Market Street", buildingNumber: 280 }
];
  try {
    console.log("🔹 Створення фірми з валідними даними...");
  
    const firm1 = new Firm("TechNova",new Date("2018-03-15"), services,branches);
  
    console.log("Фірма успішно створена!");
    console.log("Назва:", firm1["FirmName"]);
    console.log("Років існування:", firm1.getYearsOfFirmExistence());
    firm1.showBranchesByCity("Київ");
    firm1.showServicesByPriceAndDuration(800, 7, DurationUnit.Days);
  } catch (err: any) {
    console.error("Помилка при створенні фірми:", err.message);
  }
  
  console.log("\n---------------------------\n");

  try {
    console.log("🔹 Створення фірми з порожньою назвою послуги (очікується помилка)...");

    const firm2 = new Firm(
      "BadFirm",
      new Date("2020-05-01"),
      [
        { title: "", price: 100, duration: 5, durationUnit: DurationUnit.Days }, //!помилка тут
      ]
      ,branches);

    console.log("Цей рядок не повинен виконатися — помилка мала бути раніше");
  } catch (err: any) {
    console.error("Очікувана помилка:", err.message);
  }

  console.log("\n---------------------------\n");

  try {
    console.log("Створення фірми з датою у майбутньому (очікується помилка)...");

    const firm3 = new Firm("FutureCorp",new Date("2030-01-01"), //! майбутня дата
      services,branches);

    console.log("Цей рядок не повинен виконатися — очікувалась помилка");
  } catch (err: any) {
    console.error("Очікувана помилка:", err.message);
  }
}
