#!/usr/bin/env bash
# ref: https://qiita.com/ryounagaoka/items/3e7a1b44d43ad0547d4f

unchangeable_files=(
  ^assets/locales/ja.json
  ^assets/locales/en.json
  ^assets/locales/ja-Hira.json
)

containsElement () {
  local e
  for e in "${@:2}"; do [[ "$1" =~ $e ]] && return 0; done
  return 1
}

for FILE in `git diff --cached --name-status $against -- | cut -c3-`; do
  if containsElement $FILE "${unchangeable_files[@]}"; then
    echo "$FILE"
    CHANGE_DETECTED=1
  fi
done

if [ "$CHANGE_DETECTED" ]; then
  echo "Failed to commit because of the modification of the files above. See issue tokyo-metropolitan-gov/covid19#1985 for the details. "
  exit 1
fi
