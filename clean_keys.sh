#!/bin/sh

cat <<EOF > replacements.txt
service_djxfjt2==>REDACTED
template_qc5ocne==>REDACTED
8S9mDiyUmFjVFwAA9==>REDACTED
EOF

git filter-repo --force --path-rename "src/components/Contact.js:Contact.js" --invert-paths --replace-text replacements.txt


rm replacements.txt
