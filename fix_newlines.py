
with open('client/src/data/index.ts', 'r') as f:
    content = f.read()

# Replace literal \n with actual newline
fixed_content = content.replace('\\n', '\n')

with open('client/src/data/index.ts', 'w') as f:
    f.write(fixed_content)
