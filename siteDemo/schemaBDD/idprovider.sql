

CREATE SCHEMA IF NOT EXISTS `idb` DEFAULT CHARACTER SET utf8 ;
USE `idb` ;

-- -----------------------------------------------------
-- Table `idb`.`creds`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `idb`.`creds` (
  `idcreds` INT(11) NOT NULL AUTO_INCREMENT ,
  `img_name` VARCHAR(45) NOT NULL ,
  `img_file` LONGBLOB,
  PRIMARY KEY (`idcreds`) )

DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `idb`.`logins`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `idb`.`logins` (
  `idlogins` INT(11) NOT NULL AUTO_INCREMENT ,
  `login` VARCHAR(256) NOT NULL ,
  `mdp` VARCHAR(256) NOT NULL ,
  PRIMARY KEY (`idlogins`) ,
  UNIQUE INDEX `idlogins_UNIQUE` (`idlogins` ASC) ,
  UNIQUE INDEX `login_UNIQUE` (`login` ASC) )

DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `idb`.`customersclaims`
-- -----------------------------------------------------
CREATE  TABLE IF NOT EXISTS `idb`.`customersclaims` (
  `idcustomersClaims` INT(11) NOT NULL AUTO_INCREMENT ,
  `idLogin` INT(11) NOT NULL ,
  `gender` VARCHAR(45) NULL DEFAULT NULL ,
  `firstName` VARCHAR(256) NULL DEFAULT NULL ,
  `lastName` VARCHAR(256) NULL DEFAULT NULL ,
  `nationality` VARCHAR(256) NULL DEFAULT NULL ,
  `dateOfBirth` DATE NULL DEFAULT NULL ,
  `placeOfBirth` VARCHAR(256) NULL DEFAULT NULL ,
  `postalAddress` VARCHAR(256) NULL DEFAULT NULL ,
  `IBAN` VARCHAR(30) NOT NULL ,
  `credentials` INT(11) NULL DEFAULT NULL ,
  PRIMARY KEY (`idcustomersClaims`) ,
  INDEX `idLogin` (`idLogin` ASC) ,
  INDEX `credentials` (`credentials` ASC) ,
  CONSTRAINT `credentials`
    FOREIGN KEY (`credentials` )
    REFERENCES `idb`.`creds` (`idcreds` )
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `idLogin`
    FOREIGN KEY (`idLogin` )
    REFERENCES `idb`.`logins` (`idlogins` )
    ON DELETE CASCADE
    ON UPDATE CASCADE)

DEFAULT CHARACTER SET = utf8;

INSERT INTO `idb`.`logins` (idlogins,login,mdp) VALUES (1,'vlabelle','24fb08806f0d70cba9170d248aadaa7490d58870cf817e2a10eb66e7a0e8b417');
INSERT INTO `idb`.`logins` (idlogins,login,mdp) VALUES (2,'vclavet','11f4138f4d6ee3c5d5b803a8010f59d227a51fbb2c33f3f4c617f10d48db5bdc');

INSERT INTO `idb`.`creds` (idcreds,img_name,img_file) VALUES (1,'cartedidentitéVL.jpg',null);
INSERT INTO `idb`.`creds` (idcreds,img_name,img_file) VALUES (2,'cartedidentitéVC.jpg',null);

INSERT INTO `idb`.`customersclaims` (idcustomersClaims,idLogin,gender,firstName,lastName,nationality,dateOfBirth,placeOfBirth,postalAddress,IBAN,credentials) VALUES (1,1,'male','Victor','Labelle','French','1988-04-01','Lille, France','49, Avenue des Tuileries, 59190 Hazebrouck','FR5037414114194069519345124',1);
INSERT INTO `idb`.`customersclaims` (idcustomersClaims,idLogin,gender,firstName,lastName,nationality,dateOfBirth,placeOfBirth,postalAddress,IBAN,credentials) VALUES (2,2,'female','Valérie','Clavet','French','1985-04-21','Aix-les-Bains, France','89, Avenue de Marlioz, 74100 Annemasse','FR8406831794089787878871780',2);

