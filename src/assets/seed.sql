CREATE TABLE IF NOT EXISTS developer(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,skills TEXT,img TEXT);
INSERT or IGNORE INTO developer VALUES (1, 'Amine', '', 'https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png');
INSERT or IGNORE INTO developer VALUES (2, 'Hamza', '', 'https://as2.ftcdn.net/jpg/03/06/02/71/500_F_306027122_xmaWZbI3S41RtolejISJIrvunji3zcYm.jpg');
INSERT or IGNORE INTO developer VALUES (3, 'Borhane', '', 'https://www.publicdomainpictures.net/pictures/10000/velka/colorful-autumn-leaves-871286965014L8g8.jpg');
 
CREATE TABLE IF NOT EXISTS product(id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT, creatorId INTEGER);
INSERT or IGNORE INTO product(id, name, creatorId) VALUES (1, 'Mon Hotel', 1);
INSERT or IGNORE INTO product(id, name, creatorId) VALUES (2, 'Link Me', 1);
INSERT or IGNORE INTO product(id, name, creatorId) VALUES (3, 'JMag', 2);
INSERT or IGNORE INTO product(id, name, creatorId) VALUES (4, 'RHFreezy', 2);
INSERT or IGNORE INTO product(id, name, creatorId) VALUES (5, 'More Contacts', 3);
INSERT or IGNORE INTO product(id, name, creatorId) VALUES (6, 'My Icons', 3);