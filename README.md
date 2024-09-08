echo "# keith-7-27-24-sneakers-r-us" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/superdud50/keith-7-27-24-sneakers-r-us.git
git push -u origin main
curl -sS https://webi.sh/gh | sh
gh auth login
git config user.name "insertYourUserName"
git config user.email "insertYourEmail@here.com"
