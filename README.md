# utahrenfaire
The website for the Utah Renaissance Faire is built on AngularJS with ui-router and editable items are referenced on Firebase.

Firebase App: https://utahrenfaire.firebaseio.com/

To get rid of the # in your URLs:
- Inject $locationProvider in your app.config
- Before the end of your $stateProvider do this:
```
// For any unmatched url, redirect to "/" and clean up the address bar.
.state('otherwise', {
url: '*path',
	resolve: {
	  redirect: function($location) {
	    $location.path("/").replace()
	    console.log("redirecting...")
	  }
	}
});
$locationProvider.html5Mode(true);
```
- In the index.html put in the head

```
<base href="/"></base>
```