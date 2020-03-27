import '../css/app.scss';
import Background from './background';
import CallAPI from './callAPi';


class App {
    constructor () {
        this.initApp();
    }

    initApp () {
      // Start application
      new Background();
      new CallAPI();
    }
}

new App();
