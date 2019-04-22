// import React from "react";

// export default function Test() {
//   let dates = [
//     "2019-04-22 09:00:00",
//     "2019-04-22 09:00:00",
//     "2019-04-23 09:00:00",
//     "2019-04-23 09:00:00",
//     "2019-04-23 09:00:00",
//     "2019-04-24 09:00:00",
//     "2019-04-24 09:00:00"
//   ];

//   let getFiveDaysWeather = dates => {
//     let parsedDates = [];
//     for (let key in dates) {
//       key = dates[key];
//       let date = key.split(" ")[0].split("-")[2];
//       let time = key.split(" ")[1].split(":")[0];
//       console.log("Date", date, time);
//       parsedDates.push(key);
//     }

//     let uniqueDate = [...new Set(parsedDates)];
//     function fiveDaysWeather(uniqueDate) {
//       let fiveDaysWeather = [];
//       for (let i = 0; i < 5; i++) {
//         fiveDaysWeather[i] = uniqueDate[i];
//       }
//       return fiveDaysWeather;
//     }
//     return fiveDaysWeather(uniqueDate);
//   };

//   console.log(getFiveDaysWeather(dates));

//   return (
//     <div>
//       <h1>Test</h1>
//       {dates[0]}
//     </div>
//   );
// }
