// 5. Dependency Inversion Principle

class Fetch {
    request(url) {
        return Promise.resolve('data from fetch');
    }
}

class LocalStorage {
    get() {
        const dataFromLocalStorage = 'data from local storage';
        return dataFromLocalStorage;
    }
}

class FetchClient {
    constructor() {
        // this.fetch() = new Fetch();
        this.localStorage = new LocalStorage();
    }

    clientGet(key) {
        return this.fetch.request('vk.get');
    }

}

class LocalStorageClient {
    constructor() {
        this.localStorage = new LocalStorage();
    }

    clientGet(key) {
        return this.localStorage.get(key);
    }

}

class Database {
    constructor(client) {
        this.client = client;
        this.localStorage = new LocalStorage();
    }

    getData(key) {
        return this.client.clientGet(key);
    }
}

const db = new Database(new LocalStorageClient());

console.log(db.getData('rand'));