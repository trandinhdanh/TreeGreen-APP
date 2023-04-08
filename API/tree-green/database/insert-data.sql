use tree_green;
-- Create role
INSERT INTO role(code,name,createby,createdate,modifiedby,modifieddate) VALUES('ADMIN','Quản trị','Developers',CURRENT_TIMESTAMP(),'Developers',CURRENT_TIMESTAMP());
INSERT INTO role(code,name,createby,createdate,modifiedby,modifieddate) VALUES('SELLER','Người bán hàng','Developers',CURRENT_TIMESTAMP(),'Developers',CURRENT_TIMESTAMP());
INSERT INTO role(code,name,createby,createdate,modifiedby,modifieddate) VALUES('USER','Người dùng','Developers',CURRENT_TIMESTAMP(),'Developers',CURRENT_TIMESTAMP());

INSERT INTO user(user_name,password) VALUES('admin','1');
INSERT INTO user(user_name,password) VALUES('seller','1');
INSERT INTO user(user_name,password) VALUES('user','1');

INSERT INTO user_role(user_id,role_id) VALUES (1,1);
INSERT INTO user_role(user_id,role_id) VALUES (2,2);
INSERT INTO user_role(user_id,role_id) VALUES (3,3);

-- Create category
INSERT INTO category(code,name,createby,createdate,modifiedby,modifieddate) VALUES ('DAY-LEO','Cây dây leo','Developers',CURRENT_TIMESTAMP(),'Developers',CURRENT_TIMESTAMP());
INSERT INTO category(code,name,createby,createdate,modifiedby,modifieddate) VALUES ('PHONG-THUY','Cây phong thủy','Developers',CURRENT_TIMESTAMP(),'Developers',CURRENT_TIMESTAMP());
INSERT INTO category(code,name,createby,createdate,modifiedby,modifieddate) VALUES ('SEN-DA','Sen đá','Developers',CURRENT_TIMESTAMP(),'Developers',CURRENT_TIMESTAMP());
INSERT INTO category(code,name,createby,createdate,modifiedby,modifieddate) VALUES ('THAN-TO','Cây thân to','Developers',CURRENT_TIMESTAMP(),'Developers',CURRENT_TIMESTAMP());
INSERT INTO category(code,name,createby,createdate,modifiedby,modifieddate) VALUES ('HOA','Hoa','Developers',CURRENT_TIMESTAMP(),'Developers',CURRENT_TIMESTAMP());

-- Create product
INSERT INTO product(code,name,image,price,quantity,short_description,description,category_id) VALUES('sp01','Cây cỏ','avate.jpg',2704000.0,27,'Tăng dương khí trong nhà','Địa chỉ bán: 35 đường số 4 phường Trường Thọ thành ph Thủ Đức.',2);

-- Create image product
INSERT INTO product_image(url_image,product_id ) VALUES ('hinh1.jpg',1);
INSERT INTO product_image(url_image,product_id ) VALUES ('hinh2.jpg',1);
INSERT INTO product_image(url_image,product_id ) VALUES ('hinh3.jpg',1);
