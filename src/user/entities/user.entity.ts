// use/entities/user.entity.ts
import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ length: 100 })
  username: string; // 用户名

  @Column({ length: 100, default: ''})
  nickname: string;  //昵称

  @Column({ select: false})
  password: string;  // 密码

  @Column({default: ''})
  avatar: string;   //头像

  @Column({default: ''})
  email: string;

  @Column('simple-enum', { enum: ['root', 'author', 'visitor'] })
  role: string;   // 用户角色

  @Column({
    name: 'create_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  @Column({
    name: 'update_time',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateTime: Date;
  
  @BeforeInsert() 
  async encryptPwd() { 
    this.password = await bcrypt.hashSync(this.password); 
  } 
}
