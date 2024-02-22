import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsOptional, IsPositive, MaxLength, } from 'class-validator';
@InputType()
export class CreatePostInput {
  @MaxLength(100)
  @IsNotEmpty()
  @Field(() => String)
  title: string;

  @MaxLength(400)
  @IsOptional()
  @Field({ nullable: true })
  content?: string;

  @Field()
  @IsInt()
  @IsPositive()
  authorId: number;
}
