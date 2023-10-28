INSERT INTO item_category(item_category_id, item_category_name)
VALUES (0, 'fruits'),
       (1, 'vegetables');

INSERT INTO item(item_id, item_name, item_category_id, item_imgsrc, item_price, item_quantity)
VALUES (0, 'orange', 0, 'https://media.istockphoto.com/id/185284489/pl/zdjęcie/orange.jpg?s=1024x1024&w=is&k=20&c=KwNVeRkCVx5FbCfgUNICV69gkMxfwov6aDTB2HrSnHY=', 12.54, 15),
       (1, 'apple', 0, 'https://media.istockphoto.com/id/495878092/photo/red-apple.jpg?s=1024x1024&w=is&k=20&c=B6fzd8JgZY8Fr2CBCiph2rWCUEeHhVqBll_xM5038rU=', 32.65, 20),
       (2, 'carrot', 1, 'https://media.istockphoto.com/id/465095412/pl/zdjęcie/stos-marchwi-odizolowany-na-białym-tle.jpg?s=2048x2048&w=is&k=20&c=iYBa9M5Nc3Q2o6deMP0qL8AJvQwuMGr-guzgKEmlhkU=', 15.32, 34);