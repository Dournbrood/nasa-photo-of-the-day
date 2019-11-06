import React from "react";
import "../App.css";

const APODCard = (propsObj) => {
    return (
        <div className="card-container">
            {/* Data received is props.data.config, props.data.data, so on and so forth. Data snippet at bottom of code. */}
            <h1>APOD for {propsObj.response.date}: {propsObj.response.title}.</h1>
            <img src={propsObj.response.url} alt="spaaaace" />
            <p><a href={propsObj.response.hdurl}>View original size</a></p>
            <p>{propsObj.response.explanation}</p>
        </div>
    );
}

export default APODCard;

// {
//     "data": {
//       "date": "2019-11-06",
//       "explanation": "One of the last entries in Charles Messier's famous catalog, big, beautiful spiral galaxy M101 is definitely not one of the least. About 170,000 light-years across, this galaxy is enormous, almost twice the size of our own Milky Way Galaxy. M101 was also one of the original spiral nebulae observed with Lord Rosse's large 19th century telescope, the Leviathan of Parsonstown. In contrast, this multiwavelength view of the large island universe is a composite of images recorded by space-based telescopes in the 21st century. Color coded from X-rays to infrared wavelengths (high to low energies), the image data was taken from the Chandra X-ray Observatory (purple), the Galaxy Evolution Explorer (blue), Hubble Space Telescope(yellow), and the Spitzer Space Telescope(red). While the X-ray data trace the location of multimillion degree gas around M101's exploded stars and neutron star and black hole binary star systems, the lower energy data follow the stars and dust that define M101's grand spiral arms. Also known as the Pinwheel Galaxy, M101 lies within the boundaries of the northern constellation Ursa Major, about 25 million light-years away.",
//       "hdurl": "https://apod.nasa.gov/apod/image/1911/M101_nasaMultiW.jpg",
//       "media_type": "image",
//       "service_version": "v1",
//       "title": "21st Century M101",
//       "url": "https://apod.nasa.gov/apod/image/1911/M101_nasaMultiW1024.jpg"
//     },
//     "status": 200,
//     "statusText": "OK",
//     "headers": {
//       "content-type": "application/json"
//     },
//     "config": {
//       "url": "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
//       "method": "get",
//       "headers": {
//         "Accept": "application/json, text/plain, */*"
//       },
//       "transformRequest": [
//         null
//       ],
//       "transformResponse": [
//         null
//       ],
//       "timeout": 0,
//       "xsrfCookieName": "XSRF-TOKEN",
//       "xsrfHeaderName": "X-XSRF-TOKEN",
//       "maxContentLength": -1
//     },
//     "request": {}
//   }