ALTER TABLE `zipcodehousenumber$country_passwordformat` DROP INDEX `uniq_zipcodehousenum$countr_passwordfor_zipcodehousenum$countryi`;
ALTER TABLE `zipcodehousenumber$country_passwordformat` DROP INDEX `uniq_zipcodehousen$countr_passwordfor_zipcodehousen$passwordform`;
DROP INDEX `idx_zipcodehousenumber$country_passwordformat` ON `zipcodehousenumber$country_passwordformat`;
ALTER TABLE `zipcodehousenumber$housenr_zipcode` DROP INDEX `uniq_zipcodehousenum$housen_zipcode_zipcodehousenum$housenumber2`;
DROP INDEX `idx_zipcodehousenumber$housenr_zipcode` ON `zipcodehousenumber$housenr_zipcode`;
ALTER TABLE `zipcodehousenumber$province_country2` DROP INDEX `uniq_zipcodehousenum$province_country2_zipcodehousenum$provincei`;
DROP INDEX `idx_zipcodehousenumber$province_country2` ON `zipcodehousenumber$province_country2`;
ALTER TABLE `zipcodehousenumber$township_province2` DROP INDEX `uniq_zipcodehousenum$townshi_province_zipcodehousenumb$townshipi`;
DROP INDEX `idx_zipcodehousenumber$township_province2` ON `zipcodehousenumber$township_province2`;
ALTER TABLE `zipcodehousenumber$townvillage_township2` DROP INDEX `uniq_zipcodehousenu$townvilla_township_zipcodehousenu$townvillag`;
DROP INDEX `idx_zipcodehousenumber$townvillage_township2` ON `zipcodehousenumber$townvillage_township2`;
ALTER TABLE `zipcodehousenumber$zipcode_townvillage2` DROP INDEX `uniq_zipcodehousenum$zipcod_townvillag_zipcodehousenum$zipcodei2`;
DROP INDEX `idx_zipcodehousenumber$zipcode_townvillage2` ON `zipcodehousenumber$zipcode_townvillage2`;
ALTER TABLE `zipcodehousenumber$country` RENAME TO `postalcodehousenumber$country`;
ALTER TABLE `zipcodehousenumber$country_passwordformat` RENAME TO `postalcodehousenumber$country_passwordformat`;
ALTER TABLE `zipcodehousenumber$housenumber` RENAME TO `postalcodehousenumber$housenumber`;
ALTER TABLE `zipcodehousenumber$housenr_zipcode` RENAME TO `postalcodehousenumber$housenr_zipcode`;
ALTER TABLE `zipcodehousenumber$passwordformat` RENAME TO `postalcodehousenumber$passwordformat`;
ALTER TABLE `zipcodehousenumber$province` RENAME TO `postalcodehousenumber$province`;
ALTER TABLE `zipcodehousenumber$province_country2` RENAME TO `postalcodehousenumber$province_country`;
ALTER TABLE `zipcodehousenumber$returnvalues` RENAME TO `postalcodehousenumber$returnvalues`;
ALTER TABLE `zipcodehousenumber$township` RENAME TO `postalcodehousenumber$township`;
ALTER TABLE `zipcodehousenumber$township_province2` RENAME TO `postalcodehousenumber$township_province`;
ALTER TABLE `zipcodehousenumber$townvillage` RENAME TO `postalcodehousenumber$townvillage`;
ALTER TABLE `zipcodehousenumber$townvillage_township2` RENAME TO `postalcodehousenumber$townvillage_township`;
ALTER TABLE `zipcodehousenumber$zipcode` RENAME TO `postalcodehousenumber$zipcode`;
ALTER TABLE `zipcodehousenumber$zipcode_townvillage2` RENAME TO `postalcodehousenumber$zipcode_townvillage`;
UPDATE `mendixsystem$entity`
 SET `entity_name` = 'PostalcodeHousenumber.country', 
`table_name` = 'postalcodehousenumber$country', 
`superentity_id` = NULL
 WHERE `id` = 'ab6163dd-1c39-419d-8303-32949c7c9e07';
