const courses = [
    {
      "courseName": "React Native Development",
      "author": "Alice Johnson",
      "price": 6000,
      "tags": ["React Native", "Mobile Development"],
      "duration": "4 months",
      "level": "Intermediate"
    },
    {
      "courseName": "Python for Data Science",
      "author": "Bob Brown",
      "price": 8000,
      "tags": ["Python", "Data Science"],
      "duration": "6 weeks",
      "level": "Intermediate"
    },
    {
      "courseName": "Advanced JavaScript Techniques",
      "author": "John Doe",
      "price": 7000,
      "tags": ["JavaScript", "Advanced"],
      "duration": "3 months",
      "level": "Advanced"
    },
    {
      "courseName": "Node.js Fundamentals",
      "author": "Jane Smith",
      "price": 4500,
      "tags": ["Node.js", "Backend Development"],
      "duration": "2 months",
      "level": "Intermediate"
    },
    {
      "courseName": "Ethical Hacking Basics",
      "author": "Charlie Brown",
      "price": 5500,
      "tags": ["Ethical Hacking", "Security"],
      "duration": "4 weeks",
      "level": "Beginner"
    },
    {
      "courseName": "Angular Essentials",
      "author": "Alice Johnson",
      "price": 7500,
      "tags": ["Angular", "Frontend Development"],
      "duration": "3 months",
      "level": "Intermediate"
    },
    {
      "courseName": "Machine Learning Masterclass",
      "author": "John Doe",
      "price": 10000,
      "tags": ["Machine Learning", "Advanced"],
      "duration": "6 months",
      "level": "Advanced"
    },
    {
      "courseName": "Django Web Development",
      "author": "Jane Smith",
      "price": 6800,
      "tags": ["Django", "Python", "Web Development"],
      "duration": "4 months",
      "level": "Intermediate"
    },
    {
      "courseName": "Cybersecurity Advanced Topics",
      "author": "Bob Brown",
      "price": 8500,
      "tags": ["Cybersecurity", "Advanced", "Security"],
      "duration": "3 months",
      "level": "Advanced"
    },
    {
      "courseName": "React.js Masterclass",
      "author": "Alice Johnson",
      "price": 7200,
      "tags": ["React", "Frontend Development"],
      "duration": "5 months",
      "level": "Advanced"
    },
    {
      "courseName": "Java Programming for Beginners",
      "author": "Jane Smith",
      "price": 3000,
      "tags": ["Java", "Beginner"],
      "duration": "2 months",
      "level": "Beginner"
    },
    {
      "courseName": "Advanced CSS Techniques",
      "author": "Charlie Brown",
      "price": 4800,
      "tags": ["CSS", "Advanced", "Frontend Development"],
      "duration": "6 weeks",
      "level": "Intermediate"
    }
  ];

  let cc=document.querySelector('.card-container')
  let c=document.querySelector('.card')
  let clut='';
  courses.forEach(function(e){
    clut+=  `
    <div class="card">
                <h1>${e.courseName}</h1>
                <h2>By- <span>${e.author}</span></h2>  
                <h4 class="${e.level}">${e.level}</h4>
                <h6>Price- <span>${e.price}</span></h6>
                <h6>Duration- <span>${e.duration}</span></h6>
            </div>
    `
  })
  cc.innerHTML=clut;

  document.querySelector('.be').addEventListener('click',()=>{
    let beg=courses.filter((data)=>{
        return (data.level=="Beginner")
    })
    var c1='';
    beg.forEach(function(e){
        c1+=`<div class="card">
        <h1>${e.courseName}</h1>
        <h2>By- <span>${e.author}</span></h2>
        <h4 class="${e.level}">${e.level}</h4>
        <h6>Price- <span>${e.price}</span></h6>
        <h6>Duration- <span>${e.duration}</span></h6>
    </div>`
    })
    cc.innerHTML=c1;
  })
  document.querySelector('.ad').addEventListener('click',()=>{
    let beg=courses.filter((data)=>{
        return (data.level=="Advanced")
    })
    var c1='';
    beg.forEach(function(e){
        c1+=`<div class="card">
        <h1>${e.courseName}</h1>
        <h2>By- <span>${e.author}</span></h2>
        <h4 class="${e.level}">${e.level}</h4>
        <h6>Price- <span>${e.price}</span></h6>
        <h6>Duration- <span>${e.duration}</span></h6>
    </div>`
    })
    cc.innerHTML=c1;
  })
  document.querySelector('.in').addEventListener('click',()=>{
    let beg=courses.filter((data)=>{
        return (data.level=="Intermediate")
    })
    var c1='';
    beg.forEach(function(e){
        c1+=`<div class="card">
        <h1>${e.courseName}</h1>
        <br>
        <h2>By- <span>${e.author}</span></h2>
        <h4 class="${e.level}">${e.level}</h4>
        <h6>Price- <span>${e.price}</span></h6>
        <h6>Duration- <span>${e.duration}</span></h6>
    </div>`
    })
    cc.innerHTML=c1;
  })
  document.querySelector('.all').addEventListener('click',()=>{
    cc.innerHTML=clut;
    console.log("object");
  })