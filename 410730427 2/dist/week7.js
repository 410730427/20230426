var vm = new Vue({
    el: "#app",
    data: {
      keyword: "",
      cards: [
        {
          title: "左上 黃品昕",
          cover:
            "https://scontent.ftpe7-2.fna.fbcdn.net/v/t39.30808-6/343431584_235927729119872_7174209720115894131_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=dCJRc-GW43MAX-9tzMG&_nc_ht=scontent.ftpe7-2.fna&oh=00_AfCoRdtlULHaOS37zns5L745elqa2Hq8dgoNgFkTjlwhMA&oe=644C9924",
          address: "黃品昕",
          name:"淡江大學教育科技學系2B",
          tel: "410730427",
          opentime: "左上方是我自己設計的韓文名片，因為我有在學韓文，所以想將韓文融入在我的設計裡。使用軟體AI(邊框)+PS(背景＆字體）。",
          title_url: "https://www.facebook.com/IlluminationBooks/",
          bgimage: ""
        },
        {
            title: "中上 VALENTINE",
            cover:
              "https://scontent.ftpe7-2.fna.fbcdn.net/v/t39.30808-6/343431584_235927729119872_7174209720115894131_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=dCJRc-GW43MAX-9tzMG&_nc_ht=scontent.ftpe7-2.fna&oh=00_AfCoRdtlULHaOS37zns5L745elqa2Hq8dgoNgFkTjlwhMA&oe=644C99243",
            address: "黃品昕",
            name:"淡江大學教育科技學系2B",
            tel: "410730427",
            opentime: "中上方是我設計的情人節海報，特別使用到字體變形的技巧，讓海報整體更有設計感。使用軟體AI(全部)。",
            title_url: "https://www.facebook.com/IlluminationBooks/",
            bgimage: ""
          },
          {
            title: "右上 薰衣草",
            cover:
              "https://scontent.ftpe7-2.fna.fbcdn.net/v/t39.30808-6/343431584_235927729119872_7174209720115894131_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=dCJRc-GW43MAX-9tzMG&_nc_ht=scontent.ftpe7-2.fna&oh=00_AfCoRdtlULHaOS37zns5L745elqa2Hq8dgoNgFkTjlwhMA&oe=644C9924",
            address: "黃品昕",
            name:"淡江大學教育科技學系2B",
            tel: "410730427",
            opentime: "右上方是我自己設計紫色薰衣草花田，用融合漸變的技巧製作出整件作品。使用軟體PS(全部)。",
            title_url: "https://www.facebook.com/IlluminationBooks/",
            bgimage: "3.jpg"
          },
          {
            title: "左下 汪汪情人節",
            cover:
              "https://scontent.ftpe7-2.fna.fbcdn.net/v/t39.30808-6/343431584_235927729119872_7174209720115894131_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=dCJRc-GW43MAX-9tzMG&_nc_ht=scontent.ftpe7-2.fna&oh=00_AfCoRdtlULHaOS37zns5L745elqa2Hq8dgoNgFkTjlwhMA&oe=644C9924",
            address: "黃品昕",
            name:"淡江大學教育科技學系2B",
            tel: "410730427",
            opentime: "左下方是我自己在白色情人節時設計的狗狗說情人快樂，這件作品特別的是在材質上的呈現讓作品看起來不是平面的。使用軟體AI(背景＆圖案)+PS(材質)。",
            title_url: "https://www.facebook.com/IlluminationBooks/",
            bgimage: ""
          },
          {
            title: "中下 TEDDYBEAR",
            cover:
              "https://scontent.ftpe7-2.fna.fbcdn.net/v/t39.30808-6/343431584_235927729119872_7174209720115894131_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=dCJRc-GW43MAX-9tzMG&_nc_ht=scontent.ftpe7-2.fna&oh=00_AfCoRdtlULHaOS37zns5L745elqa2Hq8dgoNgFkTjlwhMA&oe=644C9924",
            address: "黃品昕",
            name:"淡江大學教育科技學系2B",
            tel: "410730427",
            opentime: "中下方是我自己設計的泰迪兔熊，這是我最滿意的作品，很繽紛很可愛，也使用到了不少電繪技巧。使用軟體AI(背景＆字體)+PS(兔子)。",
            title_url: "https://www.facebook.com/IlluminationBooks/",
            bgimage: ""
          },
          {
            title: "中右 日系少女貼紙",
            cover:
              "https://scontent.ftpe7-4.fna.fbcdn.net/v/t39.30808-6/343435772_104080729340684_392172710261289577_n.jpg?stp=dst-jpg_s1080x2048&_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=QxzxhLfALxQAX-fN8vG&_nc_ht=scontent.ftpe7-4.fna&oh=00_AfBYXI9F4vCcnR8pAmml_Uny0q6YdqCRfQ6Cy--9bdc0MA&oe=644DC644",
            address: "黃品昕",
            name:"淡江大學教育科技學系2B",
            tel: "410730427",
            opentime: "右下方是我自己設計的日系未來感貼紙，這件作品難的部分是要做出雷射感，我也捉模了很久才做出來的。使用軟體AI(全部)。",
            title_url: "https://www.facebook.com/IlluminationBooks/",
            bgimage: ""
          }
		],
    },
    
    mounted:function(){        
        const swiper = new Swiper('.carousel', {
            loop: true,
            effect: 'cube',
            grabCursor: true,
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                type: "fraction",
            }
        });  

        }
  });
