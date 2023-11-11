CREATE TABLE account_type(
    account_type_id serial, /* 0 - user, 1 - shop owner */
    account_type_name varchar(20), 
    CONSTRAINT account_type_pk PRIMARY KEY(account_type_id)
);

CREATE TABLE account(
    account_id serial,
    account_type_id int not null,
    login varchar(20) not null UNIQUE CHECK (LENGTH(login) > 7), 
    password varchar(255) not null CHECK (LENGTH(password) > 7),
    CONSTRAINT account_pk PRIMARY KEY(account_id),
    CONSTRAINT account_account_type_fk FOREIGN KEY(account_type_id) REFERENCES account_type(account_type_id) ON DELETE SET NULL
);

CREATE TABLE profile(
    profile_id serial,
    account_id int not null UNIQUE,
    firstname varchar(20) not null,
    lastname varchar(20) not null,
    phone_number varchar(30) not null,
    city varchar(20) not null,
    zipCode varchar(15) not null,
    street varchar(20) not null,
    houseNumber varchar(10) not null,
    CONSTRAINT profile_pk PRIMARY KEY(profile_id),
    CONSTRAINT profile_account_fk FOREIGN KEY(account_id) REFERENCES account(account_id) ON DELETE CASCADE
);

CREATE TABLE item_category(
    item_category_id serial,
    item_category_name varchar(20),
    CONSTRAINT item_category_pk PRIMARY KEY(item_category_id)
);

CREATE TABLE item(
    item_id serial,
    item_name varchar(20) not null,
    item_category_id int,
    item_imgsrc varchar(200) not null,
    item_price int not null,
    item_quantity int not null,
    CONSTRAINT item_pk PRIMARY KEY(item_id),
    CONSTRAINT item_item_category_fk FOREIGN KEY(item_category_id) REFERENCES item_category(item_category_id) ON DELETE CASCADE
);

CREATE TABLE order_status(
    order_status_id serial,
    order_status_name varchar(20), /* 0 - ordered, 1 - sent, 2 - received */
    CONSTRAINT order_status_pk PRIMARY KEY(order_status_id)
);

CREATE TABLE shop_order(
    order_id serial,
    account_id int not null,
    order_status_id int not null DEFAULT 0,
    order_startdate TIMESTAMPTZ DEFAULT Now(), /* when status == 0 */
    order_enddate TIMESTAMPTZ DEFAULT null, /* when status == 2 */
    CONSTRAINT order_pk PRIMARY KEY(order_id),
    CONSTRAINT order_account_fk FOREIGN KEY(account_id) REFERENCES account(account_id) ON DELETE CASCADE,
    CONSTRAINT order_order_status_fk FOREIGN KEY(order_status_id) REFERENCES order_status(order_status_id)
);

/* przydatne narzędzie - https://www.javainuse.com/sql */