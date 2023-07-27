let movies = [
    {
        name: "Falcon and the winter soldier",
        des:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium provident quaerat in expedita quia recusandae aspernatur eaque labore deserunt saepe maxime, hic dolores inventore quis totam tenetur aliquid fuga facere!",
        image: "images/slider 2.png"
    },

    {
        name: "Loki",
        des:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium provident quaerat in expedita quia recusandae aspernatur eaque labore deserunt saepe maxime, hic dolores inventore quis totam tenetur aliquid fuga facere!",
        image: "images/slider 1.png"
    },

    {
        name: "Wanda Vision",
        des:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium provident quaerat in expedita quia recusandae aspernatur eaque labore deserunt saepe maxime, hic dolores inventore quis totam tenetur aliquid fuga facere!",
        image: "images/slider 3.png"
    },

    {
        name: "Raya and the last dragon",
        des:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium provident quaerat in expedita quia recusandae aspernatur eaque labore deserunt saepe maxime, hic dolores inventore quis totam tenetur aliquid fuga facere!",
        image: "images/slider 4.png"
    },

    {
        name: "luca",
        des:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium provident quaerat in expedita quia recusandae aspernatur eaque labore deserunt saepe maxime, hic dolores inventore quis totam tenetur aliquid fuga facere!",
        image: "images/slider 5.png"
    },

];

const caraousel=document.querySelector('.caraousel');
let slidder=[];

let slideIndex=0;

const createslide = ()=> {
    if(slideIndex>=movies.length){
        slideIndex=0;
    }

    let slide = document.createElement('div');
    var imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    // slidder.appendChild(content);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    caraousel.appendChild(slide);

    imgElement.src=movies[slideIndex].image;
    slideIndex++;

    slide.className = "slidder";
    content.className = "slide-content";
    h1.className = "movie-title";
    p.className = "movie-des";

    slidder.push(slide);

    if(slidder.length)
    {
        slidder[0].style.marginLeft = `calc(-${100 * (slidder.length - 2)}% - ${
            30 * (slidder.length - 2)
        }px)`;
    }
}

for(let i=0;i<3;i++){
    createslide();
}

setInterval(()=>{
    createslide();
}, 3000);

//video card

const videoscard = [...document.querySelectorAll('.video-card')]

videoscard.forEach(item =>{
    item.addEventListener('mouseover',()=>{
        let video = item.children[1];
        video.play()
    })
    item.addEventListener('mouseleave',()=>{
        let video = item.children[1];
    });
});

//card slidder
let cardcontainer = [...document.querySelectorAll('.card-container')];
let prebtn = [...document.querySelectorAll('.pre-btn')];
let nxtbtn = [...document.querySelectorAll('.nxt-btn')];

cardcontainer.forEach((item,i)=>{
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtbtn[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth - 200;
    })

    prebtn[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth + 200;
    })
})


