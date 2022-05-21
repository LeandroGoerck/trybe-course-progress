import IGenericStorage from "./IGenericStorage";
import MemoryStorage from "./MemoryStorage";

class PostService {
  private db: IGenericStorage;

  constructor(db: IGenericStorage = new MemoryStorage()) {
    this.db = db;
  }

  getPosts(): string[] {
    return this.db.read();
  }

  createPost(title: string): void {
    this.db.insert(title);
  }
}

export default PostService;