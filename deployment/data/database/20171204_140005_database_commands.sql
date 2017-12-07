CREATE TABLE `zipcodehousenumber$country_passwordformat` (
	`zipcodehousenumber$countryid` BIGINT NOT NULL,
	`zipcodehousenumber$passwordformatid` BIGINT NOT NULL,
	PRIMARY KEY(`zipcodehousenumber$countryid`,`zipcodehousenumber$passwordformatid`),
	CONSTRAINT `uniq_zipcodehousen$countr_passwordfor_zipcodehousen$passwordform` UNIQUE (`zipcodehousenumber$passwordformatid`),
	CONSTRAINT `uniq_zipcodehousenum$countr_passwordfor_zipcodehousenum$countryi` UNIQUE (`zipcodehousenumber$countryid`));
CREATE INDEX `idx_zipcodehousenumber$country_passwordformat` ON `zipcodehousenumber$country_passwordformat` (`zipcodehousenumber$passwordformatid`,`zipcodehousenumber$countryid`);
INSERT INTO `mendixsystem$association` (`id`, 
`association_name`, 
`table_name`, 
`parent_entity_id`, 
`child_entity_id`, 
`parent_column_name`, 
`child_column_name`, 
`index_name`)
 VALUES ('e9ba1a40-fdbe-444f-a6a7-d6a11c2c8bcf', 
'ZipcodeHousenumber.country_PasswordFormat', 
'zipcodehousenumber$country_passwordformat', 
'ab6163dd-1c39-419d-8303-32949c7c9e07', 
'a74eb59c-743e-4821-855b-b08cc7509622', 
'zipcodehousenumber$countryid', 
'zipcodehousenumber$passwordformatid', 
'idx_zipcodehousenumber$country_passwordformat');
INSERT INTO `mendixsystem$unique_constraint` (`name`, 
`table_id`, 
`column_id`)
 VALUES ('uniq_zipcodehousen$countr_passwordfor_zipcodehousen$passwordform', 
'e9ba1a40-fdbe-444f-a6a7-d6a11c2c8bcf', 
'316dd404-777f-389f-8590-e1e34daababb');
INSERT INTO `mendixsystem$unique_constraint` (`name`, 
`table_id`, 
`column_id`)
 VALUES ('uniq_zipcodehousenum$countr_passwordfor_zipcodehousenum$countryi', 
'e9ba1a40-fdbe-444f-a6a7-d6a11c2c8bcf', 
'9e39cde2-f983-3bbc-988e-3c8e27dbb00a');
CREATE TABLE `zipcodehousenumber$passwordformat` (
	`id` BIGINT NOT NULL,
	`regex` NVARCHAR(200) NULL,
	`country` NVARCHAR(2) NULL,
	PRIMARY KEY(`id`));
INSERT INTO `mendixsystem$entity` (`id`, 
`entity_name`, 
`table_name`)
 VALUES ('a74eb59c-743e-4821-855b-b08cc7509622', 
'ZipcodeHousenumber.PasswordFormat', 
'zipcodehousenumber$passwordformat');
INSERT INTO `mendixsystem$attribute` (`id`, 
`entity_id`, 
`attribute_name`, 
`column_name`, 
`type`, 
`length`, 
`default_value`, 
`is_auto_number`)
 VALUES ('5ea779fd-740f-40fe-a816-400a933b6959', 
'a74eb59c-743e-4821-855b-b08cc7509622', 
'Regex', 
'regex', 
30, 
200, 
'', 
FALSE);
INSERT INTO `mendixsystem$attribute` (`id`, 
`entity_id`, 
`attribute_name`, 
`column_name`, 
`type`, 
`length`, 
`default_value`, 
`is_auto_number`)
 VALUES ('1deed00b-05f8-4c99-80ac-8268af8b43ea', 
'a74eb59c-743e-4821-855b-b08cc7509622', 
'Country', 
'country', 
30, 
2, 
'', 
FALSE);
UPDATE `mendixsystem$version`
 SET `versionnumber` = '4.2', 
`lastsyncdate` = '20171204 14:00:03';
