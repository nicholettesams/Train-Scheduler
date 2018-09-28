# Train Scheduler 

# Assignment
Create a train schedule application that incorporates Firebase to host arrival and departure data. This website will provide up-to-date information about various trains, namely their arrival times and how many minutes remain until they arrive at their station.

# Solution
A firebase realtime database was created to store the values.  The push() method was used to create multiple children.  The date-fns library was used to validate and do date/time calculations.  The calulations here are my own, I didn't use the calculations provided to the class.

# Technologies
HTML, CSS, JavaScript, Bootstrap, jQuery, Firebase, date-fns library

# Using the application
This application will display trains with destination, frequency next arrival time, and minutes until the next train.  Users may add new trains for all users to be able to see.