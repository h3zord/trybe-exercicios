// const getPlanet = () => {
//     setTimeout(() => {
//         const mars = {
//             name: "Mars",
//             distanceFromSun: {
//               value: 227900000,
//               measurementUnit: "kilometers",
//             },
//           };
//           console.log("Returned planet: ", mars);
//     }, 4000);
    
//   };
  
//   getPlanet(); // imprime Marte depois de 4 segundos



//   const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo

// const sendMarsTemperature = () => {
//     setTimeout(() => {
//         return console.log(`Mars temperature is: ${getMarsTemperature()} degree Celsius`);
//     }, messageDelay())
// }

// sendMarsTemperature(); // imprime "Mars temperature is: 20 degree Celsius", por exemplo

// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

// const temperatureInFahrenheit = (temperature) =>
//   console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

// const greet = (temperature) =>
//   console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// // definição da função sendMarsTemperature...

// function sendMarsTemperature(callback) {
//     setTimeout(() => {
//         callback(getMarsTemperature())
//     }, messageDelay);

// }

// sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
// sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo

const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
}

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

const handleError = (errorReason) =>
  console.log(`Error getting temperature: ${errorReason}`);

// definição da função sendMarsTemperature...

function sendMarsTemperature (callback, err) {
    const randomNumer = Math.floor(Math.random() * 11);

    setTimeout(() => {
        if (randomNumer >= 6) return callback(getMarsTemperature());
        return err('Robot is busy')
    }, messageDelay())
}

// imprime "It is currently 47ºF at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(temperatureInFahrenheit, handleError);

// imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo, ou "Error getting temperature: Robot is busy"
sendMarsTemperature(greet, handleError);