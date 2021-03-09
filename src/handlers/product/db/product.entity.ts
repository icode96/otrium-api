import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm'
import Brand from './brand.entity'

@Entity()
class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column({ unique: true })
  slug: string

  @Column()
  sku: string

  @ManyToOne(() => Brand)
  @JoinColumn()
  brand: Brand

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: string
}

export default Product
