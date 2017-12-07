ALTER TABLE `zipcodehousenumber$landen` RENAME TO `zipcodehousenumber$what`;
UPDATE `mendixsystem$entity`
 SET `entity_name` = 'ZipcodeHousenumber.What', 
`table_name` = 'zipcodehousenumber$what', 
`superentity_id` = NULL
 WHERE `id` = 'f248f266-b10f-41aa-badb-f3b4ed194a6f';
UPDATE `mendixsystem$version`
 SET `versionnumber` = '4.2', 
`lastsyncdate` = '20171129 14:35:20';
