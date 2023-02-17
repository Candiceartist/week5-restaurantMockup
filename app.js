let menu = {
  apps: {
        oysters: {
         name:"Oysters on the Half Shell",
         text:"Raw pickled or fried",
         url:'https://img.taste.com.au/VBUuJTAw/taste/2016/11/pickled-ginger-and-cucumber-oysters-81031-1.jpeg',
         price:"$19" ,
        },
        codCake: {
        name:"Cod Cake",
         text:"House Smoke Cod",
         url:'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-559507_11-beea63a.jpg',
         price:"$19",
        },
        troutApp: {
         name:"Kippered Trout",
         text:"Cucumber & Horseraddish",
         url:'https://images.food52.com/ykSziOZ9nHbdgjYCPW79nrwoWqc=/1200x675/65eeff4a-aafa-4c85-8689-f65b9cbf28ba--Sprig_of_thyme_Smoked_Trout_Close.jpg',
         price:"$18" ,
        },
       rarebit: {
         name:"Rarebit",
         text:"Cheddar, tomatoes over country toast",
         url:'https://realfood.tesco.com/media/images/RFO-RWC-hero-Wales-b92e9795-2a03-42be-a581-f89fefe370fd-0-472x310.jpg',
         price:"$16" ,
        },
    },   
    cocktails: {
        oldComm: {
            name:"Old Commerce",
            text:"Woodford Reserve, Amaro, Cinnamon",
            url:'https://images.squarespace-cdn.com/content/v1/5f63798a017b5306a35ea1ba/1626193348019-FGSJTH7DM6Y5MFMITD64/IMG_0002%2Bcopy.jpg',
            price:"$19",
        },
        pear: {
           name:"A Nice Pear Daisy",
           text:"Tequila, bitter, lemon, pear",
           url:'https://vintagekitty.com/wp-content/uploads/2020/10/Spiced-Pear-Martini-9178-800px.jpg',
           price:"$18" ,
        },
        pimms: {
           name:"Pimms Cup",
           text:"Pimms, White port, lemon, ginger",
           url:'https://media.diageocms.com/media/mn3hqvzs/pimmlemonadeserve.jpg',
           price:"$17" ,
        },
        bourbon: {
          name:"West Village Sour",
          text:"bourbon, lemon, mulled red wine",
          url:'https://www.sugarandsoul.co/wp-content/uploads/2020/10/whiskey-sour-recipe-9.jpg',
          price:"$17" ,
        },
        sherry: {
          name:"Sherry Cobbler",
          text:"Sherry, citrus, Decanter Bitters",
          url:'https://www.tastingtable.com/img/gallery/sherry-cobbler-the-cocktail-made-famous-by-charles-dickens/intro-1668093816.jpg',
          price:"$17" ,
        },
    },
    sideDish: {
      cauliflower: {
          name:"Cauliflower",
          text:"bread crumbs and anchovies",
          url:'https://bigsislittledish.files.wordpress.com/2012/01/dsc06763.jpg',
          price:"$15",
        },
      greenbeans: {
         name:"Green Beans",
         text:"slow cooked with bacon",
         url:'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Quick-Green-Beans-with-Bacon_EXPS_FT20_22818_F_0903_1.jpg',
         price:"$14",
        },
      brussles: {
         name:"Brussels Sprouts",
         text:"walnuts, apples, golden raisins",
         url:'https://www.floatingkitchen.net/wp-content/uploads/2018/11/Roasted-Brussels-Sprouts-4-735x490.jpg',
         price:"$16" ,
        },
        potatoes: {
         name:"Potatoes",
         text:"Fried or mashed",
         url:'https://www.miklia.com/wp-content/uploads/2022/10/pan-fried-potatoes-miklia-11.jpg',
         price:"$12" ,
        },
       carrots: {
         name:"Carrots",
         text:"spice, and pecans",
         url:'https://www.pbs.org/food/wp-content/blogs.dir/2/files/2012/10/brown-sugared-carrots-mscs103-640x360.jpg',
         price:"$17" ,
        },
    },
    meat: {
       marrow: {
         name:"Marrow",
         text:"roasted mushrooms & garlic",
         url:'https://az826390.vo.msecnd.net/cdn/media/home/a_votre_service/coupons_et_promotions/2021/pub91868-os-grilles-aux-champignons-a-la-bordelaise-recettes-1160x650-bs0103111.ashx?h=650&la=en&mw=1160&w=1160&hash=CD1DD60A3F08BA87C2DADD4A1BE43E64AC7B0168',
         price:"$22" ,
        },
       chicken: {
         name:"Half Roasted Chicken",
         text:"with fried potatoes",
         url:'https://whereismyspoon.co/wp-content/uploads/2020/06/roasted-half-chicken-32.jpg.webp',
         price:"$32" ,
        },
       pork: {
         name:"Country Pork Chop",
         text:"roasted in cider with apples",
         url:'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2019-10-recipe-easy-skillet-apple-pork-chops%2FEasy-Skillet-Apple-Pork-Chops_020',
         price:"46" ,
        },
        beef: {
         name:"Salt Beef",
         text:"smoked brisket & pea mash",
         url:'https://lh4.googleusercontent.com/-s1WiyNaOZyg/TXfVcjrC8AI/AAAAAAAAANs/Qd7v5lXtcrs/s1600/IMG_2575.JPG',
         price:"$27" ,
        },
       oxtail: {
         name:"Oxtail Braised",
         text:"juniper berries, mashed potatoes",
         url:'https://images.eatsmarter.com/sites/default/files/styles/max_size/public/braised-oxtail-with-mashed-potatoes-524516.jpg',
         price:"$30",
        },
    },
}

