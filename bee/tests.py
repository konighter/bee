
# Create your tests here.

class B:
     pass
class C(B):
     pass
class D(C):
     pass

for c in [B, C, D]:
     try:
         raise c()
     except D:
         print "D"
     except C:
         print "C"
     except B:
         print "B"




for c in[B,C,D]:
         try:
                 raise c()
         except B:
                 print "B"
         except C:
                 print "C"
         except D:
                 print "D"