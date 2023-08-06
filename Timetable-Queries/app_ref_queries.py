from flask import Flask, render_template, request, redirect, url_for, session,jsonify
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re 
from datetime import datetime
import random
import os
from pathlib import Path
import pandas as pd

app = Flask(__name__,template_folder='templates',static_folder='static')

@app.route('/')
def home():
    return render_template('admin.html')


@app.route('/process', methods=['POST'])
def process():
    data = request.get_json() # retrieve the data sent from JavaScript
    # process the data using Python code
    result = data['teacher']
    abc=data['abc']
    print(abc)
    print(result)
    res={'iu':[1,2],'iyt':abc}
    return jsonify(result=res)
    return [1,2]

# dept=input()
dept="cse"
app.config['MYSQL_HOST'] = '127.0.0.1'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'admin'
app.config['MYSQL_DB'] = dept
mysql = MySQL(app)
#


days=['Monday','Tuesday','Wednesday','Thursday','Friday']
per=[1,2,3,4,5,6,7,8,9,10]

class Dept:
    def __init__(self):
        self.subject_classes={}
        self.subject_teachers={}
        self.teacher_tasks={}
        self.place_location={}
        self.teacher_aoi={}
        self.teachers=[]
        self.aoi=[]
        self.classes=[]
        self.places=[]
        self.subjects=[]
        self.passkey="12345"
        self.username_passkey={}
    def reg_teacher(self,user_name,teacher,table):
        pa=""
        for i in range(6):
            j=random.randint(3)
            if(j==1):
                k=random.randint(25)
                pa+='a'+k
            elif(j==2):
                k=random.randint(25)
                pa+='A'+k
            else:
                k=random.randint(9)
                pa+='0'+k
        self.username_passkey[user_name]=pa
        self.teacher_tasks[teacher]=[]
        self.teacher_aoi[teacher]=[]
        self.teachers.append(teacher)
        for d in days:
            for s in table[d]:
                l=list(s.split('-'))
                if(len(l)>1):
                    if l[0] not in self.subject_teachers:
                        self.subject_teachers[l[0]]=[teacher]
                    else:
                        self.subject_teachers[l[0]].append(teacher)
                    if l[0] not in self.subjects:
                        self.subjects.append(l[0])
        table['period']=per
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        table.to_csv(f'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{teacher}.csv',index=False)
        cursor.execute(f'drop table if exists {teacher}')
        cursor.execute(f'create table {teacher}(Monday varchar(100),Tuesday varchar(100),Wednesday varchar(100),Thursday varchar(100),Friday varchar(100),Period int)')
        cursor.execute(f"LOAD DATA INFIle 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{teacher}.csv' INTO TABLE {teacher} FIELDS TERMINATED BY ',' LINES  TERMINATED BY '\n'")
        return pa
    def edit_teacher(self,teacher,table):
        tab=pd.read_csv(f'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{teacher}.csv')
        for d in days:
            for s in table[d]:
                l=list(s.split('-'))
                if(len(l)>1):
                    self.subject_teachers[l[0]].remove(teacher)
        if os.path.isfile(f'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{teacher}.csv'):
            os.remove(f'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{teacher}.csv')
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute(f'drop table if exists {teacher}')
        table['period']=per
        table.to_csv(f'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{teacher}.csv',index=False)
        cursor.execute(f'drop table if exists {teacher}')
        cursor.execute(f'create table {teacher}(Monday varchar(100),Tuesday varchar(100),Wednesday varchar(100),Thursday varchar(100),Friday varchar(100),Period int)')
        cursor.execute(f"LOAD DATA INFIle 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{teacher}.csv' INTO TABLE {teacher} FIELDS TERMINATED BY ',' LINES  TERMINATED BY '\n'")
    def drop_teacher(self,user_name,teacher):
        del self.username_passkey[user_name]
        del self.teacher_tasks[teacher]
        del self.teacher_aoi[teacher]
        self.teachers.remove(teacher)
        table=pd.read_csv(f'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{teacher}.csv')
        for d in days:
            for s in table[d]:
                l=list(s.split('-'))
                if(len(l)>1):
                    self.subject_teachers[l[0]].remove(teacher)
        if os.path.isfile(f'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{teacher}.csv'):
            os.remove(f'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{teacher}.csv')
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute(f'drop table if exists {teacher}')
    def reg_class(self,class_name,table):
        self.classes.append(class_name)
        for d in days:
            for s in table[d]:
                l=list(s.split('-'))
                if(len(l)>1):
                    if l[0] not in self.subject_teachers:
                        self.subject_classes[l[0]]=[class_name]
                    else:
                        self.subject_classes[l[0]].append(class_name)
                    if l[0] not in self.subjects:
                        self.subjects.append(l[0])
        table['period']=per
        table.to_csv(f'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{class_name}.csv',index=False)
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute(f'drop table if exists {class_name}')
        cursor.execute(f'create table {class_name}(Monday varchar(100),Tuesday varchar(100),Wednesday varchar(100),Thursday varchar(100),Friday varchar(100),Period int)')
        cursor.execute(f"LOAD DATA INFIle 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{class_name}.csv' INTO TABLE {class_name} FIELDS TERMINATED BY ',' LINES  TERMINATED BY '\n'")
    def edit_class(self,class_name,table):
        tab=pd.read_csv(f'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{class_name}.csv')
        for d in days:
            for s in table[d]:
                l=list(s.split('-'))
                if(len(l)>1):
                    self.subject_teachers[l[0]].remove(class_name)
        if os.path.isfile(f'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{class_name}.csv'):
            os.remove(f'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{class_name}.csv')
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute(f'drop table if exists {class_name}')
        table['period']=per
        table.to_csv(f'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{class_name}.csv',index=False)
        cursor.execute(f'drop table if exists {class_name}')
        cursor.execute(f'create table {class_name}(Monday varchar(100),Tuesday varchar(100),Wednesday varchar(100),Thursday varchar(100),Friday varchar(100),Period int)')
        cursor.execute(f"LOAD DATA INFIle 'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{class_name}.csv' INTO TABLE {class_name} FIELDS TERMINATED BY ',' LINES  TERMINATED BY '\n'")
    def drop_class(self,class_name):
        self.classes.remove(class_name)
        table=pd.read_csv(f'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{class_name}.csv')
        for d in days:
            for s in table[d]:
                l=list(s.split('-'))
                if(len(l)>1):
                    self.subject_classes[l[0]].remove(class_name)
        if os.path.isfile(f'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{class_name}.csv'):
            os.remove(f'C:/ProgramData/MySQL/MySQL Server 8.0/Uploads/{class_name}.csv')
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute(f'drop table if exists {class_name}')
    def get_teacher_time(self,day,hour,minute,teacher):
        m=520
        n=hour*60+minute
        n-=m
        n//=50
        n+=1
        ans=""
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        if(n>10 or day=='Sunday'):
            ans="College is over yaar!"
        elif(day=='Saturday'):
            ans="At their Cabin"
        else:
            cursor.execute(f'SELECT {day} FROM {teacher} WHERE Period={str(n)}')
            data = cursor.fetchall()
            l=list(data[0][day].split())
            if(len(l)==1):
                ans="Leisure"
            else:
                ans=f'{teacher} is at {l[2]} and teaching {l[0]} for {l[1]}'
        return ans
    def get_teacher_now(self,teacher):
        day=datetime.today().strftime("%A")
        time=datetime.now().strftime("%H:%M:%S")
        l=list(map(int,time.split(':')))
        return self.get_teacher_time(day,l[0],l[1],teacher)
    def get_classes_from_subject(self,subject):
        if subject in self.subject_classes:
            return self.subject_classes[subject]
        else:
            return []
    def get_teachers_from_subject(self,subject):
        if subject in self.subject_teachers:
            return self.subject_teachers[subject]
        else:
            return []
    def get_tasks_from_teacher(self,teacher):
        return self.teacher_tasks[teacher]
    def get_class_time(self,day,hour,minute,class_name):
        m=520
        n=hour*60+minute
        n-=m
        n//=50
        n+=1
        ans=""
        if(n>10 or day=='Sunday'):
            ans="College is over yaar!"
        elif(day=='Saturday'):
            ans="Club Activities"
        else:
            cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
            cursor.execute(f'SELECT {day} FROM {class_name} WHERE Period={str(n)}')
            data = cursor.fetchall()
            l=list(data[0][day].split())
            if(len(l)==1):
                ans="Free Period"
            else:
                ans=f'{class_name} is at {l[2]} and {l[1]} is teaching them {l[0]}'
        return ans
    def get_class_now(self,class_name):
        day=datetime.today().strftime("%A")
        time=datetime.now().strftime("%H:%M:%S")
        l=list(map(int,time.split(':')))
        return self.get_class_time(day,l[0],l[1],class_name)
    def get_teachers_from_aoi(self,a_o_i):
        l=[]
        for d in self.teacher_aoi:
            if a_o_i in self.teacher_aoi[d]:
                l.append(d)
        return l
    def add_place(self,place,loc):
        self.places.append(place)
        self.place_location[place]=loc
    def edit_place(self,place,loc):
        self.place_location[place]=loc
    def del_place(self,place):
        self.places.remove(place)
        del self.place_location[place]
    def get_loc_from_place(self,place):
        return self.place_location[place]
cse=Dept()
ece=Dept()
eee=Dept()
mech=Dept()
civ=Dept()
chem=Dept()
it=Dept()


if __name__=="__main__":  
    app.run(debug=True)