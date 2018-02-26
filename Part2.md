1. **Team:** Samuel Cuthbertson (scuthbert), Connor Hudson (technoboy10)

2. **Title:** fcq.fun

3. **Project Summary:** A CU faculty course questionnaire viewer with improved readability, focused mainly on graphs. Limited to Boulder campus, initially limited to College of Engineering results. 

4. **Project Requirements:**

   | ID     | Description                                                  |
   | ------ | ------------------------------------------------------------ |
   | US-01  | As a user, I can search by lecturer name in the format (Lastname, Firstname) to see results of that professors FCQ results. |
   | US-02  | As a user, I can search by course code to see results of that course's FCQ results. |
   | US-03  | As a user, I want to see the following on a chart as results of a professor search: Instructor Overall, Instructor's Effectiveness, Availability, Instructor's Respect. |
   | US-04  | As a user, I want to see the the following on a chart as the results of a class search: Course Overall, Hours per Week, Challenge, How Much Learned. |
   | FR-01  | Queries to the FCQ database should be limited to College of Engineering and Applied Science results. |
   | FR-02  | Queries to the FCQ database should bound "First Term" as Fall 2006 and "Last Term" as Summer 2017. |
   | NFR-01 | <u>Platform Constraints</u>: The page should display the same across multiple browsers. |
   | NFR-02 | <u>Reliability:</u> In the event of a failed database query, a user facing error page should appear. |
   | NFR-03 | <u>Legal:</u> All code will be protected under the GNU-General Purpose license, hosted as LICENSE in the GitHub repository. |

5. **Use Cases:** 

   1.  **Use Case Overview:** 

       ![fcq.fun use-case overview](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/fcq.fun%20use-case%20overview.svg?sanitize=true)

   2. **Use Case Document(s):** 

       ![fcq.fun US-01 Document](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/US01.pdf?sanitize=true)

       ![fcq.fun US-01 Document](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/US01.svg?sanitize=true)

       ![fcq.fun US-04 Document](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/US04.pdf?sanitize=true)

       ![fcq.fun US-04 Document](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/US04.svg?sanitize=true)

6. **Activity Diagram**: Use the two major workflow tasks you outlined in the two Use Case documents and create a separate activity diagram for each that documents all of the possible paths through it.

   1. _Note you must use UML 2.0 version with “swim lanes”.._
   2. Label the diagram with the Requirement ID #, Use Case ID #, Use Case name (short description).
   3. Make sure there is a system swim lane. When the system does something, make sure that is designated in the system swim lane!
   4. These must match the use case documents you did.

7. **UI Mockups:** Create screen mockups for the user interface of various parts of your application.

   1. What will a user see as they work through the tasks identified in your use cases?
   2. What is the overall organization of your user interface?
   3. How will data be displayed?
   4. How will the user navigate from screen to screen?

   Note: it is okay to work on paper for this task and then scan in your work to include in your document. There are also free wire-framing tools online.

8. **User Interactions:** Create 2 sequence diagrams. Use the use case documents and activity diagrams that you created as well as the UI mockups to show sequence diagrams of the objects that will participate in each use case interaction. Recall that sequence diagrams do not contain conditional constructs, so be sure to clearly describe the interaction that is being displayed in the sequence diagram. If you find yourself needing to show an if-else situation, simply create two sequence diagrams, one that shows the true branch and one that shows the false branch.

   1. Label each sequence diagram with the Requirement ID #, Use Case ID #, and Use Case short description.
   2. These must match the use case documents/activity diagrams you did.
   3. Make sure all classes in your Sequence Diagrams are also represented in your class diagram.
   4. Make sure all messages (method calls) shown in your Sequence Diagrams are also represented in your class diagram. Make sure you show the actor and the action that triggers the start of each use case, as well as any time the user interacts within the use case.
   5. List the actor steps (from use case document) to the left of the diagram and ensure the steps match the sequence diagram (See slides for an example).

9. **Class Diagram:** Create a class diagram containing: what relationships the classes have, their attributes and (public) methods, what design patterns you may already know about are present in your design, etc. Be sure to show the visibility modifiers and relationships between the classes.

   1. Focus your class diagram on the classes you need to create. For classes from Java or another library: You can specify an inheritance or composition relationship if it helps but do not put all the attributes/behaviors of the framework classes into the diagram. For example, If I was using Java Swing I could simply specify “submitBtn : JButton” as an attribute in one of my classes without drawing the JButton class. If I want to make use of Java’s Observer interface, I may draw the Observer interface in the class diagram to show a class implements it.
   2. Show all classes you are coding, including attributes, methods, visibility modifiers, relationships to other classes. 
   3. Show relationships between all classes. No floating classes.
   4. Make sure all classes appear in your class diagram from all sequence diagrams. Make sure all method calls from your sequence diagrams appear in your class diagram.

**How to Scope** 

While I have asked for a non-trivial amount of information above, you should only
generate the information you need to achieve your desired functionality given the
size of your team. Each member of your group should expect to work on one to two
use cases (possibly with other teammates). A 5-person team is looking at 10-20 use
cases (2-person 5448 team 8 use cases), although I would be surprised if any team
identifies 20 tasks that their system can perform. Use these guidelines to scope the
work of this project part and really focus on generating information that will guide
your implementation efforts.
