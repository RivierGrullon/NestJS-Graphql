import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/posts/post.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Author {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  name: string;


  @OneToMany(() => Post, (post) => post.author, { eager: true })
  @JoinColumn({ name: 'authorId' })
  @Field(() => [Post], { nullable: true })
  posts?: Post[];
}
