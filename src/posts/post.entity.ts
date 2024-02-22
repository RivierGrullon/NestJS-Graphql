import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Author } from 'src/authors/entities/author.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Post {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  title: string;

  @Column({ type: 'text', nullable: true })
  @Field({ nullable: true })
  content?: string;

  @Column()
  @Field(() => Int)
  authorId: number;

  @ManyToOne(() => Author, (author) => author.posts, {
    lazy: true,
  })
  @JoinColumn({
    name: 'authorId',
  })
  @Field(() => Author)
  author: Author;
}
