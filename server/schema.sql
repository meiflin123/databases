DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id int NOT NULL AUTO_INCREMENT, 
  text text, 
  roomName text, 
  userId int,
  PRIMARY KEY (id)
  -- FOREIGN KEY (userId) REFERENCES users(userId)
);

/*CREATE TABLE rooms (
  id int NOT NULL AUTO_INCREMENT, 
  userId int, 
  messageId int,
  PRIMARY KEY (id)
);*/

CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT, 
  username varchar(25), 
  messageId int, 
  PRIMARY KEY (id),
  FOREIGN KEY (messageId) REFERENCES messages(id)
  
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/



-- -- ---
-- -- Globals SAVED SQL DESIGNER
-- -- ---

-- -- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- -- SET FOREIGN_KEY_CHECKS=0;

-- -- ---
-- -- Table 'messages'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `messages`;
    
-- CREATE TABLE `messages` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `message` MEDIUMTEXT NULL DEFAULT NULL,
--   `roomName` MEDIUMTEXT NULL DEFAULT NULL,
--   `userId` INTEGER NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Table 'users'
-- -- 
-- -- ---

-- DROP TABLE IF EXISTS `users`;
    
-- CREATE TABLE `users` (
--   `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
--   `userName` MEDIUMTEXT NULL DEFAULT NULL,
--   `messageId` INTEGER NULL DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- );

-- -- ---
-- -- Foreign Keys 
-- -- ---

-- ALTER TABLE `messages` ADD FOREIGN KEY (userId) REFERENCES `users` (`id`);
-- ALTER TABLE `users` ADD FOREIGN KEY (messageId) REFERENCES `messages` (`id`);

-- -- ---
-- -- Table Properties
-- -- ---

-- -- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- -- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- -- ---
-- -- Test Data
-- -- ---

-- -- INSERT INTO `messages` (`id`,`message`,`roomName`,`userId`) VALUES
-- -- ('','','','');
-- -- INSERT INTO `users` (`id`,`userName`,`messageId`) VALUES
-- -- ('','','');