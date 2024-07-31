import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { usersProvider } from './user.provider';

@Module({
  providers: [UserService, ...usersProvider],
  controllers: [UserController],
})
export class UserModule {}
