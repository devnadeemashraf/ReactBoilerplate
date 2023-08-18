# React + TailwindCSS + shadnc/ui Boilerplate

This is a boilerplate code that is all set to be used, routing powered by React Router.

- [shadcn/ui](https://ui.shadcn.com/docs) docs to use for future reference.
- [tailwind css](https://tailwindcss.com/docs/installation) docs to use for future reference.
  
## How to use

- Download the zip by clicking on the green `Code` button and then clicking Download.
- Extract the downloaded files in your desired location.
- Open Command Prompt in that folder or you can use VS Code's integrated terminal as well {for that you have to first open the folder in VS Code}
- run `npm install`
- run `npm install -D @types/node` in case if its not installed for some reason, if it is then ignore this step.
- Development environment is all set, you can now run the dev server by running `npm run dev`
- Now start building your application.

## Structure

Let us see how this code has been setup:

- Just like any other React App, this uses `src` folder as the root folder for our app so that our root files are separate from our app files.
- In your vite configuration file, which is in `vite.config.js` , you'll see an import alias that has been set which helps us to make the imports look clean. It looks like this.

```js
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },,
```

- If you want to configure your Tailwind CSS setup for the app, you can check the `tailwind.config.js` file.
- Please take a look at the `components.json` file which holds the configuration for our shadcn/ui library just in case you want to change something.
- Global CSS file is set to `src/index.css`. You can modify the color codes and other stuff in there to theme the application according to your need.
- `src/assets` will hold your app assets.
- `src/components` will hold all your app components both from shadcn/ui and your custom components.
- `src/lib` will hold your helper files and other config files.
- `src/pages` will hold your all the pages that the app might contain.