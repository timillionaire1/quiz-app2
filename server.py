# import mysql.connector;
# mydb = mysql.connector.connect(host ="localhost", user = "my_user", password = "password");
# print(mydb);
# cursor = mydb.cursor();
# cursor.execute("SHOW DATABASES");
# for x in cursor:
    # print(x)



# import mysql.connector;
# mydb = mysql.connector.connect(host="localhost", database="testdb", user = "my_user", password = "password");
# mySql_create_Table_Query="CREATE TABLE Laptop(id int(11) NOT NULL, Name varchar(250), Score float NOT NULL)"
# cursor = mydb.cursor();
# cursor.execute(mySql_create_Table_Query);

from django.db import models;

class Addbook(models.Model):
    text=models.Charfield(max_length=200, null=False, blank=False)
    email=models.Charfield(max_length=200, null=False, blank=False)
    password=models.Charfield(max_length=200, null=False, blank=False)