ALTER TABLE `postalcodehousenumber$country_passwordformat` CHANGE `zipcodehousenumber$passwordformatid` `postalcodehousenumber$passwordformatid` BIGINT NOT NULL;
ALTER TABLE `postalcodehousenumber$country_passwordformat` CHANGE `zipcodehousenumber$countryid` `postalcodehousenumber$countryid` BIGINT NOT NULL;
CREATE INDEX `idx_postalcodehousenumber$country_passwordformat` ON `postalcodehousenumber$country_passwordformat` (`postalcodehousenumber$passwordformatid`,`postalcodehousenumber$countryid`);
ALTER TABLE `postalcodehousenumber$country_passwordformat` ADD CONSTRAINT `uniq_postalcodehous$count_passwordfo_postalcodehous$passwordform` UNIQUE (`postalcodehousenumber$passwordformatid`);
ALTER TABLE `postalcodehousenumber$country_passwordformat` ADD CONSTRAINT `uniq_postalcodehousen$countr_passwordfo_postalcodehousen$country` UNIQUE (`postalcodehousenumber$countryid`);
DELETE FROM `mendixsystem$unique_constraint` 
 WHERE `name` = 'uniq_zipcodehousen$countr_passwordfor_zipcodehousen$passwordform';
DELETE FROM `mendixsystem$unique_constraint` 
 WHERE `name` = 'uniq_zipcodehousenum$countr_passwordfor_zipcodehousenum$countryi';
INSERT INTO `mendixsystem$unique_constraint` (`name`, 
`table_id`, 
`column_id`)
 VALUES ('uniq_postalcodehous$count_passwordfo_postalcodehous$passwordform', 
'e9ba1a40-fdbe-444f-a6a7-d6a11c2c8bcf', 
'316dd404-777f-389f-8590-e1e34daababb');
INSERT INTO `mendixsystem$unique_constraint` (`name`, 
`table_id`, 
`column_id`)
 VALUES ('uniq_postalcodehousen$countr_passwordfo_postalcodehousen$country', 
'e9ba1a40-fdbe-444f-a6a7-d6a11c2c8bcf', 
'9e39cde2-f983-3bbc-988e-3c8e27dbb00a');
UPDATE `mendixsystem$association`
 SET `association_name` = 'PostalcodeHousenumber.country_PasswordFormat', 
`table_name` = 'postalcodehousenumber$country_passwordformat', 
`parent_entity_id` = 'ab6163dd-1c39-419d-8303-32949c7c9e07', 
`child_entity_id` = 'a74eb59c-743e-4821-855b-b08cc7509622', 
`parent_column_name` = 'postalcodehousenumber$countryid', 
`child_column_name` = 'postalcodehousenumber$passwordformatid', 
`pk_index_name` = NULL, 
`index_name` = 'idx_postalcodehousenumber$country_passwordformat'
 WHERE `id` = 'e9ba1a40-fdbe-444f-a6a7-d6a11c2c8bcf';
UPDATE `mendixsystem$entity`
 SET `entity_name` = 'PostalcodeHousenumber.housenumber', 
`table_name` = 'postalcodehousenumber$housenumber', 
`superentity_id` = NULL
 WHERE `id` = 'c2e1df63-e857-4b10-9b3d-b19c6eab6059';
ALTER TABLE `postalcodehousenumber$housenr_zipcode` CHANGE `zipcodehousenumber$housenumberid` `postalcodehousenumber$housenumberid` BIGINT NOT NULL;
ALTER TABLE `postalcodehousenumber$housenr_zipcode` CHANGE `zipcodehousenumber$zipcodeid` `postalcodehousenumber$zipcodeid` BIGINT NOT NULL;
CREATE INDEX `idx_postalcodehousenumber$housenr_zipcode` ON `postalcodehousenumber$housenr_zipcode` (`postalcodehousenumber$zipcodeid`,`postalcodehousenumber$housenumberid`);
ALTER TABLE `postalcodehousenumber$housenr_zipcode` ADD CONSTRAINT `uniq_postalcodehousen$housen_zipcod_postalcodehousen$housenumber` UNIQUE (`postalcodehousenumber$housenumberid`);
DELETE FROM `mendixsystem$unique_constraint` 
 WHERE `name` = 'uniq_zipcodehousenum$housen_zipcode_zipcodehousenum$housenumber2';
