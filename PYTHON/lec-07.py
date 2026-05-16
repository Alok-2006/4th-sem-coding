# # Q1> w.a.p.... program using list comprehension to create a list
# #  which has the sums of list of given list.
# lst=[[1,2,3],[3,4,5],[3,4,5],[5,7,3,2]]
# lst1=[[]]
# # output: [6,12,12,17]
# # Q2> w.a.p...p... using list comprehension to create a list which
# # write a python program to compute the
# # difference between toe lists.
# # sample data :["red","orange","green","blue","white"],
# # ["black","yellow","green","blue"]
# # expected output:
# # color1-color2:['white','orange','rad']
# # color2-color1:['black',[yellow]]
# color1=["red","orange","green","blue","white"]
# color2= ["black","yellow","green","blue"]
# lst1=[]
# lst2=[]
# for i in color1:
#     if i not in color2:
#        lst1.append(i)
# for i in color2:
#     if i not in color1:
#        lst2.append(i)
# print(lst1)
# print(lst2)
# Write a Python program to pack consecutive duplicates of a given list of 
# elements into sublists:
# Original List:
# [0, 0, 1, 2, 3, 4, 4, 5, 6, 6, 6, 7, 8, 9, 4, 4]
# After packing consecutive duplicates of the said list
# elements into sublists:
# [0,0], [1], [2], [3], [4, 4], [5], [6, 6, 6], [7], [8], [9], [4, 4]
# lst = [0, 0, 1, 2, 3, 4, 4, 5, 6, 6, 6, 7, 8, 9, 4, 4]
# result = []
# temp = [lst[0]]
# for i in range(1, len(lst)):
#     if lst[i] == lst[i-1]:
#         temp.append(lst[i])
#     else:
#         result.append(temp)
#         temp = [lst[i]]
# result.append(temp)
# print(result)
# lst=[0, 0, 1, 2, 3, 4, 4, 5, 6, 6, 6, 7, 8, 9, 4, 4]
# ans=[]
# temp=[lst[0]]
# for i in range(1,len(lst)):
#     if lst[i-1]==lst[i]:
#         temp.append(lst[i])
#     else:
#         ans.append(temp)
#         temp=[lst[i]]
# print(ans)
# w.a.p.p....to remove consecutive(following each other continuously) duplicates (elements)from and given lsit:
# [0,0,1,2,3,4,4,5,6,6,6,7,8,9,4,4]
# after remove consecutive duplicates:
# [0,1,2,3,4,5,6,7,8,9,4]
# lst= [0,0,1,2,3,4,4,5,6,6,6,7,8,9,4,4]
# lst1=[0]
# for i in lst:
#     if i not in lst1:
#         if lst1[-1]!=i:
#            lst1.append(i)
# print(lst1)
# text = "384859"
# modified_text= text.replace(9,3)
# print(text)
# print(modified_text)
# text = 'global college #1'
# text1 = sorted(text)
# print(text1)
# a = ''.join(text1)
# print(text)
# print(a)
# x="hello,everyone.lets,learn,python."
# x.replace(".", "$")
# x.replace(",", ".")
# x.replace("$", ",")
# print(x)