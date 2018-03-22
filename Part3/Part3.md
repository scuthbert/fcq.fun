1. **Team:** Samuel Cuthbertson (scuthbert), Connor Hudson (technoboy10)
2. **Title:** fcq.fun
3. **Project Summary:** A CU faculty course questionnaire viewer with improved readability, focused mainly on graphs. Limited to Boulder campus, initially limited to College of Engineering results.
4. **Revised Class Diagram:**
    ![fcq.fun Class Diagram](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/Part3/RevisedClassDiagram.svg?sanitize=true)
5. **Class Diagram of Implemented Classes:** ![fcq.fun Class Diagram](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/Part3/ImplementedClassDiagram.svg?sanitize=true)
6. **Summary:**
  To date, we have decided specifics around the architecture of our system, as well as fleshing out our class diagram using the added knowledge of design patterns. We settled on using Angular4, as it is heavily object oriented and strongly typed through it's use of typescript. For our datastore, we're using a Proxy pattern with the remote store being accessed through the RESTful API provided at fcq.colorado.edu, and the local store simply being a key value map.
  Additionally, we have implemented the classes shown above.
7. **Breakdown of Work:**
  Connor: Revised class diagram, coded Field, Course, and Lecturer. 
  Sam: Created 'implemented classes diagram', coded FCQPage and Plottable, as well as setup initial Angular app.
8. **GitHub Graph:![fcq.fun Class Diagram](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/Part3/GitHubGraph.png)**


9. **Estimate Remaining Effort:**
  While we have all the necessary classes for creating and Plottables, we have yet to call the FCQ Database. This will be the primary portion of the remaining work, with the rest being spent on creating/beautifying ChartDisplay. In implementing our system thus far, we have moved away from our simplistic design of Part 2 and have added specifics to fulfill our requirements (Field as a class, Proxy for DataStore, Getters for courseCode and lecturerName, etc..). Additionally, we have created Angular unit tests for all our implemented classes, and will continue to do so for future additions. 
10. **Next Iteration:** Moving forward, we initially plan on splitting focus between successfully calling the FCQ Database and implementing ChartDisplay. Sam will focus on the DataStore, and Connor will create and beautify ChartDisplay. 
