1. **Team 07:** Samuel Cuthbertson (scuthbert), Connor Hudson (technoboy10)

2. **Title:** fcq.fun

3. **Project Summary:** A CU faculty course questionnaire viewer with improved readability, focused mainly on graphs. Limited to Boulder campus, initially limited to College of Engineering results. 

4. **Project Requirements:**

   | ID     | Description                                                  | Implemented? |
   | ------ | ------------------------------------------------------------ | ------------ |
   | US-01  | As a user, I can search by lecturer name in the format (Lastname, Firstname) to see results of that professors FCQ results. | Yes          |
   | US-02  | As a user, I can search by course code to see results of that course's FCQ results. | No           |
   | US-03  | As a user, I want to see the following on a chart as results of a professor search: Instructor Overall, Instructor's Effectiveness, Availability, Instructor's Respect. | Yes          |
   | US-04  | As a user, I want to see the the following on a chart as the results of a class search: Course Overall, Hours per Week, Challenge, How Much Learned. | No           |
   | FR-01  | Queries to the FCQ database should be limited to College of Engineering and Applied Science results. | Yes          |
   | FR-02  | Queries to the FCQ database should bound "First Term" as Fall 2006 and "Last Term" as Summer 2017. | Yes          |
   | NFR-01 | <u>Platform Constraints</u>: The page should display the same across multiple browsers. | Yes          |
   | NFR-02 | <u>Reliability:</u> In the event of a failed database query, a user facing error alert should appear. | No           |
   | NFR-03 | <u>Legal:</u> All code will be protected under the GNU-General Purpose license, hosted as LICENSE in the GitHub repository. | Yes          |

5. **Use Cases:** 

   1.  **Use Case Overview:** 
       ![fcq.fun use-case overview](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/Part2/UseCaseOverview.svg?sanitize=true)

   2.  **Use Case Document(s):** 
       ![fcq.fun US-01 Document](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/Part2/US01.svg?sanitize=true)
       ![fcq.fun US-04 Document](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/Part2/US04.svg?sanitize=true)

6. **Activity Diagram**:

    ![fcq.fun US-01 Activity Diagram](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/Part2/ActivityDiagram-US01.svg?sanitize=true)

    ![fcq.fun US-04 Activity Diagram](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/Part2/ActivityDiagram-US04.svg?sanitize=true)

7. **UI Mockups:** Create screen mockups for the user interface of various parts of your application.

   ![fcq.fun UI Mockups](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/Part2/UIMockup2.png?sanitize=true)

8. **User Interactions:** 
    ![fcq.fun US-01 Sequence Diagram 1](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/Part2/SequenceDiagram-US01-1.svg?sanitize=true)

    ![fcq.fun US-01 Sequence Diagram 2](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/Part2/SequenceDiagram-US01-2.svg?sanitize=true)

    ​

    ​

    ![fcq.fun US-04 Sequence Diagram](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/Part2/SequenceDiagram-US04.svg?sanitize=true)

9. **Class Diagram:**
    ![fcq.fun Class Diagram](https://raw.githubusercontent.com/scuthbert/fcq.fun/master/Part2/ClassDiagram.svg?sanitize=true)