INSERT INTO `mendixsystem$unique_constraint` (`name`, 
`table_id`, 
`column_id`)
 VALUES ('uniq_postalcodehousen$housen_zipcod_postalcodehousen$housenumber', 
'229c4bca-f856-4c27-bc44-14c60d069929', 
'a9820c0b-ea28-3b0d-a442-ef5734433cee');
UPDATE `mendixsystem$association`
 SET `association_name` = 'PostalcodeHousenumber.Housenr_Zipcode', 
`table_name` = 'postalcodehousenumber$housenr_zipcode', 
`parent_entity_id` = 'c2e1df63-e857-4b10-9b3d-b19c6eab6059', 
`child_entity_id` = '7275b6be-4fe3-4d19-bbb3-be0c85d30925', 
`parent_column_name` = 'postalcodehousenumber$housenumberid', 
`child_column_name` = 'postalcodehousenumber$zipcodeid', 
`pk_index_name` = NULL, 
`index_name` = 'idx_postalcodehousenumber$housenr_zipcode'
 WHERE `id` = '229c4bca-f856-4c27-bc44-14c60d069929';
UPDATE `mendixsystem$entity`
 SET `entity_name` = 'PostalcodeHousenumber.PasswordFormat', 
`table_name` = 'postalcodehousenumber$passwordformat', 
`superentity_id` = NULL
 WHERE `id` = 'a74eb59c-743e-4821-855b-b08cc7509622';
UPDATE `mendixsystem$entity`
 SET `entity_name` = 'PostalcodeHousenumber.province', 
`table_name` = 'postalcodehousenumber$province', 
`superentity_id` = NULL
 WHERE `id` = 'a96c79e3-0466-4747-8433-86712c795b74';
ALTER TABLE `postalcodehousenumber$province_country` CHANGE `zipcodehousenumber$countryid` `postalcodehousenumber$countryid` BIGINT NOT NULL;
ALTER TABLE `postalcodehousenumber$province_country` CHANGE `zipcodehousenumber$provinceid` `postalcodehousenumber$provinceid` BIGINT NOT NULL;
CREATE INDEX `idx_postalcodehousenumber$province_country` ON `postalcodehousenumber$province_country` (`postalcodehousenumber$countryid`,`postalcodehousenumber$provinceid`);
ALTER TABLE `postalcodehousenumber$province_country` ADD CONSTRAINT `uniq_postalcodehousenu$provinc_countr_postalcodehousenu$province` UNIQUE (`postalcodehousenumber$provinceid`);
DELETE FROM `mendixsystem$unique_constraint` 
 WHERE `name` = 'uniq_zipcodehousenum$province_country2_zipcodehousenum$provincei';
INSERT INTO `mendixsystem$unique_constraint` (`name`, 
`table_id`, 
`column_id`)
 VALUES ('uniq_postalcodehousenu$provinc_countr_postalcodehousenu$province', 
'88bfeaea-4cdc-4e79-9c6b-bac74d4b900a', 
'175379ba-568e-36e7-ba9f-7e27b75065d4');
UPDATE `mendixsystem$association`
 SET `association_name` = 'PostalcodeHousenumber.Province_Country', 
`table_name` = 'postalcodehousenumber$province_country', 
`parent_entity_id` = 'a96c79e3-0466-4747-8433-86712c795b74', 
`child_entity_id` = 'ab6163dd-1c39-419d-8303-32949c7c9e07', 
`parent_column_name` = 'postalcodehousenumber$provinceid', 
`child_column_name` = 'postalcodehousenumber$countryid', 
`pk_index_name` = NULL, 
`index_name` = 'idx_postalcodehousenumber$province_country'
 WHERE `id` = '88bfeaea-4cdc-4e79-9c6b-bac74d4b900a';
