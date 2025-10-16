// Описати масив об’єктів – сайтів розроблених компанією з такими властивостями

if (confirm('Почати тестування?')) {
  interface Person{
    firstName:string,
    lastName:string,
  }
  interface Sponsor extends Person{
    investment:number;
  }
  interface Company{
    companyName:string;
    owner:Person;
    sponsors:Sponsor[];
    releaseYear:number;
    websiteValue:number; 
  }

  const companiesArray:Company[] = [
    {
      companyName:'Skyline Dynamics',
      owner:{
        firstName:'Olivia',
        lastName:'Carter'
      },
      sponsors:[
        {
          firstName:'Ehtan',
          lastName:'Johnson',
          investment: 120000,
        },
        {
          firstName:'Mia',
          lastName: 'Robinson',
          investment: 45000
        }
      ],
      releaseYear:2008,
      websiteValue:4000,

    },
    {
      companyName:'Quantum Pixels',
      owner:{
        firstName:'Daniel',
        lastName:'Kim'
      },
      sponsors:[
        {
          firstName:'Sarah',
          lastName:'Lee',
          investment: 90000,
        },
        {
          firstName:'Noah',
          lastName: 'Adams',
          investment: 60000
        }
      ],
      releaseYear:2021,
      websiteValue:80000,
    },
    {
      companyName:'EmberWorks Studio',
      owner:{
        firstName:'Harper',
        lastName:'Wilson'
      },
      sponsors:[
        {
          firstName:'Mason',
          lastName:'Davis',
          investment: 110000,
        },
        {
          firstName:'Lily',
          lastName:'Evans',
          investment: 250000,
        },
      ],
      releaseYear:2020,
      websiteValue:55000,
    },
    {
      companyName:'Blue Horizon Labs',
      owner:{
        firstName:'Lucas',
        lastName:'Brown'
      },
      sponsors:[
        {
          firstName:'Isabella',
          lastName:'Clark',
          investment: 50000,
        },
      ],
      releaseYear:2003,
      websiteValue:30000,
    },
    {
      companyName:'Vertex Systems',
      owner:{
        firstName:'Benjamin',
        lastName:'Scott'
      },
      sponsors:[
        {
          firstName:'Emma',
          lastName:'Walker',
          investment: 70000,
        },
        {
          firstName:'James',
          lastName:'Hall',
          investment: 40000,
        },
        {
          firstName:'Cahrlotte',
          lastName:'King',
          investment: 8000,
        },
      ],
      releaseYear:2022,
      websiteValue:100000,
    },
  ]
  document.write(`
    <h3>Розв'язки:</h2>
    <ol>`)

  //* === Задача 1. Знайти загальну вартість усіх сайтів
  const totalWebsitesValue = companiesArray.reduce((prevSum,company)=>prevSum+company.websiteValue,0)
  document.write(`
    <li>Загальна вартість всіх сайтів: <strong>${totalWebsitesValue}$</strong></li>
    `)

  //* === Задача 2. Знайти кількість сайтів, що було зроблено між 2000 та 2009 рр.
  const START_PERIODE = 2000
  const END_PERIONDE = 2009
  const countOfWebsitesInPeriode = companiesArray.reduce((prevCount,company)=>(company.releaseYear>START_PERIODE && company.releaseYear<END_PERIONDE) ? prevCount+1: prevCount,0)
  document.write(`
    <li>Кількість сайтів, що було зроблено між 2000 та 2009 рр: <strong>${countOfWebsitesInPeriode}</strong></li>
    `)
  //* === Задача 3. кількість сайтів, де сума спонсорських вкладень була більшою за 100000  
    const MIN_INVESTMENT = 100000
    function getSumOfSponsoredInvestment(sponsors:Sponsor[]):number{
      return sponsors.reduce((prevSum,sponsor)=>prevSum+sponsor.investment,0)
    }
    const countOfWebsitesMoreThanMinInvestment = companiesArray.reduce((prevCount,company)=>getSumOfSponsoredInvestment(company.sponsors)>MIN_INVESTMENT?prevCount+1:prevCount,0)
    document.write(`
      <li>
      Кількість сайтів, де сума спонсорських вкладень була більшою за 100000: <strong>${countOfWebsitesMoreThanMinInvestment}</strong>
      </li>
      `)
  //* === Задача 4. створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
    const sponsors:Sponsor[] = companiesArray.flatMap((company)=> company.sponsors)
    console.log(sponsors)  
    document.write(`
      <li>створити загальний список усіх спонсорів (поки можуть повторюватись, просто зібрати усі у масив)
        <ul style="font-family: Arial; font-size: 16px;">
      `)
    sponsors.forEach((sponsor, index) => {
      document.write(`
      <li style="margin-bottom: 8px;">
        <strong>${index + 1}.</strong> 
        ${sponsor.firstName} ${sponsor.lastName} — 
        <em>Investment:</em> $${sponsor.investment}
      </li>
      `);
    });
    document.write(`
      </ul>
      </li>
      `)


  //* === Задача 5. знайти рік, коли прибуток був найбільшим
    const [year,maxValue] = companiesArray.reduce(([year,maxValue], company)=>company.websiteValue>maxValue? [company.releaseYear,company.websiteValue]:[year,maxValue],[companiesArray[0].releaseYear,companiesArray[0].websiteValue])
    document.write(`
      <li>Найбільший прибуток ${maxValue} був у році <strong>${year}</strong></li>
      `)

  //* === Задача 6. упорядкувати список за спаданням прибутку
    const sortedCompanyArrayByWebsiteValue = [...companiesArray].sort((company1, company2)=>company2.websiteValue-company1.websiteValue)
    document.write(`
      <li>упорядкувати список за спаданням прибутку<br/>
          Масив відсортований, але дуже великий тому вивожу лише масив з прибутку компаній<br/>
          [
      `)

      sortedCompanyArrayByWebsiteValue.forEach((company)=>{
        document.write(`${company.websiteValue}, `)
      })
      document.write(`
        ]
        </li>
      `)

  //* === Задача 7. Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000  
      let filteredArray = companiesArray.filter((company)=> company.websiteValue<10000)
      const copyCompaniesWithProfitLessThen10000 = JSON.parse(JSON.stringify(filteredArray)) as Company[]
      filteredArray = companiesArray.filter((company)=>company.websiteValue >= 10000)
      const copyCompaniesWithProfitMoreThen10000 = JSON.parse(JSON.stringify(filteredArray)) as Company[]
    
      document.write(`
         <li> Створити 2 окремих списки з копіями об’єктів, що містять сайти з вартість до 10000 і більше 10000<br/>
          Копії масивів створені, але дуже великий тому вивожу лише масиви з прибутку компаній<br/>
          <strong>Масив з вартістю до 10000</strong><br/>
          [
      `)

      copyCompaniesWithProfitLessThen10000.forEach((company)=>{
        document.write(`${company.websiteValue}, `)
      })
      document.write(`
        ]<br/>
        <strong>Масив з вартістю більше 10000</strong><br/>
        [
      `)
      copyCompaniesWithProfitMoreThen10000.forEach((company)=>{
        document.write(`${company.websiteValue}, `)
      })

      document.write(`
        ]
        </li>
      `)
    
      document.write(`</ol>`)
}

