import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm'
import { TProductStatus } from '@/handlers/product/handler.d'
import Brand from './brand.entity'

const ProductStatusEnum: Array<TProductStatus> = ['P', 'A']
const defaultStatus: TProductStatus = 'P'

@Entity()
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

  @Column({ type: 'enum', enum: ProductStatusEnum, default: defaultStatus })
  status: TProductStatus

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: string

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: string
}

export default Product
