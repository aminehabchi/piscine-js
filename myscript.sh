
git add .

commit_message=${1:-"done"}

git commit -m "$commit_message"

git push

echo "✅ Git push completed!"