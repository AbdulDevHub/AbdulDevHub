"""Rewrite the "currently working on" line in README.md with the most recently pushed public repo."""
import json, re, urllib.request, pathlib

USER = "AbdulDevHub"
EXCLUDE = {"AbdulDevHub", "Leetcode-Submissions"}  # profile repo itself + noisy repos
README = pathlib.Path("README.md")

with urllib.request.urlopen(f"https://api.github.com/users/{USER}/repos?per_page=100&sort=pushed") as r:
    repos = json.load(r)

candidates = [x for x in repos if not x["fork"] and not x["archived"] and x["name"] not in EXCLUDE]
if not candidates:
    raise SystemExit("no candidate repos; leaving README unchanged")
top = max(candidates, key=lambda x: x["pushed_at"])
name = top["name"].replace("-", " ")
line = f"- 🔭 I’m currently working on [{name}]({top['html_url']})"

text = README.read_text(encoding="utf-8")
new = re.sub(r"^- 🔭 I’m currently working on .*$", line, text, count=1, flags=re.M)
if new == text:
    print("no change:", top["name"])
else:
    README.write_text(new, encoding="utf-8")
    print("updated:", top["name"])
