UPDATE `postalcodehousenumber$address`
 SET `country` = SUBSTRING(`country` FROM 1 FOR 2);
ALTER TABLE `postalcodehousenumber$address` MODIFY `country` NVARCHAR(2) NULL;
UPDATE `mendixsystem$attribute`
 SET `entity_id` = 'dd93b314-c2a3-4f25-80c7-a6eb3d3927d7', 
`attribute_name` = 'Country', 
`column_name` = 'country', 
`type` = 30, 
`length` = 2, 
`default_value` = '', 
`is_auto_number` = FALSE
 WHERE `id` = '1b75b641-0fc6-4b02-8f36-afae66aa8a1c';
CREATE TABLE `postalcodehousenumber$address_country` (
	`postalcodehousenumber$addressid` BIGINT NOT NULL,
	`postalcodehousenumber$countryid` BIGINT NOT NULL,
	PRIMARY KEY(`postalcodehousenumber$addressid`,`postalcodehousenumber$countryid`),
	CONSTRAINT `uniq_postalcodehousenu$addres_countr_postalcodehousenum$addressi` UNIQUE (`postalcodehousenumber$addressid`));
CREATE INDEX `idx_postalcodehousenumber$address_country` ON `postalcodehousenumber$address_country` (`postalcodehousenumber$countryid`,`postalcodehousenumber$addressid`);
INSERT INTO `mendixsystem$association` (`id`, 
`association_name`, 
`table_name`, 
`parent_entity_id`, 
`child_entity_id`, 
`parent_column_name`, 
`child_column_name`, 
`index_name`)
 VALUES ('2f6f7bc9-aee3-46f2-af98-8c8632f08d18', 
'PostalcodeHousenumber.Address_country', 
'postalcodehousenumber$address_country', 
'dd93b314-c2a3-4f25-80c7-a6eb3d3927d7', 
'ab6163dd-1c39-419d-8303-32949c7c9e07', 
'postalcodehousenumber$addressid', 
'postalcodehousenumber$countryid', 
'idx_postalcodehousenumber$address_country');
INSERT INTO `mendixsystem$unique_constraint` (`name`, 
`table_id`, 
`column_id`)
 VALUES ('uniq_postalcodehousenu$addres_countr_postalcodehousenum$addressi', 
'2f6f7bc9-aee3-46f2-af98-8c8632f08d18', 
'e6d14ddc-ad60-3f2b-b9f1-08063dea585a');
UPDATE `mendixsystem$version`
 SET `versionnumber` = '4.2', 
`lastsyncdate` = '20171205 11:31:10';
