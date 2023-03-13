
This repo is used to generate a fully compiled tailwind.css file that can be hosted directly from a CDN or s3 with no need to integrate Tailwind into your codebase with npm or use any kind of pre/post compilation step. It works well in cases where one initial moderatly heavy load (733kb) won't have a noticeable impact on end user experience.

## What's Included

- The current list of classes included by default can be found [here](https://github.com/Group-One-Technology/tailwind-generator/blob/master/src/classes.txt). 
- We started with classes we thought we'd need, then spent about 3 months adding classes that were missing from our original set. We've now been using this file for four reasonably large projects and haven't had any cases in the last few months where it's been missing a class we've needed. But in the case that there are classes missing, you can use the instructions below to 

# How It Works
- There is a single .txt file (`/src/classes.txt`) which contains a list of all of the classes we may need to use.  
- We use the tailwindcss npx command to parse this file and output a fully compiled css file that contains only these classes. 


## How to Use
- To use our default file, simply download the raw file [here](https://raw.githubusercontent.com/Group-One-Technology/tailwind-generator/master/dist/tailwind.css), upload it to wherever you'd like to host it, and reference it normally in the head of your html file.
- To customize the classes that are included, see the instructions below.


## Making Changes
- Pull this repo
- Install npm & npx, then tailwind.
- Make whatever changes you need to the `/src/classes.txt`
- Run `npx tailwindcss -i ./src/input.css -o ./dist/tailwind.css` to compile the file.
- Your compiled file is now available in `/dist/tailwind.css`. Upload it to S3 or wherever you'd like to host it, and reference it normally in the head of your page. 

