function logTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
    setTimeout(logTime, 1000);
}
setTimeout(logTime, 1000);c