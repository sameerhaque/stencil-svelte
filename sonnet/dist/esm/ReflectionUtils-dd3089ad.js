class ReflectionUtils {
    static async getObjectReference(value, base) {
        if (!(base)) {
            base = await import('./index-ef159a7a.js');
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

export { ReflectionUtils as R };
