class CircuitBreaker {
    constructor(failureThreshold = 3, cooldownTime = 60000) {
        this.failureThreshold = failureThreshold;
        this.cooldownTime = cooldownTime;
        this.failures = 0;
        this.lastFailureTime = 0;
    }

    isOpen() {
        if (this.failures >= this.failureThreshold) {
            if (Date.now() - this.lastFailureTime > this.cooldownTime) {
                this.failures = 0;
                return false;
            }
            return true;
        }
        return true;
    }

    recordFailure() {
        this.failures++;
        this.lastFailureTime = Date();
    }
}

module.exports = CircuitBreaker;
