use tree_green;
-- Create role
INSERT INTO role(code,name,createby,createdate,modifiedby,modifieddate) VALUES('ADMIN','Quản trị','Developers',CURRENT_TIMESTAMP(),'Developers',CURRENT_TIMESTAMP());
INSERT INTO role(code,name,createby,createdate,modifiedby,modifieddate) VALUES('SELLER','Người bán hàng','Developers',CURRENT_TIMESTAMP(),'Developers',CURRENT_TIMESTAMP());
INSERT INTO role(code,name,createby,createdate,modifiedby,modifieddate) VALUES('USER','Người dùng','Developers',CURRENT_TIMESTAMP(),'Developers',CURRENT_TIMESTAMP());

-- Create category
INSERT INTO category(code,name,createby,createdate,modifiedby,modifieddate) VALUES ('DAY-LEO','Cây dây leo','admin',CURRENT_TIMESTAMP(),'admin',CURRENT_TIMESTAMP());
INSERT INTO category(code,name,createby,createdate,modifiedby,modifieddate) VALUES ('TAN-LA','Cây xanh tán lá','admin',CURRENT_TIMESTAMP(),'admin',CURRENT_TIMESTAMP());
INSERT INTO category(code,name,createby,createdate,modifiedby,modifieddate) VALUES ('SEN-DA','Sen đá','admin',CURRENT_TIMESTAMP(),'admin',CURRENT_TIMESTAMP());
INSERT INTO category(code,name,createby,createdate,modifiedby,modifieddate) VALUES ('THAN-TO','Cây thân to','admin',CURRENT_TIMESTAMP(),'admin',CURRENT_TIMESTAMP());
INSERT INTO category(code,name,createby,createdate,modifiedby,modifieddate) VALUES ('HOA','Hoa','admin',CURRENT_TIMESTAMP(),'admin',CURRENT_TIMESTAMP());

-- Create user-admin
INSERT INTO user(username,password,full_name,status,address,avatar,email,number_phone,createby,createdate,modifiedby,modifieddate)
VALUES('admin','$2a$10$TMkrd3LKZDtJpXnbRZ8oKOxTvYc0MSUymS0e07T9yjVUAefYEBRpC','Nguyễn Văn Hiếu','ACTIVE','Thành phố Thủ Đức',
       'https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg',
       'greenearth@gmail.com','18002704','admin',CURRENT_TIMESTAMP(),'admin',CURRENT_TIMESTAMP());

