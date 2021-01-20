import requests
from bs4 import BeautifulSoup

# WebサイトのURLを指定
url = "https://www.crummy.com/software/BeautifulSoup/bs4/doc/"

# Requestsを利用してWebページを取得する
r = requests.get(url)

# BeautifulSoupを利用してWebページを解析する
soup = BeautifulSoup(r.text, 'html.parser')

print(soup)