import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { CreatePostInput } from './dto/create-post.input';

@Resolver()
export class PostsResolver {
  constructor(private PostsService: PostsService) {}

  @Query((returns) => [Post])
  posts() {
    return this.PostsService.findAll();
  }

  @Mutation((returns) => Post)
  createPost(@Args('postInput') postInput: CreatePostInput) {
    return this.PostsService.createPost(postInput);
  }

  @Query((returns) => Post)
  post(@Args('id', { type: () => Int }) id: number) {
    return this.PostsService.findProductById(id);
  }

  @Mutation(() => Boolean)
  deletePost(@Args('id', { type: () => Int }) id: number) {
    return this.PostsService.DeletePost(id);
  }
}
