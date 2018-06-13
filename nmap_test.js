var exec = require("child_process").exec;
dir = exec("ls -la", function(err, stdout, stderr) {
    if (err) {
        // should have err.code here?
    }
    console.log(stdout);
});

dir.on('exit', function (code) {
    // exit code is code
});