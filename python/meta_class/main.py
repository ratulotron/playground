from lib import make_object
# Master classes
class Main:
    def add_me(self, a, b):
        return a + b

    def __str__(self):
        return "Hi"

class Sub(Main):
    a = 1
    b = 2
    
# Child classes
class New1(Sub):
    c = 1
    d = 4        

class New2():
    pass


if __name__=="__main__":
    object = make_object(New1)
    print(object)