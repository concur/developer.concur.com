
## Create and clone a fork

> Note: You go through these steps exactly once to get everything setup.

---
This set of steps:

* Creates a fork of the branch within GitHub.
  * This fork is a repository under your user name or organization.
  * This repository in GitHub is referred to as a `remote` repository,
* Clones the the remote repository (your fork) to your computer.
  * This clone is referred to as a `local` repository.
---
1. Go to [https://github.com/concur/developer.concur.com](https://github.com/concur/developer.concur.com).
1. Click the **Fork** button in the upper right hand corner of the page.
1. Select the user or organization where you wish to fork.
  * A new fork is created.
1. In the new fork, click the **Clone or download** button.
  * Choose the method you wish to use, HTTPS or SSH.
  * Copy the path.
1. Open a command line interface.
1. Navigate to the path where you want to store source code. If you need a guide on how to do this via the command prompt:
  * [MacOS](https://www.macworld.com/article/2042378/master-the-command-line-navigating-files-and-folders.html)
  * [Windows](https://www.digitalcitizen.life/command-prompt-how-use-basic-commands)`
  * Typically: `cd {path}` on both.
1. Issue: `git clone {path}`
  * Example: `git clone https://github.com/retrosight/developer.concur.com.git`
  * See a typical example of the output of cloning below.

```shell
➜  source git clone git@github.com:retrosight/developer.concur.com.git
Cloning into 'developer.concur.com'...
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (6/6), done.
remote: Total 31798 (delta 0), reused 0 (delta 0), pack-reused 31792
Receiving objects: 100% (31798/31798), 185.39 MiB | 5.52 MiB/s, done.
Resolving deltas: 100% (20992/20992), done.
```

## Edit files in the `local` repository

> Note: Since we are working in a fork you can start editing straightaways without creating a branch.

1. Launch the editor of your choice.
1. Select **File > Open** in and select the folder containing your source.
1. Edit and save files as desired.

## Push edits from `local` to `remote` repository.

> This cycle is repeated as many times as you wish to push changes in the `local` repository to the `remote` repository in GitHub.

In the command line after navigating to the `local` repository folder:

1. Issue: `git add .`
  * This tells git to add any changes you've made.
1. Issue: `git commit`
  * This opens a text editing tool so you can add notes about the commit.
  * On Mac it is VIM.
  * Press the **lowercase i** key to change to Insert mode.
  * Type out the notes in the first line.
  * Press the **ESC** key to exit out of Insert mode.
  * Type the following: `:wq`
  * Press the **Enter** key.
1. Issue: `git push origin preview`
  * Read it this way: `git push` (my changes to the) `origin` (which is the repository matching this current one and the) `preview` (branch in the remote repository).
  * See a typical example of the output of this cycle below.

```shell
➜  developer.concur.com git:(preview) git add .
➜  developer.concur.com git:(preview) ✗ git commit
[preview 97db50cb] Adding the steps to work with forks.
 1 file changed, 37 insertions(+)
 create mode 100644 src/editing-with-a-repository-fork.md
```
