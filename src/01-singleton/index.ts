class Singleton {
    private static instance: Singleton;

    private constructor() {}

    static getInstance(): Singleton {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }

        return Singleton.instance;
    }
}

const a = Singleton.getInstance();
const b = Singleton.getInstance();

console.log(a === b);