1. **Team:** Samuel Cuthbertson (scuthbert), Connor Hudson (technoboy10)

2. **Title:** fcq.fun

3. **Project Summary:** A CU faculty course questionnaire viewer with improved readability, focused mainly on graphs. Limited to Boulder campus, initially limited to College of Engineering results.

4. **Revised Class Diagram:**

    Added since Part 3: Query class, DataPoint class, modifications to other classes to use Query and DataPoint

    ![fcq.fun Class Diagram](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/Part4/RevisedClassDiagramV2.svg?sanitize=true)

5. **Class Diagram of Implemented Classes:** ![fcq.fun Class Diagram](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/Part4/ImplementedClassDiagram.svg?sanitize=true)

6. **Summary:**
  Since last iteration, we have created a backend server to handle fetching of FCQ data and connected this to the HTTPRequestor class (and by extension, the LocalDataCache class). We also implemented a significant portion of the ChartDisplay class, adding a DataPoint class in the process, to provide the needed data to the `ChartDisplay.display()` function without hacky workarounds. We also changed the relationship from FCQPage to ChartDisplay from a 1-1 to a 1-Many, as part of supporting multiple results from a singe search (i.e. a search for "Liz" should return multiple professors).  

7. **Breakdown of Work:**
  Connor: Implemented ChartDisplay component, configured data visualization libraries, helped revise the class diagram.
  Sam: Wrote a AWS Lambda to make the CUFCQ database accessible through an HTTP GET call. Imported excel sheet into json, began moving datastore to returning a list of Plottables instead of a singe Plottable.

8. **GitHub Graph**:![fcq.fun Class Diagram](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/Part4/GitHubGraph.png)


9. **Estimate Remaining Effort:**

   In term of actually finishing everything planned, we're likely now about two thirds of the way there. (Lecturer displays, but Courses do not). However, the deeper we get the farther our scope expands, so estimating is tricky.

10. **Design Patterns**

  ​In our system, we prominently use the Proxy design pattern for our data fetching code in order to alleviate excessive database calls. We also use Template(????) as an integral part of DisplayChart and DataStore, in order to support searching/displaying for both lecturers and courses. 

11. **Next Iteration:** 

    Sam: Will continue with DataStore and FCQPage, adding support for searching by class/additional parameters included in the new Query object.

    Connor: ???

