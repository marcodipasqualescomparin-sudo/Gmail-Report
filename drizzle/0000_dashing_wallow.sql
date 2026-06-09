CREATE TABLE `accesses` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`owner_id` int NOT NULL,
	`permission` varchar(100) NOT NULL,
	CONSTRAINT `accesses_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `andreani_reports` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`subject` varchar(500) NOT NULL,
	`priority` enum('ALTA','MEDIA','BASSA') NOT NULL,
	`summary` text,
	`sender` varchar(255),
	`message_id` varchar(255),
	`received_at` datetime NOT NULL,
	CONSTRAINT `andreani_reports_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `ddt_reports` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`report_type` enum('DDT','TRASFERIMENTO') NOT NULL,
	`report_number` varchar(100) NOT NULL,
	`sender` varchar(255),
	`recipient` varchar(255),
	`supplier` varchar(255),
	`product_category` enum('iPhone','iPad','MacBook','Apple Watch') NOT NULL,
	`quantity` int,
	`details` text,
	`message_id` varchar(255),
	`received_at` datetime NOT NULL,
	CONSTRAINT `ddt_reports_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `invites` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`email` varchar(255) NOT NULL,
	`token` varchar(100) NOT NULL,
	`expires_at` datetime NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `invites_id` PRIMARY KEY(`id`),
	CONSTRAINT `invites_token_unique` UNIQUE(`token`)
);
--> statement-breakpoint
CREATE TABLE `notifications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`title` varchar(500) NOT NULL,
	`message` text,
	`type` varchar(100),
	`report_type` varchar(50),
	`is_read` int NOT NULL DEFAULT 0,
	`created_at` timestamp DEFAULT (now()),
	CONSTRAINT `notifications_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` int AUTO_INCREMENT NOT NULL,
	`open_id` varchar(255) NOT NULL,
	`name` varchar(255),
	`email` varchar(255),
	`login_method` varchar(100),
	`last_signed_in` datetime,
	`role` varchar(50),
	CONSTRAINT `users_id` PRIMARY KEY(`id`),
	CONSTRAINT `users_open_id_unique` UNIQUE(`open_id`)
);
