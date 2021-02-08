CREATE TABLE category_item(
ci_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL COMMENT '主键ID自增且唯一',
ci_parent_name VARCHAR(30) NOT NULL COMMENT '主分类名称，不唯一',
is_child_name VARCHAR(30) NOT NULL COMMENT '子分类名称，不唯一',
category_id INT DEFAULT NULL COMMENT '外键，关联category的cid字段',
CONSTRAINT FK_category_item_cid FOREIGN KEY(category_id) REFERENCES category(cid)
)engine=InnoDB DEFAULT charset=utf8;