import
{
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn
} from "typeorm";

@Entity({ name: "user_relations" })
export class UserRelations
{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column(
        {
            default: 0,
            type: "int",
            unique: false,
            unsigned: true,
            width: 10,
        })
    ownerId!: number;

    @Column(
        {
            default: 0,
            type: "int",
            unique: false,
            unsigned: true,
            width: 10,
        })
    relationId!: number;

    @CreateDateColumn(
        {
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP",
            precision: null,
        }
    )
    defined_at!: Date;
}
