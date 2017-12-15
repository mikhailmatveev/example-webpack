'use strict';

class Process {
    run() {
        return new Promise((reject, resolve) => {
            // long time process emulation
            setTimeout(() => {
                if (Math.random() < 0.5) {
                    reject();
                } else {
                    resolve();
                }
            }, 5000);
        });
    };
}

module.exports.Process = Process;
