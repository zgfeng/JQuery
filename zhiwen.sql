/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50617
Source Host           : localhost:3306
Source Database       : zhiwen

Target Server Type    : MYSQL
Target Server Version : 50617
File Encoding         : 65001

Date: 2016-03-28 15:27:03
*/

SET FOREIGN_KEY_CHECKS=0;
-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` smallint(6) NOT NULL AUTO_INCREMENT COMMENT '//id',
  `user` varchar(20) NOT NULL,
  `pass` char(40) NOT NULL,
  `email` varchar(40) DEFAULT NULL,
  `sex` char(6) DEFAULT NULL,
  `birthday` char(10) DEFAULT NULL,
  `date` char(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO user VALUES ('2', 'lihui', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'lihui@qq.com', 'female', '1456761600', '1459149168');
INSERT INTO user VALUES ('3', 'xiaoming', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'xiaoming@sina.com.cn', 'male', '925833600', '1459149257');
INSERT INTO user VALUES ('4', 'feng', '7c4a8d09ca3762af61e59520943dc26494f8941b', 'feng@263.com', 'female', '904233600', '1459149482');
