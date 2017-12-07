ALTER TABLE `postalcodehousenumber$returnvalues` RENAME TO `ca4784e96c334ec3839f848a6dcfab06`;
DELETE FROM `mendixsystem$entity` 
 WHERE `id` = 'adfe3819-d758-4f23-a7ae-b403a63a845f';
DELETE FROM `mendixsystem$entityidentifier` 
 WHERE `id` = 'adfe3819-d758-4f23-a7ae-b403a63a845f';
DELETE FROM `mendixsystem$sequence` 
 WHERE `attribute_id` IN (SELECT `id`
 FROM `mendixsystem$attribute`
 WHERE `entity_id` = 'adfe3819-d758-4f23-a7ae-b403a63a845f');
DELETE FROM `mendixsystem$attribute` 
 WHERE `entity_id` = 'adfe3819-d758-4f23-a7ae-b403a63a845f';
CREATE TABLE `postalcodehousenumber$address` (
	`id` BIGINT NOT NULL,
	`housename` NVARCHAR(200) NULL,
	`postalcode` NVARCHAR(200) NULL,
	`country` NVARCHAR(10) NULL,
	`street` NVARCHAR(200) NULL,
	`latitude` DECIMAL(28, 8) NULL,
	`city` NVARCHAR(200) NULL,
	`housenumberextension` NVARCHAR(20) NULL,
	`longitude` DECIMAL(28, 8) NULL,
	`housenumber` INT NULL,
	PRIMARY KEY(`id`));
INSERT INTO `mendixsystem$entity` (`id`, 
`entity_name`, 
`table_name`)
 VALUES ('dd93b314-c2a3-4f25-80c7-a6eb3d3927d7', 
'PostalcodeHousenumber.Address', 
'postalcodehousenumber$address');
INSERT INTO `mendixsystem$attribute` (`id`, 
`entity_id`, 
`attribute_name`, 
`column_name`, 
`type`, 
`length`, 
`default_value`, 
`is_auto_number`)
 VALUES ('cd9ee024-36d2-4454-a4fd-450067ba7d62', 
'dd93b314-c2a3-4f25-80c7-a6eb3d3927d7', 
'Housename', 
'housename', 
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
 VALUES ('209eb243-cb18-4f33-b766-a1eca9959e94', 
'dd93b314-c2a3-4f25-80c7-a6eb3d3927d7', 
'Postalcode', 
'postalcode', 
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
 VALUES ('1b75b641-0fc6-4b02-8f36-afae66aa8a1c', 
'dd93b314-c2a3-4f25-80c7-a6eb3d3927d7', 
'Country', 
'country', 
30, 
10, 
'''NL''', 
FALSE);
INSERT INTO `mendixsystem$attribute` (`id`, 
`entity_id`, 
`attribute_name`, 
`column_name`, 
`type`, 
`length`, 
`default_value`, 
`is_auto_number`)
 VALUES ('dc9d5371-ab80-4c25-ac18-05f5ef9a6745', 
'dd93b314-c2a3-4f25-80c7-a6eb3d3927d7', 
'Street', 
'street', 
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
 VALUES ('431a1394-c77d-4b69-a4e3-6f996ec7a9e9', 
'dd93b314-c2a3-4f25-80c7-a6eb3d3927d7', 
'Latitude', 
'latitude', 
5, 
0, 
'0', 
FALSE);
INSERT INTO `mendixsystem$attribute` (`id`, 
`entity_id`, 
`attribute_name`, 
`column_name`, 
`type`, 
`length`, 
`default_value`, 
`is_auto_number`)
 VALUES ('98fde4bb-182a-4096-9a6c-88cf36932fa5', 
'dd93b314-c2a3-4f25-80c7-a6eb3d3927d7', 
'City', 
'city', 
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
 VALUES ('c7324063-58ae-47fb-be1f-9207e752ec79', 
'dd93b314-c2a3-4f25-80c7-a6eb3d3927d7', 
'HousenumberExtension', 
'housenumberextension', 
30, 
20, 
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
 VALUES ('3fbf0961-c505-446b-bb36-7b74943a4b4e', 
'dd93b314-c2a3-4f25-80c7-a6eb3d3927d7', 
'Longitude', 
'longitude', 
5, 
0, 
'0', 
FALSE);
INSERT INTO `mendixsystem$attribute` (`id`, 
`entity_id`, 
`attribute_name`, 
`column_name`, 
`type`, 
`length`, 
`default_value`, 
`is_auto_number`)
 VALUES ('780b8c14-6af3-4fbd-bd60-d1f803792ad3', 
'dd93b314-c2a3-4f25-80c7-a6eb3d3927d7', 
'Housenumber', 
'housenumber', 
3, 
0, 
'', 
FALSE);
DROP TABLE `ca4784e96c334ec3839f848a6dcfab06`;
UPDATE `mendixsystem$version`
 SET `versionnumber` = '4.2', 
`lastsyncdate` = '20171205 10:52:54';
