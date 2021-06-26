# Git Collaborative Commands

## While on a(n) main branch

### **locally creates a new branch**

```git checkout -b <branchnameyouwant> <wheretobranchfrom>```

### **Making changes and committing**
```git add .```  
```git commit -m"(message)"```  
### **push upstream into the new branch to show remotely**
```git push -u origin <branch name you want>```
>-u means upstream  
>origin means current repository  

<br>

## When pushing to another branch

### **you need to specify the branch you are pushing and the branch you are pushing into**   
```git push origin <branch with new changes>:<branch you are pushing to>```

<br>

## Local Commands

### **To delete a branch LOCALLY**
``git branch -d <branch name>``

### **if you have a gpg key added to github**
``git commit -S -m ""  ``  
>-S means you have a key