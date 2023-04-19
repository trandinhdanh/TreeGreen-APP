use tree_green;

INSERT INTO role(code,name,createby,createdate,modifiedby,modifieddate) VALUES('ADMIN','Quản trị','Developers',CURRENT_TIMESTAMP(),'Developers',CURRENT_TIMESTAMP());
INSERT INTO role(code,name,createby,createdate,modifiedby,modifieddate) VALUES('SELLER','Người bán hàng','Developers',CURRENT_TIMESTAMP(),'Developers',CURRENT_TIMESTAMP());
INSERT INTO role(code,name,createby,createdate,modifiedby,modifieddate) VALUES('USER','Người dùng','Developers',CURRENT_TIMESTAMP(),'Developers',CURRENT_TIMESTAMP());

INSERT INTO user(user_name,password) VALUES('admin','1');
INSERT INTO user(user_name,password) VALUES('seller','1');
INSERT INTO user(user_name,password) VALUES('user','1');

INSERT INTO user_role(user_id,role_id) VALUES (1,1);
INSERT INTO user_role(user_id,role_id) VALUES (2,2);
INSERT INTO user_role(user_id,role_id) VALUES (3,3);