create user ivan with password '123qwe';
create database ivan owner ivan encoding 'UTF8' lc_collate 'ru_RU.UTF-8' LC_CTYPE 'ru_RU.UTF-8' template template0;
CREATE EXTENSION IF NOT EXISTS pg_trgm;