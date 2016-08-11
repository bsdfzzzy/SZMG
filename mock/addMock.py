
# -*- coding: UTF-8 -*-

import MySQLdb
import random 
import time

db = MySQLdb.connect("localhost", "root", "", "manage_dev")

cursor = db.cursor()

for i in range(0, 3):
    for j in range(1, 100):
        k = random.randrange(1, 12, 1)
        system = ' '
        if k == 1:
            system = 'FOUR_DMZ'
        elif k == 2:
            system = 'FOUR_NORMAL'
        elif k == 3:
            system = 'FIVE_ONE'
        elif k == 4:
            system = 'FIVE_TWO'
        elif k == 5:
            system = 'FIVE_THREE'
        elif k == 6:
            system = 'SIX_MDC'
        elif k == 7:
            system = 'SIX_BIZ'
        elif k == 8:
            system = 'EIGHT'
        elif k == 9:
            system = 'ELEVEN'
        elif k == 10:
            system = 'AVID'
        elif k == 11: 
            system = 'TV'
        print i
        if i == 0:
            sql = "INSERT INTO bases(id, date, system, subsystem, supervisor_1, \
                supervisor_2, supervisor_3, respector, experiment, IP, \
                type, work, category, stateOrData, More) \
                VALUES ('%d', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')" % \
                (j, time.strftime('%Y-%m-%d %H:%M:%S'), system, 'subsystem', '检查人1', '检查人2', '检查人3', 'respector', '服务器', \
                    '192.168.1.1', '域控服务器', '硬件状态、磁盘空间', '定性分析-硬件', '', '')
        elif i == 1:
            sql = "INSERT INTO events(id, date, system, event) \
            VALUES('%d', '%s', '%s', '%s')" % \
                (j, time.strftime('%Y-%m-%d %H:%M:%S'), system, '添加1盒磁带到IBM带库中')
        elif i == 2:
            sql = "INSERT INTO bizs(id, system, column, playStart, \
                playFinish, numOfNeeds, allReadyTime, state) \
                VALUES('%d', '%s', '%s', '%s', '%s', '%d', '%s', '%s')" % \
                (j, system, '《股市爱谁谁》', time.strftime('%Y-%m-%d %H:%M:%S'), time.strftime('%Y-%m-%d %H:%M:%S'), 2, time.strftime('%Y-%m-%d %H:%M:%S'), '正常')

        try:
            cursor.execute(sql)
            db.commit()
        except:
            db.rollback()

db.close()