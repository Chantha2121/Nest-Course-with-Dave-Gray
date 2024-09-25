import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'John',
            email: 'john@example.com',
            role: 'ADMIN'
        },
        {
            id: 2,
            name: 'Jem',
            email: 'jem@example.com',
            role: 'ENGINEER'
        },
        {
            id: 3,
            name: 'Chantha',
            email: 'chantha@example.com',
            role: 'INTERN'
        },
        {
            id: 4,
            name: 'Heng',
            email: 'heng@example.com',
            role: 'ADMIN'
        },
        {
            id: 5,
            name: 'Chia',
            email: 'chia@example.com',
            role: 'ENGINEER'
        }
    ]

    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN'){
        if(role){
            return this.users.filter(user => user.role === role)
        }
    }

    // Find user by Id
    findOne(id: number){
        const users = this.users.find(user => user.id === id)
        return users
    }

    // Create a new user
    create(user: { name : string, email : string, role : 'INTERN' | 'ENGINEER' | 'ADMIN' }){
        const userByHighId = this.users.sort((a,b) => b.id - a.id)
        const newUser = {
            id: userByHighId[0].id + 1,
            ...user
        }
        this.users.push(newUser)
        return newUser
    }

    // Update user by ID
    update(id: number, updateUser: { name ?: string, email ?: string, role ?: 'INTERN' | 'ENGINEER' | 'ADMIN' }){
        this.users = this.users.map(user =>{
            if(user.id === id){
                return {...user, ...updateUser}
            }
            return user
        })

        return this.findOne(id)
    }
    
    // Delete user by Id
    delete(id: number){
        const removeUser = this.findOne(id)

        this.users = this.users.filter(user => user.id !== id)
        return removeUser

    }
    
}
