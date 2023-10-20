import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('movies')
class Movie {
    @PrimaryGeneratedColumn('increment')
    id: number
    @Column({length:50, unique : true, nullable: false})
    name: string
    @Column({type: 'text'})
    description: string
    @Column({ type: 'integer', nullable: false })
    duration: number
    @Column({ type: 'integer', nullable: false })
    price: number
}

export default Movie;
