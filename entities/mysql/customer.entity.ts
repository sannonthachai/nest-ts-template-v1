import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  citizenId: number;

  @Column()
  firstNameTh: string;

  @Column()
  lastNameTh: string;

  @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
  createdAt: string;
}
