export class Post {
  body: string;
  id: number;
  title: string;
  userId: number;

  constructor(body: string,
              id: number,
              title: string,
              userId: number) {

    this.body = body;
    this.id = id;
    this.title = title;
    this.userId = userId;

  }


  getId() {
    return this.id;
  }
}