UPDATE `mendixsystem$entity`
 SET `entity_name` = 'PostalcodeHousenumber.Returnvalues', 
`table_name` = 'postalcodehousenumber$returnvalues', 
`superentity_id` = NULL
 WHERE `id` = 'adfe3819-d758-4f23-a7ae-b403a63a845f';
UPDATE `mendixsystem$entity`
 SET `entity_name` = 'PostalcodeHousenumber.township', 
`table_name` = 'postalcodehousenumber$township', 
`superentity_id` = NULL
 WHERE `id` = 'cd20f1f2-e147-42f6-a22d-04d060225d8e';
ALTER TABLE `postalcodehousenumber$township_province` CHANGE `zipcodehousenumber$townshipid` `postalcodehousenumber$townshipid` BIGINT NOT NULL;
ALTER TABLE `postalcodehousenumber$township_province` CHANGE `zipcodehousenumber$provinceid` `postalcodehousenumber$provinceid` BIGINT NOT NULL;
CREATE INDEX `idx_postalcodehousenumber$township_province` ON `postalcodehousenumber$township_province` (`postalcodehousenumber$provinceid`,`postalcodehousenumber$townshipid`);
ALTER TABLE `postalcodehousenumber$township_province` ADD CONSTRAINT `uniq_postalcodehousen$townshi_provinc_postalcodehousen$townshipi` UNIQUE (`postalcodehousenumber$townshipid`);
DELETE FROM `mendixsystem$unique_constraint` 
 WHERE `name` = 'uniq_zipcodehousenum$townshi_province_zipcodehousenumb$townshipi';
INSERT INTO `mendixsystem$unique_constraint` (`name`, 
`table_id`, 
`column_id`)
 VALUES ('uniq_postalcodehousen$townshi_provinc_postalcodehousen$townshipi', 
'71370cd1-53f4-4fb0-b258-b76c78050d08', 
'c7f9deb7-497a-3b3e-b605-150697cb69a4');
UPDATE `mendixsystem$association`
 SET `association_name` = 'PostalcodeHousenumber.Township_Province', 
`table_name` = 'postalcodehousenumber$township_province', 
`parent_entity_id` = 'cd20f1f2-e147-42f6-a22d-04d060225d8e', 
`child_entity_id` = 'a96c79e3-0466-4747-8433-86712c795b74', 
`parent_column_name` = 'postalcodehousenumber$townshipid', 
`child_column_name` = 'postalcodehousenumber$provinceid', 
`pk_index_name` = NULL, 
`index_name` = 'idx_postalcodehousenumber$township_province'
 WHERE `id` = '71370cd1-53f4-4fb0-b258-b76c78050d08';
UPDATE `mendixsystem$entity`
 SET `entity_name` = 'PostalcodeHousenumber.townvillage', 
`table_name` = 'postalcodehousenumber$townvillage', 
`superentity_id` = NULL
 WHERE `id` = '59b29c26-2d52-428d-a7cd-5418411eca07';
ALTER TABLE `postalcodehousenumber$townvillage_township` CHANGE `zipcodehousenumber$townvillageid` `postalcodehousenumber$townvillageid` BIGINT NOT NULL;
ALTER TABLE `postalcodehousenumber$townvillage_township` CHANGE `zipcodehousenumber$townshipid` `postalcodehousenumber$townshipid` BIGINT NOT NULL;
CREATE INDEX `idx_postalcodehousenumber$townvillage_township` ON `postalcodehousenumber$townvillage_township` (`postalcodehousenumber$townshipid`,`postalcodehousenumber$townvillageid`);
ALTER TABLE `postalcodehousenumber$townvillage_township` ADD CONSTRAINT `uniq_postalcodehouse$townvilla_townsh_postalcodehouse$townvillag` UNIQUE (`postalcodehousenumber$townvillageid`);
DELETE FROM `mendixsystem$unique_constraint` 
 WHERE `name` = 'uniq_zipcodehousenu$townvilla_township_zipcodehousenu$townvillag';
