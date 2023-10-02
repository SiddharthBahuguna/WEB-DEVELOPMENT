let request = savetoDBPromise("apna college");
request
    .then(() => {
        console.log("promise was resolved");
    })
    .catch(() => {
        console.log("promise was rejected");
    });
