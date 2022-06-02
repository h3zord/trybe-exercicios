async function getCrypto() {
    try {
    const url = `https://api.coincap.io/v2/assets`;
    const response = await fetch(url);
    const data = await response.json();
    const arrayData = data.data;
    return arrayData;

  } catch(error) {
        console.log(`Algo de errado não está certo`);
    }
  }


const showCoin = async () => {
    const coins = await getCrypto();
    const recoverUl = document.getElementById('coinContainer');
    coins.forEach(element => {
      const createLi = document.createElement('li');
        createLi.innerHTML = `${element.name} (${element.symbol}): $${element.priceUsd}`;
        recoverUl.appendChild(createLi);
    });

}

window.onload = () => showCoin();

  // const setCoins = async () => {
  //   const coins = await getCrypto();
  
  //   const coinsList = document.getElementById('coinContainer');
  
  //   coins.forEach((coin) => {
  //     const newLi = document.createElement('li');
  //     const usdPrice = Number(coin.priceUsd);
  
  //     newLi.innerText = `${coin.name} (${coin.symbol}): ${usdPrice.toFixed(2)}`;
  
  //     coinsList.appendChild(newLi);
  //   });
  // }
  
  // window.onload = () => setCoins()