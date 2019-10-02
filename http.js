const https = require("https");
console.log("Please enter a number of one of the news source:\n");
console.log("1. Daily Mail\n2. MTV News\n3. New York Magazine\n4. The New York Times\n");

process.stdin.once('data', (source_number)=>{

    var source_number = Number(source_number);

    function getNews () {

      const news_sources = {
        one: "daily-mail",
        two: "mtv-news",
        three: "new-york-magazine",
        four: "the-new-york-times"
      }
    if(source_number===1){
      const url = `https://newsapi.org/v2/top-headlines?sources=${news_sources.one}&pageSize=10&apiKey=ea45a6d9b1e446e8a212ecb5459e3848`;
      https
        .get(url, response => {
          let data = "";
          response.on("data", news => {
          data += news;});

        response.on("end", () => {
            res = JSON.parse(data);
            console.log("Res", res);});
          })

        .on("error", err => {
          error = err;
          console.log("Error", err);})
    }
    else if(source_number===2){
      const url = `https://newsapi.org/v2/top-headlines?sources=${news_sources.two}&pageSize=10&apiKey=ea45a6d9b1e446e8a212ecb5459e3848`;
      https
        .get(url, response => {
          let data = "";
          response.on("data", news => {
          data += news;});

        response.on("end", () => {
            res = JSON.parse(data);
            console.log("Res", res);});
          })

        .on("error", err => {
          error = err;
          console.log("Error", err);})
    }
    else if(source_number===3){
      const url = `https://newsapi.org/v2/top-headlines?sources=${news_sources.three}&pageSize=10&apiKey=ea45a6d9b1e446e8a212ecb5459e3848`;
      https
        .get(url, response => {
          let data = "";
          response.on("data", news => {
          data += news;});

        response.on("end", () => {
            res = JSON.parse(data);
            console.log("Res", res);});
          })

        .on("error", err => {
          error = err;
          console.log("Error", err);})
    }
    else if(source_number===4){
      const url = `https://newsapi.org/v2/top-headlines?sources=${news_sources.four}&pageSize=10&apiKey=ea45a6d9b1e446e8a212ecb5459e3848`;
      https
        .get(url, response => {
          let data = "";
          response.on("data", news => {
          data += news;});

        response.on("end", () => {
            res = JSON.parse(data);
            console.log("Res", res);});
          })

        .on("error", err => {
          error = err;
          console.log("Error", err);})
    }
    else{
      console.log('Please enter a valid input')
    }

    }
    console.log(getNews());
    })
    