import
{
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn
} from "typeorm";

@Entity({ name: "message_log" })
export class Message
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
    senderId!: number;
    
    @CreateDateColumn(
        {
            type: "timestamp",
            default: () => "CURRENT_TIMESTAMP",
            precision: null,
        }
    )
    sendDate!: Date;
}
