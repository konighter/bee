BEGIN;
CREATE TABLE `tbl_resume` (
    `id` bigint NOT NULL PRIMARY KEY,
    `url` varchar(500) NOT NULL
)
;
CREATE TABLE `tbl_candidate` (
    `id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `name` varchar(20) NOT NULL,
    `email` varchar(100) NOT NULL,
    `phone` varchar(20) NOT NULL,
    `qq` varchar(20) NOT NULL,
    `degree` varchar(10) NOT NULL,
    `school` varchar(50) NOT NULL,
    `onjob` bool NOT NULL,
    `input_date` datetime NOT NULL,
    `resume_id` bigint NOT NULL
)
;

CREATE TABLE `tbl_candidate_positon` (
    `id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `position_id` integer NOT NULL,
    `candidate_id` integer NOT NULL,
    UNIQUE (`position_id`, `candidate_id`)
)
;


CREATE TABLE `tbl_position` (
    `id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `name` varchar(50) NOT NULL,
    `classify` varchar(50) NOT NULL,
    `base` varchar(50) NOT NULL,
    `jobtype` varchar(50) NOT NULL,
    `experience_required` varchar(50) NOT NULL,
    `degree_required` varchar(50) NOT NULL,
    `office_address` varchar(200) NOT NULL,
    `achieve_email` varchar(200) NOT NULL,
    `description` longtext NOT NULL,
    `keywords` varchar(200) NOT NULL,
    `create_date` datetime NOT NULL,
    `publish_date` datetime NOT NULL,
    `update_date` datetime NOT NULL
)
;

CREATE TABLE `tbl_hunter_position` (
    `id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `hunter_id` integer NOT NULL,
    `position_id` integer NOT NULL,
    UNIQUE (`hunter_id`, `position_id`)
)
;

CREATE TABLE `tbl_hunter` (
    `id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `name` varchar(50) NOT NULL,
    `qq` varchar(50) NOT NULL,
    `email` varchar(75) NOT NULL,
    `phone` varchar(50) NOT NULL,
    `level` varchar(2) NOT NULL,
    `tags` varchar(200) NOT NULL,
    `sts` varchar(2) NOT NULL,
    `reg_date` datetime NOT NULL
)
;

CREATE TABLE `tbl_position_trace` (
    `id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `positon_id` integer NOT NULL,
    `operator_id` bigint NOT NULL,
    `operator_type` varchar(20) NOT NULL,
    `operation` varchar(200) NOT NULL,
    `update_date` datetime NOT NULL
)
;

CREATE TABLE `tbl_customer` (
    `id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `name` varchar(100) NOT NULL,
    `industy` varchar(100) NOT NULL,
    `contact` varchar(50) NOT NULL,
    `phone` varchar(50) NOT NULL,
    `email` varchar(75) NOT NULL,
    `address` varchar(200) NOT NULL,
    `cust_service` varchar(200) NOT NULL,
    `level` varchar(1) NOT NULL,
    `sts` varchar(1) NOT NULL,
    `reg_date` datetime NOT NULL
)
;
CREATE TABLE `tbl_staff_groups` (
    `id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `staff_id` integer NOT NULL,
    `group_id` integer NOT NULL,
    UNIQUE (`staff_id`, `group_id`)
)
;

CREATE TABLE `tbl_staff_user_permissions` (
    `id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `staff_id` integer NOT NULL,
    `permission_id` integer NOT NULL,
    UNIQUE (`staff_id`, `permission_id`)
)
;

CREATE TABLE `tbl_staff` (
    `id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `password` varchar(128) NOT NULL,
    `last_login` datetime NOT NULL,
    `is_superuser` bool NOT NULL,
    `username` varchar(30) NOT NULL UNIQUE,
    `first_name` varchar(30) NOT NULL,
    `last_name` varchar(30) NOT NULL,
    `email` varchar(75) NOT NULL,
    `is_staff` bool NOT NULL,
    `is_active` bool NOT NULL,
    `date_joined` datetime NOT NULL,
    `phone` varchar(50) NOT NULL
)
;

CREATE TABLE `tbl_menu` (
    `id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `type` varchar(4) NOT NULL,
    `title` varchar(50) NOT NULL,
    `code` varchar(50) NOT NULL,
    `url` varchar(200) NOT NULL,
    `belongTo` varchar(50) NOT NULL,
    `index` integer NOT NULL,
    `createDate` datetime NOT NULL,
    `status` varchar(4) NOT NULL
)
;
CREATE TABLE `django_admin_log` (
    `id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `action_time` datetime NOT NULL,
    `user_id` integer NOT NULL,
    `content_type_id` integer,
    `object_id` longtext,
    `object_repr` varchar(200) NOT NULL,
    `action_flag` smallint UNSIGNED NOT NULL,
    `change_message` longtext NOT NULL
)
;

