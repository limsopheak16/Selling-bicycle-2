// bicycles data

const categories = [
    {title: "Road", description: "Lorem ipsum dolor sit amet."},
    {title: "Mountain", description: "Lorem ipsum dodfdflor sit amet."},
    {title: "Electric", description: "Lorem ipsum dolor sdfdfit amet."},
    {title: "MMX", description: "Lorem ipsum dolor sdfdfit amet."}
  ];
  
  const typeSelect = document.getElementById("type");
  const demo = document.getElementById("demo");
  const demo1 = document.getElementById("demo1");
  
  typeSelect.addEventListener("change", filterType);
  
  function filterType() {
    const result = categories.filter(c => {
      return c.title === typeSelect.value;
    });
    
    demo.innerHTML = `
      <div>
        <h1>${result[0].title}</h1>
        <p>${result[0].description}</p>
      </div>
    `;
  
    filterBicycleType();
  }
  
  function filterBicycleType() {
    const result = bicycles.filter(c => {
      return c.type === typeSelect.value;
    });
    
  
  
    let contentHTML = "";
    for(let i=0; i<result.length; i++) {
      contentHTML += `
      <div class="borderpro">
      <div class="imagepro">
          <img src="images/b1.png" alt="">
      </div>
      <div class="textpro">
          <p style="text-align: left;margin: 0;">Roadbike - Polygon</p>
          <div class="textvalue">
            <span><h2>Strattos S7D</h2><p style="text-decoration: line-through;">$2000.00</p></span>
           <span style="text-align: right;"><h2>New</h2><p >$14,50.00</p></span>
  
          </div>
      </div>
  </div>
      `;
      
    }
    demo1.innerHTML = contentHTML;
  }
  
  
  
  
  
  var bicycles = [
      {
        model: "Model XYZ 1",
        brand: "XYZ Bikes",
        type: "MMX",
        price: 209.99,
        discount_amount: 20.99,
        image:
          "image/picture.jpg",
        discount: true,
        condition: "new",
        location: "Kampot",
        new_arrival: true,
      },
      {
        model: "Model XYZ 2",
        brand: "XYZ Bikes",
        type: "MMX",
        price: 269,
        discount_amount: 0,
        discount_percentage: 0,
        image:
          "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/bmx-269$.jpg",
        discount: false,
        condition: "new",
        location: "Battambang",
        new_arrival: true,
      },
      {
        model: "Model ABC 1",
        brand: "ABC Cycles",
        type: "Electric",
        price: 599,
        discount_amount: 0,
        discount_percentage: 0,
        image:
          "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/elect-599$.jpg",
        discount: false,
        condition: "new",
        location: "Phnom Penh",
        new_arrival: true,
      },
      {
        model: "Model ABC 2",
        brand: "ABC Cycles",
        type: "Electric",
        price: 1399,
        discount_amount: 279.8,
        discount_percentage: 20,
        image:
          "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/elect-1399$.jpg",
        discount: true,
        free_delivery: true,
        condition: "used",
        location: "Siemreap",
        new_arrival: true,
      },
      {
        model: "Model ABC 3",
        brand: "ABC Cycles",
        type: "Electric",
        price: 1399,
        discount_amount: 559.6,
        discount_percentage: 40,
        image:
          "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/elect-1399$.webp",
        discount: true,
        free_delivery: true,
        condition: "used",
        location: "Kep",
        new_arrival: false,
      },
      {
        model: "Model PQR 1",
        brand: "PQR Bikes",
        type: "Mountain",
        price: 27,
        discount_amount: 2.7,
        image:
          "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-27$.jpg",
        discount: true,
        free_delivery: true,
        condition: "used",
        location: "Phnom Penh",
        new_arrival: false,
      },
      {
        model: "Model PQR 1",
        brand: "PQR Bikes",
        type: "Mountain",
        price: 27,
        discount_amount: 13.5,
        discount_percentage: 50,
        image:
          "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-27$.jpg",
        discount: true,
        condition: "used",
        location: "Phnom Penh",
        new_arrival: false,
      },
      {
        model: "Model PQR 2",
        brand: "PQR Bikes",
        type: "Mountain",
        price: 160.98,
        discount_amount: 0,
        discount_percentage: 0,
        image:
          "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-160-98$.jpg",
        discount: false,
        free_delivery: true,
        condition: "used",
        location: "Phnom Penh",
        new_arrival: false,
      },
      {
        model: "Model PQR 3",
        brand: "PQR Bikes",
        type: "Mountain",
        price: 309,
        discount_amount: 0,
        discount_percentage: 0,
        image:
          "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-309$.jpg",
        discount: false,
        condition: "used",
        location: "Phnom Penh",
        new_arrival: false,
      },
      {
        model: "Model PQR 4",
        brand: "PQR Bikes",
        type: "Mountain",
        price: 27,
        discount_amount: 2.7,
        image:
          "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-2-27$.webp",
        discount: true,
        free_delivery: true,
        condition: "used",
        location: "Phnom Penh",
        new_arrival: false,
      },
      {
        model: "Model PQR 5",
        brand: "PQR Bikes",
        type: "Mountain",
        price: 375,
        discount_amount: 37.5,
        image:
          "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/mountain-375$.jpg",
        discount: true,
        free_delivery: true,
        condition: "used",
        location: "Phnom Penh",
        new_arrival: false,
      },
      {
        model: "Model MNO 5",
        brand: "MNO Bikes",
        type: "Road",
        price: 599.99,
        discount_amount: 29.99,
        discount_percentage: 5,
        image:
          "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/road-599.99$.webp",
        discount: true,
        free_delivery: true,
        condition: "used",
        location: "Phnom Penh",
        new_arrival: false,
      },
      {
        model: "Model MNO 5",
        brand: "MNO Bikes",
        type: "Road",
        price: 599,
        discount_amount: 59.9,
        image:
          "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/road-599$.webp",
        discount: true,
        free_delivery: true,
        condition: "used",
        location: "Phnom Penh",
        new_arrival: false,
      },
      {
        model: "Model MNO 5",
        brand: "MNO Bikes",
        type: "Road",
        price: 799.99,
        discount_amount: 0,
        discount_percentage: 0,
        image:
          "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/road-799-99$.webp",
        discount: false,
        free_delivery: true,
        condition: "used",
        location: "Siemreap",
        new_arrival: false,
      },
      {
        model: "Model MNO 5",
        brand: "MNO Bikes",
        type: "Road",
        price: 749.99,
        discount_amount: 0,
        discount_percentage: 0,
        image:
          "https://emsiemhong.github.io/learning-resources/selling-bicycles/images/road-749-99$.jpg",
        discount: false,
        free_delivery: true,
        condition: "new",
        location: "Phnom Penh",
        new_arrival: false,
      },
    ];
  
  
  
  // const postcontainer = document.querySelector('.card-container');
  
  
  // const postelemnt = ()=>{
  //     bicycles.map((cardpost)=>{
  //         const postelent = document.createElement('div');
  //         postelent.classList.add('borderpro');
  //         postelent.innerHTML= `
  //         <div class="imagepro">
  // <img src="image/picture.jpg" alt="">
  // </div>
  //         <div class="textpro">
  // <p class="paragraph">Roadbike - Polygon</p>
  //         <div class="textvalue">
  //         <span><h2>Strattos S7D</h2><p class="paragraph-1">$2000.00</p></span>
  //         <span class="span"><h2>New</h2><p >$14,50.00</p></span>
  
  //     </div>
  //         `
  //         postcontainer.appendChild(postelent)
  //     })
  // }
  
  // postelemnt()
  
  