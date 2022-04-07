# *Understanding Backend Database* 

## *Software: Oracle Database 11g 2 to 3gb*

```
database name

username: orcl
password: oracl
```

* Open CMD and run `pip install cx_Oracle`
* `import cx_Oracle`
* To connect python with Oracle

```python
import cs_Oracle

conn = cx_Oracle.connect('scott/tiger@localhost/orcl') # here orcl is username
print(conn.version) # to print connection version -- 11.2.0.1.0
# connection is established
```

* Create a table in Oracle DB using python

```python
import cx_Oracle

try:
    conn = cx_Oracle.connect('scott/tiger@localhost/orcl')
    cursor = cx_Oracle.cursor()
    cursor.execute("CREATE TABLE STD (Name VARCHAR(255), Marks NUMBER(4))")
    print("Table Created Successfully")
except cx_Oracle.DatabaseError as e:
    if conn:
        conn.rollback()
        print("There is a problem with SQL", e)
finally:
    if cursor:
        cursor.close()
    if conn:
        conn.close()
```

