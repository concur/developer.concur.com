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
  * See the example of the output of cloning below.
1. Navigate to the repository folder created.
  * Example: `cd developer.concur.com`
1. Launch Atom.
  * Note: Since we are working in a fork you can start editing straightaways.
1. File > Open in Atom and select the `developer.concur.com` folder.
1. Edit + Save files as desired.
1. Switch to the command line.
1. Issue: `git add .`
  * 


**Typical `git clone {path}` output**

```
Cloning into 'developer.concur.com'...
remote: Enumerating objects: 6, done.
remote: Counting objects: 100% (6/6), done.
remote: Compressing objects: 100% (6/6), done.
remote: Total 31798 (delta 0), reused 0 (delta 0), pack-reused 31792
Receiving objects: 100% (31798/31798), 185.39 MiB | 5.52 MiB/s, done.
Resolving deltas: 100% (20992/20992), done.
```
