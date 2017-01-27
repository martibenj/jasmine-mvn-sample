###Jasmine-Maven-Sample

Sample NG project to test Jasmine integration into Maven build process.

Jasmine testing is launched with the [com.github.searls.jasmine-maven-plugin](https://searls.github.io/jasmine-maven-plugin/)


- Project NG :
Use 2 controllers with dependencies (with bootstrap)
- Jasmine Testing :
  * tutorial_spec.js : contains several example for Jasmine beginners
  * app_spec.js : Mock/Inject controllers and boostrap modal
  
Usage 
- To display the NG app : mvn clean install && mvn tomcat7:run then go to [http://localhost:8080/jasmine-mvn-sample/](http://localhost:8080/jasmine-mvn-sample/)
- To execute Jasmine tests using Phantom : mvn jasmine:test
- To execute Jasmine tests and see the results in a pretty way : mvn jasmine:bdd then go to [http://localhost:8234](http://localhost:8234)

