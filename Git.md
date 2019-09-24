# GIT

> Version Control System For Any Projects

```bash
cd project
git init
```

#### # SSH / HTTPS

```bash
# SSH
git remote add origin ssh://git@github.com:umeshmk/Tutorials.git
# HTTPS
git remote add origin https://github.com/umeshmk/Tutorials.git
# HTTPS + Username
git remote add origin https://umeshmk@github.com/umeshmk/Tutorials.git
```

#### # TRACKING

| Tracking    |                                             |                           |
| ----------- | ------------------------------------------- | ------------------------- |
| _Status_    | View git status                             | `git status`              |
| _Untracked_ | New file created                            | `touch abc.txt`           |
| _Staged_    | File ready for commit (except `.gitignore`) | `git add abc.txt`         |
| _Committed_ | Repo updated                                | `git commit -m "updated"` |

#### # BASICS

| Cmd          | -                                              | -                                                                                                |
| ------------ | ---------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| _Push_       | Sends repo to remote server                    | `git push -u origin master` &nbsp; [ `-u` to remembers repo and branch names ] &nbsp; `git push` |
| _Clone_      | Creates local copy of remote repo              | `git clone <url>`                                                                                |
| _Remote add_ | Associates local repo with remote repo         | `git remote add origin <url>`                                                                    |
| _Pull_       | Updates local repo if remote is updated        | `git pull origin master`                                                                         |
| _Diff_       | Difference between commits                     | `git diff HEAD`                                                                                  |
| _Reset_      | Removes file from _staged_ (file is unchanged) | `git reset abc.txt`                                                                              |
| _Checkout_   | Resets file to last commit (file is changed)   | `git checkout abc.text`                                                                          |

#### # BRANCH

| Task            | -                                   | -                                                                         |
| --------------- | ----------------------------------- | ------------------------------------------------------------------------- |
| _Create_        | Creates new branch                  | `git branch <branchname>`                                                 |
| _Switch branch_ | Switch to new branch                | `git checkout <branchname>`                                               |
| _See branch_    | Lists all branches                  | `git branch`                                                              |
| _Merge_         | Merge any branch with master branch | First switch to master `git checkout master` then `git merge <anybranch>` |

#### # AMEND

- Combine _staged_ changes to _previous_ commit
- Replaces the whole previous commit

```bash
git commit --amend -m "updated"
```

#### # TAG (Releases)

- Use tags like `v1, v2, v2.0.2`
- Saves current state as a new release.
- **Create**

```bash
git tag                                     # list tags

git tag <tagname>                           # lightweight
git tag -a <tagname> -m "Any message"       # Annotated
```

- **Push**

```bash
# By default tags are excluded when repo is pushed. So use this cmds.

git push origin --tags                      # all tags pushed
git push origin <tagname>                   # only 1 tag is pushed
```

- **Github GUI**
  - Create tags using github GUI.
  - Now fetch this changes using cmd `git fetch`

#### # MISC

| Task      |             |
| --------- | ----------- |
| _Fetch_   | `git fetch` |
| _History_ | `git log`   |

#### # REFERENCES

- https://gist.github.com/hofmannsven/6814451
