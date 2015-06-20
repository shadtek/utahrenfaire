# utahrenfaire
The website for the Utah Renaissance Faire runs on Node.js, is built on AngularJS with ui-router, and editable items are referenced on Firebase.

Firebase App: https://utahrenfaire.firebaseio.com/

**Data path to the view:**

1. Get data from the Firebase endpoint in firebaseService.js 
```javascript
this.getMainInfo = function() {
	return $firebaseObject(new Firebase(firebaseUrl + 'mainInfo'));
};
```

<<<<<<< HEAD
2. app.js
=======
2. app.js
```javascript

```
>>>>>>> e29e5a6e6a5e2cfa4f91ca808dde1e6d5f7f8750
