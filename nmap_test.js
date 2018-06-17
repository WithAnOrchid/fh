var exec = require("child_process").exec;
dir = exec("sudo arp-scan --interface=wlan0 --localnet | sort -V | grep -P '^[0-9]\{1,3\}' | awk -v OFS=\",\" '{ print $1, $2 }'", function(err, stdout, stderr) {
    if (err) {
        // should have err.code here?
    }
    console.log(stdout);

});

dir.on('exit', function (code) {
    // exit code is code
});