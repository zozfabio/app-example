-- noinspection SqlNoDataSourceInspectionForFile
create table users (
    id varchar(255) not null,
    email varchar(255) not null,
    name varchar(255) not null,
    password varchar(255) not null,
    primary key (id)
);
create table user_profiles (
    id varchar(255) not null,
    user_id varchar(255) not null,
    profile varchar(255) not null,
    primary key (id)
);
alter table users add constraint uk_users_email unique (email);
alter table user_profiles add constraint uk_user_profiles unique (user_id, profile);
alter table user_profiles add constraint fk_user_profiles_user foreign key (user_id) references users;
