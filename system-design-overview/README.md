# **System Design Primer: The Ultimate Guide** 
![System design Primer](./assets/img1.webp "A box model diagram") 
# Understanding System Design  
***System design is a step-by-step process of defining a particular software's architecture, modules and components***  
#### Importance of the Concept 
<ol>
<li>Vital in building scalable and reliable software.
<li>Helps tech giant companies like Google, Microsoft and Amazon to  check the interviewer's ability to think about building the application's architecture from scratch. 
<li>System design primer helps you to understand the essence of system design and various concepts from basic to advanced.  

#### Steps of Software Development  
<ol>
<li>Identify the requirements:  
- can be functional and non-functional.Non-functional requirements include scalability, high availability and consistency 
<li>System design- Prepare the architecture for the application according to requirements.It includes deciding whether  to use SQL or NoSQL databases based on the data you need to store.
<li>Decide how to make the application scalable in case the traffic increases. You can have multiple servers worldwide and serve the resources to users from the nearest server to make their applications efficient.

#### ***System Design Methods*** 
Developers should choose a particular method based on the project's requirements. 


***1. Architectural Design*** 

- Being the base of the system design, it describes the infrastructure, model, view, components and interaction.  
 - It includes client-server interaction and microservices.
 
 ***2. ERD Diagram(Entity-relationship diagram)***  

 Its uses include:  
 - In designing the application's database structure.
 - Used to define multiple database schemas 
 - Used to add entities in each schema 
 - Used to add multiple attributes for each entity
 - Used to connect the entities of two different schemas if a relationship exists between them. 

 ***3. UML Diagram(Unified modeling language)***  
 - It contains different diagrams like activity diagrams, class diagrams and sequence diagrams to represent the different aspects of the system.
 - Used to prepare modeling software systems.  

 ***4.Class Diagrams***
-  Used to represent the classes and  provides an overview of the system's data and functionality.
- They can contain the class's attributes, methods and relationships between multiple classes.

***5. Sequence Diagrams***
- Represent the interaction between the various components of the system. 
- Used to model the behavior of the system.
### System Design Concepts
#### 1. Performance vs Scalability  
- ***Performance***

-Involves evaluation of the time a website takes to load. 
-Disadvantage of poor performance-Traffic can decrease as visitors prefer to go to other websites.  
-Mechanisms to increase the application's performance and serve resources faster  include caching. 

- ***Scalability***
-It is the ability to scale the application.  
-Scaling techniques: 
(a)By distributing the load across multiple servers  
(b) Increasing the single server's capacity.  
(c)By developing a new server.

#### 2. Latency vs Throughput
***Latency***  
-Measurement of the time delay to complete a single request or data operation.  
-It is a network delay that occurs due to Geographical distance, transport protocol, or network infrastructure and ***measured  in Milliseconds.***  
-Uses:  
(a)Online or live gaming  
(b)Live streaming  
(c)Video calls  

***Throughput***  
-It is the number of operations the system can handle in a particular time or the number of data passed via network request in a given time. 
-***It is measured in megabytes (MB) per second.***
-Used to check the capability of the systems. If the throughput of the server is low, architectures can scale the server to make it efficient.

#### .3. Consistency Patterns and Availability Patterns
***Consistency***  
In the case of a banking system,if consistent,it will subtract the withdrawn balance only once from the total balance.

***Availability***  
 The system's availability ensures that each request receives a response either with fresh or old data. The availability is important when high uptime is needed.
#### Consistency Patterns
<ol>
<li>Strong consistency:  

- Ensures that each request gets the most recent data.
 To achieve strong consistency, you require synchronized communication. It prioritizes consistency over availability.  
 <li>Eventual Consistency  
 
 - Allows temporary inconsistencies to be resolved soon. It prioritizes availability over consistency.
 <li> Weak Consistency
 
 - Here,the user may get fresh data after writing the data.
 - It focuses on the fast access and can be used in live streaming or video chat.
 #### Availability Patterns
 <ol>
 <li>Load Balancing  
 
 - The upcoming request can be distributed across multiple servers to achieve high availability.
 - As we balance the load here, it is called the load balancing.
 <li>Retry and timeout strategies

 - Importance-to process the request after every interval if the system fails or if not available.
 ## Advanced Concepts in System Design
#### 1. CDN(Content delivery network)
-Is a distributed server network located at different geo-locations.  
uses:
- To deliver content like images, various data, etc., from the server.
-The CDN delivers the resource faster, decreases latency (network delay), and improves the application's performance.