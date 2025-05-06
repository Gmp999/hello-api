1. What is Git?
Git is a distributed version control system that allows multiple developers to work on a project simultaneously without interfering with each other’s changes. It tracks changes in source code, helps in collaboration, and allows for rollback of changes.
2. Git Version Control
Git helps manage and track the history of a project, allowing you to save snapshots of your code (called commits), revert to previous versions, and collaborate with others. Version control in Git is achieved through committing changes to a local repository and pushing them to a remote repository (like GitHub).
3. Difference Between Git and GitHub
Git: A version control system for tracking changes in code locally.


GitHub: A platform for hosting Git repositories online, enabling collaboration, sharing code, and providing a remote backup.


4. Basic Git Commands
git init: Initialize a new git repository.


git clone <url>: Clone an existing repository from a remote server.


git add <file>: Add changes in a file to the staging area.


git commit -m "message": Commit the staged changes with a message.


git status: Check the status of the repository (modified, staged, or untracked files).


git push: Push commits to a remote repository.


git pull: Pull updates from a remote repository.


git branch: List, create, or delete branches.


git merge <branch>: Merge a branch into the current branch.



5. Using Git in Visual Studio Code
Open Visual Studio Code.


Install the Git extension (if not already installed).


You can initialize a Git repository or clone an existing one by using the Git tab or the command palette.


Commit, stage, and push changes using the built-in UI.


6. What are SSH Keys? Why are they used?
SSH keys are pairs of cryptographic keys (public and private) used to authenticate and securely connect to a remote server. They are used instead of passwords to prevent unauthorized access and increase security when pushing/pulling code to/from a remote repository.
7. Workflow of Git and GitHub
Clone a Repository: git clone <repo_url>


Create a Branch: git branch <branch_name>


Make Changes: Modify the code.


Add Changes: git add <file>


Commit Changes: git commit -m "message"


Push Changes: git push origin <branch_name>


Create a Pull Request (on GitHub): When you want to merge your branch into the main branch.


8. What is Git Branching?
Git branching allows you to create multiple isolated environments for development. Each branch contains its version of the code and can be merged with others later.
9. Undoing in Git if We Make Any Mistake
Undo changes in working directory: git checkout -- <file>


Undo staged changes: git reset <file>


Undo last commit: git reset --soft HEAD~1


Remove untracked files: git clean -f


10. Forking in Git
Forking is creating a copy of someone else's repository. This allows you to work on changes in your own copy and later submit changes to the original repository using a pull request.
11. What is Merge Conflict and How to Resolve It?
A merge conflict occurs when Git cannot automatically merge changes due to conflicting edits in the same line of code or file. To resolve it:
Git marks the conflicting area in the file.


Manually resolve the conflict by choosing one version or merging changes.


Once resolved, mark the file as resolved: git add <file>


Commit the changes: git commit


12. What is Git Rebase?
Git rebase is the process of moving or combining a sequence of commits to a new base commit. It is used to clean up the commit history by applying changes from one branch onto another branch, in a linear fashion.
13. Difference Between Git Rebase and Git Merge
Merge: Combines branches, preserving the history of both branches, creating a merge commit.


Rebase: Rewrites commit history to create a linear progression of changes. It eliminates merge commits.


14. What is Cherry-pick?
git cherry-pick allows you to apply a specific commit from one branch to another without merging the entire branch.
15. How Does Git Cherry-pick Work?
You can cherry-pick a commit by specifying its commit hash:
git cherry-pick <commit-hash>
 This will apply the changes from that commit to your current branch.


16. Built a Basic Form Using HTML and CSS and pushed the code using git bash.
