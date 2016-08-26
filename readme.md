## Chargenode

Simple node.js RESTful api backend done for a D&D character generator.

For course Node.js ohjelmointiprojekti

Heroku instance can be found at http://chargenode.herokuapp.com

Use Examples:

all characters in the db http://chargenode.herokuapp.com/api/characters
a single character http://chargenode.herokuapp.com/api/characters/57bf1073849c97310ec022cc
a random character http://chargenode.herokuapp.com/api/random

##Hours

16.8	1h	setup node locally, mbase account
17.8	2h	crude server, mock model and api to get/post/delete stuff
18.8	3h	coding the main character model 
19.8	2h	coding the main charcater controller, moving the character model to separate file and linking it to the server, exports/requires added, github setup
20.8	1h	configuring routes as a separate file
22.8	4h	working api (get/post/delete), testing with REST
25.8	1h	adding random pick to api
26.8	2h	separating routes from the main server code, setting up travis & heroku

