import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}
  async findAll(): Promise<Post[]> {
    const posts = await this.postRepository.find();
    return posts;
  }
  async createPost(post: CreatePostInput): Promise<Post> {
    const newPost = this.postRepository.create(post);
    return await this.postRepository.save(newPost);
  }

  async findProductById(id: number): Promise<Post> {
    return await this.postRepository.findOne({
      where: {
        id,
      },
    });
  }

  async DeletePost(id: number): Promise<Boolean> {
    const post = await this.findProductById(id);
    await this.postRepository.remove(post);
    return true;
  }
}
