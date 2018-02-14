1. **Team:** Samuel Cuthbertson (scuthbert), 

   ​	    Connor Hudson (technoboy10)

2. **Title:** fcq.fun

3. **Project Summary:** A CU faculty course questionnaire viewer with improved readability, focused mainly on graphs. Limited to Boulder campus, initially limited to College of Engineering results. 

4. **Project Requirements:** Based on the project summary, what are the requirements and responsibilities for your system? List the requirements and their associated responsibilities in this section. Be sure to break them down into small manageable separate requirements and label each one with a unique ID number. You can write the requirements in short sentences or in the Agile format.

5. **Use Cases:** Provide the use case diagram as well as the use case documents.

   a. **Use Case Overview:** Create a single overview use case diagram depicting the all of the use cases the actors interact with. Note that these should map back to your user requirements. Reference your Requirement ID number(s) from the table. You should have at least 2 per 4448 team member or 4 per 5448 member in your group at a minimum. 
   b. **Use Case Document(s):** Document how the system will support 2 major workflow tasks via use cases documents. (While your overall system may include many use cases, focus on two start-to-finish use cases of something commonly done in the system that requires quite a few steps to go through).

   ​	i. Note: login, signup, and forgot password are not acceptable.

6. **Activity Diagram**: Use the two major workflow tasks you outlined in the two Use Case documents and create a separate activity diagram for each that documents all of the possible paths through it.

  a. _Note you must use UML 2.0 version with “swim lanes”.._
  b. Label the diagram with the Requirement ID #, Use Case ID #, Use Case name (short description).
  c. Make sure there is a system swim lane. When the system does something, make sure that is designated in the system swim lane!
  d. These must match the use case documents you did.

7. **UI Mockups:** Create screen mockups for the user interface of various parts of your application.

  a. What will a user see as they work through the tasks identified in your use cases?

  b. What is the overall organization of your user interface?

  c. How will data be displayed?

  d. How will the user navigate from screen to screen?

    Note: it is okay to work on paper for this task and then scan in your work to include in your document. There are also free wire-framing tools online.

8. **User Interactions:** Create 2 sequence diagrams. Use the use case documents and activity diagrams that you created as well as the UI mockups to show sequence diagrams of the objects that will participate in each use case interaction. Recall that sequence diagrams do not contain conditional constructs, so be sure to clearly describe the interaction that is being displayed in the sequence diagram. If you find yourself needing to show an if-else situation, simply create two sequence diagrams, one that shows the true branch and one that shows the false branch.

  a. Label each sequence diagram with the Requirement ID #, Use Case ID #, and Use Case short description.
  b. These must match the use case documents/activity diagrams you did.
  c. Make sure all classes in your Sequence Diagrams are also represented in your class diagram.
  d. Make sure all messages (method calls) shown in your Sequence Diagrams are also represented in your class diagram. Make sure you show the actor and the action that triggers the start of each use case, as well as any time the user interacts within the use case.
  e. List the actor steps (from use case document) to the left of the diagram and ensure the steps match the sequence diagram (See slides for an example).

9. **Class Diagram:** Create a class diagram containing: what relationships the classes have, their attributes and (public) methods, what design patterns you may already know about are present in your design, etc. Be sure to show the visibility modifiers and relationships between the classes.

  a. Focus your class diagram on the classes you need to create. For classes from Java or another library: You can specify an inheritance or composition relationship if it helps but do not put all the attributes/behaviors of the framework classes into the diagram. For example, If I was using Java Swing I could simply specify “submitBtn : JButton” as an attribute in one of my classes without drawing the JButton class. If I want to make use of Java’s Observer interface, I may draw the Observer interface in the class diagram to show a class implements it.
  b. Show all classes you are coding, including attributes, methods, visibility modifiers, relationships to other classes. 
  c. Show relationships between all classes. No floating classes.
  d. Make sure all classes appear in your class diagram from all sequence diagrams. Make sure all method calls from your sequence diagrams appear in your class diagram.

**How to Scope** 

While I have asked for a non-trivial amount of information above, you should only
generate the information you need to achieve your desired functionality given the
size of your team. Each member of your group should expect to work on one to two
use cases (possibly with other teammates). A 5-person team is looking at 10-20 use
cases (2-person 5448 team 8 use cases), although I would be surprised if any team
identifies 20 tasks that their system can perform. Use these guidelines to scope the
work of this project part and really focus on generating information that will guide
your implementation efforts.