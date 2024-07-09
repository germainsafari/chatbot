# # class Car:
# #     def __init__(self, color, tires, lights, boot):
# #         self.color = color
# #         self.tires = tires
# #         self.lights = lights
# #         self.boot = boot

# # class Bmw(Car):
# #     def drive(self):
# #         print('i am driving')

# # bmw1 = Bmw('black', 4, 'red', 1 )
# # bmw1.drive()

# # user = input('enter your name:')
# # print(user)
# dic = {
#     'name': 'Germain',
#     'surname': 'Safari'
# }
# x = dic['name']

import numpy

'''
NumPy ufuncs
what are ufuncs - Universal functions and they are Numpy functions that operate on ndarray object

there are used to implement vectorization in Numpy which is way faster than iterating over elements
the also provide broadcasting and additional methods like reduce, accumulate that are helpful for computation
ufuncs also take addtional arguments like
where : boolean array or condition defining where the operations should take place
dtype: defining the return type of elements
out: output array where the return value should be copied.

what is vectorization
converting iterative statements into a vector based operation is called vectorization




'''
l = [1,2,3,4]
k = [3,5,5,3]
x = l + k
print(x.sort())