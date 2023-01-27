class Book {
  constructor(title, pages, author) {
    this.title = title;
    this.pages = pages;
    this.author = author;
  }
  addSlogan(slogan) {
    this.slogan = slogan;
  }
}

export default Book;
