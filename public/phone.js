

window.addEventListener('load', () => {
  const phone_next = document.querySelector('.next_phone')
  const phone_image = document.querySelector('.phone_image')
  const phone_price = document.querySelector('.phone_price')
  const star_rating = document.querySelector('star_rating')
  const search = document.querySelector('.search_button')
  let template =document.querySelector('template')
  const content =template.content.cloneNode(true)
  const content2=template.content.cloneNode(false)
  let phone_ap = document.createElement('div')
  const phone_P = document.createElement('p')
          const phone_n = document.createElement('p')
          const phone_img = document.createElement('img')
          const add_cart = document.createElement('div')
          const add_cartbutton = document.createElement('button')
          
  let x = 0
  async function phone_data() {
    url = 'https://free-aliexpress-api.p.rapidapi.com/hot_products';
    const options = {
      method: 'GET',
      params: {
        cat_id: '15',
        sort: 'LAST_VOLUME_DESC',
        target_currency: 'USD',
        target_language: 'EN',
        page: '1'
      },
      headers: {
        'x-rapidapi-key': '61865e14c4msh84d4f016739b395p1e3bb9jsn59850f1a5e32',
        'x-rapidapi-host': 'free-aliexpress-api.p.rapidapi.com'
      }
    };
    
       try {
      const responses = await axios(url, options);
      const results = await responses;
      console.log(results);
      const results_data = results.data;
      const emp = ` `
      let slicestart = 0
      let sliceend = 4
      let result_slice = results_data.slice(slicestart,sliceend);
      console.log(result_slice)
      phone_next.addEventListener('click', () => {
        document.querySelector('.phone_container').append(content2)
        alert ('im')
        slicestart+=4
        sliceend+=4
        result_slice=results_data.slice(slicestart,sliceend)
        console.log(result_slice)




        result_slice.map((results, index) => {
          const phone_P = document.createElement('p')
          const phone_n = document.createElement('p')
          const phone_img = document.createElement('img')
          const add_cart = document.createElement('div')
          const add_cartbutton = document.createElement('button')
          
  
          phone_ap.classList = "phone_api"
          phone_img.classList = "phone_imag"
          phone_P.classList = "phone_price"
          phone_n.classList = "phone_name"
          add_cart.classList = "addtocart"
          add_cartbutton.classList = "addtocartbutton"
  
  
  
  
  
          var { app_sale_price, product_main_image_url, product_title
  
  
  
          } = results
          phone_img.src = product_main_image_url
          phone_P.textContent = `Price:$ ${app_sale_price}`,
            phone_n.textContent = `Name: ${product_title}`,
            add_cartbutton.textContent = `Add to Cart`
          console.log(product_main_image_url),
  
  
  
            phone_ap.append(phone_img)
          phone_ap.append(phone_n)
          phone_ap.append(phone_P)
          add_cart.append(add_cartbutton)
          phone_ap.append(add_cart)
          content.append(phone_ap)
          content2.append(phone_ap)
          
          
  
          document.querySelector('.phone_container').appendChild(content)
  
  
        })
      })

      result_slice.map((results, index) => {
        const phone_P = document.createElement('p')
        const phone_n = document.createElement('p')
        const phone_img = document.createElement('img')
        const add_cart = document.createElement('div')
        const add_cartbutton = document.createElement('button')
        let phone_ap = document.createElement('div')

        phone_ap.classList = "phone_api"
        phone_img.classList = "phone_imag"
        phone_P.classList = "phone_price"
        phone_n.classList = "phone_name"
        add_cart.classList = "addtocart"
        add_cartbutton.classList = "addtocartbutton"





        var { app_sale_price, product_main_image_url, product_title



        } = results
        phone_img.src = product_main_image_url
        phone_P.textContent = `Price:$ ${app_sale_price}`,
          phone_n.textContent = `Name: ${product_title}`,
          add_cartbutton.textContent = `Add to Cart`
        console.log(product_main_image_url),



          phone_ap.append(phone_img)
        phone_ap.append(phone_n)
        phone_ap.append(phone_P)
        add_cart.append(add_cartbutton)
        phone_ap.append(add_cart)
        content.append(phone_ap)
          content2.append(phone_ap)

        document.querySelector('.phone_container').appendChild(content)


      })
    }
    catch (error) {
      console.log(error)
  }

} phone_data()

    



})

   //       phone_ap = ap_empty
   //       phone_ap.textContent= products_results

   //       phone_P.textContent= parameters ,
   //      phone_n.textContent = product_title 
   //      console.log(phone_P)


   //     // phone_ap.append(phone_P)
   //     // phone_ap.append(phone_n)

 //})
   

//})
// catch (error) {
// console.error(error);
// }
// fetch('https://jsonplaceholder.typicode.com/photos')
//   .then(response => response.json())
//   .then(perex => {
//     perex.map (lucky=>[
//       console.log(lucky.id),
//       phone_image.textContent= lucky.thumbnailUrl
//     ])
//     console.log(perex)
//    })


