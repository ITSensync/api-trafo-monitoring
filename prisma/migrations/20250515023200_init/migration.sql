-- CreateTable
CREATE TABLE `Trafo` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `trafo_id` VARCHAR(191) NOT NULL,
    `suhu` DECIMAL(10, 1) NOT NULL,
    `volt` DECIMAL(10, 1) NOT NULL,
    `arus1` DECIMAL(10, 1) NOT NULL,
    `arus2` DECIMAL(10, 1) NOT NULL,
    `arus3` DECIMAL(10, 1) NOT NULL,
    `status` BOOLEAN NOT NULL,
    `feedback` VARCHAR(191) NULL,

    UNIQUE INDEX `Trafo_trafo_id_key`(`trafo_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TrafoLocation` (
    `id` VARCHAR(191) NOT NULL,
    `lat` DOUBLE NOT NULL,
    `lang` DOUBLE NOT NULL,
    `trafo_id` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `TrafoLocation_trafo_id_key`(`trafo_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
