use tree_green;
-- Create role
INSERT INTO role(code,name,createby,createdate,modifiedby,modifieddate) VALUES('ADMIN','Quản trị','Developers',CURRENT_TIMESTAMP(),'Developers',CURRENT_TIMESTAMP());
INSERT INTO role(code,name,createby,createdate,modifiedby,modifieddate) VALUES('SELLER','Người bán hàng','Developers',CURRENT_TIMESTAMP(),'Developers',CURRENT_TIMESTAMP());
INSERT INTO role(code,name,createby,createdate,modifiedby,modifieddate) VALUES('USER','Người dùng','Developers',CURRENT_TIMESTAMP(),'Developers',CURRENT_TIMESTAMP());

INSERT INTO user(username,password,full_name,status,address,avatar,email,number_phone,createby,createdate,modifiedby,modifieddate)
VALUES('admin','$2a$10$TMkrd3LKZDtJpXnbRZ8oKOxTvYc0MSUymS0e07T9yjVUAefYEBRpC','Nguyễn Văn Hiếu','ACTIVE','Thành phố Thủ Đức',
       'https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg',
       'greenearth@gmail.com','18002704','admin',CURRENT_TIMESTAMP(),'admin',CURRENT_TIMESTAMP());

INSERT INTO user(username,password,full_name,status,address,avatar,email,number_phone,createby,createdate,modifiedby,modifieddate)
VALUES('truongdinh','$2a$10$TMkrd3LKZDtJpXnbRZ8oKOxTvYc0MSUymS0e07T9yjVUAefYEBRpC','Nguyễn Trường Đình','ACTIVE','123 Nguyễn Văn A, Quận 12, TP.HCM',
       'https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg',
       'truongdinhshop@gmail.com','0896314977','anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());
INSERT INTO user(username,password,full_name,status,address,avatar,email,number_phone,createby,createdate,modifiedby,modifieddate)
VALUES('dinhdanh','$2a$10$TMkrd3LKZDtJpXnbRZ8oKOxTvYc0MSUymS0e07T9yjVUAefYEBRpC','Trần Đình Danh','ACTIVE','456 Lê Lợi, Thủ Đức, TP.HCM',
       'https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg',
       'dinhdanhshop@gmail.com','0796512357','anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());

INSERT INTO user(username,password,full_name,status,address,avatar,email,number_phone,createby,createdate,modifiedby,modifieddate)
VALUES('truonggiang','$2a$10$TMkrd3LKZDtJpXnbRZ8oKOxTvYc0MSUymS0e07T9yjVUAefYEBRpC','Nguyễn Trường Giang','ACTIVE','123 Nguyễn Văn A, Quận 1, TP. Hồ Chí Minh',
       'https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg',
       'example1@gmail.com','0912345678','anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());
INSERT INTO user(username,password,full_name,status,address,avatar,email,number_phone,createby,createdate,modifiedby,modifieddate)
VALUES('vanminh','$2a$10$TMkrd3LKZDtJpXnbRZ8oKOxTvYc0MSUymS0e07T9yjVUAefYEBRpC','Nguyễn Văn Minh','ACTIVE','456 Lê Lợi, Quận 5, TP. Hồ Chí Minh',
       'https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg',
       'testuser@yahoo.com','0987654321','anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());
INSERT INTO user(username,password,full_name,status,address,avatar,email,number_phone,createby,createdate,modifiedby,modifieddate)
VALUES('thanhtai','$2a$10$TMkrd3LKZDtJpXnbRZ8oKOxTvYc0MSUymS0e07T9yjVUAefYEBRpC','Hoàng Thanh Tài','ACTIVE','789 Điện Biên Phủ, Quận 3, TP. Hồ Chí Minh',
       'https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg',
       'john.doe@hotmail.com',' 0868999888','anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());
INSERT INTO user(username,password,full_name,status,address,avatar,email,number_phone,createby,createdate,modifiedby,modifieddate)
VALUES('hoangduc','$2a$10$TMkrd3LKZDtJpXnbRZ8oKOxTvYc0MSUymS0e07T9yjVUAefYEBRpC','Nguyễn Hoàng Đức','ACTIVE','101 Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh',
       'https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg',
       'jane.smith@outlook.com','0905123456','anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());
INSERT INTO user(username,password,full_name,status,address,avatar,email,number_phone,createby,createdate,modifiedby,modifieddate)
VALUES('congdanh','$2a$10$TMkrd3LKZDtJpXnbRZ8oKOxTvYc0MSUymS0e07T9yjVUAefYEBRpC','Phạm Công Danh','ACTIVE','222 Trần Hưng Đạo, Quận 10, TP. Hồ Chí Minh',
       'https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg',
       'info@company.com','0978567890','anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());

INSERT INTO user_role(user_id,role_id) VALUES (1,1);
INSERT INTO user_role(user_id,role_id) VALUES (2,2);
INSERT INTO user_role(user_id,role_id) VALUES (3,2);
INSERT INTO user_role(user_id,role_id) VALUES (4,3);
INSERT INTO user_role(user_id,role_id) VALUES (5,3);
INSERT INTO user_role(user_id,role_id) VALUES (6,3);
INSERT INTO user_role(user_id,role_id) VALUES (7,3);
INSERT INTO user_role(user_id,role_id) VALUES (8,3);

INSERT INTO cart(user_id,total_price,createby,createdate,modifiedby,modifieddate) VALUES (4,0.0,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());
INSERT INTO cart(user_id,total_price,createby,createdate,modifiedby,modifieddate) VALUES (5,0.0,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());
INSERT INTO cart(user_id,total_price,createby,createdate,modifiedby,modifieddate) VALUES (6,0.0,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());
INSERT INTO cart(user_id,total_price,createby,createdate,modifiedby,modifieddate) VALUES (7,0.0,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());
INSERT INTO cart(user_id,total_price,createby,createdate,modifiedby,modifieddate) VALUES (8,0.0,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());

INSERT INTO shop(name,avatar,description,user_id,createby,createdate,modifiedby,modifieddate)
VALUES ('Shop xanh Phan Rang','https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg',
        'Shop xanh Phan Rang là một cửa hàng đặc biệt dành cho những người yêu cây cảnh tại thành phố Phan Rang. Với một sự đa dạng đáng kinh ngạc về loại cây, từ cây nhỏ xinh cho bàn làm việc cho đến cây cảnh lớn đẹp để trang trí trong không gian sống, shop xanh Phan Rang mang đến một trải nghiệm mua sắm thú vị cho các tín đồ cây cảnh. Đội ngũ nhân viên tận tâm và hiểu biết về cây cảnh sẽ giúp bạn chọn lựa những cây phù hợp với sở thích và yêu cầu của bạn. Shop xanh Phan Rang cam kết mang lại sự hài lòng và đem đến một khung cảnh xanh tươi trong ngôi nhà của bạn.',
        2,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());
INSERT INTO shop(name,avatar,description,user_id,createby,createdate,modifiedby,modifieddate)
VALUES ('Cây cảnh xứ Trung','https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg',
        'Cây cảnh xứ Trung là nơi bạn có thể khám phá và tìm hiểu những loại cây cảnh độc đáo từ vùng Trung Quốc. Với sự đa dạng về mẫu mã và chất lượng, cây cảnh xứ Trung mang đến những sản phẩm độc đáo và đẹp mắt cho người yêu cây cảnh. Với sự chăm sóc đặc biệt và kiến thức sâu sắc về cây cảnh, cây cảnh xứ Trung sẽ giúp bạn chọn lựa những cây phù hợp với không gian sống và sở thích của bạn. Bạn sẽ được tận hưởng không chỉ vẻ đẹp của cây cảnh mà còn cảm nhận được sự tinh tế và sự bền vững của nghệ thuật cây cảnh Trung Quốc.',
        3,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());

-- Create category
INSERT INTO category(code,name,createby,createdate,modifiedby,modifieddate) VALUES ('DAY-LEO','Cây dây leo','admin',CURRENT_TIMESTAMP(),'admin',CURRENT_TIMESTAMP());
INSERT INTO category(code,name,createby,createdate,modifiedby,modifieddate) VALUES ('TAN-LA','Cây xanh tán lá','admin',CURRENT_TIMESTAMP(),'admin',CURRENT_TIMESTAMP());
INSERT INTO category(code,name,createby,createdate,modifiedby,modifieddate) VALUES ('SEN-DA','Sen đá','admin',CURRENT_TIMESTAMP(),'admin',CURRENT_TIMESTAMP());
INSERT INTO category(code,name,createby,createdate,modifiedby,modifieddate) VALUES ('THAN-TO','Cây thân to','admin',CURRENT_TIMESTAMP(),'admin',CURRENT_TIMESTAMP());
INSERT INTO category(code,name,createby,createdate,modifiedby,modifieddate) VALUES ('HOA','Hoa','admin',CURRENT_TIMESTAMP(),'admin',CURRENT_TIMESTAMP());

-- Create product
INSERT INTO product(code,name,image,price,quantity,short_description,description,category_id,shop_id,createby,createdate,modifiedby,modifieddate)
VALUES
    ('sp01','Cây lưu ly phương Đông','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887277/h7xdk1s1xzm3hxj4bdf8.jpg',
     230000.0,5,'Một loại cây có hoa nhỏ và thơm, thường được trồng để làm cảnh hoặc để lấy hoa trang trí.',
     'Là một loại cây có nguồn gốc từ phương Đông, có tên khoa học là Cymbidium spp. và thuộc họ lan. Cây có thể cao đến 1 mét, có hoa nhỏ màu trắng, và thơm ngát. Cây lưu ly thường được trồng để làm cảnh hoặc để lấy hoa trang trí, và có thể trồng được cả trong chậu và ngoài trời.',
     1,1,'truongdinh',CURRENT_TIMESTAMP(),'truongdinh',CURRENT_TIMESTAMP()),

    ('sp02','Sen đá','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887336/coldqu3crtfw0gq6y2dp.jpg',
     120000.0,4,'Một loại cây thủy sinh có hoa tuyệt đẹp, thường được trồng trong bể cá hoặc hồ nuôi cá.',
     'Là một loại cây thủy sinh có nguồn gốc từ châu Á, có tên khoa học là Cryptocoryne spp. và thuộc họ rau răm. Cây có thể cao đến 60 cm, có hoa tuyệt đẹp với nhiều màu sắc khác nhau, từ trắng, hồng đến đỏ. Sen đá thường được trồng trong bể cá hoặc hồ nuôi cá để tạo ra một môi trường sống tự nhiên cho cá và để trang trí.',
     3,1,'truongdinh',CURRENT_TIMESTAMP(),'truongdinh',CURRENT_TIMESTAMP()),

    ('sp03','Kiểng tuyết xanh','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887354/ezc4g4u82urbcwlhjfvw.jpg',
     350000.0,6,'Một loại cây cảnh có hoa và lá màu xanh đặc biệt, thường được trồng trong chậu để trang trí trong nhà.',
     'Là một loại cây cảnh có nguồn gốc từ Trung Quốc, có tên khoa học là Chlorophytum comosum và thuộc họ Asparagaceae. Cây có lá màu xanh đặc biệt, hình dạng giống như dây leo, có hoa nhỏ màu trắng. Kiểng tuyết xanh thường được trồng trong chậu để làm cảnh trong nhà hoặc văn phòng, và có khả năng lọc không khí và giúp tạo ra một môi trường sống lành mạnh.',
     2,1,'truongdinh',CURRENT_TIMESTAMP(),'truongdinh',CURRENT_TIMESTAMP()),

    ('sp04','Sứ mọng nước','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887370/yfiqu9tgy6xg0xcomxbd.png',
     230000.0,3,'Một loại cây có hoa và lá đẹp, thường được trồng trong bể nước hoặc hồ cá để làm cảnh.',
     'Là một loại cây cảnh có nguồn gốc từ Nam Mỹ, có tên khoa học là Syngonium podophyllum và thuộc họ Araceae. Cây có lá hình trái tim, màu xanh lá cây hoặc xanh nâu và thường được trồng trong chậu để làm cảnh trong nhà. Sứ mọng nước có khả năng lọc không khí và giúp tạo ra một môi trường sống lành mạnh.',
     2,1,'truongdinh',CURRENT_TIMESTAMP(),'truongdinh',CURRENT_TIMESTAMP()),

    ('sp05','Cọ núi','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887386/vwzhbvg3orodi4ntqyu9.jpg',
     80000.0,3,'Một loại cây có lá dài và hoa thơm, thường được trồng để làm cảnh hoặc để trang trí ngoài trời.',
     'Là một loại cây có nguồn gốc từ vùng núi cao ở Trung Quốc, có tên khoa học là Rhapis excelsa và thuộc họ Palmae. Cây có thân nhỏ, lá màu xanh đậm và được sắp xếp đều quanh thân cây. Cọ núi thường được trồng trong chậu để làm cảnh trong nhà hoặc văn phòng, và có khả năng lọc không khí và giúp tạo ra một môi trường sống lành mạnh.',
     2,1,'truongdinh',CURRENT_TIMESTAMP(),'truongdinh',CURRENT_TIMESTAMP()),

    ('sp06','Bạch dương','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887402/cnhlzcyhbquijryjf2l6.jpg',
     63000.0,2,'Một loại cây có hoa tím đẹp, thường được trồng để làm cảnh hoặc để trang trí.',
     'Là một loại cây cảnh có nguồn gốc từ Trung Quốc, có tên khoa học là Aglaonema spp. và thuộc họ Araceae. Cây có lá màu xanh đậm và trắng và thường được trồng trong chậu để làm cảnh trong nhà hoặc văn phòng. Bạch dương có khả năng lọc không khí và giúp tạo ra một môi trường sống lành mạnh.',
     2,2,'dinhdanh',CURRENT_TIMESTAMP(),'dinhdanh',CURRENT_TIMESTAMP()),

    ('sp07','Gỗ nến','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887426/gookvrmjtuqjvji7nmeh.png',
     190000.0,14,'Một loại cây có lá và hoa đẹp, thường được trồng để làm cảnh hoặc để trang trí trong nhà.',
     'Là một loại cây có nguồn gốc từ Nam Mỹ, có tên khoa học là Euphorbia ingens và thuộc họ Euphorbiaceae. Cây có thân to và lá màu xanh đậm. Gỗ nến thường được trồng để làm cảnh trong nhà hoặc ngoài trời, và có thể được sử dụng để làm cây chống cát hoặc trang trí.',
     2,2,'dinhdanh',CURRENT_TIMESTAMP(),'dinhdanh',CURRENT_TIMESTAMP()),

    ('sp08','Xương rồng tròn','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887447/uttsejipyw3g9russjee.jpg',
     195000.0,50,'Một loại cây xanh đặc biệt với thân và lá hình mũi tên, thường được trồng để làm cảnh hoặc để trang trí ngoài trời.',
     'Là một loại cây cảnh có nguồn gốc từ vùng núi cao của Trung Mỹ, có tên khoa học là Cactaceae spp. và thuộc họ Cactaceae. Cây có thân dài và lá màu xanh đặc biệt, có gai trên thân cây. Xương rồng thường được trồng để làm cảnh trong nhàhoặc ngoài trời, và có khả năng chịu khô và nắng nóng, thích hợp với khí hậu khô cằn.',
     2,2,'dinhdanh',CURRENT_TIMESTAMP(),'dinhdanh',CURRENT_TIMESTAMP()),

    ('sp09','Cây kapoke','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887464/di1574jotz7ksiccjwgv.jpg',
     365000.0,4,'Một loại cây có hoa đẹp, thường được trồng để làm cảnh hoặc để trang trí.',
     'Là một loại cây cảnh có nguồn gốc từ Trung Mỹ và Nam Mỹ, có tên khoa học là Ceiba pentandra và thuộc họ Bombacaceae. Cây có thân to và lá màu xanh nhạt. Cây kapoke thường được trồng để làm cảnh trong nhà hoặc ngoài trời, và có thể được sử dụng để làm cây bóng mát.',
     2,2,'dinhdanh',CURRENT_TIMESTAMP(),'dinhdanh',CURRENT_TIMESTAMP()),

    ('sp10','Ráy mía cào','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887481/kt2rhenwhqmvjq8pdfgq.jpg',
     170000.0,15,'Một loại cây có hoa và lá đẹp, thường được trồng để làm cảnh hoặc để trang trí.',
     'Là một loại cây cảnh có nguồn gốc từ châu Phi, có tên khoa học là Sansevieria cylindrica và thuộc họ Asparagaceae. Cây có lá màu xanh nhạt, hình trụ, dài và thường được trồng trong chậu để làm cảnh trong nhà hoặc văn phòng. Ráy mía cào có khả năng lọc không khí và giúp tạo ra một môi trường sống lành mạnh.',
     2,2,'dinhdanh',CURRENT_TIMESTAMP(),'dinhdanh',CURRENT_TIMESTAMP()),

    ('sp11','Cây cầu nguyện','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887496/akgfw1puowsmt8je20ld.jpg',
     220000.0,7,'Một loại cây có hoa nhỏ và đẹp, thường được trồng để làm cảnh hoặc để trang trí trong nhà.',
     ' Là một loại cây cảnh có nguồn gốc từ vùng núi cao của Đông Nam Á, có tên khoa học là Maranta spp. và thuộc họ Marantaceae. Cây có lá màu xanh đậm, hình trái tim và thường được trồng trong chậu để làm cảnh trong nhà hoặc văn phòng. Cây cầu nguyện có khả năng lọc không khí và giúp tạo ra một môi trường sống lành mạnh.',
     2,1,'truongdinh',CURRENT_TIMESTAMP(),'truongdinh',CURRENT_TIMESTAMP()),

    ('sp12','Lựu cảnh','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887517/wyggloakwvuqjzsmk1vy.jpg',
     270000.0,32,'Một loại cây có hoa và quả đẹp, thường được trồng để làm cảnh hoặc để trang trí trong nhà.',
     'Là một loại cây cảnh có nguồn gốc từ Trung Quốc, có tên khoa học là Punica granatum và thuộc họ Lythraceae. Cây có hoa đỏ hoặc cam và trái lựu hình cầu. Lựu cảnh thường được trồng để làm cảnh trong sân vườn hoặc vườn trước nhà.',
     2,1,'truongdinh',CURRENT_TIMESTAMP(),'truongdinh',CURRENT_TIMESTAMP()),

    ('sp13','Hoa tử đinh hương','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887536/f67yqbpquqynqsd6oqjg.jpg',
     140000.0,12,'Một loại hoa thơm và đẹp, thường được trồng để trang trí trong nhà hoặc ngoài trời.',
     'Là một loại cây có nguồn gốc từ Địa Trung Hải, có tên khoa học là Lavandula angustifolia và thuộc họ Lamiaceae. Cây có hoa màu tím và có mùi thơm đặc trưng. Hoa tử đinh hương thường được trồng để làm cảnh trong sân vườn hoặc vườn trước nhà, và được sử dụng để sản xuất tinh dầu tự nhiên.',
     5,1,'truongdinh',CURRENT_TIMESTAMP(),'truongdinh',CURRENT_TIMESTAMP()),

    ('sp14','Hoa tử đằng','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887536/f67yqbpquqynqsd6oqjg.jpg',
     145000.0,11,'Một loại hoa đẹp với màu sắc đa dạng, thường được trồng để làm cảnh hoặc để trang trí.',
     'Là một loại cây có nguồn gốc từ châu Âu và châu Á, có tên khoa học là Digitalis purpurea và thuộc họ Plantaginaceae. Cây có hoa màu tím hoặc hồng, hình ống, dài và mọc thành từng chùm. Hoa tử đằng thường được trồng để làm cảnh trong sân vườn hoặc vườn trước nhà, và có thể được sử dụng để chữa bệnh tim.',
     5,1,'truongdinh',CURRENT_TIMESTAMP(),'truongdinh',CURRENT_TIMESTAMP()),

    ('sp15','Măng tây mạng nhện','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887582/lgfp4hoknnlxpwewmxqt.jpg',
     165000.0,6,'Một loại cây có lá và hoa đẹp, thường được trồng để làm cảnh hoặc để trang trí trong nhà.',
     'Là một loại cây có nguồn gốc từ châu Phi, có tên khoa học là Chlorophytum comosum và thuộc họ Asparagaceae. Cây có lá màu xanh nhạt, hình dài, chằng chịt và thường được trồng trong chậu để làm cảnh trong nhà hoặc văn phòng. Măng tây mạng nhện có khả năng lọc không khí và giúp tạo ra một môi trường sống lành mạnh.',
     2,1,'truongdinh',CURRENT_TIMESTAMP(),'truongdinh',CURRENT_TIMESTAMP()),

    ('sp16','Cây Măng tây','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887601/devzw8lf1dm87dwf0lje.jpg',
     185000.0,4,'Một loại cây có lá và quả đẹp, thường được trồng để làm cảnh hoặc để ăn.',
     'Là một loại cây có nguồn gốc từ châu Phi, có tên khoa học là Begonia spp. và thuộc họ Begoniaceae. Cây có hoa màu trắng, đỏ hoặc hồng và lá màu xanh nhạt. Cây Măng tây thường được trồng để làm cảnh trong sân vườn hoặc vườn trước nhà.',
     2,1,'truongdinh',CURRENT_TIMESTAMP(),'truongdinh',CURRENT_TIMESTAMP()),

    ('sp17','Trăng hoa','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887623/zbm1yanffnfzckobs3j8.png',
     300000.0,7,'Một loại hoa có mùi thơm đặc trưng, thường được trồng để trang trí trong nhà hoặc ngoài trời.',
     'Là một loại cây có nguồn gốc từ châu Á, có tên khoa học là Gardenia jasminoides và thuộc họ Rubiaceae. Cây có hoa màu trắng và mùi thơm đặc trưng. Trăng hoa thường được trồng để làm cảnh trong sân vườn hoặc vườn trước nhà, và được sử dụng để sản xuất nước hoa và mỹ phẩm.',
     5,2,'dinhdanh',CURRENT_TIMESTAMP(),'dinhdanh',CURRENT_TIMESTAMP()),

    ('sp18','Hoa giấy hồng','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887646/axnndpzqgn0giettd5vi.jpg',
     60000.0,27,'Một loại hoa đẹp và dễ trồng, thường được trồng để làm cảnh hoặc để trang trí.',
     'Là một loại cây có nguồn gốc từ châu Á, có tên khoa học là Bougainvillea spp. và thuộc họ Nyctaginaceae. Cây có hoa màu hồng, đỏ hoặc tím và lá màu xanh đậm. Hoa giấy hồng thường được trồng để làm cảnh trong sân vườn hoặc vườn trước nhà, và có thể được sử dụng để làm hàng rào hoặc bức tường xanh.',
     5,2,'dinhdanh',CURRENT_TIMESTAMP(),'dinhdanh',CURRENT_TIMESTAMP()),

    ('sp19','Ráy xanh','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887660/kswshpjgmgifgy3jnit6.jpg',
     99000.0,6,'Một loại cây có lá đẹp và màu sắc đa dạng, thường được trồng để làm cảnh hoặc để trang trí trong nhà.',
     'Là một loại cây cảnh có nguồn gốc từ châu Phi, có tên khoa học là Zamioculcas zamiifolia và thuộc họ Araceae. Cây có lá màu xanh đậm, bóng và đặc trưng là rất bền và dễ chăm sóc. Ráy xanh thường được trồng trong nhà, văn phòng hay các không gian nội thất khác để tạo ra một không gian xanh tươi, thư giãn.',
     2,2,'dinhdanh',CURRENT_TIMESTAMP(),'dinhdanh',CURRENT_TIMESTAMP()),

    ('sp20','Cay xanh uốn cong','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887715/hgmwwxmbl2sua4kjkrnr.jpg',
     2760000.0,1,'Một loại cây có hoa và lá đẹp, thường được trồng để làm cảnh hoặc để trang trí trong nhà.',
     'Là một loại cây có nguồn gốc từ châu Phi và châu Á, có tên khoa học là Ficus elastica và thuộc họ Moraceae. Cây có lá màu xanh đậm và dày, thường có hình uốn cong hoặc xoắn vặn đặc biệt. Cay xanh uốn cong thường được trồng để làm cảnh trong nhà, văn phòng hay các không gian nội thất khác để tạo ra một không gian xanh tươi, thư giãn.',
     4,2,'dinhdanh',CURRENT_TIMESTAMP(),'dinhdanh',CURRENT_TIMESTAMP()),

    ('sp21','Đuôi rồng xanh','https://res.cloudinary.com/dtsfnikj0/image/upload/v1681887731/riel6fkvwdgnjwmalyxx.jpg',
     178000.0,8,'Một loại cây có lá xanh đặc biệt với hình dạng giống như đuôi rồng, thường được trồng để làm cảnh hoặc để trang trí ngoài trời.',
     'Là một loại cây có nguồn gốc từ Nam Mỹ, có tên khoa học là Epiphyllum spp. và thuộc họ Cactaceae. Cây có hoa màu trắng, đỏ hoặc hồng và thường mọc trên các nhánh thân dài và mảnh mai. Đuôi rồng xanh thường được trồng để làm cảnh trong sân vườn hoặc vườn trước nhà, và có thể được sử dụng để làm cây leo hoặc tạo hình trong các không gian cảnh quan.',
     2,2,'dinhdanh',CURRENT_TIMESTAMP(),'dinhdanh',CURRENT_TIMESTAMP());

-- Create product view
INSERT INTO product_view(view,product_id,createby,createdate,modifiedby,modifieddate)
VALUES
    (1,1,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,2,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,3,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,4,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,5,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,6,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,7,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,8,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,9,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,10,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,11,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,12,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,13,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,14,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,15,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,16,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,17,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,18,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,19,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,20,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
    (1,21,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());

-- INSERT INTO orders(used_id,shop_id,status,total_price,payment_method,number_phone,address,createby,createdate,modifiedby,modifieddate)
-- VALUES (used_id,shop_id,'ORDER_DONE',total_price,'Thanh toán khi nhận hàng',number_phone,address,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP())
--
-- INSERT INTO order_detail(order_id,product_id,quantity,price,createby,createdate,modifiedby,modifieddate)
-- VALUES (4,0.0,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
--        (5,0.0,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
--        (6,0.0,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
--        (7,0.0,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP()),
--        (8,0.0,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());