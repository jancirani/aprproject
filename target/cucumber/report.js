$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/bdd/Resources/Login.feature");
formatter.feature({
  "line": 1,
  "name": "",
  "description": "",
  "id": "",
  "keyword": "Feature"
});
formatter.before({
  "duration": 13203279457,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "cakesbakes loggin page",
  "description": "",
  "id": ";cakesbakes-loggin-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@janci"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user click the login button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "the sign in window apper on the home page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user can enter the valid \u003cemailid\u003e and valid \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user click on the signin button",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user should successfully loggedin",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user should see on my Account button in homepage",
  "keyword": "And "
});
formatter.match({
  "location": "Stepdef.userIsOnTheHomepage()"
});
formatter.result({
  "duration": 291577789,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"class name\",\"selector\":\"hed-nam\"}\n  (Session info: chrome\u003d70.0.3538.67)\n  (Driver info: chromedriver\u003d70.0.3538.67 (9ab0cfab84ded083718d3a4ff830726efd38869f),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 34 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027sasi\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 8.1\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, hasTouchScreen\u003dfalse, platform\u003dWIN8_1, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49433}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d70.0.3538.67 (9ab0cfab84ded083718d3a4ff830726efd38869f), userDataDir\u003dC:\\Users\\SASIKU~1\\AppData\\Local\\Temp\\scoped_dir4168_31898}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d70.0.3538.67, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: fafe30d8c2666b693ffe05aa920d5a61\n*** Element info: {Using\u003dclass name, value\u003dhed-nam}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByClassName(RemoteWebDriver.java:433)\r\n\tat org.openqa.selenium.By$ByClassName.findElement(By.java:387)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.bdd.Homepage.verifyHomePage(Homepage.java:13)\r\n\tat com.bdd.Stepdef.userIsOnTheHomepage(Stepdef.java:23)\r\n\tat ✽.Given user is on the homepage(src/test/java/com/bdd/Resources/Login.feature:4)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Stepdef.userClickTheLoginButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdef.theSignInWindowApperOnTheHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdef.userCanEnterTheValidEmailidAndValidPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdef.userClickOnTheSigninButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdef.userShouldSuccessfullyLoggedin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Stepdef.userShouldSeeOnMyAccountButtonInHomepage()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1560939591,
  "status": "passed"
});
});