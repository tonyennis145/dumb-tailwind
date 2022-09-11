
This repo is used to generate a fully precompiled tailwind.css file that can be used across all of our codebases & projects. 

# How It Works
- We have a single .txt file containing all of the classes we want to include. We can then run a command (see below) which will compile a file containing all of these classes.

# Set A Includes
- All of the classes listed on https://umeshmk.github.io/Tailwindcss-cheatsheet/
- Variants - wherever spacing is involved, for the entire spacing and color scales from https://umeshmk.github.io/Tailwindcss-cheatsheet/
- No Variants for screen sizes. As in no `md:flex` classes. The current file is 13k lines so generating 6x variations will balloon it quickly. Instead I'm going to add to it over time with commonly used screen size variants.

# How to compile
- Install npm & npx, then tailwind.
- `npx tailwindcss -i ./src/input.css -o ./dist/tailwind.css`