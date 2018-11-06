---
title: Editing with a repository fork using the git command line
layout: reference
---

For more information refer to [Working with forks](https://help.github.com/articles/working-with-forks/) in the GitHub documentation.

* [Create and clone a fork repository to your computer (One time setup)](#create-and-clone)
* [Edit files in the `local` repository](#edit-files)
* [Push edits from your `local` to your `remote` fork repository](#push-edits-local-to-remote)
* [Open a pull request for the base repository](#open-pull-request)

## <a name="create-and-clone"></a>Create and clone a fork repository to your computer (One time setup)

>>
Note: You go through these steps exactly once to get everything setup. This set of steps:
* Creates a fork of the branch within GitHub.
  * This fork is a repository under your user name or organization.
  * This repository in GitHub is referred to as a `remote` repository,
* Clones the the remote repository (your fork) to your computer.
  * This clone is referred to as a `local` repository.

1. Go to [https://github.com/concur/developer.concur.com](https://github.com/concur/developer.concur.com).
1. Click the **Fork** button in the upper right hand corner of the page.
1. Select the user or organization for the fork. A new fork is created.
1. In the new fork, click the **Clone or download** button.
  1. Choose the method you wish to use, HTTPS or SSH.
  1. Copy the URI path for the method.
1. Open a command line interface.
1. Navigate to the path where you want to store source code. If you need a guide on how to do this via the command prompt here is one for [MacOS](https://www.macworld.com/article/2042378/master-the-command-line-navigating-files-and-folders.html) and [Windows](https://www.digitalcitixzen.life/command-prompt-how-use-basic-commands). Typically it is `cd {path}` on both.
1. Issue: `git clone {uri}` where `uri` is the path copied earlier. Example: `git clone https://github.com/retrosight/developer.concur.com.git`. A typical result of cloning is as follows.

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

## <a name="edit-files"></a>Edit files in the `local` repository

> Note: Since you are working in a fork you can start editing straightaways without creating a branch.

1. Launch the editor of your choice.
1. Select **File > Open** in and select the folder containing your source.
1. Edit and save files as desired.

## <a name="push-edits-local-to-remote"></a>Push edits from your `local` to your `remote` fork repository

> This cycle is repeated as many times as you wish to push changes in your `local` fork repository to your `remote` fork repository in GitHub.

In the command line after navigating to the `local` repository folder:

1. Issue: `git add .` This tells git to add any and all changes you've made.
1. Issue: `git commit` This opens a text editing tool so you can add notes about the commit. See the [VIM on Mac](#vim-on-mac) section below for additional notes.
1. Issue: `git push origin preview`. You can read that command this way: **git** please **push** my changes to the **origin** aka the repository matching this local one and the **preview** branch in that remote repository. A typical result of the output of this cycle is as follows.

```shell
➜  developer.concur.com git:(preview) git add .
➜  developer.concur.com git:(preview) ✗ git commit
[preview 97db50cb] Adding the steps to work with forks.
 1 file changed, 37 insertions(+)
 create mode 100644 src/editing-with-a-repository-fork.md
 ➜  developer.concur.com git:(preview) git push origin preview
Counting objects: 8, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (8/8), done.
Writing objects: 100% (8/8), 2.31 KiB | 2.31 MiB/s, done.
Total 8 (delta 5), reused 0 (delta 0)
remote: Resolving deltas: 100% (5/5), completed with 2 local objects.
To github.com:retrosight/developer.concur.com.git
   cf7afef0..33c025d7  preview -> preview
```
### <a name="vim-on-mac"></a>VIM on Mac

1. Press the **lowercase i** key to change to 'Insert' mode.
1. Type out your notes in the first line.
1.  Press the **ESC** key to exit out of 'Insert' mode.
1. Type the following: `:wq`
1. Press the **Enter** key.

## <a name="open-pull-request"></a>Open a pull request for the base repository

> These steps request the maintainer of the base repository accept your proposed changes and begin the review process for same.

1. In the browser navigate to the home page for your fork repository.
1. Click the **New pull request** button.
1. Take note of the fork and branch and the arrow is pointing in the desired direction, from your fork (`head`) to the parent (`base`).
1. Click the **Create pull request** button.

```
[base fork: concur/developer.concur.com v ] [base: preview v ] <- [head fork: retrosight/developer.concur.com v ] [compare: preview v ]
            |      |                               |           |              |          |                                  |
            org    repository                      branch      |              org        repository                         branch
                                                               direction
```
