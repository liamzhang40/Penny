# Penny
[Live for now](http://penny-demo.us-west-2.elasticbeanstalk.com)

### git

always work on and push to the dev branch.
```sh
# pull branch dev to local
git checkout -b dev origin/dev

# before adding on new features, create a new local branch
git checkout -b [your_branch_name]

# before you merge [your_branch_name] with your local dev, always rebase from remote dev branch for both
git checkout [your_branch_name]
git pull --rebase origin dev

git checkout dev
git pull --rebase origin dev

# then make sure you are in dev branch to merge [your_branch_name] into dev
git merge [your_branch_name]
git push origin dev

# you can delete your branch if you want
git branch -d [your_branch_name] 
```
