# utahrenfaire
The website for the Utah Renaissance Faire runs on Node.js, is built on AngularJS with ui-router, and editable items are referenced on Firebase.

The files are served up using this repo: https://github.com/shadtek/static-server

Firebase App: https://utahrenfaire.firebaseio.com/

**Data path from Firebase to the view:**  
*The example we will be using is getting the event date to appear on the home page.*

- Your data structure should look like this:

![alt tag](http://i.imgur.com/Wrg314d.jpg)

- Get data from the Firebase endpoint in your service. In this project we are using firebaseService.js
```javascript
this.getMainInfo = function() {
	return $firebaseObject(new Firebase(firebaseUrl + 'mainInfo'));
};
```  

- Put a resolve on the 'home' state in the app.js
```javascript
resolve: {
  mainInfoRef: function(firebaseService){
    return firebaseService.getMainInfo();
  }
}
```  

- On the controller for the particular state/view/page, in our example homeCtrl.js
```javascript
app.controller('homeCtrl', function($scope, firebaseService, mainInfoRef) {
	window.scrollTo(0, 0)
	
	$scope.mainInfo = mainInfoRef;

})
```  

- Now in the html file we can do something like this to show the value that is stored in Firebase.
```html
<span>{{mainInfo.eventDate}}</span>
```

**How the editors work:**  
*TBD*
