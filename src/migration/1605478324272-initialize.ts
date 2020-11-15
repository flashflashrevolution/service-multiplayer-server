import {MigrationInterface, QueryRunner} from "typeorm";

export class initialize1605478324272 implements MigrationInterface {
    name = 'initialize1605478324272'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `channel_log` (`id` int NOT NULL AUTO_INCREMENT, `name` text CHARACTER SET \"utf8\" NOT NULL, `creationDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `destructionDate` datetime NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `message_log` (`id` int NOT NULL AUTO_INCREMENT, `senderId` int(10) UNSIGNED NOT NULL DEFAULT '0', `sendDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `user_relations` (`id` int NOT NULL AUTO_INCREMENT, `ownerId` int(10) UNSIGNED NOT NULL DEFAULT '0', `relationId` int(10) UNSIGNED NOT NULL DEFAULT '0', `defined_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user_relations`");
        await queryRunner.query("DROP TABLE `message_log`");
        await queryRunner.query("DROP TABLE `channel_log`");
    }

}
