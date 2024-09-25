import { Body, Controller, Delete, Get, Param, Patch, Post, Query, ParseIntPipe } from '@nestjs/common';
import {UsersService} from './users.service'
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersevive: UsersService){}

    @Get() // GET /users?role=value
    findAll(@Query('role') role ?: 'INTERN' | 'ADMIN' | 'ENGINEER'){
        return this.usersevive.findAll(role)
    }

    @Get(':id') // GET /users/:id
    findOne(@Param('id',ParseIntPipe) id : number){
        return this.usersevive.findOne(id)
    }

    @Post() // POST /users
    create(@Body() createUserDto : CreateUserDto){
        return this.usersevive.create(createUserDto)
    }

    @Patch(':id') // PATCH /users/:id
    update(@Param('id', ParseIntPipe) id: number, @Body() userUpdate: {name ?: string, email ?: string, role ?: 'INTERN' | 'ENGINEER' | 'ADMIN'}){
        return this.usersevive.update(id, userUpdate);
    }

    @Delete(':id') // DELETE /users/:id
    delete(@Param('id', ParseIntPipe) id: number){
        return this.usersevive.delete(id);
    }
    
}
