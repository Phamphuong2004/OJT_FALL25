Create table Message(
	id serial primary key,
	text varchar(255)not null
);

INSERT INTO Message (text) VALUES ('Hello World from PostgreSQL');
INSERT INTO Message (text) VALUES ('Hello World');

SELECT * From message
