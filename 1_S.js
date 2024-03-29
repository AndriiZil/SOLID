// 1. Single Responsibility Principle

class News {
    constructor(title, text) {
        this.title = title;
        this.text = text;
        this.modified = false;
    }

    update(text) {
        this.text = text;
        this.modified = true
    }
}

class NewsPrinter {
    constructor(news) {
        this.news = news;
    }

    html() {
        return `
      <div>
        <h1>${this.news.title}</h1>
        <h1>${this.news.text}</h1>
      </div>
    `
    }

    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2)
    }

    xml() {
        return `
      <news>
        <title>${this.news.title}</title>
        <text>${this.news.text}</text>
      </news>
    `
    }
}

const printer = new NewsPrinter(
    new News('Putin', 'New Constructor')
);

console.log(printer.html());
console.log(printer.xml());
console.log(printer.json());