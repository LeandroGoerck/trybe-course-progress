import MemoryStorage from "./MemoryStorage";
import PostService from "./PostService";

const ms = new MemoryStorage();
const postService = new PostService(ms);

console.log('1: storage', postService.getPosts());

postService.createPost('new post');
postService.createPost('another post');

console.log('2: storage', postService.getPosts());
