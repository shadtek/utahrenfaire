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

2. Put a resolve on the state in the app.js
```javascript
resolve: {
  mainInfoRef: function(firebaseService){
    return firebaseService.getMainInfo();
  }
}
```

3. 