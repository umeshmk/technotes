# Git Version Control

```bash
mkdir project
cd project
git init
```

## Tracking

```bash
git status
```

Status | - | -
--- | --- | ---
*Not Tracked* | File created | `touch abc.txt`
*Staged* | Added changes(except `.gitignore`) | `git add abc.txt`
*Committed* | Repo updated | `git commit -m "updated"`


## History

```bash
git log
```

## Basics

|Cmd|-|-|
|-|-|-| 
|*Push* | Sends repo to remote server | `git push -u origin master`|
|*Clone* | Creates local copy of remote repo | `git clone https://github.com/user/app.git` 
|*Remote add* | Associates local repo with remote repo | `git remote add origin https://github.com/user/app.git`|
|*Pull*| Updates local repo if remote is updated | `git pull origin master` |
|*Diff*| Difference between commits | `git diff HEAD` |
|*Reset*| Removes file from *staged* (file is unchanged) | `git reset abc.txt` |
|*Checkout*| Resets file the last commit (file is changed) | `git checkout abc.text` |

## Branch

| Task | - | - |
| - | - | - |
| Create | creates new branch | `git branch <branchname>` |
| Switch branch | Switch to new branch | `git checkout <branchname>` |
| See branch | Lists all branches | `git branch` |

- **Merge** any branch with master branch

```bash
# switch to master
git checkout master
git merge <anybranch>
```

## Amend

- Combine *staged* changes to *previous* commit
- Replaces the whole previous commit

```bash
git commit --amend -m "updated"
```


-