INSERT INTO `mendixsystem$unique_constraint` (`name`, 
`table_id`, 
`column_id`)
 VALUES ('uniq_postalcodehouse$townvilla_townsh_postalcodehouse$townvillag', 
'6dd70c8e-e3a7-4b34-bbfc-38918203e937', 
'917d2cc0-a6d9-334e-9254-c18ea90a4a9d');
UPDATE `mendixsystem$association`
 SET `association_name` = 'PostalcodeHousenumber.Townvillage_Township', 
`table_name` = 'postalcodehousenumber$townvillage_township', 
`parent_entity_id` = '59b29c26-2d52-428d-a7cd-5418411eca07', 
`child_entity_id` = 'cd20f1f2-e147-42f6-a22d-04d060225d8e', 
`parent_column_name` = 'postalcodehousenumber$townvillageid', 
`child_column_name` = 'postalcodehousenumber$townshipid', 
`pk_index_name` = NULL, 
`index_name` = 'idx_postalcodehousenumber$townvillage_township'
 WHERE `id` = '6dd70c8e-e3a7-4b34-bbfc-38918203e937';
UPDATE `mendixsystem$entity`
 SET `entity_name` = 'PostalcodeHousenumber.zipcode', 
`table_name` = 'postalcodehousenumber$zipcode', 
`superentity_id` = NULL
 WHERE `id` = '7275b6be-4fe3-4d19-bbb3-be0c85d30925';
ALTER TABLE `postalcodehousenumber$zipcode_townvillage` CHANGE `zipcodehousenumber$townvillageid` `postalcodehousenumber$townvillageid` BIGINT NOT NULL;
ALTER TABLE `postalcodehousenumber$zipcode_townvillage` CHANGE `zipcodehousenumber$zipcodeid` `postalcodehousenumber$zipcodeid` BIGINT NOT NULL;
CREATE INDEX `idx_postalcodehousenumber$zipcode_townvillage` ON `postalcodehousenumber$zipcode_townvillage` (`postalcodehousenumber$townvillageid`,`postalcodehousenumber$zipcodeid`);
ALTER TABLE `postalcodehousenumber$zipcode_townvillage` ADD CONSTRAINT `uniq_postalcodehousen$zipcod_townvilla_postalcodehousen$zipcodei` UNIQUE (`postalcodehousenumber$zipcodeid`);
DELETE FROM `mendixsystem$unique_constraint` 
 WHERE `name` = 'uniq_zipcodehousenum$zipcod_townvillag_zipcodehousenum$zipcodei2';
INSERT INTO `mendixsystem$unique_constraint` (`name`, 
`table_id`, 
`column_id`)
 VALUES ('uniq_postalcodehousen$zipcod_townvilla_postalcodehousen$zipcodei', 
'977bc91b-cf07-4ada-994f-50724fae9e33', 
'0c71213f-304d-397e-9a4e-c395d9007e3e');
UPDATE `mendixsystem$association`
 SET `association_name` = 'PostalcodeHousenumber.Zipcode_Townvillage', 
`table_name` = 'postalcodehousenumber$zipcode_townvillage', 
`parent_entity_id` = '7275b6be-4fe3-4d19-bbb3-be0c85d30925', 
`child_entity_id` = '59b29c26-2d52-428d-a7cd-5418411eca07', 
`parent_column_name` = 'postalcodehousenumber$zipcodeid', 
`child_column_name` = 'postalcodehousenumber$townvillageid', 
`pk_index_name` = NULL, 
`index_name` = 'idx_postalcodehousenumber$zipcode_townvillage'
 WHERE `id` = '977bc91b-cf07-4ada-994f-50724fae9e33';
UPDATE `mendixsystem$version`
 SET `versionnumber` = '4.2', 
`lastsyncdate` = '20171204 17:03:56';
