# vp_electron

> Vue-Perroquet CDP app for Electron

#### Build Setup

``` bash
# install dependencies
git submodule update -i
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


# lint all JS/Vue component files in `src/`
npm run lint


# update vp_app
cd src
git pull origin master
cd ..
git add .
git commit -m "appropriate message"
git push
```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