const showOyster = () => {
let app1 = document.querySelector('.profilePic')
app1.setAttribute('src', menu.apps.oysters.url)
let dishName = document.querySelector('.foodName')
dishName.innerHTML = menu.apps.oysters.name
let dishText = document.querySelector('.foodWords')
dishText.innerHTML = menu.apps.oysters.text
let dishPrice = document.querySelector('.foodPrice')
dishPrice.innerHTML = menu.apps.oysters.price
}
const showCod = () => {
    let app2 = document.querySelector('.profilePic')
    app2.setAttribute('src', menu.apps.codCake.url)
    let dishName = document.querySelector('.foodName')
    dishName.innerHTML = menu.apps.codCake.name
    let dishText = document.querySelector('.foodWords')
    dishText.innerHTML = menu.apps.codCake.text
    let dishPrice = document.querySelector('.foodPrice')
    dishPrice.innerHTML = menu.apps.codCake.price
}
  
const showTrout = () => {
        let app3 = document.querySelector('.profilePic')
        app3.setAttribute('src', menu.apps.troutApp.url)
        let dishName = document.querySelector('.foodName')
        dishName.innerHTML = menu.apps.troutApp.name
        let dishText = document.querySelector('.foodWords')
        dishText.innerHTML = menu.apps.troutApp.text
        let dishPrice = document.querySelector('.foodPrice')
        dishPrice.innerHTML = menu.apps.troutApp.price
        }    
const showRarebit= () => {
     let app4 = document.querySelector('.profilePic')
     app4.setAttribute('src', menu.apps.rarebit.url)
     let dishName = document.querySelector('.foodName')
     dishName.innerHTML = menu.apps.rarebit.name
      let dishText = document.querySelector('.foodWords')
      dishText.innerHTML = menu.apps.rarebit.text
    let dishPrice = document.querySelector('.foodPrice')
     dishPrice.innerHTML = menu.apps.rarebit.price
 } 

 const showOldComm= () => {
    let drink1 = document.querySelector('.profilePic')
    drink1.setAttribute('src', menu.cocktails.oldComm.url)
    let dishName = document.querySelector('.foodName')
    dishName.innerHTML = menu.cocktails.oldComm.name
     let dishText = document.querySelector('.foodWords')
     dishText.innerHTML = menu.cocktails.oldComm.text
   let dishPrice = document.querySelector('.foodPrice')
    dishPrice.innerHTML = menu.cocktails.oldComm.price
} 

