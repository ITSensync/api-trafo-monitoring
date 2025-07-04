-- CreateTable
CREATE TABLE `Log_Location` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trafo_id` VARCHAR(191) NOT NULL,
    `lat` DOUBLE NOT NULL,
    `lng` DOUBLE NOT NULL,
    `time` TIMESTAMP(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
