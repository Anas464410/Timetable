class Dept:
    def __init__(self,i):
        if(i==1):
            self.subj={1:2}
        else:
            self.subj={1:3}
        self.teachers={}
    def fun(self):
        print(self.subj)
    def der(self):
        self.fun()
cse=Dept(1)
print(cse.der())
ece=Dept(2)
print(ece.fun())
