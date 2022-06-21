#!/bin/bash
function join_by { local d=${1-} f=${2-}; if shift 2; then printf %s "$f" "${@/#/$d}"; fi; }

cd "$(dirname "${BASH_SOURCE[0]}")"

LINKS_FILE="../src/pages/links/content.ts"
all_categories=(Art Blog Tech Politics Other)

categories=()

name=$(dmenu -i -p "Name: ")
if [ -z $name ]; then 
  return 0
fi

link=$(dmenu -i -p "Url: ")
if [ -z $link ]; then 
  return 0
fi

curl --output /dev/null --silent --head --fail "${link}" || {
  notify-send -u normal "\"${link}\" cannot be reached. Is the link correct?"
  return 0
}

if ! [[ "${link}" =~ ^http.*|^https ]]; 
then
  link="http://${link}"
fi

while true;
do
  if [ "${#categories[@]}" -ne 0 ]; then
    prompt="Categories (${categories[@]}): "
  else
    prompt="Categories "
  fi

  choice=$(printf "%s\n" "${all_categories[@]}" | dmenu -i -p "${prompt}")

  if [ $choice = "DONE" ]; then
    break
  fi  

  if [[ " ${all_categories[*]} " =~ " ${choice} " ]]; then
    categories+=("'${choice}'")
    all_categories=( ${all_categories[@]/$choice} )

    if [ "${#categories[@]}" -eq 1 ]; then
      all_categories+=( "DONE" )
    fi
  fi
done

combined_categories=$(join_by ", " ${categories[@]})

notify-send -u normal "Add link ${name} (${link}) with category ${combined_categories}?"

confirmation=$(echo -e "yes\nno" | dmenu -i -p "Confirm")
if [ "$confirmation" != "yes" ]; then
  return 0
fi

node -e "
  const dataPath = '../src/nodes/links/data.json';
  const links = require(dataPath);
  const [category, ...additionalCategories] = [${combined_categories}];
  const newLink = {
    text: '${name}',
    url: '${link}',
    category,
    additionalCategories
  };

  links.push(newLink);

  const fs = require('fs');
  fs.writeFileSync(
    dataPath,
    JSON.stringify(links, null, 2)
  );
"