var exec = require("child_process").exec;



function test() {


    var p = new Promise((resolve, reject) => {
        exec("sudo arp-scan --interface=wlan0 --localnet | sort -V | grep -P '^[0-9]\{2,3\}' | awk -v OFS=\",\" '{ print $1, $2 }'", function (err, report) {
        if (err) {
            console.log("error");
            reject(err)
        } else {

            resolve(report);
        }
    });
});

    p.then((results) => {
        console.log(results);

}).catch((err) => {
        console.log("-*-*- ERROR scan -*-*-");
    console.log(err);
})

}

test();