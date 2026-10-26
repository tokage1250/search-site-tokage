@echo off
chcp 65001 > nul
echo クラウドにデータを送信中...

cd /d C:\Users\aoto\Desktop\search-site
git add .
git commit -m "データを自動更新"
git push origin main

echo.
echo ====================================
echo データの送信が完了しました！
echo ====================================
pause