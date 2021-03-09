import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
class Brand {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  code: string

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: string
}

export default Brand
