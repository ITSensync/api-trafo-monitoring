-- CreateTable
CREATE TABLE `Log_Stats` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `time` TIMESTAMP(3) NOT NULL,
    `total_temp` INTEGER NOT NULL,
    `total_volt` INTEGER NOT NULL,
    `total_arus1` INTEGER NOT NULL,
    `total_arus2` INTEGER NOT NULL,
    `total_arus3` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
