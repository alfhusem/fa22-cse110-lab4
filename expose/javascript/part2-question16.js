for (let key in statistics) {
    if (key[0] == "r" || statistics[key] % 2) {
        console.log(statistics[key]);
    }
}