CREATE TABLE items(
is_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL COMMENT '主键ID自增且唯一',
is_parent_name VARCHAR(30) NOT NULL COMMENT '主分类名称，不唯一',
is_child_name VARCHAR(30) NOT NULL UNIQUE COMMENT '子分类名称，唯一',
ct_id INT DEFAULT NULL COMMENT '外键，关联category_item的ci_id字段',
CONSTRAINT FK_cit_id FOREIGN KEY(ct_id) REFERENCES category_item(ci_id)
)engine=InnoDB DEFAULT charset=utf8;