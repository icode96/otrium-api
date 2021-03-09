import {
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import Brand from './brand.entity'

@Entity()
@Unique(['slug'])
class Product {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  slug: string

  @Column()
  sku: string

  @OneToOne(() => Brand)
  @JoinColumn()
  brand: Brand

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: string
}

export default Product
