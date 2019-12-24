# DBMS - Database managaement system

> **Ref**
>
> - _https://www.geeksforgeeks.org/dbms_
> - _https://medium.com/omarelgabrys-blog/database-introduction-part-1-4844fada1fb0_
> - **Lucidcharts** = _https://youtu.be/QpdhBUYk7Kk_

## # INTRODUCTION

| _DDL - Data Defination language (Schemas)_ | _DML - Data Manipulation language_   |
| ------------------------------------------ | ------------------------------------ |
| _create_                                   | _select_                             |
| _alter_                                    | _insert_                             |
| _drop_                                     | _update_                             |
| _truncate_                                 | _delete_                             |
| _comment_                                  | _Lock table for concurrency control_ |
| _rename_                                   |                                      |

> **Issues of file system**

- _Redundancy_ - duplicate copies of data
- _Inconsistency_ - duplicate copies do not match with each other
- _Data access_ - needs exacts location of file
- _No concurrency_
- _No backup_

> **Steps of Database Design**

1. Requirements
2. Conceptual design (ER Model)
3. Logical design (Relational Model - Tables, Schemas)
4. Physical design (Oracle, Mysql, etc)

> **Database Architecture**

| _2-tier Model_            | _3-tier Model_            |
| ------------------------- | ------------------------- |
| Client <=> Server         | Client-App <=> App-server |
| Simple                    | Complex                   |
| Not good for big database | Good for scaling          |
| Low security              | High security             |

> **ACID**

- Atomicity
- Consistency
- Isolation
- Durability

> **Database Objects**

- Stores data
- They are created using `CREATE` statement
  - _table_
  - _view_
  - _sequence_
  - _synonym_
  - _indexes_
