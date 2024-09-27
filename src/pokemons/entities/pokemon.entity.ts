import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Pokemon {
  @PrimaryColumn()
  id: number;

  @Column()
  base_experience: number;

  @Column()
  name: string;

  @Column()
  url: string;

  @Column({ nullable: true })
  rating: number;
}
