import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import uploadConfig from '@config/upload'

import { Exclude, Expose } from 'class-transformer'

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;


  @Expose({ name: 'avatar_url' })
  getavatar_url(): string | null {
    if (!this.avatar) {
      return null;
    }

    switch (uploadConfig.driver) {
      case 'diskStorage':
        return this.avatar ? `${process.env.APP_API_URL}/files/${this.avatar}` : null

      case 'S3Storage':
        return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.avatar}`

      default:
        return null;
    }


  }
}

export default User;
