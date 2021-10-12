CREATE SCHEMA IF NOT EXISTS `aromacafe` DEFAULT CHARACTER SET utf8 

CREATE TABLE IF NOT EXISTS `aromacafe`.`products` (
  `id_product` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(45) NOT NULL,
  `unit_price` FLOAT NOT NULL,
  `status` TINYINT NOT NULL,
  PRIMARY KEY (`id_product`))
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `aromacafe`.`sales` (
  `id_sale` INT NOT NULL AUTO_INCREMENT,
  `total_value` FLOAT NOT NULL,
  `id_product` INT NOT NULL,
  `amount` INT NOT NULL,
  `unit_price` FLOAT NOT NULL,
  `date` DATE NOT NULL,
  `id_client` INT NOT NULL,
  `id_seller` INT NOT NULL,
  `name_client` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id_sale`),
  INDEX `fk_product_idx` (`id_product` ASC) VISIBLE,
  INDEX `fk_seller_idx` (`id_seller` ASC) VISIBLE,
  CONSTRAINT `fk_product`
    FOREIGN KEY (`id_product`)
    REFERENCES `aromacafe`.`products` (`id_product`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_seller`
    FOREIGN KEY (`id_seller`)
    REFERENCES `aromacafe`.`users` (`id_user`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB

CREATE TABLE IF NOT EXISTS `aromacafe`.`users` (
  `id_user` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `email` VARCHAR(200) NOT NULL,
  `password` VARCHAR(200) NOT NULL,
  `role` VARCHAR(200) NOT NULL,
  `status` VARCHAR(200) NOT NULL,
  PRIMARY KEY (`id_user`))
ENGINE = InnoDB