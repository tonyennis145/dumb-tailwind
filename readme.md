
This repo is used to generate a fully compiled tailwind.css file that can be used across all of our codebases & projects. 

# How It Works
- We have a single .txt file containing all of the classes we want to include. We can then run a command (see below) which will compile a file containing all of these classes.

# Set B Includes
- All of the classes listed on https://umeshmk.github.io/Tailwindcss-cheatsheet/
- Variants - wherever spacing is involved, for the entire spacing and color scales from https://umeshmk.github.io/Tailwindcss-cheatsheet/

# How to compile
- Install npm & npx, then tailwind.
- `npx tailwindcss -i ./src/input.css -o ./dist/tailwind.css`