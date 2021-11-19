const person = {
    name: '露露姐姐',
    age: 1000000,
    address: {
      city: 'ChongQing',
      area: 'NanShan'
    },
    title: ['student',{year:2021, title:'GoodStudent'}]
  }
  
  const{name:userName} = person;
  const{age:year} = person;
  const{address: {city}} = person;
  const{area:mountain} = person;
  const{title:[title1]} = person;
  const{title:[title2]} = person;

  
  console.log(userName) 
  console.log(year) 
  console.log(city) 
  console.log(mountain) 
  console.log(title1) 
  console.log(title2) 
  console.log(title3) // God 结合课件