# Git 
Version Control

```bash
cd project
git init
```

#### SSH / HTTPS

```bash
# SSH
git remote add origin ssh://git@github.com:umeshmk/Tutorials.git
# HTTPS
git remote add origin https://github.com/umeshmk/Tutorials.git
# HTTPS + Username
git remote add origin https://umeshmk@github.com/umeshmk/Tutorials.git
```

#### TRACKING

|Tracking |  |  |
|--- | --- | --- |
|*Status* | View git status | `git status` |
|*Untracked* | New file created | `touch abc.txt` |
|*Staged* | File ready for commit (except `.gitignore`) | `git add abc.txt` |
|*Committed* | Repo updated | `git commit -m "updated"` |

#### BASICS

|Cmd|-|-|
|-|-|-|
|*Push* | Sends repo to remote server | `git push -u origin master` &nbsp; [ `-u` to remembers repo and branch names ] &nbsp; `git push` |
|*Clone* | Creates local copy of remote repo | `git clone <url>` 
|*Remote add* | Associates local repo with remote repo | `git remote add origin <url>`|
|*Pull*| Updates local repo if remote is updated | `git pull origin master` |
|*Diff*| Difference between commits | `git diff HEAD` |
|*Reset*| Removes file from *staged* (file is unchanged) | `git reset abc.txt` |
|*Checkout*| Resets file to last commit (file is changed) | `git checkout abc.text` |

#### BRANCH

| Task | - | - |
| - | - | - |
| *Create* | Creates new branch | `git branch <branchname>` |
| *Switch branch* | Switch to new branch | `git checkout <branchname>` |
| *See branch* | Lists all branches | `git branch` |
| *Merge* | Merge any branch with master branch | First switch to master `git checkout master` then `git merge <anybranch>` |

#### AMEND

- Combine *staged* changes to *previous* commit
- Replaces the whole previous commit

```bash
git commit --amend -m "updated"
```

#### MISC

|Task| |
|-|-|
| *History* | `git log` |
