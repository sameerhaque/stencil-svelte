'use strict';

class ReflectionUtils {
    static async getObjectReference(value, base) {
        if (!(base)) {
            base = await Promise.resolve().then(function () { return require('./index-cacb60f2.js'); });
        }
        return value.split('.').reduce(function (obj, i) {
            const reference = obj[i];
            if (reference) {
                return reference;
            }
            throw Error(`Argument value with value ${value} does not exist.`);
        }, base);
    }
}

exports.ReflectionUtils = ReflectionUtils;
