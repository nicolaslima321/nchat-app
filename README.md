# NChat (Client/Front-end)

### Overview
This project development were just as an entertainment and for a way to study and practice.
NChat intends to be only a 'replica' of Web WhatsApp, developed from scratch using JavaScript. The stack used on front-end of NChat is Quasar Framework, VueJS and Node.JS. To real-time data confection, was implemented a package Socket.io client-side.

### Instalation
Node.JS, NPM and Quasar CLI are required to NChat. To install this project you must run in your terminal or prompt (If you use Windows) the typical: `npm install`.

### Execution/Run
Thanks to Quasar, you have many ways to do that :)
Hereafter will have some modes possibles, but generally, running `quasar dev` will run the project as an SPA, and it will be listen in your port 8080, you can access and refer to it at url http://localhost:8080. At this point, the client will be able to sent messages to the Back-end (NChat Server Side).

### Start the app in development mode (hot-code reloading, error reporting, etc.)
Generally
```bash
quasar dev
```

For Desktop (ElectronJ)
```
quasar dev -m electron
```

For Mobile (Cordova)
```
quasar dev -m cordova
```

**Note if you use cordova, you must have an emulator or mobile device connected and correctly configured in your OS**

### Lint the files
```bash
npm run lint
```

### Build the app for production
```bash
quasar build
```
**Note if you want, you can build using the same flag mode '-m' passing the prefered platform**

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
