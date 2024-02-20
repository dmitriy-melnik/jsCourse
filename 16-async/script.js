'use strict';

// instead if https://restcountries.eu/rest/v2/
// use https://countries-api-836d.onrender.com/countries/

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// const renderCountry = function (data) {
//     const htmlCountry = `
//         <article class="country">
//           <img class="country__img" src="${data.flag}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//           </div>
//         </article>
//     `;
//     countriesContainer.insertAdjacentHTML('beforeend', htmlCountry);
//     countriesContainer.style.opacity = 1;
// }
//
// const getCountryData = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
//     request.send();
//
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data)
//
//         renderCountry(data);
//     });
// }
//
// const getCountryAndSosedi = function (country) {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://countries-api-836d.onrender.com/countries/name/${country}`);
//     request.send();
//
//     request.addEventListener('load', function () {
//         const [data] = JSON.parse(this.responseText);
//         console.log(data)
//
//         renderCountry(data);
//
//         const sosed = data.borders?.[0];
//         console.log('1 sosed: ' + sosed)
//     });
// }

// getCountryData('ukraine')
// getCountryAndSosedi('canada')

// 1111111111111

// const callReverseGeocoding = function (lat, lng, errorMsg = 'Something went wrong') {
//
//     const url = `https://geocode.xyz/${lat},${lng}?geoit=json`;
//
//     return fetch(url)
//         .then((response) => {
//             console.log('returning json')
//             if (!response.ok) {
//                 throw new Error(errorMsg);
//             }
//             return response.json();
//         })
//         .then(respJson => {
//             console.log('returning resp json')
//             return respJson;
//             // console.log(respJson)
//         })
//         .catch(err => {
//             console.log(err);
//             alert(errorMsg);
//         });
// }
//
//
// const whereAmI = function (lat, lng) {
//
//     callReverseGeocoding(lat, lng)
//         .then((response) => {
//             console.log(response)
//             console.log('You are in ' + response.city + ', ' + response.country);
//         })
//         .catch(err => {
//             console.log(err);
//         });
// }
//
// whereAmI(52.508, 13.381);

// 222222222222

// const imgContainer = document.querySelector('.images');
//
// const wait = function (seconds) {
//     return new Promise(function (resolve) {
//         setTimeout(resolve, seconds * 1000);
//     });
// };
//
// const createImg = function (imgPath) {
//
//     return new Promise((resolve, reject) => {
//         let createdImg = document.createElement("img");
//         createdImg.setAttribute('src', imgPath);
//
//         createdImg.addEventListener('load', function () {
//             imgContainer.append(createdImg);
//             resolve(createdImg);
//         })
//
//         createdImg.addEventListener('error', function () {
//             reject(new Error('Image error'));
//         })
//
//     });
//
// }
//
// let currentImg;
//
// createImg('img/img-1.jpg')
//     .then(img => {
//         currentImg = img;
//         console.log('Image 1 loaded')
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//         return createImg('img/img-2.jpg');
//     })
//     .then((img) => {
//         currentImg = img;
//         console.log('Image 2 loaded');
//         return wait(2);
//     })
//     .then(() => {
//         currentImg.style.display = 'none';
//     })
//     .catch(err => {
//         console.error(err)
//     })


// const getPosition = function () {
//     return new Promise(function (resolve, reject) {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     });
// };
//
// const whereAmI = async function () {
//     try {
//
//         console.log('000')
//
//         // Geolocation
//         const pos = await getPosition();
//         const { latitude: lat, longitude: lng } = pos.coords;
//
//         console.log('111')
//
//         // Reverse geocoding
//         const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//         if (!resGeo.ok) throw new Error('Problem getting location data');
//
//         console.log('222')
//
//         const dataGeo = await resGeo.json();
//         console.log(dataGeo);
//
//         console.log('333')
//
//         // Country data
//         const res = await fetch(
//             `https://countries-api-836d.onrender.com/countries/name/${dataGeo.country}`
//         );
//
//         // FIX:
//         if (!res.ok) throw new Error('Problem getting country');
//
//         const data = await res.json();
//         console.log(data);
//         // renderCountry(data[0]);
//     } catch (err) {
//         console.error(`${err} 💥`);
//         // renderError(`💥 ${err.message}`);
//     }
// };
// whereAmI();

// 333333333

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};

const imgContainer = document.querySelector('.images');

const createImage = function (imgPath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
        img.src = imgPath;

        img.addEventListener('load', function () {
            imgContainer.append(img);
            resolve(img);
        });

        img.addEventListener('error', function () {
            reject(new Error('Image not found'));
        });
    });
};

let currentImg;

const loadNPause = async function () {
    try {
        // Load image 1
        let img = await createImage('img/img-1.jpg');
        console.log('Image 1 loaded');
        await wait(2);
        img.style.display = 'none';

        // Load image 1
        img = await createImage('img/img-2.jpg');
        console.log('Image 2 loaded');
        await wait(2);
        img.style.display = 'none';
    } catch (err) {
        console.error(err);
    }
};
// loadNPause();

const loadAll = async function (imgArr) {
    try {
        const imgs = imgArr.map(async img => await createImage(img));
        const imgsEl = await Promise.all(imgs);
        console.log(imgsEl);
        imgsEl.forEach(img => img.classList.add('parallel'));
    } catch (err) {
        console.error(err);
    }
};
loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);




