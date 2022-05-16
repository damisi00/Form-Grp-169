# Form-Grp-169
Validation using JS

Steps to Contribute to this project

1. Fork the repository At the top right corner, you will see the term "fork". All you need to do is click it and you will have created a copy of the same project in your account. fork-repo

After this operation the URL of the project will change to:

https://github.com//projectname

2. Clone the project into your local machine In order for you to perform this step, you must have Git installed locally in your machine. If you don't, refer to the official Git docs on how to get started. Copy the forked project URL, and proceed to your local machine where you will open git bash, and proceed with the command below:

git clone https://github.com// This will create a copy of the project on your local machine. Now that you have cloned the repo we will need to do two things:

First is to make the necessary changes/contribution and commit those changes. After making your changes and adding new files, its time to add those changes into a separate branch before pushing them to remote.

But, first let's create a branch. In your git bash, change the path to pint to your repository directory. To do that use this command:

cd project folder name Now, to create a branch we will use the command: git checkout

3. git checkout -b your-new-branch here's an example:

   git checkout -b lary-mak It's time to add the new changes into the branch we created. In order to see all the changes you made, we will use the git status command:

git status The command will list all the changes you made. To add them we will use git add ', which will add all the files to our branch.

4. git add . Let's add a commit message, briefly explaining what we added:

5. git commit -m "" Push changes to remote Now that everything is set, it's time to let our maintainer know what we have added. That is made possible by pushing the changes with this command:
6. git pull origin main Merge conflicts first
7. git push origin replacing with the name of the branch you created earlier, in my case it will be git push origin larykmak.
8. Create a pull request
