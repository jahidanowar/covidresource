#!/bin/sh
set -e


(git push) || true

git subtree push --prefix backend origin backend

git checkout master
git checkout production
git merge master

git push origin production
git checkout master