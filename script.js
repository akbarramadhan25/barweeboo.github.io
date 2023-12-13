const query = [
    {
      id : 0,
      title: 'Naruto',
      author: 'Masashi Kishimoto',
      mainCharacter: 'Uzumaki Naruto',
      year: 2002,
      image : 'image/naruto.jpg',
      synopsis:
      "Moments prior to Naruto Uzumaki's birth, a huge demon known as the Kyuubi, the Nine-Tailed Fox, attacked Konohagakure, the Hidden Leaf Village, and wreaked havoc. In order to put an end to the Kyuubi's rampage, the leader of the village, the Fourth Hokage, sacrificed his life and sealed the monstrous beast inside the newborn Naruto.",
        
    },
    {
        id : 1,
        title: 'My Hero Academia',
        author: 'Kohei Horikoshi',
        mainCharacter: 'Izuku Midoriya',
        year: 2016,
        image: 'image/academia.jpg',
        synopsis:
          'The appearance of "quirks", newly discovered super powers, has been steadily increasing over the years, with 80 percent of humanity possessing various abilities from manipulation of elements to shapeshifting. This leaves the remainder of the world completely powerless, and Izuku Midoriya is one such individual.',
      },
    {
      id : 2,
      title: 'Jujutsu Kaizen',
      author: 'Eiichiro Oda',
      mainCharacter: "Monkey d'Luffy",
      year: 1999,
      image : 'image/onepiece.jpg',
      synopsis:
      "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from the assailant."
    },
    {
      id: 3,
      title: 'One Piece',
      author: 'Gege Akutami',
      mainCharacter: 'Satoru Gojo',
      year: 2019,
      image : 'image/jkaizen.jpg',
      synopsis:
      'Barely surviving in a barrel after passing through a terrible whirlpool at sea, carefree Monkey D. Luffy ends up aboard a ship under attack by fearsome pirates. Despite being a naive-looking teenager, he is not to be underestimated. Unmatched in battle, Luffy is a pirate himself who resolutely pursues the coveted One Piece treasure and the King of the Pirates title that comes with it.'

        ,
    },
    
  ];

  let strong = document.getElementById('strong')
  strong.innerHTML = 0;

  let ul = document.querySelector('.box ul')


const listItem = document.querySelectorAll('.box ul li')

const btn = document.getElementById('mybtn')
btn.addEventListener('click', function() {
    const input = document.querySelector('#myinput').value;
    fetch(`https://api.jikan.moe/v4/anime?q=${input}&limit=11`)

      .then(response => response.json())
      .then(response => {
        const animes = response.data
        let myAnimeList = '';
        animes.forEach(anime => myAnimeList += showAnimeList(anime))

          ul ? strong.innerHTML = animes.length : strong.innerHTML = 0;
          ul.innerHTML = myAnimeList

          // ketika li di klik
          const li = document.querySelectorAll('ul li')
          li.forEach((li, i) => {
            li.addEventListener('click', function() {
              const animeDetail = showAnimeDetail(animes[i])
              const box2 = document.querySelector('.box2')
              box2.innerHTML = animeDetail;
              

            })
          })
      })


    // const getData = async () => {
    //       const res = await fetch(` https://api.jikan.moe/v4/anime?q=${input}&limit=10`)
    //       const resData = await res.json();
    //       let animeList = ''
    //       const animes = resData.data;
    //       animes.forEach( anime => animeList += showAnimeList(anime) )
    //       // ketika li di klik
          
          

    //       const ul = document.querySelector('.box ul')
    //       ul.innerHTML = animeList


            

    //     }
    //     getData()
   
})

function showAnimeList(anime) {
        return `<li class="my-list flex  p-3 list-none max-w-full cursor-pointer hover:border-b-2 transition-all duration-50">
            <img src="${anime.images.jpg.large_image_url}" alt="" class="w-8 mr-4">
            <div class="caption-list mr-3">
                <h3 class="font-bold text-white">${anime.title}</h3>
                <p class="font-medium text-white text-sm">${anime.aired.string}</p>
            </div>
        </li>
       `
}

function showAnimeDetail(anime) {
  return  `<div class="title-anime flex">
              <img src="${anime.images.jpg.large_image_url}" alt="" class="w-28 mr-4" id="image-title">
              <div class="anime-detail pt-3">
                  <p class="font-medium text-white text-sm">Judul : ${anime.title}</p>
                  <p class="font-medium text-white text-sm">Genre : ${anime.genres[0].name}</p>
                  <p class="font-medium text-white text-sm">Rating : ${anime.score}</p>
                  <p class="font-medium text-white text-sm">Status anime : ${anime.status}</p>
              </div>
            </div>
            <div class="synophsis  p-5 h-full text-white font-medium text-sm">
              <p>${anime.synopsis}</p>
            </div>`
}





  

  // listItem.forEach((item, i) => {
  //   item.addEventListener('click', function() {

  //       const imageTitle = document.getElementById('image-title')
  //       const animeBox = document.querySelector('.anime-detail')
  //       const synopsis = document.querySelector('.synophsis')
    
  //       imageTitle.src = query[i].image;
  //       animeBox.innerHTML = `<div class="anime-detail pt-3">
  //                               <p class="font-medium text-white text-sm">Pengarang : ${query[i].author}</p>
  //                               <p class="font-medium text-white text-sm">Karakter Utama : ${query[i].mainCharacter}</p>
  //                               <p class="font-medium text-white text-sm">Rilis : ${query[i].year}</p>
  //                             </div>`
    
  //       synopsis.innerHTML = `<div class="synophsis  pl-3 pr-3 pt-3 text-white font-medium text-sm">
  //                               <p>${query[i].synopsis}</p>
  //                           </div>`
  //   })

  // })






//   document.addEventListener('DOMContentLoaded', function () {
//     const query = [
//         // ... (data anime yang sudah kamu sediakan)
//     ];

//     const listItems = document.querySelectorAll('.box ul li');

//     listItems.forEach((item, index) => {
//         item.addEventListener('click', () => {
//             const imageTitle = document.getElementById('image-title');
//             const animeDetail = document.querySelector('.box.bg-slate-800.sm\\:w-1\\/3.mx-auto.h-1\\/2.pb-9.w-[90%] .anime-detail');
//             const synopsis = document.querySelector('.box.bg-slate-800.sm\\:w-1\\/3.mx-auto.h-1\\/2.pb-9.w-[90%] .synopsis');

//             // Mengganti gambar dan judul
//             imageTitle.src = query[index].image;
//             // Mengganti detail anime
//             animeDetail.innerHTML = `
//                 <img src="${query[index].image}" alt="" class="w-28 mr-4" id="image-title">
//                 <div class="anime-detail pt-3">
//                     <p class="font-medium text-white text-sm">Pengarang : ${query[index].author}</p>
//                     <p class="font-medium text-white text-sm">Aktor : ${query[index].actor}</p>
//                     <p class="font-medium text-white text-sm">Rilis : ${query[index].release}</p>
//                 </div>
//             `;
//             // Mengganti sinopsis
//             synopsis.innerHTML = `<p>${query[index].synopsis}</p>`;
//         });
//     });
// });


 


