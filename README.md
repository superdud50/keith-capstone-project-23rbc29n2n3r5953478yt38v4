echo "# keith-capstone-project-23rbc29n2n3r5953478yt38v4" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/superdud50/keith-capstone-project-23rbc29n2n3r5953478yt38v4.git
curl -sS https://webi.sh/gh | sh	
gh auth login
git push -u origin main

git remote -v
git remote set-url origin
git config user.email ""
git config user.name ""