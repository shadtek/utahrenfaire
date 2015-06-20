# utahrenfaire
The website for the Utah Renaissance Faire runs on Node.js, is built on AngularJS with ui-router, and editable items are referenced on Firebase.

Firebase App: https://utahrenfaire.firebaseio.com/

**Data path to the view:**  
- Get data from the Firebase endpoint in firebaseService.js 
```javascript
this.getMainInfo = function() {
	return $firebaseObject(new Firebase(firebaseUrl + 'mainInfo'));
};
```  
- Put a resolve on the state in the app.js
```javascript
resolve: {
  mainInfoRef: function(firebaseService){
    return firebaseService.getMainInfo();
  }
}
```  
- On the controller for the particular page, in our example homeCtrl.js
```javascript
$scope.mainInfo = mainInfoRef;
``` 