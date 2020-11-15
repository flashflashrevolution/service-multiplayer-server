import
{
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn
} from "typeorm";

@Entity({ name: "channel_log" })
export class Channel
{
    @PrimaryGeneratedColumn()
    id!: number;

    @Column(
        {
            charset: "utf8",
            type: "text",
        }
    )
    name!: string;

    @CreateDateColumn(
        {
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP",
            precision: null,
        }
    )
    creationDate!: Date;

    @Column()
    destructionDate!: Date;
}
