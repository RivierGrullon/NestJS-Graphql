import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author) private AuthorRepository: Repository<Author>,
  ) {}

  async create(createAuthorInput: CreateAuthorInput): Promise<Author> {
    const author = this.AuthorRepository.create(createAuthorInput);

    return await this.AuthorRepository.save(author);
  }

  async findAll(): Promise<Author[]> {
    return this.AuthorRepository.find();
  }

  findOne(id: number) {
    return this.AuthorRepository.findOne({
      where: {
        id,
      },
    });
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