CREATE TABLE `auth_permission` (
    `id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `name` varchar(50) NOT NULL,
    `content_type_id` integer NOT NULL,
    `codename` varchar(100) NOT NULL,
    UNIQUE (`content_type_id`, `codename`)
)
;

CREATE TABLE `auth_group_permissions` (
    `id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `group_id` integer NOT NULL,
    `permission_id` integer NOT NULL,
    UNIQUE (`group_id`, `permission_id`)
)
;

CREATE TABLE `auth_group` (
    `id` integer AUTO_INCREMENT NOT NULL PRIMARY KEY,
    `name` varchar(80) NOT NULL UNIQUE
)
;

ALTER TABLE `tbl_staff_groups` ADD CONSTRAINT `staff_id_refs_id_dbe6af20` FOREIGN KEY (`staff_id`) REFERENCES `tbl_staff` (`id`);
ALTER TABLE `tbl_staff_user_permissions` ADD CONSTRAINT `staff_id_refs_id_1d2aabcc` FOREIGN KEY (`staff_id`) REFERENCES `tbl_staff` (`id`);

ALTER TABLE `django_admin_log` ADD CONSTRAINT `content_type_id_refs_id_93d2d1f8` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);
ALTER TABLE `django_admin_log` ADD CONSTRAINT `user_id_refs_id_351c783e` FOREIGN KEY (`user_id`) REFERENCES `tbl_staff` (`id`);

ALTER TABLE `auth_group_permissions` ADD CONSTRAINT `group_id_refs_id_f4b32aac` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);
ALTER TABLE `auth_group_permissions` ADD CONSTRAINT `permission_id_refs_id_6ba0f519` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`);
ALTER TABLE `auth_permission` ADD CONSTRAINT `content_type_id_refs_id_d043b34a` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

ALTER TABLE `tbl_candidate` ADD CONSTRAINT `resume_id_refs_id_48f670a2` FOREIGN KEY (`resume_id`) REFERENCES `tbl_resume` (`id`);
ALTER TABLE `tbl_candidate_positon` ADD CONSTRAINT `candidate_id_refs_id_a66d8882` FOREIGN KEY (`candidate_id`) REFERENCES `tbl_candidate` (`id`);
ALTER TABLE `tbl_staff_groups` ADD CONSTRAINT `group_id_refs_id_6e31ad7e` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);
ALTER TABLE `tbl_staff_user_permissions` ADD CONSTRAINT `permission_id_refs_id_496b28fd` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`);

ALTER TABLE `tbl_hunter_position` ADD CONSTRAINT `hunter_id_refs_id_f04886fa` FOREIGN KEY (`hunter_id`) REFERENCES `tbl_hunter` (`id`);
ALTER TABLE `tbl_position_trace` ADD CONSTRAINT `positon_id_refs_id_ddf9b60a` FOREIGN KEY (`positon_id`) REFERENCES `tbl_position` (`id`);
ALTER TABLE `tbl_hunter_position` ADD CONSTRAINT `position_id_refs_id_892c347e` FOREIGN KEY (`position_id`) REFERENCES `tbl_position` (`id`);
ALTER TABLE `tbl_candidate_positon` ADD CONSTRAINT `position_id_refs_id_8fd2bc73` FOREIGN KEY (`position_id`) REFERENCES `tbl_position` (`id`);

CREATE INDEX `auth_permission_37ef4eb4` ON `auth_permission` (`content_type_id`);
CREATE INDEX `auth_group_permissions_5f412f9a` ON `auth_group_permissions` (`group_id`);
CREATE INDEX `auth_group_permissions_83d7f98b` ON `auth_group_permissions` (`permission_id`);
CREATE INDEX `django_admin_log_6340c63c` ON `django_admin_log` (`user_id`);
CREATE INDEX `django_admin_log_37ef4eb4` ON `django_admin_log` (`content_type_id`);
CREATE INDEX `tbl_candidate_dd710737` ON `tbl_candidate` (`resume_id`);
CREATE INDEX `tbl_candidate_positon_1f456125` ON `tbl_candidate_positon` (`position_id`);
CREATE INDEX `tbl_candidate_positon_4ff051c7` ON `tbl_candidate_positon` (`candidate_id`);
CREATE INDEX `tbl_hunter_position_628e9e90` ON `tbl_hunter_position` (`hunter_id`);
CREATE INDEX `tbl_hunter_position_1f456125` ON `tbl_hunter_position` (`position_id`);
CREATE INDEX `tbl_position_trace_a2fdfc22` ON `tbl_position_trace` (`positon_id`);
CREATE INDEX `tbl_staff_groups_f0a7d083` ON `tbl_staff_groups` (`staff_id`);
CREATE INDEX `tbl_staff_groups_5f412f9a` ON `tbl_staff_groups` (`group_id`);
CREATE INDEX `tbl_staff_user_permissions_f0a7d083` ON `tbl_staff_user_permissions` (`staff_id`);
CREATE INDEX `tbl_staff_user_permissions_83d7f98b` ON `tbl_staff_user_permissions` (`permission_id`);
COMMIT;
