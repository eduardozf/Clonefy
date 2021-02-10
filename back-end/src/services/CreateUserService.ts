import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import Users from '../database/models/Users';

interface IRequest {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    password,
    avatar,
  }: IRequest): Promise<Users> {
    const repository = getRepository(Users);

    const checkUserExists = await repository.findOne({
      where: { email },
    });

    if (checkUserExists) {
      throw new Error('Email adrees already used.');
    }

    const passwordHash = await hash(password, 8);

    const user = repository.create({
      name,
      email,
      password: passwordHash,
      avatar,
    });

    await repository.save(user);

    return user;
  }
}

export default CreateUserService;
