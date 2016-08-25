
# -*- coding: UTF-8 -*-

import MySQLdb
import random
import time

db = MySQLdb.connect("localhost", "root", "", "manage_dev")

cursor = db.cursor()

for i in range(1, 2):
    sys = ''
    if i == 1:
        sys = '4楼'+ 'DMZ' +'区巡检表'
    elif i == 2:
        sys = '4楼日常巡检表'
    elif i ==3:
        sys = '5-1系统巡检表'
    elif i == 4:
        sys = '5-2系统巡检表'
    elif i == 5:
        sys = '5-3系统巡检表'
    elif i == 6:
        sys = '6楼MDC巡检表'
    elif i == 7:
        sys = '6楼MDC巡检表'
    elif i == 8:
        sys = '8楼系统巡检表'
    elif i == 9:
        sys = '11楼系统巡检表'
    elif i == 10:
        sys = '11楼系统巡检表'
    elif i == 11:
        sys = '电视剧缩编系统巡检表'

    sql = "INSERT INTO users(account, username, password, priority, createAt, updateAt) VALUES(%s, %s, %s, %s, %s, %s)" % \
            ('test1', 'test1', 'test1', '1', 'a', 'b')
    print sql

    cursor.execute(sql)
    db.commit()

db.close()