-- Create user-seller
INSERT INTO user(username,password,full_name,status,address,avatar,email,number_phone,createby,createdate,modifiedby,modifieddate)
VALUES('truongdinh','$2a$10$TMkrd3LKZDtJpXnbRZ8oKOxTvYc0MSUymS0e07T9yjVUAefYEBRpC','Nguyễn Trường Đình','ACTIVE','123 Nguyễn Văn A, Quận 12, TP.HCM',
       'https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg',
       'truongdinhshop@gmail.com','0896314977','anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());
INSERT INTO user(username,password,full_name,status,address,avatar,email,number_phone,createby,createdate,modifiedby,modifieddate)
VALUES('dinhdanh','$2a$10$TMkrd3LKZDtJpXnbRZ8oKOxTvYc0MSUymS0e07T9yjVUAefYEBRpC','Trần Đình Danh','ACTIVE','456 Lê Lợi, Thủ Đức, TP.HCM',
       'https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg',
       'dinhdanhshop@gmail.com','0796512357','anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());

-- Create user-user
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
       'john.doe@hotmail.com','0868999888','anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());
INSERT INTO user(username,password,full_name,status,address,avatar,email,number_phone,createby,createdate,modifiedby,modifieddate)
VALUES('hoangduc','$2a$10$TMkrd3LKZDtJpXnbRZ8oKOxTvYc0MSUymS0e07T9yjVUAefYEBRpC','Nguyễn Hoàng Đức','ACTIVE','101 Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh',
       'https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg',
       'jane.smith@outlook.com','0905123456','anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());
INSERT INTO user(username,password,full_name,status,address,avatar,email,number_phone,createby,createdate,modifiedby,modifieddate)
VALUES('congdanh','$2a$10$TMkrd3LKZDtJpXnbRZ8oKOxTvYc0MSUymS0e07T9yjVUAefYEBRpC','Phạm Công Danh','ACTIVE','222 Trần Hưng Đạo, Quận 10, TP. Hồ Chí Minh',
       'https://png.pngtree.com/png-vector/20190805/ourlarge/pngtree-account-avatar-user-abstract-circle-background-flat-color-icon-png-image_1650938.jpg',
       'info@company.com','0978567890','anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());

-- Create user_role
INSERT INTO user_role(user_id,role_id) VALUES (1,1);
INSERT INTO user_role(user_id,role_id) VALUES (2,2);
INSERT INTO user_role(user_id,role_id) VALUES (3,2);
INSERT INTO user_role(user_id,role_id) VALUES (4,3);
INSERT INTO user_role(user_id,role_id) VALUES (5,3);
INSERT INTO user_role(user_id,role_id) VALUES (6,3);
INSERT INTO user_role(user_id,role_id) VALUES (7,3);
INSERT INTO user_role(user_id,role_id) VALUES (8,3);

-- Create shop
INSERT INTO shop(name,avatar,description,user_id,createby,createdate,modifiedby,modifieddate)
VALUES ('Shop xanh Phan Rang','https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg',
        'Shop xanh Phan Rang là một cửa hàng đặc biệt dành cho những người yêu cây cảnh tại thành phố Phan Rang. Với một sự đa dạng đáng kinh ngạc về loại cây, từ cây nhỏ xinh cho bàn làm việc cho đến cây cảnh lớn đẹp để trang trí trong không gian sống, shop xanh Phan Rang mang đến một trải nghiệm mua sắm thú vị cho các tín đồ cây cảnh. Đội ngũ nhân viên tận tâm và hiểu biết về cây cảnh sẽ giúp bạn chọn lựa những cây phù hợp với sở thích và yêu cầu của bạn. Shop xanh Phan Rang cam kết mang lại sự hài lòng và đem đến một khung cảnh xanh tươi trong ngôi nhà của bạn.',
        2,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());
INSERT INTO shop(name,avatar,description,user_id,createby,createdate,modifiedby,modifieddate)
VALUES ('Cây cảnh xứ Trung','https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg',
        'Cây cảnh xứ Trung là nơi bạn có thể khám phá và tìm hiểu những loại cây cảnh độc đáo từ vùng Trung Quốc. Với sự đa dạng về mẫu mã và chất lượng, cây cảnh xứ Trung mang đến những sản phẩm độc đáo và đẹp mắt cho người yêu cây cảnh. Với sự chăm sóc đặc biệt và kiến thức sâu sắc về cây cảnh, cây cảnh xứ Trung sẽ giúp bạn chọn lựa những cây phù hợp với không gian sống và sở thích của bạn. Bạn sẽ được tận hưởng không chỉ vẻ đẹp của cây cảnh mà còn cảm nhận được sự tinh tế và sự bền vững của nghệ thuật cây cảnh Trung Quốc.',
        3,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());

-- Create cart
INSERT INTO cart(user_id,total_price,createby,createdate,modifiedby,modifieddate) VALUES (4,0.0,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());
INSERT INTO cart(user_id,total_price,createby,createdate,modifiedby,modifieddate) VALUES (5,0.0,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());
INSERT INTO cart(user_id,total_price,createby,createdate,modifiedby,modifieddate) VALUES (6,0.0,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());
INSERT INTO cart(user_id,total_price,createby,createdate,modifiedby,modifieddate) VALUES (7,0.0,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());
INSERT INTO cart(user_id,total_price,createby,createdate,modifiedby,modifieddate) VALUES (8,0.0,'anonymousUser',CURRENT_TIMESTAMP(),'anonymousUser',CURRENT_TIMESTAMP());

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

-- Create order
INSERT INTO orders(createby,createdate,modifiedby,modifieddate,address,number_phone,payment_method,status,total_price,shop_id,used_id)
VALUES
    ('truonggiang', '2023-01-05 12:19:02', 'anonymousUser', '2023-01-05 12:20:59', '123 Nguyễn Văn A, Quận 1, TP. Hồ Chí Minh', '0912345678', 'Cash on Delivery', 'ORDER_DONE', 460000, 1, 4),
    ('truonggiang', '2023-01-05 12:19:02', 'anonymousUser', '2023-01-05 12:20:37', '123 Nguyễn Văn A, Quận 1, TP. Hồ Chí Minh', '0912345678', 'Cash on Delivery', 'ORDER_DONE', 195000, 2, 4),
    ('hoangduc', '2023-01-05 12:19:34', 'anonymousUser', '2023-01-05 12:21:02', '101 Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh', '0905123456', 'Cash on Delivery', 'ORDER_DONE', 230000, 1, 7),
    ('vanminh', '2023-01-05 12:20:06', 'anonymousUser', '2023-01-05 12:20:40', '456 Lê Lợi, Quận 5, TP. Hồ Chí Minh', '0987654321', 'Cash on Delivery', 'ORDER_DONE', 667000, 2, 5),
    ('congdanh', '2023-01-05 12:20:25', 'anonymousUser', '2023-01-05 12:21:11', '222 Trần Hưng Đạo, Quận 10, TP. Hồ Chí Minh', '0978567890', 'Cash on Delivery', 'ORDER_DONE', 360000, 1, 8),

    ('truonggiang', '2023-02-05 12:23:42', 'anonymousUser', '2023-02-05 12:25:21', '123 Nguyễn Văn A, Quận 1, TP. Hồ Chí Minh', '0912345678', 'Cash on Delivery', 'ORDER_DONE', 453000, 2, 4),
    ('thanhtai', '2023-02-05 12:24:23', 'anonymousUser', '2023-02-05 12:25:24', '789 Điện Biên Phủ, Quận 3, TP. Hồ Chí Minh', '0868999888', 'Cash on Delivery', 'ORDER_DONE', 3060000, 2, 6),
    ('thanhtai', '2023-02-05 12:24:23', 'anonymousUser', '2023-02-05 12:24:59', '789 Điện Biên Phủ, Quận 3, TP. Hồ Chí Minh', '0868999888', 'Cash on Delivery', 'ORDER_DONE', 1035000, 1, 6),
    ('vanminh', '2023-02-05 12:24:46', 'anonymousUser', '2023-02-05 12:25:02', '456 Lê Lợi, Quận 5, TP. Hồ Chí Minh', '0987654321', 'Cash on Delivery', 'ORDER_DONE', 580000, 1, 5),

    ('truonggiang', '2023-03-05 12:03:20', 'anonymousUser', '2023-03-05 12:06:43', '123 Nguyễn Văn A, Quận 1, TP. Hồ Chí Minh', '0912345678', 'Cash on Delivery', 'ORDER_DONE', 930000, 1, 4),
    ('truonggiang', '2023-03-05 12:03:20', 'anonymousUser', '2023-03-05 12:07:28', '123 Nguyễn Văn A, Quận 1, TP. Hồ Chí Minh', '0912345678', 'Cash on Delivery', 'ORDER_DONE', 775000, 2, 4),
    ('thanhtai', '2023-03-05 12:04:28', 'anonymousUser', '2023-03-05 12:06:45', '789 Điện Biên Phủ, Quận 3, TP. Hồ Chí Minh', '0756314985', 'Cash on Delivery', 'ORDER_DONE', 1695000, 1, 6),
    ('thanhtai', '2023-03-05 12:04:28', 'anonymousUser', '2023-03-05 12:07:34', '789 Điện Biên Phủ, Quận 3, TP. Hồ Chí Minh', '0756314985', 'Cash on Delivery', 'ORDER_DONE', 3337000, 2, 6),
    ('vanminh', '2023-03-05 12:05:04', 'anonymousUser', '2023-03-05 12:07:37', '456 Lê Lợi, Quận 5, TP. Hồ Chí Minh', '0987654321', 'Cash on Delivery', 'ORDER_DONE', 170000, 2, 5),
    ('vanminh', '2023-03-05 12:05:04', 'anonymousUser', '2023-03-05 12:06:48', '456 Lê Lợi, Quận 5, TP. Hồ Chí Minh', '0987654321', 'Cash on Delivery', 'ORDER_DONE', 760000, 1, 5),
    ('hoangduc', '2023-03-05 12:06:03', 'anonymousUser', '2023-03-05 12:06:51', '101 Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh', '0905123456', 'Cash on Delivery', 'ORDER_DONE', 1745000, 1, 7),
    ('hoangduc', '2023-03-05 12:06:03', 'anonymousUser', '2023-03-05 12:07:41', '101 Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh', '0905123456', 'Cash on Delivery', 'ORDER_DONE', 360000, 2, 7),

    ('truonggiang', '2023-04-05 12:13:10', 'anonymousUser', '2023-04-05 12:15:28', '123 Nguyễn Văn A, Quận 1, TP. Hồ Chí Minh', '0912345678', 'Cash on Delivery', 'ORDER_DONE', 3722000, 2, 4),
    ('truonggiang', '2023-04-05 12:13:10', 'anonymousUser', '2023-04-05 12:16:03', '123 Nguyễn Văn A, Quận 1, TP. Hồ Chí Minh', '0912345678', 'Cash on Delivery', 'ORDER_DONE', 1795000, 1, 4),
    ('thanhtai', '2023-04-05 12:13:39', 'anonymousUser', '2023-04-05 12:15:30', '789 Điện Biên Phủ, Quận 3, TP. Hồ Chí Minh', '0456397516', 'Cash on Delivery', 'ORDER_DONE', 385000, 2, 6),
    ('thanhtai', '2023-04-05 12:13:39', 'anonymousUser', '2023-04-05 12:16:06', '789 Điện Biên Phủ, Quận 3, TP. Hồ Chí Minh', '0456397516', 'Cash on Delivery', 'ORDER_DONE', 230000, 1, 6),
    ('vanminh', '2023-04-05 12:14:13', 'anonymousUser', '2023-04-05 12:16:09', '456 Lê Lợi, Quận 5, TP. Hồ Chí Minh', '0987654321', 'Cash on Delivery', 'ORDER_DONE', 185000, 1, 5),
    ('vanminh', '2023-04-05 12:14:13', 'anonymousUser', '2023-04-05 12:15:33', '456 Lê Lợi, Quận 5, TP. Hồ Chí Minh', '0987654321', 'Cash on Delivery', 'ORDER_DONE', 600000, 2, 5),
    ('hoangduc', '2023-04-05 12:14:44', 'anonymousUser', '2023-04-05 12:15:36', '101 Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh', '0905123456', 'Cash on Delivery', 'ORDER_DONE', 1200000, 2, 7),
    ('congdanh', '2023-04-05 12:15:15', 'anonymousUser', '2023-04-05 12:15:39', '222 Trần Hưng Đạo, Quận 10, TP. Hồ Chí Minh', '0978567890', 'Cash on Delivery', 'ORDER_DONE', 3294000, 2, 8),

    ('truonggiang', '2023-05-05 13:05:46', 'anonymousUser', '2023-05-05 13:07:32', '123 Nguyễn Văn A, Quận 1, TP. Hồ Chí Minh', '0912345678', 'Cash on Delivery', 'ORDER_DONE', 240000, 1, 4),
    ('truonggiang', '2023-05-05 13:05:46', 'anonymousUser', '2023-05-05 13:07:05', '123 Nguyễn Văn A, Quận 1, TP. Hồ Chí Minh', '0912345678', 'Cash on Delivery', 'ORDER_DONE', 195000, 2, 4),
    ('hoangduc', '2023-05-05 13:06:12', 'anonymousUser', '2023-05-05 13:07:08', '101 Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh', '0905123456', 'Cash on Delivery', 'ORDER_DONE', 2760000, 2, 7),
    ('congdanh', '2023-05-05 13:06:55', 'anonymousUser', '2023-05-05 13:07:11', '222 Trần Hưng Đạo, Quận 10, TP. Hồ Chí Minh', '0978567890', 'Cash on Delivery', 'ORDER_DONE', 63000, 2, 8),
    ('congdanh', '2023-05-05 13:06:55', 'anonymousUser', '2023-05-05 13:07:35', '222 Trần Hưng Đạo, Quận 10, TP. Hồ Chí Minh', '0978567890', 'Cash on Delivery', 'ORDER_DONE', 620000, 1, 8),

    ('truonggiang', '2023-06-05 13:16:06', 'anonymousUser', '2023-06-05 13:20:35', '123 Nguyễn Văn A, Quận 1, TP. Hồ Chí Minh', '0912345678', 'Cash on Delivery', 'ORDER_CANCEL', 660000, 1, 4),
    ('truonggiang', '2023-06-05 13:16:06', 'anonymousUser', '2023-06-05 13:20:14', '123 Nguyễn Văn A, Quận 1, TP. Hồ Chí Minh', '0912345678', 'Cash on Delivery', 'ORDER_DONE', 5604000, 2, 4),
    ('thanhtai', '2023-06-05 13:16:42', 'anonymousUser', '2023-06-05 13:20:11', '789 Điện Biên Phủ, Quận 3, TP. Hồ Chí Minh', '0868999888', 'Cash on Delivery', 'ORDER_DONE', 5520000, 2, 6),
    ('thanhtai', '2023-06-05 13:16:42', 'anonymousUser', '2023-06-05 13:20:57', '789 Điện Biên Phủ, Quận 3, TP. Hồ Chí Minh', '0868999888', 'Cash on Delivery', 'ORDER_DONE', 1860000, 1, 6),
    ('hoangduc', '2023-06-05 13:17:19', 'anonymousUser', '2023-06-05 13:19:21', '101 Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh', '0905123456', 'Cash on Delivery', 'ORDER_DONE', 3300000, 2, 7),
    ('hoangduc', '2023-06-05 13:17:19', 'anonymousUser', '2023-06-05 13:21:00', '101 Lê Thánh Tôn, Quận 1, TP. Hồ Chí Minh', '0905123456', 'Cash on Delivery', 'ORDER_DONE', 1200000, 1, 7),
    ('vanminh', '2023-06-05 13:17:52', 'anonymousUser', '2023-06-05 13:20:07', '456 Lê Lợi, Quận 5, TP. Hồ Chí Minh', '0987654321', 'Cash on Delivery', 'ORDER_CANCEL', 1051000, 2, 5),
    ('vanminh', '2023-06-05 13:17:52', 'anonymousUser', '2023-06-05 13:20:47', '456 Lê Lợi, Quận 5, TP. Hồ Chí Minh', '0987654321', 'Cash on Delivery', 'ORDER_CANCEL', 1520000, 1, 5),
    ('congdanh', '2023-06-05 13:18:32', 'anonymousUser', '2023-06-05 13:19:17', '222 Trần Hưng Đạo, Quận 10, TP. Hồ Chí Minh', '0978567890', 'Cash on Delivery', 'ORDER_DONE', 3515000, 2, 8),
    ('congdanh', '2023-06-05 13:18:32', 'anonymousUser', '2023-06-05 13:20:51', '222 Trần Hưng Đạo, Quận 10, TP. Hồ Chí Minh', '0978567890', 'Cash on Delivery', 'ORDER_DONE', 1060000, 1, 8);

INSERT INTO order_detail(createby,createdate,modifiedby,modifieddate,price,quantity,order_id,product_id)
VALUES
    ('truonggiang', '2023-01-05 12:19:02', 'truonggiang', '2023-01-05 12:19:02', 230000, 2, 1, 4),
    ('truonggiang', '2023-01-05 12:19:02', 'truonggiang', '2023-01-05 12:19:02', 195000, 1, 2, 8),
    ('hoangduc', '2023-01-05 12:19:34', 'hoangduc', '2023-01-05 12:19:34', 230000, 1, 3, 1),
    ('vanminh', '2023-01-05 12:20:06', 'vanminh', '2023-01-05 12:20:06', 99000, 1, 4, 19),
    ('vanminh', '2023-01-05 12:20:06', 'vanminh', '2023-01-05 12:20:06', 178000, 1, 4, 21),
    ('vanminh', '2023-01-05 12:20:06', 'vanminh', '2023-01-05 12:20:06', 195000, 2, 4, 8),
    ('congdanh', '2023-01-05 12:20:25', 'congdanh', '2023-01-05 12:20:25', 120000, 3, 5, 2),

    ('truonggiang', '2023-02-05 12:23:42', 'truonggiang', '2023-02-05 12:23:42', 63000, 1, 6, 6),
    ('truonggiang', '2023-02-05 12:23:42', 'truonggiang', '2023-02-05 12:23:42', 195000, 2, 6, 8),
    ('thanhtai', '2023-02-05 12:24:23', 'thanhtai', '2023-02-05 12:24:23', 300000, 1, 7, 17),
    ('thanhtai', '2023-02-05 12:24:23', 'thanhtai', '2023-02-05 12:24:23', 2760000, 1, 7, 20),
    ('thanhtai', '2023-02-05 12:24:23', 'thanhtai', '2023-02-05 12:24:23', 80000, 2, 8, 5),
    ('thanhtai', '2023-02-05 12:24:23', 'thanhtai', '2023-02-05 12:24:23', 120000, 2, 8, 2),
    ('thanhtai', '2023-02-05 12:24:23', 'thanhtai', '2023-02-05 12:24:23', 230000, 1, 8, 4),
    ('thanhtai', '2023-02-05 12:24:23', 'thanhtai', '2023-02-05 12:24:23', 220000, 1, 8, 11),
    ('thanhtai', '2023-02-05 12:24:23', 'thanhtai', '2023-02-05 12:24:23', 185000, 1, 8, 16),
    ('vanminh', '2023-02-05 12:24:46', 'vanminh', '2023-02-05 12:24:46', 350000, 1, 9, 3),
    ('vanminh', '2023-02-05 12:24:46', 'vanminh', '2023-02-05 12:24:46', 230000, 1, 9, 4),

    ('truonggiang', '2023-03-05 12:03:20', 'truonggiang', '2023-03-05 12:03:20', 230000, 2, 10, 1),
    ('truonggiang', '2023-03-05 12:03:20', 'truonggiang', '2023-03-05 12:03:20', 120000, 1, 10, 2),
    ('truonggiang', '2023-03-05 12:03:20', 'truonggiang', '2023-03-05 12:03:20', 350000, 1, 10, 3),
    ('truonggiang', '2023-03-05 12:03:20', 'truonggiang', '2023-03-05 12:03:20', 195000, 3, 11, 8),
    ('truonggiang', '2023-03-05 12:03:20', 'truonggiang', '2023-03-05 12:03:20', 190000, 1, 1, 7),
    ('thanhtai', '2023-03-05 12:04:28', 'thanhtai', '2023-03-05 12:04:28', 165000, 1, 12, 15),
    ('thanhtai', '2023-03-05 12:04:28', 'thanhtai', '2023-03-05 12:04:28', 140000, 3, 12, 13),
    ('thanhtai', '2023-03-05 12:04:28', 'thanhtai', '2023-03-05 12:04:28', 185000, 6, 12, 16),
    ('thanhtai', '2023-03-05 12:04:28', 'thanhtai', '2023-03-05 12:04:28', 178000, 1, 13, 21),
    ('thanhtai', '2023-03-05 12:04:28', 'thanhtai', '2023-03-05 12:04:28', 99000, 1, 13, 19),
    ('thanhtai', '2023-03-05 12:04:28', 'thanhtai', '2023-03-05 12:04:28', 2760000, 1, 13, 20),
    ('thanhtai', '2023-03-05 12:04:28', 'thanhtai', '2023-03-05 12:04:28', 300000, 1, 13, 17),
    ('vanminh', '2023-03-05 12:05:04', 'vanminh', '2023-03-05 12:05:04', 170000, 1, 14, 10),
    ('vanminh', '2023-03-05 12:05:04', 'vanminh', '2023-03-05 12:05:04', 220000, 1, 15, 11),
    ('vanminh', '2023-03-05 12:05:04', 'vanminh', '2023-03-05 12:05:04', 270000, 2, 15, 12),
    ('hoangduc', '2023-03-05 12:06:03', 'hoangduc', '2023-03-05 12:06:03', 80000, 1, 16, 5),
    ('hoangduc', '2023-03-05 12:06:03', 'hoangduc', '2023-03-05 12:06:03', 185000, 9, 16, 16),
    ('hoangduc', '2023-03-05 12:06:03', 'hoangduc', '2023-03-05 12:06:03', 60000, 1, 17, 18),
    ('hoangduc', '2023-03-05 12:06:03', 'hoangduc', '2023-03-05 12:06:03', 300000, 1, 17, 17),

    ('truonggiang', '2023-04-05 12:13:10', 'truonggiang', '2023-04-05 12:13:10', 178000, 1, 18, 21),
    ('truonggiang', '2023-04-05 12:13:10', 'truonggiang', '2023-04-05 12:13:10', 2760000, 1, 18, 20),
    ('truonggiang', '2023-04-05 12:13:10', 'truonggiang', '2023-04-05 12:13:10', 99000, 1, 18, 19),
    ('truonggiang', '2023-04-05 12:13:10', 'truonggiang', '2023-04-05 12:13:10', 300000, 1, 18, 17),
    ('truonggiang', '2023-04-05 12:13:10', 'truonggiang', '2023-04-05 12:13:10', 190000, 1, 18, 7),
    ('truonggiang', '2023-04-05 12:13:10', 'truonggiang', '2023-04-05 12:13:10', 195000, 1, 18, 8),
    ('truonggiang', '2023-04-05 12:13:10', 'truonggiang', '2023-04-05 12:13:10', 230000, 2, 19, 1),
    ('truonggiang', '2023-04-05 12:13:10', 'truonggiang', '2023-04-05 12:13:10', 120000, 1, 19, 2),
    ('truonggiang', '2023-04-05 12:13:10', 'truonggiang', '2023-04-05 12:13:10', 350000, 1, 19, 3),
    ('truonggiang', '2023-04-05 12:13:10', 'truonggiang', '2023-04-05 12:13:10', 185000, 3, 19, 16),
    ('truonggiang', '2023-04-05 12:13:10', 'truonggiang', '2023-04-05 12:13:10', 165000, 1, 19, 15),
    ('truonggiang', '2023-04-05 12:13:10', 'truonggiang', '2023-04-05 12:13:10', 145000, 1, 19, 14),
    ('thanhtai', '2023-04-05 12:13:39', 'thanhtai', '2023-04-05 12:13:39', 190000, 1, 20, 7),
    ('thanhtai', '2023-04-05 12:13:39', 'thanhtai', '2023-04-05 12:13:39', 195000, 1, 20, 8),
    ('thanhtai', '2023-04-05 12:13:39', 'thanhtai', '2023-04-05 12:13:39', 230000, 1, 21, 4),
    ('vanminh', '2023-04-05 12:14:13', 'vanminh', '2023-04-05 12:14:13', 185000, 1, 22, 16),
    ('vanminh', '2023-04-05 12:14:13', 'vanminh', '2023-04-05 12:14:13', 300000, 2, 23, 17),
    ('hoangduc', '2023-04-05 12:14:44', 'hoangduc', '2023-04-05 12:14:44', 300000, 4, 24, 17),
    ('congdanh', '2023-04-05 12:15:15', 'congdanh', '2023-04-05 12:15:15', 2760000, 1, 25, 20),
    ('congdanh', '2023-04-05 12:15:15', 'congdanh', '2023-04-05 12:15:15', 178000, 3, 25, 21),

    ('truonggiang', '2023-05-05 13:05:46', 'truonggiang', '2023-05-05 13:05:46', 120000, 2, 26, 2),
    ('truonggiang', '2023-05-05 13:05:46', 'truonggiang', '2023-05-05 13:05:46', 195000, 1, 27, 8),
    ('hoangduc', '2023-05-05 13:06:12', 'hoangduc', '2023-05-05 13:06:12', 2760000, 1, 28, 20),
    ('congdanh', '2023-05-05 13:06:55', 'congdanh', '2023-05-05 13:06:55', 63000, 1, 29, 6),
    ('congdanh', '2023-05-05 13:06:55', 'congdanh', '2023-05-05 13:06:55', 80000, 2, 30, 5),
    ('congdanh', '2023-05-05 13:06:55', 'congdanh', '2023-05-05 13:06:55', 230000, 2, 30, 4),

    ('truonggiang', '2023-06-05 13:16:06', 'truonggiang', '2023-06-05 13:16:06', 220000, 3, 31, 11),
    ('truonggiang', '2023-06-05 13:16:06', 'truonggiang', '2023-06-05 13:16:06', 2760000, 1, 32, 20),
    ('truonggiang', '2023-06-05 13:16:06', 'truonggiang', '2023-06-05 13:16:06', 178000, 3, 32, 21),
    ('truonggiang', '2023-06-05 13:16:06', 'truonggiang', '2023-06-05 13:16:06', 190000, 2, 32, 7),
    ('truonggiang', '2023-06-05 13:16:06', 'truonggiang', '2023-06-05 13:16:06', 195000, 2, 32, 8),
    ('truonggiang', '2023-06-05 13:16:06', 'truonggiang', '2023-06-05 13:16:06', 170000, 2, 32, 10),
    ('truonggiang', '2023-06-05 13:16:06', 'truonggiang', '2023-06-05 13:16:06', 300000, 4, 32, 17),
    ('thanhtai', '2023-06-05 13:16:42', 'thanhtai', '2023-06-05 13:16:42', 2760000, 2, 33, 20),
    ('thanhtai', '2023-06-05 13:16:42', 'thanhtai', '2023-06-05 13:16:42', 230000, 3, 34, 4),
    ('thanhtai', '2023-06-05 13:16:42', 'thanhtai', '2023-06-05 13:16:42', 80000, 3, 34, 5),
    ('thanhtai', '2023-06-05 13:16:42', 'thanhtai', '2023-06-05 13:16:42', 120000, 2, 34, 2),
    ('thanhtai', '2023-06-05 13:16:42', 'thanhtai', '2023-06-05 13:16:42', 230000, 3, 34, 1),
    ('hoangduc', '2023-06-05 13:17:19', 'hoangduc', '2023-06-05 13:17:19', 300000, 11, 35, 17),
    ('hoangduc', '2023-06-05 13:17:19', 'hoangduc', '2023-06-05 13:17:19', 120000, 10, 36, 2),
    ('vanminh', '2023-06-05 13:17:52', 'vanminh', '2023-06-05 13:17:52', 170000, 1, 37, 10),
    ('vanminh', '2023-06-05 13:17:52', 'vanminh', '2023-06-05 13:17:52', 365000, 1, 37, 9),
    ('vanminh', '2023-06-05 13:17:52', 'vanminh', '2023-06-05 13:17:52', 63000, 2, 37, 6),
    ('vanminh', '2023-06-05 13:17:52', 'vanminh', '2023-06-05 13:17:52', 195000, 2, 37, 8),
    ('vanminh', '2023-06-05 13:17:52', 'vanminh', '2023-06-05 13:17:52', 270000, 1, 38, 12),
    ('vanminh', '2023-06-05 13:17:52', 'vanminh', '2023-06-05 13:17:52', 165000, 2, 38, 15),
    ('vanminh', '2023-06-05 13:17:52', 'vanminh', '2023-06-05 13:17:52', 230000, 4, 38, 4),
    ('congdanh', '2023-06-05 13:18:32', 'congdanh', '2023-06-05 13:18:32', 365000, 1, 39, 9),
    ('congdanh', '2023-06-05 13:18:32', 'congdanh', '2023-06-05 13:18:32', 195000, 2, 39, 8),
    ('congdanh', '2023-06-05 13:18:32', 'congdanh', '2023-06-05 13:18:32', 2760000, 1, 39, 20),
    ('congdanh', '2023-06-05 13:18:32', 'congdanh', '2023-06-05 13:18:32', 220000, 3, 40, 11),
    ('congdanh', '2023-06-05 13:18:32', 'congdanh', '2023-06-05 13:18:32', 80000, 5, 40, 5);

INSERT INTO `statistical` (createby,createdate,modifiedby,modifieddate,month,quantity_sold,really_received,total_revenue,year,used_id)
VALUES
    ('anonymousUser', '2023-01-05 12:18:37', 'anonymousUser', '2023-01-05 12:21:11', 1, 11, 191200, 191200, 2023, 1),
    ('anonymousUser', '2023-01-05 12:20:33', 'anonymousUser', '2023-01-05 12:20:40', 1, 5, 775800, 862000, 2023, 3),
    ('anonymousUser', '2023-01-05 12:20:54', 'anonymousUser', '2023-01-05 12:21:11', 1, 6, 945000, 1050000, 2023, 2),

    ('anonymousUser', '2023-02-05 12:23:09', 'anonymousUser', '2023-02-05 12:25:24', 2, 14, 512800, 512800, 2023, 1),
    ('anonymousUser', '2023-02-05 12:24:55', 'anonymousUser', '2023-02-05 12:25:02', 2, 9, 1453500, 1615000, 2023, 2),
    ('anonymousUser', '2023-02-05 12:25:13', 'anonymousUser', '2023-02-05 12:25:24', 2, 5, 3161700, 3513000, 2023, 3),

    ('anonymousUser', '2023-03-05 12:00:49', 'anonymousUser', '2023-03-05 12:07:41', 3, 38, 977200, 977200, 2023, 1),
    ('anonymousUser', '2023-03-05 12:06:15', 'anonymousUser', '2023-03-05 12:06:51', 3, 27, 4617000, 5130000, 2023, 2),
    ('anonymousUser', '2023-03-05 12:07:19', 'anonymousUser', '2023-03-05 12:07:41', 3, 11, 4177800, 4642000, 2023, 3),

    ('anonymousUser', '2023-04-05 12:12:10', 'anonymousUser', '2023-04-05 12:16:09', 4, 29, 1141100, 1141100, 2023, 1),
    ('anonymousUser', '2023-04-05 12:15:23', 'anonymousUser', '2023-04-05 12:15:39', 4, 18, 8280900, 9201000, 2023, 3),
    ('anonymousUser', '2023-04-05 12:15:55', 'anonymousUser', '2023-04-05 12:16:09', 4, 11, 1989000, 2210000, 2023, 2),

    ('anonymousUser', '2023-05-05 13:05:17', 'anonymousUser', '2023-05-05 13:07:35', 5, 9, 387800, 387800, 2023, 1),
    ('anonymousUser', '2023-05-05 13:07:02', 'anonymousUser', '2023-05-05 13:07:11', 5, 3, 2716200, 3018000, 2023, 3),
    ('anonymousUser', '2023-05-05 13:07:28', 'anonymousUser', '2023-05-05 13:07:35', 5, 6, 774000, 860000, 2023, 2),

    ('anonymousUser', '2023-06-05 13:14:31', 'anonymousUser', '2023-06-05 13:21:00', 6, 60, 2205900, 2205900, 2023, 1),
    ('anonymousUser', '2023-06-05 13:18:54', 'anonymousUser', '2023-06-05 13:20:14', 6, 31, 16145100, 17939000, 2023, 3),
    ('anonymousUser', '2023-06-05 13:20:28', 'anonymousUser', '2023-06-05 13:21:00', 6, 29, 3708000, 4120000, 2023, 2);

INSERT INTO blog(createby,createdate,modifiedby,modifieddate,content,image,short_description,title,shop_id)
VALUES
    ('dinhdanh', '2023-06-05 13:39:19', 'dinhdanh', '2023-06-05 13:39:19', '<p>Cây cảnh phong cách<strong> Nhật Bản</strong> là một trong những xu hướng nổi bật trong việc trang trí nội thất và vườn nhỏ ngày nay. Những cây cảnh này được tỉ mỉ chăm sóc và sắp đặt sao cho thể hiện sự cân bằng và hài hòa. Bằng cách kết hợp các yếu tố như cây, đá, nước và sỏi, cây cảnh phong cách Nhật Bản tạo nên một không gian thanh lịch và tĩnh lặng.</p><p>Điểm đặc biệt của cây cảnh phong cách Nhật Bản là việc chú trọng đến sự tự nhiên và tinh tế. Cây được cắt tỉa theo các hình dáng đơn giản nhưng thể hiện rõ nghệ thuật và sự cân đối. Những chiếc chậu gốm được chọn lựa kỹ lưỡng để tạo nên sự hài hòa với cây và môi trường xung quanh.</p><p>Cây cảnh phong cách Nhật Bản mang đến không gian yên bình và thư thái, tạo nên một sự kết nối giữa con người và thiên nhiên. Hãy thử bổ sung một cây cảnh phong cách Nhật Bản vào không gian của bạn để tận hưởng sự thanh thản và sự tinh tế mà nó mang lại.</p>', 'https://res.cloudinary.com/dtsfnikj0/image/upload/v1685947159/a7k9khrywygtyucmv4z6.jpg', 'Khám phá vẻ đẹp tinh tế của cây cảnh phong cách Nhật Bản.', 'Cây cảnh phong cách Nhật Bản - Sự hòa quyện giữa thiên nhiên và nghệ thuật', 2),
    ('dinhdanh', '2023-06-05 13:42:09', 'dinhdanh', '2023-06-05 13:42:09', '<p><strong>Chăm sóc cây cảnh trong nhà không chỉ là một hoạt động thú vị mà còn giúp tạo ra không gian sống trong lành và tươi mới. Đối với những người mới bắt đầu, việc chăm sóc cây cảnh có thể đầy thách thức. Dưới đây là một số bí quyết giúp bạn chăm sóc cây cảnh trong nhà một cách hiệu quả:</strong></p><ol><li>Chọn loại cây phù hợp: Đầu tiên, hãy chọn những loại cây dễ chăm sóc như cây dứa, cây cỏ may mắn, hoặc cây lưỡi hổ. Những loại cây này thường khá bền và có thể phù hợp với môi trường trong nhà.</li><li>Đặt cây ở vị trí phù hợp: Đọc kỹ thông tin về loại cây bạn chọn để biết yêu cầu ánh sáng, nhiệt độ và độ ẩm của nó. Đặt cây ở vị trí có đủ ánh sáng nhưng tránh tiếp xúc trực tiếp với ánh nắng mặt trời. Ngoài ra, cũng hãy đặt cây ở nơi có độ ẩm phù hợp.</li><li>Tưới nước đúng cách: Kiểm tra độ ẩm của đất trước khi tưới nước. Đảm bảo đất ẩm nhưng không quá ngấm nước. Tránh tưới quá nhiều nước, vì điều này có thể gây mục rửa đất hoặc gây chết cây. Tùy thuộc vào loại cây, lượng nước tưới sẽ khác nhau, hãy tìm hiểu kỹ về cây của bạn để biết cách tưới nước hợp lý.</li><li>Bón phân định kỳ: Để cây cảnh khỏe mạnh, hãy bón phân định kỳ từ 2 đến 4 tuần một lần. Sử dụng phân hữu cơ hoặc phân chế phẩm được thiết kế đặc biệt cho cây cảnh trong nhà. Lưu ý không bón quá lượng phân khuyến cáo, vì điều này có thể gây tổn thương đến cây.</li><li>Theo dõi sự phát triển và kiểm tra sức khỏe: Thường xuyên kiểm tra cây cảnh của bạn để phát hiện sớm các vấn đề như sâu bệnh, rụng lá hay cây khô. Nếu thấy dấu hiệu bất thường, hãy tìm hiểu nguyên nhân và thực hiện các biện pháp cần thiết để khắc phục.</li></ol><p><em>Tiếp thu những kiến thức về cây cảnh và có kiên nhẫn trong việc chăm sóc, bạn sẽ thu được nhiều kinh nghiệm và trở thành một người chăm sóc cây cảnh thành thạo. Đừng quên rằng việc chăm sóc cây cảnh cũng là một quá trình học tập liên tục, vì mỗi loại cây có yêu cầu và đặc điểm riêng.</em></p>', 'https://res.cloudinary.com/dtsfnikj0/image/upload/v1685947329/ykqjm1v9qvhpdfwvgdhc.jpg', 'Hướng dẫn cách chăm sóc cây cảnh trong nhà cho người mới bắt đầu.', 'Bí quyết chăm sóc cây cảnh trong nhà cho người mới bắt đầu', 2),
    ('dinhdanh', '2023-06-05 13:44:07', 'dinhdanh', '2023-06-05 13:44:07', '<h2>Phòng làm việc là nơi chúng ta trải qua nhiều giờ làm việc căng thẳng. Một cách tuyệt vời để làm cho không gian này thoải mái hơn và khích lệ sự sáng tạo là đưa các loại cây cảnh vào nội thất. Cây cảnh không chỉ làm cho phòng trở nên tươi mới và xanh mát, mà còn có tác động tích cực đến tâm trạng và hiệu suất làm việc của bạn.</h2><p>Khi chọn cây cảnh cho phòng làm việc, hãy cân nhắc đến những loại cây có tác động tốt đến sự tập trung và sáng tạo. Ví dụ, cây lưỡi hổ được cho là giúp cải thiện sự tập trung và khả năng nhớ. Cây treo dây vì (String of Pearls) mang đến không gian tươi mát và có khả năng làm giảm căng thẳng. Cây dứa là một lựa chọn phổ biến để tạo không gian sinh động và năng động.</p><p>Bên cạnh đó, hãy đảm bảo chăm sóc cây cảnh một cách đúng cách trong phòng làm việc. Đặt cây ở vị trí có đủ ánh sáng nhưng không gây chói mắt và tránh tiếp xúc trực tiếp với máy lạnh hoặc nhiệt độ quá cao. Tưới nước và bón phân đúng cách để cây cảnh luôn trong tình trạng khỏe mạnh và xanh tươi.</p>', 'https://res.cloudinary.com/dtsfnikj0/image/upload/v1685947446/wjtoq9bsjkobpzdemhbc.jpg', 'Khám phá tác động tích cực của cây cảnh trong phòng làm việc tăng cường sự tập trung và sáng tạo.', 'Cây cảnh trong phòng làm việc - Bí quyết tăng cường sự tập trung và sáng tạo', 2),
    ('truongdinh', '2023-06-05 13:46:32', 'truongdinh', '2023-06-05 13:46:32', '<h2><strong>Cây cảnh </strong>không chỉ làm cho không gian sống trong nhà trở nên xanh tươi và sinh động mà còn mang lại nhiều lợi ích sức khỏe cho chúng ta. Dưới đây là một số tác động của cây cảnh trong nhà và lợi ích mà chúng mang lại:</h2><ol><li>Tạo không gian xanh tươi: Cây cảnh làm cho không gian sống trong nhà trở nên rực rỡ hơn với màu sắc và hình dáng đa dạng của nó. Nhìn thấy cây cảnh có thể làm giảm căng thẳng, tạo ra một môi trường thư thái và tăng cường cảm giác hạnh phúc.</li><li>Cải thiện chất lượng không khí: Cây cảnh trong nhà giúp lọc và tạo ra không khí trong lành hơn. Chúng hấp thụ khí độc như formaldehyde, benzen và xylene có trong không khí và thải ra oxy trong quá trình quang hợp. Điều này giúp cải thiện chất lượng không khí trong nhà và giảm nguy cơ các vấn đề về hô hấp.</li><li>Giảm căng thẳng và cân bằng tâm trạng: Nghiên cứu đã chỉ ra rằng việc tiếp xúc với thiên nhiên và cây cỏ có thể giảm căng thẳng và cải thiện tâm trạng. Cây cảnh trong nhà mang đến một cảm giác bình yên và giúp giảm stress sau một ngày làm việc căng thẳng.</li><li>Tăng cường tập trung và hiệu suất: Các nghiên cứu cho thấy việc có cây cảnh trong không gian làm việc có thể cải thiện tập trung và hiệu suất làm việc. Cảnh quan thiên nhiên và sự xanh tươi của cây cảnh giúp giảm mệt mỏi và tăng cường sự tập trung và sáng tạo.</li><li>Tạo điểm nhấn nội thất: Cây cảnh không chỉ là một phần của việc chăm sóc và trang trí nội thất, mà còn tạo ra một điểm nhấn độc đáo và thú vị. Bạn có thể chọn cây cảnh phù hợp với phong cách và không gian sống của mình để tạo nên một không gian độc đáo và hài hòa.</li></ol><h3>Với những lợi ích trên, không có lý do gì để không mang cây cảnh vào nhà và tận hưởng các lợi ích mà chúng mang lại. Dưới đây là một số gợi ý cho việc chọn và chăm sóc cây cảnh trong nhà:</h3>', 'https://res.cloudinary.com/dtsfnikj0/image/upload/v1685947591/zflsbhkkkzi9b1kl50kn.jpg', 'Khám phá tác động của cây cảnh trong nhà đến không gian sống và lợi ích sức khỏe mà chúng mang lại.', 'Cây cảnh trong nhà - Tạo không gian sống xanh tươi và thoải mái', 1),
    ('truongdinh', '2023-06-05 13:50:28', 'truongdinh', '2023-06-05 13:50:28', '<h2><strong>Khi không gian trong nhà hạn chế, cây cảnh treo tường trở thành một giải pháp trang trí tuyệt vời. Chúng không chỉ tạo điểm nhấn cho không gian mà còn tiết kiệm diện tích và mang đến một cái nhìn mới mẻ. Dưới đây là một số lợi ích của cây cảnh treo tường và cách chăm sóc chúng:</strong></h2><ol><li>Tiết kiệm không gian: Cây cảnh treo tường không chiếm diện tích sàn, giúp tận dụng không gian trống trên tường. Điều này rất hữu ích trong các căn hộ hoặc không gian nhỏ hẹp, nơi không gian là một vấn đề quan trọng.</li><li>Tạo điểm nhấn trang trí: Cây cảnh treo tường tạo ra một điểm nhấn trực quan và độc đáo trong không gian. Bạn có thể sắp xếp các loại cây khác nhau, tạo thành một bức tranh xanh tươi trên tường. Điều này không chỉ làm cho không gian trở nên sống động hơn mà còn tạo ra một cảm giác gần gũi với thiên nhiên.</li><li>Chăm sóc đơn giản: Chăm sóc cây cảnh treo tường thường dễ dàng hơn so với chăm sóc các loại cây cảnh truyền thống. Vì chúng được treo cao hơn, việc tưới nước và làm sạch trở nên thuận tiện hơn. Đảm bảo rằng hệ thống treo của cây cảnh là chắc chắn và dễ tháo lắp để bạn có thể dễ dàng tiếp cận và chăm sóc chúng.</li><li>Lựa chọn cây phù hợp: Khi chọn cây cảnh treo tường, hãy chọn những loại cây phù hợp với ánh sáng và điều kiện môi trường trong không gian của bạn. Đặc biệt, chú ý đến yêu cầu ánh sáng và độ ẩm để đảm bảo cây cảnh phát triển khỏe mạnh. Một số loại cây thích hợp cho việc treo tường bao gồm cây kim ngân, cây sen đá và cây lưỡi hổ.</li><li>Tạo bố cục hài hòa: Khi sắp xếp cây cảnh treo tường, hãy tạo bố cục hài hòa và cân đối để tạo nên một tác phẩm nghệ thuật trên tường. Kết hợp các loại cây có chiều cao và hình dạng khác nhau để tạo ra sự đa dạng và sắp xếp chúng sao cho thẩm mỹ.</li><li>Đảm bảo ánh sáng và tưới nước đủ: Đặt cây cảnh treo tường ở vị trí có đủ ánh sáng nhưng tránh tiếp xúc trực tiếp với ánh nắng mặt trời để tránh cháy lá. Kiểm tra độ ẩm của đất thường xuyên và tưới nước đúng lượng để đảm bảo cây không bị khô héo hay ngập nước.</li><li>Kiểm tra và làm sạch định kỳ: Theo dõi sự phát triển của cây cảnh treo tường và kiểm tra xem có bất kỳ dấu hiệu bệnh tật, sâu bệnh hay lá khô nào. Nếu phát hiện vấn đề, hãy áp dụng biện pháp phòng ngừa và điều trị kịp thời để bảo vệ cây khỏi bệnh tật và giữ cho cây luôn xanh tươi.</li></ol><h3><em>Với những lợi ích và gợi ý chăm sóc trên, cây cảnh treo tường không chỉ là một giải pháp trang trí tuyệt vời cho không gian nhỏ mà còn mang đến sự xanh tươi và sinh động cho ngôi nhà của bạn.</em></h3><h3>Chúc bạn có những trải nghiệm tuyệt vời trong việc chăm sóc cây cảnh và tận hưởng không gian xanh tươi trong ngôi nhà của mình!</h3><p><br></p><p><br></p>', 'https://res.cloudinary.com/dtsfnikj0/image/upload/v1685947828/yk5lj3wmdmyt1clc1dp5.jpg', 'Cây cảnh treo tường là một giải pháp trang trí tuyệt vời cho không gian nhỏ và cách chăm sóc chúng.', 'Cây cảnh treo tường - Giải pháp trang trí tiện ích cho không gian nhỏ', 1);

