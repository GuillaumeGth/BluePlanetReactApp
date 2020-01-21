i = 84
x = 50
diff = round(x / 2)
count = 0
max = 100
while x != i:
    if x > i:
        x = x - diff
    else:
        x = x + diff
    diff = round(diff / 2)
    count +=1
    
print (x)