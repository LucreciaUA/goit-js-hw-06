const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleries = document.querySelector(`.gallery`);


const album = images.map(({ url, alt }) =>{
  const image = `<li><img src="${url}" alt=""${alt} width = "300"></li>`;
  return image;
}).join(' ')

galleries.style.display = "flex";
galleries.style.flexWrap = "wrap"
galleries.style.gap = "10px"
galleries.style.listStyle = "none"
galleries.style.maxWidth ="650px"




galleries.insertAdjacentHTML("beforeend", album)