const showPear= () => {
    let drink2 = document.querySelector('.profilePic')
    drink2.setAttribute('src', menu.cocktails.pear.url)
    let dishName = document.querySelector('.foodName')
    dishName.innerHTML = menu.cocktails.pear.name
     let dishText = document.querySelector('.foodWords')
     dishText.innerHTML = menu.cocktails.pear.text
   let dishPrice = document.querySelector('.foodPrice')
    dishPrice.innerHTML = menu.cocktails.pear.price
} 

const showPimms= () => {
    let drink3 = document.querySelector('.profilePic')
    drink3.setAttribute('src', menu.cocktails.pimms.url)
    let dishName = document.querySelector('.foodName')
    dishName.innerHTML = menu.cocktails.pimms.name
     let dishText = document.querySelector('.foodWords')
     dishText.innerHTML = menu.cocktails.pimms.text
   let dishPrice = document.querySelector('.foodPrice')
    dishPrice.innerHTML = menu.cocktails.pimms.price
}

const showBourbon= () => {
    let drink4 = document.querySelector('.profilePic')
    drink4.setAttribute('src', menu.cocktails.bourbon.url)
    let dishName = document.querySelector('.foodName')
    dishName.innerHTML = menu.cocktails.bourbon.name
     let dishText = document.querySelector('.foodWords')
     dishText.innerHTML = menu.cocktails.bourbon.text
   let dishPrice = document.querySelector('.foodPrice')
    dishPrice.innerHTML = menu.cocktails.bourbon.price
}

const showSherry= () => {
    let drink5 = document.querySelector('.profilePic')
    drink5.setAttribute('src', menu.cocktails.sherry.url)
    let dishName = document.querySelector('.foodName')
    dishName.innerHTML = menu.cocktails.sherry.name
     let dishText = document.querySelector('.foodWords')
     dishText.innerHTML = menu.cocktails.sherry.text
   let dishPrice = document.querySelector('.foodPrice')
    dishPrice.innerHTML = menu.cocktails.sherry.price
}

const showMarrow= () => {
    let meat1 = document.querySelector('.profilePic')
    meat1.setAttribute('src', menu.meat.marrow.url)
    let dishName = document.querySelector('.foodName')
    dishName.innerHTML = menu.meat.marrow.name
     let dishText = document.querySelector('.foodWords')
     dishText.innerHTML = menu.meat.marrow.text
   let dishPrice = document.querySelector('.foodPrice')
    dishPrice.innerHTML = menu.meat.marrow.price
}

const showChicken= () => {
    let meat2 = document.querySelector('.profilePic')
    meat2.setAttribute('src', menu.meat.chicken.url)
    let dishName = document.querySelector('.foodName')
    dishName.innerHTML = menu.meat.chicken.name
     let dishText = document.querySelector('.foodWords')
     dishText.innerHTML = menu.meat.chicken.text
   let dishPrice = document.querySelector('.foodPrice')
    dishPrice.innerHTML = menu.meat.chicken.price
}

const showPork= () => {
    let meat3 = document.querySelector('.profilePic')
    meat3.setAttribute('src', menu.meat.pork.url)
    let dishName = document.querySelector('.foodName')
    dishName.innerHTML = menu.meat.pork.name
     let dishText = document.querySelector('.foodWords')
     dishText.innerHTML = menu.meat.pork.text
   let dishPrice = document.querySelector('.foodPrice')
    dishPrice.innerHTML = menu.meat.pork.price
}

const showBeef= () => {
    let meat4 = document.querySelector('.profilePic')
    meat4.setAttribute('src', menu.meat.beef.url)
    let dishName = document.querySelector('.foodName')
    dishName.innerHTML = menu.meat.beef.name
     let dishText = document.querySelector('.foodWords')
     dishText.innerHTML = menu.meat.beef.text
   let dishPrice = document.querySelector('.foodPrice')
    dishPrice.innerHTML = menu.meat.beef.price
}

const showOx= () => {
    let meat5 = document.querySelector('.profilePic')
    meat5.setAttribute('src', menu.meat.oxtail.url)
    let dishName = document.querySelector('.foodName')
    dishName.innerHTML = menu.meat.oxtail.name
     let dishText = document.querySelector('.foodWords')
     dishText.innerHTML = menu.meat.oxtail.text
   let dishPrice = document.querySelector('.foodPrice')
    dishPrice.innerHTML = menu.meat.oxtail.price
}
