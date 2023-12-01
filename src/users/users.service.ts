import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma.service';
import NormalizedResponse from 'src/utils/normalized.response';
@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) { }


  public async create(createUserDto: CreateUserDto) {
    const createUser = new NormalizedResponse('User ${createUserDto.pseudo} has been created',
      await this.prisma.users.create({
        // await: Utilise dans les fonctions asynchrones. L'exécution du code va attendre la "promesse" retournée par this.prisma.users.create soit résolue avant de continuer.
        data: {
          //l'objet de données passé en paramètre à la méthode create
          Pseudo: createUserDto.pseudo,
          Mail: createUserDto.mail,
        },
      }),
    );
    return createUser.toJSON();
  }

  public async getUUID(uuid: string) {
    const getUserUID =  new NormalizedResponse('User ${UUID}', await this.prisma.users.findUnique({  // 
      where: {  //prisma va chercher l'UUID dans la BDD
        UUID: uuid,
      },
    }),
    );
    return getUserUID.toJSON();
  }

  public async updateUUID(uuid: string, updateUserDto: UpdateUserDto) {
    const updateUser =  new NormalizedResponse('User ${UUID} has been update', await this.prisma.users.update({
      where: {
        UUID: uuid,
      },
      data: {
        Pseudo: !!updateUserDto.pseudo ? updateUserDto.pseudo : undefined,
        Mail: !!updateUserDto.mail ? updateUserDto.mail : undefined,
      },
    }),);
    return updateUser.toJSON();
  }

  public async removeUUID(uuid: string) {
    const removeUser =  new NormalizedResponse('User ${UUID} has been removed',await this.prisma.users.delete({
      where: {
        UUID: uuid,
      },
    }),);
    return removeUser.toJSON();
  }


  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
