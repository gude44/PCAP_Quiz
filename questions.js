export const questions = [
  {
    question: "What will be the outcome of the following code snippet?",
    image: "images/image1.png",
    answers: [
      { text: "0 1 2 3 4", correct: false },
      { text: "0 1 2 4", correct: true },
      { text: "1 2 3 4", correct: false },
      { text: "0 1 2 3", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code snippet provided iterates through the numbers 0 to 4 using a for loop. During each iteration, it checks if the current value of i is equal to 3. If i is 3, the continue statement is executed, which skips the rest of the loop for that iteration. <br><br>As a result, the number 3 is not printed. For all other values of i, the code proceeds to print the value. Therefore, the output of the code will be the numbers 0, 1, 2, and 4, with the number 3 being skipped.",
    link: "https://www.geeksforgeeks.org/python-continue-statement/",
  },
  {
    question: "What will be the output of the following code snippet?",
    image: "images/image2.png",
    answers: [
      { text: "2.5", correct: true },
      { text: "2", correct: false },
      { text: "2.0", correct: false },
      { text: "2.25", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code performs a division. The result is a floating point number, giving the output 2.5.",
    link: "https://www.geeksforgeeks.org/division-operators-in-python/",
  },
  {
    question: "What is the the output of the following code snippet?",
    image: "images/image3.png",
    answers: [
      { text: '"Python."', correct: false },
      { text: '"nohtyP."', correct: true },
      { text: '"nythoP."', correct: false },
      { text: "Error: invalid syntax", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code reverses the string 'Python' using slicing, resulting in 'nohtyP'.",
    link: "https://www.w3schools.com/python/gloss_python_string_slice.asp",
  },
  {
    question: "What is the correct way to define a tuple in Python?",
    answers: [
      { text: "tuple = (1,2,3)", correct: true },
      { text: "tuple = [1,2,3]", correct: false },
      { text: "tuple = {1,2,3}", correct: false },
      { text: 'tuple = "1,2,3"', correct: false },
    ],
    explanation:
      "Explanation:<br><br>Tuples in Python are defined using parentheses. <br><br>For example: tuple = (1,2,3)",
    link: "https://www.w3schools.com/python/python_tuples.asp",
  },
  {
    question:
      "What is the purpose of the 'else' clause in a Python 'if' statement?",
    answers: [
      { text: "It is executed if the 'if' condition is True.", correct: false },
      {
        text: "It is executed if any 'elif' condition is True.",
        correct: false,
      },
      {
        text: "It is executed if none of the 'if' or 'elif' conditions are True.",
        correct: true,
      },
      {
        text: "It is executed before the 'if' condition is checked.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'else' clause in an 'if' statement is executed if none of the preceding conditions ('if' or 'elif') are True.",
    link: "https://docs.python.org/3/reference/compound_stmts.html#else",
  },
  {
    question:
      "How can you open a file named 'example.txt' in Python for writing?",
    answers: [
      { text: "file = open('example.txt', 'r')", correct: false },
      { text: "file = open('example.txt', 'w')", correct: true },
      { text: "file = open('example.txt', 'a')", correct: false },
      { text: "file = open('example.txt', 'x')", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'w' mode opens the file for writing and truncates the file if it already exists",
    link: "https://www.w3schools.com/python/python_file_open.asp",
  },
  {
    question: "What will be the output of the following code snippet?",
    image: "images/image4.png",
    answers: [
      { text: "[1,2,3,4,5]", correct: false },
      { text: "[2,4,6,8,10]", correct: false },
      { text: "[1,4,9,16,25]", correct: true },
      { text: "[5,4,3,2,1]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code squares each element in the list [1,2,3,4,5] and stores the results in a new list [1,4,9,16,25], using list comprehension.",
    link: "https://www.w3schools.com/python/python_lists_comprehension.asp",
  },
  {
    question:
      "How do you pass a variable number of arguments to a Python function?",
    answers: [
      { text: "Using a tuple", correct: false },
      { text: "Using a list", correct: false },
      { text: "Using the *args syntax", correct: true },
      { text: "Using the **kwargs syntax", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, you can pass a variable (or arbitrary) number of positional arguments to a function using the *args syntax. The *args collects all additional positional arguments into a tuple, allowing the function to handle more arguments than initially specified.<br><br>*args allows a function to accept any number of positional arguments.<br><br>**kwargs allows a function to accept a variable number of keyword arguments (key-value pairs), but this is not relevant for positional arguments.",
    link: "https://www.freecodecamp.org/news/args-and-kwargs-in-python/",
  },
  {
    question: "In Python, what does the 'pass' statement do?",
    answers: [
      { text: "Terminates the program.", correct: false },
      { text: "Skips the current iteration in a loop.", correct: false },
      { text: "Raises an exception.", correct: false },
      { text: "Has no effect; it is a null operation.", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The pass statement is a null operation—it doesn't do anything and is used as a placeholder. You can use pass in situations where a statement is syntactically required but you don't want to execute any code at that moment.<br><br>This can be useful when you're writing code that hasn't been fully implemented yet, or when you're constructing loops, functions, or classes that don't have any content initially but are syntactically required.",
    link: "https://www.w3schools.com/python/ref_keyword_pass.asp",
  },
  {
    question: "What does the 'break' statement do in a loop?",
    answers: [
      {
        text: "Exits the loop and continues with the next iteration.",
        correct: true,
      },
      { text: "Exits the loop and terminates the program.", correct: false },
      {
        text: "Skips the current iteration and continues with the next one.",
        correct: false,
      },
      { text: "Has no effect on the loop.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The break statement is used to immediately terminate a loop (either a for loop or a while loop) when a certain condition is met. Once the break statement is encountered, the loop stops executing, and the program continues with the first line of code after the loop.",
    link: "https://www.tutorialspoint.com/python/python_break_statement.htm",
  },
  {
    question: "How can you check if a key is present in a Python dictionary?",
    answers: [
      { text: "Using the 'find' method", correct: false },
      { text: "Using the 'exists' keyword", correct: false },
      { text: "Using the 'in' keyword", correct: true },
      { text: "Using the 'has_key' method", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'in' keyword is used to check if a key is present in a dictionary, for example:<br><br>if 'key' in my_dict",
    link: "https://stackoverflow.com/questions/1602934/check-if-a-given-key-already-exists-in-a-dictionary",
  },
  {
    question:
      "What is the purpose of the 'finally' clause in a 'try-except-finally' block?",
    answers: [
      { text: "It is executed when an exception occurs.", correct: false },
      {
        text: "It is executed regardless of whether an exception occurs or not.",
        correct: true,
      },
      {
        text: "It is executed before the 'try' block is checked.",
        correct: false,
      },
      {
        text: "It is executed if the 'except' block is skipped.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'finally' clause is used to execute code, regardless of whether an exception occurs or not, for example:<br><br>try: print('Hello') <br>finally: print('World').",
    link: "https://www.w3schools.com/python/python_try_except.asp",
  },
  {
    question:
      "Which of the following is a correct way to import a module named 'example' in Python?",
    answers: [
      { text: "import example", correct: true },
      { text: "require example", correct: false },
      { text: "from example import module", correct: false },
      { text: "include example", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'import' statement is used to import a module.",
    link: "https://www.w3schools.com/python/python_modules.asp",
  },
  {
    question: "What is the purpose of the 'pop' method in Python lists?",
    answers: [
      { text: "Appends an element to the end of the list.", correct: false },
      { text: "Removes the last element from the list.", correct: false },
      { text: "Removes the element at a specific index.", correct: true },
      { text: "Retrieves the element at a specific index.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'pop' method removes the element at the specified index and returns it, for example: <br><br>list.pop(0).",
    link: "https://www.w3schools.com/python/ref_list_pop.asp",
  },
  {
    question:
      "Which of the following is a correct way to open a file and automatically close it when done?",
    answers: [
      { text: "file = open('example.txt', 'r').close()", correct: false },
      { text: "with open('example.txt', 'r') as file:", correct: true },
      { text: "file = open('example.txt', 'r')file.close()", correct: false },
      { text: "open('example.txt', 'r').read()", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'with' statement is used to open a file and automatically close it when done, for example:<br><br>with open('example.txt', 'r') as file:",
    link: "https://www.geeksforgeeks.org/with-statement-in-python/",
  },
  {
    question: "What is the purpose of the 'zip' function in Python?",
    answers: [
      { text: "Compresses files into a zip archive.", correct: false },
      { text: "Combines two or more lists into pairs.", correct: true },
      {
        text: "Creates a zip file containing the program code.",
        correct: false,
      },
      { text: "Unzips compressed files.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'zip' function combines two or more lists into pairs, for example:<br><br>zip(list1, list2)",
    link: "https://www.w3schools.com/python/ref_func_zip.asp",
  },
  {
    question:
      "Which of the following is a correct way to concatenate two strings in Python?",
    answers: [
      { text: 'str1="Hello"', correct: false },
      { text: 'str2="World"', correct: false },
      { text: "result = str1 + str2", correct: true },
      { text: "result = str1 - str2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'str1' and 'str2' variables are used to concatenate the strings, for example:<br><br>str1 = 'Hello'<br>str2 = 'World'<br>result = str1 + str2.",
    link: "https://www.w3schools.com/python/gloss_python_string_concatenation.asp",
  },
  {
    question: "What is the purpose of the 'lambda' keyword in Python?",
    answers: [
      { text: "Declares a variable with a fixed value.", correct: false },
      { text: "Defines an anonymous function.", correct: true },
      { text: "Creates a list comprehension.", correct: false },
      {
        text: "Specifies a constant in a mathematical expression.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'lambda' keyword is used to create an anonymous function, for example: lambda x: x + 1. <br>It can be used as a shorthand for defining a function with only one line of code.",
    link: "https://www.w3schools.com/python/python_lambda.asp",
  },
  {
    question:
      "What does the term 'abstraction' mean in the context of object-oriented programming?",
    answers: [
      { text: "Exposing all internal details of an object.", correct: false },
      {
        text: "Hiding implementation details and exposing only essential features.",
        correct: true,
      },
      { text: "Creating objects without defining a class.", correct: false },
      { text: "Using abstract classes exclusively.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'abstraction' term means hiding implementation details and exposing only relevant features, for example: abstraction is used to create objects without defining a class.",
    link: "https://softwareengineering.stackexchange.com/questions/230401/confused-about-the-definition-of-abstraction-in-oop",
  },
  {
    question: "What is the role of the'__str__' method in Python classes?",
    answers: [
      { text: "To create a new instance of the class.", correct: false },
      { text: "To define a subclass.", correct: false },
      { text: "To access private attributes.", correct: false },
      {
        text: "To convert an object to a string representation.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>The '__str__' method is used to convert an object to a string representation, for example: str(object). It is used to print the object's value when it is converted to a string.",
    link: "https://www.educative.io/answers/what-is-the-str-method-in-python",
  },
  {
    question:
      "How does the 'protected' access modifier in Python contribute to encapsulation?",
    answers: [
      {
        text: "It allows unrestricted access to attributes from outside the class.",
        correct: false,
      },
      {
        text: "It restricts access to attributes only within the same module.",
        correct: false,
      },
      {
        text: "It restricts access to attributes within the class and its subclasses.",
        correct: true,
      },
      {
        text: "It prohibits access to attributes within the class.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'protected' access modifier in Python allows access to attributes within the class and its subclasses, for example: protected attribute.",
    link: "https://www.geeksforgeeks.org/access-modifiers-in-python-public-private-and-protected/",
  },
  {
    question:
      "What is the primary purpose of the 'classmethod' decorator in Python?",
    answers: [
      { text: "To create a new instance of the class.", correct: false },
      { text: "To define a static method.", correct: false },
      { text: "To access class-specific data.", correct: true },
      { text: "To call a method from within another method.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The primary purpose of the classmethod decorator in Python is to define a method that is bound to the class rather than an instance of the class. This allows the method to access and modify class-level data or perform operations that are related to the class itself, rather than individual objects.",
    link: "https://www.geeksforgeeks.org/classmethod-in-python/",
  },
  {
    question:
      "Why is multiple inheritance considered a complex feature in object-oriented programming?",
    answers: [
      { text: "It leads to code redundancy.", correct: false },
      { text: "It can result in the 'diamond problem'.", correct: true },
      { text: "It restricts code organization.", correct: false },
      { text: "It simplifies method resolution order.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The diamond problem is an ambiguity that arises in multiple inheritance when a class inherits from two classes that both inherit from a common base class. This creates a diamond-shaped hierarchy, leading to ambiguity about which inherited version of methods or properties from the base class the final class should use.",
    link: "https://stackoverflow.com/questions/225929/what-is-the-exact-problem-with-multiple-inheritance",
  },
  {
    question:
      "What is the primary purpose of encapsulation in object-oriented programming?",
    answers: [
      { text: "To simplify code and reduce redundancy.", correct: false },
      { text: "To achieve code reusability.", correct: false },
      {
        text: "To hide implementation details and protect data.",
        correct: true,
      },
      { text: "To facilitate communication between objects.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The primary purpose of encapsulation in object-oriented programming is to restrict direct access to an object's internal data and methods, thereby protecting the object's state and ensuring controlled interaction through defined interfaces. This promotes data integrity and abstraction by allowing internal implementation details to be hidden from the outside world.",
    link: "https://stackoverflow.com/questions/75715054/need-help-to-verify-own-interpretation-of-the-main-purpose-of-the-encapsulation",
  },
  {
    question:
      "In Python, what is the relationship between a subclass and a superclass?",
    answers: [
      { text: "A subclass is derived from a superclass.", correct: true },
      { text: "A superclass is a subset of a subclass.", correct: false },
      { text: "A subclass is equivalent to a superclass.", correct: false },
      { text: "A superclass inherits from a subclass.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, a subclass inherits attributes and methods from a superclass, allowing the subclass to extend or override the functionality of the superclass. This relationship enables code reuse and hierarchical organization of related classes.",
    link: "https://python-course.eu/oop/inheritance.php",
  },
  {
    question:
      "What is the purpose of polymorphism in object-oriented programming?",
    answers: [
      { text: "To organize code into modular units.", correct: false },
      { text: "To achieve code reusability.", correct: false },
      { text: "To allow objects to take on multiple forms.", correct: true },
      { text: "To enforce data hiding and protection.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Polymorphism is the ability of an object to take on multiple forms. It allows objects to have different behaviors or actions based on their data or state.",
    link: "https://stackoverflow.com/questions/1031273/what-is-polymorphism-what-is-it-for-and-how-is-it-used",
  },
  {
    question: "How does a class in Python differ from an object?",
    answers: [
      {
        text: "A class is a blueprint, and an object is an instance of a class.",
        correct: true,
      },
      { text: "A class is an instance of an object.", correct: false },
      {
        text: "A class and an object are interchangeable terms.",
        correct: false,
      },
      {
        text: "A class represents data, while an object represents behavior.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>In Python, a class is a blueprint for creating objects, defining their attributes and behaviors, while an object is an instance of a class, representing a specific entity with its unique state and behavior. Classes serve as templates for creating multiple objects with similar properties and methods.",
    link: "https://www.w3schools.com/python/python_classes.asp",
  },
  {
    question:
      "What keyword is used in Python to create a constructor in a class?",
    answers: [
      { text: "initialize", correct: false },
      { text: "construct", correct: false },
      { text: "__init__", correct: true },
      { text: "create", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The '__init__' method is used to initialize class variables, for example:<br><br>def __init__(self, arg1, arg2): pass",
    link: "https://www.geeksforgeeks.org/__init__-in-python/",
  },
  {
    question: "What is the purpose of the 'super()' function in Python?",
    answers: [
      { text: "To call the superclass constructor.", correct: true },
      { text: "To create a new object.", correct: false },
      { text: "To access private attributes.", correct: false },
      { text: "To define a subclass.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'super()' function is used to call the superclass constructor, for example: <br><br>super().__init__(arg1, arg2)",
    link: "https://www.w3schools.com/python/ref_func_super.asp",
  },
  {
    question:
      "How does the concept of abstraction relate to object-oriented programming?",
    answers: [
      {
        text: "Abstraction allows objects to be created without a class.",
        correct: false,
      },
      {
        text: "Abstraction involves hiding implementation details and exposing only relevant information.",
        correct: true,
      },
      { text: "Abstraction is used for code reusability.", correct: false },
      {
        text: "Abstraction is only applicable to procedural programming.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>In object-oriented programming, abstraction involves hiding the complex implementation details of objects and exposing only essential features or functionalities to the outside world. This simplifies the usage of objects, enhances code readability, and allows programmers to focus on the high-level structure and behavior of their systems.",
  },
  {
    question:
      "What is the significance of the 'self' parameter in Python class methods?",
    answers: [
      { text: "It denotes the class itself.", correct: false },
      { text: "It represents the superclass.", correct: false },
      {
        text: "It is used to create a new instance of the class.",
        correct: false,
      },
      {
        text: "It refers to the current instance of the class.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'self' parameter in Python class methods refers to the instance of the class itself, allowing methods to access and modify the object's attributes and methods. It enables object-oriented programming principles such as encapsulation and allows for the distinction between instance and class variables.",
    link: "https://www.geeksforgeeks.org/self-in-python-class/",
  },
  {
    question:
      "Which of the following best describes the 'is-a' relationship in object-oriented programming?",
    answers: [
      {
        text: "Objects of different types can be treated as objects of a common type.",
        correct: true,
      },
      {
        text: "Objects of the same type have different behaviors.",
        correct: false,
      },
      {
        text: "Objects can be created without defining a class.",
        correct: false,
      },
      { text: "Objects cannot inherit from each other.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'is-a' relationship in object-oriented programming refers to inheritance, where a subclass is said to 'be' a superclass, implying a hierarchical relationship between classes. It indicates that the subclass shares common characteristics and behaviors with the superclass and can be treated as an instance of the superclass.",
    link: "https://www.geeksforgeeks.org/implementation-of-composition-has-a-relation-in-python/",
  },
  {
    question: "What does the term 'method overloading' refer to in Python?",
    answers: [
      { text: "Calling a method from within another method.", correct: false },
      { text: "Creating multiple instances of a class.", correct: false },
      {
        text: "Defining multiple methods with the same name but different implementations in a class.",
        correct: true,
      },
      { text: "Overriding a method in a subclass.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, method overloading refers to defining multiple methods with the same name in a class, but with different parameters or argument types. This allows the same method name to behave differently based on the number or type of arguments passed to it.",
    link: "https://www.geeksforgeeks.org/python-method-overloading/",
  },
  {
    question:
      "How does encapsulation contribute to the principle of data protection in objectoriented programming?",
    answers: [
      {
        text: "Encapsulation makes data accessible to all classes.",
        correct: false,
      },
      {
        text: "Encapsulation allows data to be modified directly by external code.,",
        correct: false,
      },
      {
        text: "Encapsulation restricts access to data within a class.",
        correct: true,
      },
      {
        text: "Encapsulation has no impact on data protection.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>Encapsulation in object-oriented programming contributes to data protection by restricting direct access to an object's internal data, allowing access only through defined interfaces (methods). This prevents unauthorized modification or access to the object's state, enhancing data security and integrity.",
  },
  {
    question:
      "Inheritance in object-oriented programming is primarily used for:",
    answers: [
      { text: "Code organization and modularity.", correct: false },
      { text: "Achieving code reusability.", correct: true },
      { text: "Facilitating communication between objects.", correct: false },
      { text: "Enforcing encapsulation principles.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Inheritance in object-oriented programming is primarily used for code reuse and establishing hierarchical relationships between classes. It allows subclasses to inherit attributes and methods from a superclass, promoting modularity, extensibility, and abstraction in software design.",
    link: "https://www.w3schools.com/python/python_inheritance.asp",
  },
  {
    question: "What is the purpose of the 'del' statement in Python?",
    answers: [
      { text: "To delete a class definition.", correct: false },
      { text: "To remove an element from a list.", correct: false },
      { text: "To delete a variable or an object.", correct: true },
      { text: "To delete a method from a class.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The del statement in Python is used to delete variables, items from collections, or attributes from objects. When you use del on a variable, it removes the reference to that variable. For collections like lists or dictionaries, del can be used to remove specific items. <br><br>Additionally, you can use del to remove attributes from objects. The actual memory is freed only when there are no remaining references to the object.",
    link: "https://www.w3schools.com/python/ref_keyword_del.asp",
  },
  {
    question:
      "How does polymorphism contribute to code flexibility in object-oriented programming?",
    answers: [
      { text: "By enforcing strict data types.", correct: false },
      { text: "By allowing objects to take on multiple forms.", correct: true },
      {
        text: "By restricting method calls to the same class.",
        correct: false,
      },
      { text: "By preventing the use of inheritance.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Polymorphism in object-oriented programming contributes to code flexibility by allowing objects of different classes to be treated uniformly through a common interface. <br><br>This enables the same code to operate on different types of objects, promoting code reuse, modularity, and adaptability to changing requirements.",
  },
  {
    question:
      "Which keyword is used in Python to create a static method in a class?",
    answers: [
      { text: "staticmethod", correct: false },
      { text: "static", correct: false },
      { text: "@staticmethod", correct: true },
      { text: "methodstatic", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Static methods are methods that are not associated with a particular instance of a class. They are defined using the 'staticmethod' keyword in Python.",
    link: "https://www.geeksforgeeks.org/python-staticmethod-function/",
  },
  {
    question: "What is the purpose of the 'ord()' function in Python?",
    answers: [
      { text: "Converts a character to its Unicode code point", correct: true },
      { text: "Calculates the absolute value of a number", correct: false },
      {
        text: "Rounds a floating-point number to the nearest integer",
        correct: false,
      },
      { text: "Returns the maximum value in an iterable", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'ord()' function in Python converts a character to its Unicode code point. It returns the integer value of the character, for example: <br><br> ord('a') = 97",
    link: "https://www.w3schools.com/python/ref_func_ord.asp",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image5.png",
    answers: [
      { text: "nohtyp", correct: true },
      { text: "p", correct: false },
      { text: "python", correct: false },
      { text: "ythonp", correct: false },
    ],
    explanation:
      `Explanation:<br><br>In this code, the variable text is initialized with the string "python". The expression text[::-1] is used to reverse the string. This is done through slicing, where the [::-1] syntax means that the string will be traversed from the end to the beginning, effectively reversing it.<br><br>The -1 indicates the step, meaning it moves backwards through the string. The reversed version of "python" is "nohtyp", which is then assigned to the variable result. Finally, the print(result) statement outputs the reversed string, "nohtyp".`,
    link: "https://www.w3schools.com/python/python_strings_slicing.asp",
  },
  {
    question:
      "Which method is used to remove the last element from a list in Python?",
    answers: [
      { text: "remove()", correct: false },
      { text: "delete()", correct: false },
      { text: "truncate()", correct: false },
      { text: "pop()", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The 'pop()' method is used to remove the last element from a list in Python, for example: <br><br> list.pop()",
    link: "https://www.w3schools.com/python/ref_list_pop.asp",
  },
  {
    question:
      "What data structure is best suited for implementing a LIFO (Last In, First Out) structure?",
    answers: [
      { text: "List", correct: false },
      { text: "Set", correct: false },
      { text: "Queue", correct: false },
      { text: "Stack", correct: true },
    ],
    explanation:
      "Explanation:<br><br>A stack is designed to follow the LIFO principle, making it the most suitable data structure for such a scenario. It allows elements to be added and removed only from the top.",
    link: "https://realpython.com/queue-in-python/#stack-last-in-first-out-lifo",
  },
  {
    question:
      "Which built-in function in Python is used to find the length of a list?",
    answers: [
      { text: "size()", correct: false },
      { text: "count()", correct: false },
      { text: "length()", correct: false },
      { text: "len()", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The 'len()' function in Python is used to find the length of a list, for example: <br><br> len(list)",
    link: "https://www.w3schools.com/python/ref_func_len.asp",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image6.png",
    answers: [
      { text: "[1, 4, 9, 16, 25]", correct: false },
      { text: "[4, 16]", correct: true },
      { text: "[1, 9, 25]", correct: false },
      { text: "[1, 4, 16]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The list comprehension squares only the even numbers from the original list, resulting in [4, 16].",
    link: "https://www.w3schools.com/python/python_lists_comprehension.asp",
  },
  {
    question:
      "In Python, which module is used for regular expression (RegEx) operations?",
    answers: [
      { text: "regex", correct: false },
      { text: "re", correct: true },
      { text: "regexpy", correct: false },
      { text: "reg", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 're' module in Python provides support for regular expressions (RegEx), allowing manipulation and searching of strings based on specific patterns.",
    link: "https://www.w3schools.com/python/python_regex.asp",
  },
  {
    question: "What is the purpose of the 'zip()' function in Python?",
    answers: [
      { text: "To compress files and folders", correct: false },
      { text: "To create a ZIP archive of multiple files", correct: false },
      {
        text: "To combine multiple iterables into tuples of corresponding elements",
        correct: true,
      },
      { text: "To extract files from a ZIP archive", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'zip()' function in Python is used to combine multiple iterables into tuples of corresponding elements, for example: <br><br> zip(list1, list2, list3)",
    link: "https://www.w3schools.com/python/ref_func_zip.asp",
  },
  {
    question: "Which of the following is a mutable data type in Python?",
    answers: [
      { text: "Tuple", correct: false },
      { text: "List", correct: true },
      { text: "String", correct: false },
      { text: "Set", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A list is a mutable data type in Python, which means it can be modified after it has been created.",
    link: "https://www.w3schools.com/python/python_lists.asp",
  },
  {
    question: "What is the purpose of the 'enumerate()' function in Python?",
    answers: [
      {
        text: "To iterate over two or more lists simultaneously",
        correct: false,
      },
      { text: "To create an enumerated list", correct: false },
      {
        text: "To get the index and value of items in an iterable",
        correct: true,
      },
      {
        text: "To count occurrences of a specific element in a list",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'enumerate()' function in Python is used to create an enumerated list, for example: <br><br> enumerate(list)",
    link: "https://www.w3schools.com/python/ref_func_enumerate.asp",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image7.png",
    answers: [
      { text: "2", correct: false },
      { text: "3.0", correct: true },
      { text: "2.5", correct: false },
      { text: "15", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code calculates the average of the numbers by adding them up and dividing by the number of elements in the list. The result is 3.0.",
    link: "https://www.w3schools.com/python/python_lists.asp",
  },
  {
    question:
      "Which method is used to add an element to the end of a list in Python?",
    answers: [
      { text: "append()", correct: true },
      { text: "add()", correct: false },
      { text: "insert()", correct: false },
      { text: "extend()", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'append()' method is used to add an element to the end of a list in Python, for example: <br><br> list.append(element)",
    link: "https://www.w3schools.com/python/ref_list_append.asp",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image8.png",
    answers: [
      { text: "[2, 4]", correct: true },
      { text: "[1, 3, 5]", correct: false },
      { text: "[1, 2, 3, 4, 5]", correct: false },
      { text: "[4]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The filter() function is applied with a lambda function checking for even numbers, resulting in a list containing only the even numbers from the original list.",
    link: "https://www.w3schools.com/python/ref_func_filter.asp",
  },
  {
    question:
      "Which of the following is used to open a file in binary mode in Python?",
    answers: [
      { text: "'r'", correct: false },
      { text: "'b'", correct: true },
      { text: "'w'", correct: false },
      { text: "'a'", correct: false },
    ],
    explanation: `Explanation:<br><br>In Python, the "b" character is used to specify binary mode when opening a file, typically combined with other modes like "rb" for reading or "wb" for writing in binary. For example: <br><br> open(file, 'rb') for reading binary.`,
    link: "https://www.w3schools.com/python/ref_func_open.asp",
  },
  {
    question:
      "What is the purpose of the 'setdefault()' method in a Python dictionary?",
    answers: [
      { text: "To set the default value for a key", correct: true },
      { text: "To check if a key exists in the dictionary", correct: false },
      { text: "To add a key-value pair to the dictionary", correct: false },
      { text: "To remove a key from the dictionary", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'setdefault()' method in Python is used to set the default value for a key, for example: <br><br> dictionary.setdefault(key, value)",
    link: "https://www.w3schools.com/python/ref_dictionary_setdefault.asp",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image9.png",
    answers: [
      { text: "[1, 2, 3, 4, 5]", correct: false },
      { text: "[1, 4, 9, 16, 25]", correct: true },
      { text: "[2, 4, 6, 8, 10]", correct: false },
      { text: "[0, 1, 4, 9, 16]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'map()' function applies the lambda function to each element in the list, resulting in the square of each number.",
    link: "https://www.w3schools.com/python/ref_func_map.asp",
  },
  {
    question: "In Python, what does the 'join()' method do for strings?",
    answers: [
      { text: "Splits a string into a list of substrings", correct: false },
      {
        text: "Concatenates elements of a list into a single string",
        correct: true,
      },
      { text: "Reverses the characters in a string", correct: false },
      { text: "Removes leading and trailing whitespaces", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'join()' method in Python is used to concatenate elements of a list into a single string, for example: <br><br> string.join(list)",
    link: "https://www.w3schools.com/python/ref_string_join.asp",
  },
  {
    question:
      "What is the primary focus of the Tornado web framework in Python?",
    answers: [
      { text: "Data analysis", correct: false },
      { text: "Asynchronous web applications", correct: true },
      { text: "Machine learning", correct: false },
      { text: "Web scraping", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The Tornado web framework is used to develop web applications in Python, for example: <br><br> import tornado.web",
    link: "https://www.tornadoweb.org/",
  },
  {
    question: "In the context of Python, what does CRUD operations refer to?",
    answers: [
      { text: "Cryptographic functions", correct: false },
      { text: "File manipulation operations", correct: false },
      { text: "Web scraping techniques", correct: false },
      {
        text: "Database operations (Create, Read, Update, Delete)",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>In the context of Python, CRUD operations refer to the basic operations performed on data in a persistent storage system, such as a database or file.",
    link: "https://en.wikipedia.org/wiki/Create,_read,_update_and_delete",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image10.png",
    answers: [
      { text: "Result: 5 Finally block", correct: true },
      { text: "Result: 5", correct: false },
      { text: "Division by zero Finally block", correct: false },
      { text: "Division by zero", correct: false },
    ],
    explanation: `Explanation:<br><br>When the function divide(10, 2) is called, it first enters the try block, where it attempts to divide 10 by 2. Since dividing by 2 is a valid operation and does not result in a ZeroDivisionError, the division succeeds, and the result, 5.0, is stored in the variable result.<br><br>Next, because no exception occurred, the except block is skipped entirely. The code then proceeds to the else block, which is executed because the try block completed successfully. In the else block, the function prints the message "Result: " followed by the value of result, which is 5.0.<br><br>Finally, the finally block is executed. This block runs regardless of whether an exception occurred or not. It prints the message "Finally block".`,
    link: "https://www.programiz.com/python-programming/exception-handling",
  },
  {
    question:
      "What is the purpose of constructors in object-oriented programming?",
    answers: [
      { text: "To provide access modifiers to class members.", correct: false },
      { text: "To provide access modifiers to class members.", correct: false },
      { text: "To define static methods.", correct: false },
      { text: "To create objects of a class.", correct: true },
    ],
    explanation:
      "Explanation:<br><br> Constructors are used to initialize objects of a class. They are called when an object is created.",
    link: "https://www.geeksforgeeks.org/constructors-in-python/",
  },
  {
    question: "Inheritance is a concept in OOP that involves:",
    answers: [
      { text: "Redefining existing methods.", correct: false },
      { text: "Hiding class implementation details.", correct: false },
      { text: "Creating a new class from an existing class.", correct: true },
      { text: "Restricting access to class members.", correct: false },
    ],
    explanation:
      "Explanation:<br><br> Inheritance allows a new class to inherit properties and behaviors from an existing class, creating a hierarchy of classes.",
    link: "https://www.geeksforgeeks.org/inheritance-in-python/",
  },
  {
    question:
      "Which of the following statements about polymorphism is correct?",
    answers: [
      {
        text: "Polymorphism allows objects of different classes to be treated as objects of a common base class.",
        correct: true,
      },
      {
        text: "Polymorphism allows a class to hide its implementation details.",
        correct: false,
      },
      {
        text: "Polymorphism is achieved only through class inheritance.",
        correct: false,
      },
      {
        text: "Polymorphism is used to define static methods.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br> Polymorphism allows objects of different classes to be treated as objects of a common base class, enabling code to be written more generically.",
    link: "https://www.geeksforgeeks.org/polymorphism-in-python/",
  },
  {
    question:
      "What does the 'try-except' block in Python's exception handling do?",
    answers: [
      {
        text: "It ensures a block of code is executed repeatedly.",
        correct: false,
      },
      { text: "It allows you to define custom exceptions.", correct: false },
      {
        text: "It handles exceptions by catching and handling errors.",
        correct: true,
      },
      {
        text: "It defines a context manager for file operations.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br> The 'try-except' block is used to catch and handle exceptions that may occur withing a specific block of code.",
    link: "https://www.programiz.com/python-programming/exception-handling",
  },
  {
    question:
      "Which of the following is NOT a benefit of using context managers with the 'with' statement in Python?",
    answers: [
      { text: "Automatic resource management.", correct: false },
      { text: "Improved exception handling.", correct: false },
      { text: "Cleaner and more readable code.", correct: false },
      { text: "Simplified regular expression matching.", correct: true },
    ],
    explanation:
      "Explanation:<br><br>Context managers with the 'with' statement are used for automatic resource management and improved exception handling, but they are not directly related to regular expression matching.",
    link: "https://realpython.com/python-with-statement/#using-the-python-with-statement",
  },
  {
    question: "What is the purpose of regular expressions in Python?",
    answers: [
      { text: "To perform arithmetic calculations.", correct: false },
      { text: "To manipulate image files.", correct: false },
      {
        text: "To match and manipulate strings based on patterns.",
        correct: true,
      },
      { text: "To manage networking operations.", correct: false },
    ],
    explanation:
      "Explanation:<br><br> Regular expressions are used to match and manipulate strings based on patterns, which are used in various programming languages.",
    link: "https://docs.python.org/3/library/re.html",
  },
  {
    question:
      "Which file mode is used to open a file for both reading and writing in binary format?",
    answers: [
      { text: "'r'", correct: false },
      { text: "'w'", correct: false },
      { text: "'a'", correct: false },
      { text: "'rb+'", correct: true },
    ],
    explanation:
      "Explanation:<br><br>To open a file for both reading and writing in binary format, you should use the file mode 'rb+' in Python. <br><br>This mode combines several options: 'r' indicates that the file is opened for reading, 'b' specifies that the file is handled in binary format, and '+' allows both reading from and writing to the file. <br><br>It's important to note that 'rb+' does not create a new file if it does not already exist; it will raise an error if the file is not found.",
    link: "https://stackoverflow.com/questions/15746954/what-is-the-difference-between-rb-and-rb-modes-in-file-objects",
  },
  {
    question: "What does the 'super' keyword do in Python?",
    answers: [
      { text: "It accesses private class members.", correct: false },
      {
        text: "It refers to the parent class of a derived class.",
        correct: true,
      },
      { text: "It defines a static method in a class.", correct: false },
      { text: "It is used to manage exception handling.", correct: false },
    ],
    explanation:
      "Explanation:<br><br> The 'super' keyword is used to refer to the parent class of a derived class, allowing access to its methods and attributes.",
    link: "https://www.geeksforgeeks.org/python-super/",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image11.png",
    answers: [
      { text: "Class A", correct: false },
      { text: "Class B", correct: true },
      { text: "This code will produce an error.", correct: false },
      { text: "No output will be displayed.", correct: false },
    ],
    explanation: `Explanation:<br><br>In the provided code, two classes, A and B, are defined. Class B is a subclass of class A, meaning that it inherits from A. Both classes have a method named show.<br><br>The show method in class A is designed to print "Class A", while the show method in class B is designed to print "Class B". When an instance of class B is created and assigned to the variable obj, the show method is called on obj using obj.show().<br><br>Because obj is an instance of class B, the show method in class B is invoked instead of the one in class A. This is an example of method overriding, where the method in the subclass (B) overrides the method with the same name in the superclass (A). <br><br>As a result, the output of the code is "Class B".`,
    link: "https://www.programiz.com/python-programming/inheritance",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image12.png",
    answers: [
      { text: "Zero Division Error", correct: false },
      { text: "Other Error", correct: false },
      { text: "No Error", correct: false },
      { text: "Zero Division Error Finally block", correct: true },
    ],
    explanation: `Explanation:<br><br>When the code is executed, it first enters the try block, where it attempts to divide 10 by 0 with the statement num = 10 / 0. Since dividing by zero is not allowed in Python, this operation raises a ZeroDivisionError.<br><br>Once the ZeroDivisionError occurs, the program immediately jumps to the corresponding except ZeroDivisionError block. This block handles the error by printing the message "Zero Division Error". Since the error has been handled by this specific except block, the subsequent generic except block is not executed.<br><br>The else block is designed to run only if no exceptions occur in the try block. However, because an exception did occur, the else block is skipped and does not execute.<br><br>Finally, the finally block is executed regardless of whether an exception was raised or not. This block prints the message "Finally block".`,
    link: "https://www.programiz.com/python-programming/exception-handling",
  },
  {
    question: "What is the purpose of the 'raise' keyword in Python?",
    answers: [
      { text: "It is used to define custom exceptions.", correct: true },
      { text: "It is used to declare static methods.", correct: false },
      {
        text: "It is used to create new instances of a class.",
        correct: false,
      },
      { text: "It is used to handle file operations.", correct: false },
    ],
    explanation:
      "Explanation:<br><br> The 'raise' keyword is used to define custom exceptions.",
    link: "https://www.w3schools.com/python/gloss_python_raise.asp",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image13.png",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "This code will produce an error.", correct: false },
      { text: "None", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In the given code snippet, a Parent class is defined with an __init__ method that sets an attribute value to 0. A Child class inherits from Parent and has its own __init__ method.<br><br Inside this method, super().__init__() is called to invoke the Parent class's __init__, which initializes self.value to 0.>Following this, self.value is updated to 1 in the Child class's __init__ method.<br><br>When an instance of the Child class is created and stored in the variable obj, the __init__ method of Child is executed. This method first sets self.value to 0 through the parent class's __init__ method and then updates it to 1.<br><br>Therefore, when print(obj.value) is executed, it prints 1 because that is the final value assigned to the value attribute of the Child instance.",
    link: "https://www.programiz.com/python-programming/inheritance",
  },
  {
    question: "In Python, what is the purpose of the 'pass' statement?",
    answers: [
      { text: "It defines a new class.", correct: false },
      { text: "It is used for code commenting.", correct: false },
      { text: "It is used to create loops.", correct: false },
      { text: "It represents a placeholder for future code.", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The purpose of the 'pass* statement is to act as a placeholder in the code where a statement is syntactically required but no action is needed. It allows the code to be syntactically complete without performing any operation, often used in stubs for future code or in loops and conditional statements where logic is yet to be implemented.",
    link: "https://www.programiz.com/python-programming/pass-statement",
  },
  {
    question:
      "Which of the following is true about binary file handling in Python?",
    answers: [
      {
        text: "Binary file handling is not supported in Python.",
        correct: false,
      },
      { text: "Binary files can only be read in binary mode.", correct: false },
      {
        text: "Binary files can be read and written using binary mode.",
        correct: true,
      },
      {
        text: "Binary files can only be read using text mode.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>Binary files can be read and written in Python using the binary mode ('b') with the open() function. This mode allows you to handle file data as raw bytes, preserving the exact byte values without any encoding or decoding.",
    link: "https://www.geeksforgeeks.org/file-handling-python/",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image14.png",
    answers: [
      { text: "[ ]", correct: false },
      { text: "['user@example.com']", correct: true },
      { text: "['email']", correct: false },
      { text: "['Hello']", correct: false },
    ],
    explanation:
      `Explanation:<br><br>In this code, the re module is used to work with regular expressions. The variable text contains the string "Hello, my email is user@example.com". The regular expression pattern r'\b\w+@\w+\b' is intended to match email-like strings but is not precise enough to capture a full email address.<br><br>The pattern r'\b\w+@\w+\b' breaks down as follows:<br><br>- \b denotes a word boundary<br>\w+ matches one or more word characters (letters, digits, and underscores)<br>@ matches the literal @ symbol<br>\w+ matches one or more word characters after the @`,
    link: "https://docs.python.org/3/library/re.html",
  },
  {
    question:
      "Which of the following is NOT a characteristic of object-oriented programming?",
    answers: [
      { text: "Encapsulation", correct: false },
      { text: "Inheritance", correct: false },
      { text: "Functional programming", correct: true },
      { text: "Polymorphism", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Functional programming is a programming paradigm that is distinct from object-oriented programming.",
    link: "https://en.wikipedia.org/wiki/Functional_programming",
  },
  {
    question:
      "What is the purpose of the 'finally' block in exception handling?",
    answers: [
      { text: "It is used to raise custom exceptions.", correct: false },
      {
        text: "It contains code that always executes, whether an exception is raised or not.",
        correct: true,
      },
      { text: "It is used to define exception classes.", correct: false },
      { text: "It is used to suppress exceptions.", correct: false },
    ],
    explanation:
      "Explanation:<br><br> The 'finally' block in exception handling is used to execute code, whether an exception is raised or not.",
    link: "https://www.programiz.com/python-programming/exception-handling",
  },
  {
    question: "What is the purpose of the __init__ method in a Python class?",
    answers: [
      { text: "It initializes the class attributes.", correct: true },
      {
        text: "It defines the main entry point of the program.",
        correct: false,
      },
      { text: "It imports external modules.", correct: false },
      { text: "It defines the class's superclass.", correct: false },
    ],
    explanation:
      "Explanation:<br><br> The __init__ method is used to initialize the class attributes of a class when an object of the class is created.",
    link: "https://www.geeksforgeeks.org/__init__-in-python/",
  },
  {
    question: "Functions in Python allow you to:",
    answers: [
      { text: "Execute a block of code only once.", correct: false },
      { text: "Perform arithmetic operations.", correct: false },
      { text: "Group code into reusable blocks.", correct: true },
      { text: "Automatically import modules.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Functions in Python are used to group code into reusable block that can be called upon when needed.",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question: "What is the purpose of the 'return' statement in a function?",
    answers: [
      { text: "It terminates the function.", correct: false },
      { text: "It defines the function's parameters.", correct: false },
      { text: "It specifies the function's name.", correct: false },
      { text: "It provides a value back to the caller.", correct: true },
    ],
    explanation:
      "Explanation:<br><br> The 'return' statement in a function is used to return a value back to the caller of the function.",
    link: "https://www.geeksforgeeks.org/python-return-statement/",
  },
  {
    question:
      "Which of the following statements is true about modules in Python?",
    answers: [
      { text: "A)   Modules are not reusable pieces of code.", correct: false },
      {
        text: "B)   A module can only contain functions, not variables.",
        correct: false,
      },
      { text: "C)   Modules can be organized into packages.", correct: true },
      {
        text: "D)   Modules are only used for graphical user interfaces.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>Modules in Python are reusable pieces of code that can contain functions, variables, classes, and runnable code. They allow you to organize and reuse code efficiently.<br><br>Option A is incorrect because modules are indeed reusable pieces of code.<br><br>Option B is incorrect because modules can contain both functions and variables, as well as classes and executable code.<br><br>Option D is incorrect because modules are not limited to graphical user interfaces; they can be used for a wide range of purposes including data processing, file handling, networking, and more.<br><br>Option C is correct because modules can be organized into packages. A package is a collection of modules organized in directories, which helps in structuring code hierarchically and managing complex codebases.",
    link: "https://www.geeksforgeeks.org/modules-in-python/",
  },
  {
    question: "What does the 'with' statement do in Python?",
    answers: [
      { text: "It defines a new variable.", correct: false },
      { text: "It creates aloop.", correct: false },
      { text: "It defines a function.", correct: false },
      {
        text: "It manages resources and ensures proper cleanup.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>The key benefit of the with statement is that it ensures that resources are automatically cleaned up after their use, even if an error occurs. For example, when opening a file using with, the file will be closed automatically once the block of code inside the with statement is done, without needing to call file.close() manually.",
    link: "https://www.geeksforgeeks.org/with-statement-in-python/",
  },
  {
    question:
      "Which of the following is true regarding exception handling in Python?",
    answers: [
      { text: "Exceptions should never be caught.", correct: false },
      {
        text: "try-except blocks are used to handle exceptions.",
        correct: true,
      },
      {
        text: "Exceptions can only be raised by the operating system.",
        correct: false,
      },
      {
        text: "All exceptions can be handled using a single 'except' block.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>try-except blocks are used to handle exceptions in Python, allowing you to handle errors in your code.",
    link: "https://www.geeksforgeeks.org/exception-handling-in-python/",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image15.png",
    answers: [
      { text: "5.0", correct: true },
      { text: "Error: Division by zero", correct: false },
      { text: "0", correct: false },
      { text: "2.0", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code successfully divides 10 by 2, resulting in 5.0 .",
    link: "https://www.w3schools.com/python/python_try_except.asp",
  },
  {
    question:
      "Which OOP concept allows a class to inherit attributes and methods from another class?",
    answers: [
      { text: "Encapsulation", correct: false },
      { text: "Abstraction", correct: false },
      { text: "Inheritance", correct: true },
      { text: "Polymorphism", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Inheritance enables a new class (known as a subclass or derived class) to inherit the properties and behaviors (attributes and methods) of an existing class (known as a superclass or base class). <br><br>This promotes code reusability and establishes a hierarchical relationship between classes. <br><br>For example, if you have a base class Animal, a derived class Dog can inherit from Animal, gaining access to its attributes and methods while also adding or overriding its own.",
    link: "https://www.geeksforgeeks.org/inheritance-in-python/",
  },
  {
    question:
      "What is the purpose of encapsulation in object-oriented programming?",
    answers: [
      {
        text: "To hide sensitive data from unauthorized access",
        correct: true,
      },
      { text: "To create new instances of a class", correct: false },
      { text: "To establish a relationship between classes", correct: false },
      { text: "To define the structure of a class", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Encapsulation is used to hide the implementation details of a class from the outside world.",
    link: "https://stackoverflow.com/questions/75715054/need-help-to-verify-own-interpretation-of-the-main-purpose-of-the-encapsulation",
  },
  {
    question:
      "In Python, a class can have multiple methods with the same name but different parameters. This is known as:",
    answers: [
      { text: "Method overriding", correct: false },
      { text: "Method overloading", correct: true },
      { text: "Method encapsulation", correct: false },
      { text: "Method abstraction", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Method overloading is used to create multiple methods with the same name but different parameters in a class.",
    link: "https://www.geeksforgeeks.org/method-overloading-in-python/",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image16.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "Both A and B", correct: false },
      { text: "Error: Cannot instantiate B", correct: false },
    ],
    explanation:
      `Explanation:<br><br>In this code, class A defines a method called show() that prints the string "A". Class B inherits from class A but overrides the show() method with its own version that prints "B".<br><br>When an instance of class B is created and the show() method is called using obj.show(), Python looks for the method in class B first. Since class B has its own show() method, it is executed, and the string "B" is printed.<br><br>This is an example of method overriding, where the child class (B) provides its own implementation of a method that exists in the parent class (A). As a result, the overridden method in class B is called, and "B" is printed.`,
    link: "https://www.programiz.com/python-programming/inheritance",
  },
  {
    question: "Which statement is true about file handling in Python?",
    answers: [
      { text: "Files can only be read, not written.", correct: false },
      {
        text: "The 'open' function is only used to create new files.",
        correct: false,
      },
      {
        text: "Files must be explicitly closed after reading or writing.",
        correct: true,
      },
      {
        text: "Files are automatically closed when the program terminates.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'with' statement in Python is used to manage resources and ensure proper cleanup after a block of code is executed.",
    link: "https://www.geeksforgeeks.org/file-handling-python/",
  },
  {
    question: "What is the purpose of the 'super' function in Python?",
    answers: [
      { text: "It imports external modules.", correct: false },
      { text: "It returns the superclass of a class.", correct: false },
      { text: "It calls a method from the superclass.", correct: true },
      { text: "It generates random numbers.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The super function in Python is used to call methods from a parent or superclass from within a subclass. It is commonly used to ensure that the parent class's methods are properly executed as part of the subclass's method. This is particularly useful in the context of inheritance and method overriding.<br><br>For example, when you override a method in a subclass but still want to include the behavior of the parent class's method, you can use super() to call the parent class's method. This helps in extending or modifying the functionality of the parent class rather than completely replacing it.",
    link: "https://www.w3schools.com/python/ref_func_super.asp",
  },
  {
    question:
      "What does the term 'polymorphism' mean in object-oriented programming?",
    answers: [
      {
        text: "The ability of a class to inherit from multiple superclasses.",
        correct: false,
      },
      {
        text: "The practice of hiding sensitive data from unauthorized access.",
        correct: false,
      },
      {
        text: "The ability of a class to override methods from its superclass.",
        correct: false,
      },
      {
        text: "The ability of different classes to be treated as instances of the same class.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>Polymorphism allows different classes to be treated as instances of the same class, enabling more flexible and generic code.",
    link: "https://www.geeksforgeeks.org/polymorphism-in-python/",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image17.png",
    answers: [
      { text: "3.14" + "\n" + "4", correct: true },
      { text: "4" + "\n" + "3.14", correct: false },
      { text: "3.14" + "\n" + "3.14", correct: false },
      { text: "4" + "\n" + "4", correct: false },
    ],
    explanation:
      "Explanation:<br><br>he code defines a base class named Shape with an area() method that is intended to be overridden by subclasses. The Circle and Square classes inherit from Shape and provide their own implementations of the area() method. In this implementation, the Circle class's area() method returns a hardcoded value of 3.14. The Square class's area() method returns a hardcoded value of 4.<br><br>When the code is executed, it creates instances of Circle and Square, then prints the result of calling their area() methods. Consequently, the output will be 3.14 for the Circle and 4 for the Square.",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question: "In Python, which module is used to work with dates and times?",
    answers: [
      { text: "datetime", correct: true },
      { text: "time", correct: false },
      { text: "dateutils", correct: false },
      { text: "datetimeutils", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'datetime' module in Python is used to work with dates and times.",
    link: "https://www.w3schools.com/python/python_datetime.asp",
  },
  {
    question:
      "What is the purpose of the 'finally' block in a try-except statement?",
    answers: [
      { text: "It is executed when an exception is raised.", correct: false },
      {
        text: "It is executed after the 'try' block, regardless of an exception.",
        correct: true,
      },
      { text: "It defines the list of exceptions to catch.", correct: false },
      { text: "It is used to skip the execution of code.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'finally' block is executed after the 'try' block, regardless of an exception being raised.",
    link: "https://www.w3schools.com/python/python_try_except.asp",
  },
  {
    question: "What is the purpose of the 'raise' statement in Python?",
    answers: [
      { text: "To terminate the program.", correct: false },
      { text: "To raise a new exception.", correct: true },
      { text: "To ignore an existing exception.", correct: false },
      { text: "To call a method from a superclass.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>n Python, the raise statement is used to manually trigger an exception. This is helpful when you want to signal that an error or unusual condition has occurred in your program, and it allows you to define custom error messages or handle specific error cases.",
    link: "https://www.w3schools.com/python/python_raise.asp",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image18.png",
    answers: [
      { text: "3", correct: false },
      { text: "6", correct: false },
      { text: "9", correct: true },
      { text: "27", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The default value of 'n' is 2, so 'power(3)' calculates 3^2 = 9.",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question:
      "What is the purpose of data cleaning in the context of data analysis?",
    answers: [
      {
        text: "To make the data look more visually appealing.",
        correct: false,
      },
      { text: "To remove all missing values from the dataset", correct: false },
      {
        text: "To transform the data into a different data type.",
        correct: false,
      },
      {
        text: "To ensure the data is accurate, consistent, and ready for analysis.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>Data cleaning is the process of removing or correcting errors in data.",
    link: "https://en.wikipedia.org/wiki/Data_cleaning",
  },
  {
    question:
      "When integrating multiple modules and libraries in a Python project, what is the purpose of virtual environments?",
    answers: [
      {
        text: "To simulate real-world scenarios for testing purposes.",
        correct: false,
      },
      {
        text: "To create isolated environments for different project versions.",
        correct: true,
      },
      {
        text: "To provide graphical user interfaces for the project.",
        correct: false,
      },
      { text: "To automatically generate code documentation.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'virtualenv' module in Python is used to create isolated environments for different project versions.",
    link: "https://docs.python.org/3/library/virtualenv.html",
  },
  {
    question:
      "Which data structure is ideal for storing a collection of unique elements?",
    answers: [
      { text: "List", correct: false },
      { text: "Tuple", correct: false },
      { text: "Set", correct: true },
      { text: "Dictionary", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'set' data structure is ideal for storing a collection of unique elements.",
    link: "https://www.w3schools.com/python/python_sets.asp",
  },
  {
    question: "What is a major difference between a stack and a queue?",
    answers: [
      { text: "Stacks follow LIFO, while queues follow FIFO.", correct: true },
      { text: "Stacks follow FIFO, while queues follow LIFO.", correct: false },
      { text: "Stacks and queues both follow LIFO.", correct: false },
      { text: "Stacks and queues both follow FIFO.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'stack' data structure follows LIFO (Last In First Out) and the 'queue' data structure follows FIFO (First In First Out).",
    link: "https://realpython.com/queue-in-python/",
  },
  {
    question: "Which of the following is an immutable data type in Python?",
    answers: [
      { text: "List", correct: false },
      { text: "Set", correct: false },
      { text: "Dictionary", correct: false },
      { text: "Tuple", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The 'tuple' data type is an immutable data type in Python.",
    link: "https://realpython.com/python-tuples/",
  },
  {
    question: "What is the purpose of a generator expression in Python?",
    answers: [
      { text: "To create a new generator object.", correct: false },
      { text: "To build complex data structures.", correct: false },
      { text: "To generate a sequence of values lazily.", correct: true },
      { text: "To create a list comprehensions.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'generator expression' is used to create a new generator object.",
    link: "https://realpython.com/python-generator-expressions/",
  },
  {
    question:
      "What is the primary advantage of using a frozenset over a regular set in Python?",
    answers: [
      {
        text: "Frozensets support more efficient element insertion.",
        correct: false,
      },
      { text: "Frozensets have better hashing capabilities.", correct: false },
      {
        text: "Frozensets are immutable and can be used as dictionary keys.",
        correct: true,
      },
      { text: "Frozensets have a smaller memory footprint.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'frozenset' data type is an immutable data type in Python.",
    link: "https://realpython.com/python-frozensets/",
  },
  {
    question:
      "Which of the following best describes the role of a command-line interface (CLI) in a software project?",
    answers: [
      {
        text: "It enables users to interact with the project through graphical elements.",
        correct: false,
      },
      {
        text: "It provides a visual representation of data structures.",
        correct: false,
      },
      {
        text: "It allows users to input commands and receive text-based responses.",
        correct: true,
      },
      {
        text: "It automatically tests the project's codebase for errors.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The 'command-line interface' is used to enable users to interact with the project through graphical elements.",
    link: "https://realpython.com/python-command-line-interface/",
  },
  {
    question: "What is the primary purpose of a comprehension in Python?",
    answers: [
      { text: "To generate a sequence of numbers.", correct: false },
      {
        text: "To simplify the process of creating complex data structures.",
        correct: true,
      },
      {
        text: "To perform mathematical calculations efficiently.",
        correct: false,
      },
      {
        text: "To create user-friendly command-line interfaces.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The primary purpose of a comprehension in Python is to provide a concise and efficient way to create new sequences, such as lists, sets, or dictionaries, by iterating over an existing iterable and applying a condition or transformation to its elements.",
    link: "https://realpython.com/python-list-comprehension/",
  },
  {
    question:
      "Which data structure is used for mapping keys to values in Python?",
    answers: [
      { text: "List", correct: false },
      { text: "Tuple", correct: false },
      { text: "Set", correct: false },
      { text: "Dictionary", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The 'dictionary' data type is used for mapping keys to values in Python.",
    link: "https://realpython.com/python-dictionaries/",
  },
  {
    question:
      "What is the primary purpose of an API (Application Programming Interface)?",
    answers: [
      {
        text: "To provide a graphical user interface for the application.",
        correct: false,
      },
      {
        text: "To define the interaction between different software components.",
        correct: true,
      },
      { text: "To optimize the code execution process.", correct: false },
      {
        text: "To design user-friendly documentation for the project.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The primary purpose of an API (Application Programming Interface) is to enable different software systems to communicate and interact with each other. It allows one program to access and use the functionality or data of another program, typically through well-defined protocols. <br><br>APIs streamline integration and data exchange between applications or services.",
    link: "https://realpython.com/python-api/",
  },
  {
    question:
      "Which of the following is a characteristic of a deque (double-ended queue)?",
    answers: [
      { text: "It only supports insertion from the front.", correct: false },
      {
        text: "It follows the Last-In-First-Out (LIFO) order.",
        correct: false,
      },
      {
        text: "It supports constant-time insertion and deletion from both ends.",
        correct: true,
      },
      { text: "It cannot be used to implement a stack.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'deque' data type is used for a double-ended queue.",
    link: "https://realpython.com/python-deque/",
  },
  {
    question:
      "What is the primary advantage of using generator expressions over list comprehensions?",
    answers: [
      { text: "Generator expressions consume less memory.", correct: true },
      {
        text: "Generator expressions allow more complex filtering.",
        correct: false,
      },
      {
        text: "Generator expressions can be used with any data type.",
        correct: false,
      },
      { text: "Generator expressions execute faster.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Generator expressions are more memory-efficient than list comprehensions because they generate values on-the-fly and do not store the entire result in memory at once. <br><br>This is especially beneficial when working with large datasets or when the result of the computation is needed only one item at a time. <br><br>In contrast, list comprehensions create and store the entire list in memory, which can be less efficient if the list is large.",
    link: "https://peps.python.org/pep-0289/",
  },
  {
    question: "What is the role of a RESTful API in web services?",
    answers: [
      { text: "To create visually appealing user interfaces.", correct: false },
      { text: "To manage version control of the project.", correct: false },
      {
        text: "To define a set of principles for secure coding.",
        correct: false,
      },
      {
        text: "To provide a standardized way for clients to interact with the server.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>A RESTful API (Representational State Transfer API) in web services provides a standardized way for applications to communicate over HTTP by exposing endpoints that allow CRUD (Create, Read, Update, Delete) operations on resources. It simplifies the interaction between clients and servers by adhering to REST principles, making web services scalable and easy to integrate.",
    link: "https://realpython.com/python-rest-api/",
  },
  {
    question:
      "Consider the following code snippet. Which of the variables will contain False?",
    image: "images/image19.png",
    answers: [
      { text: "w", correct: false },
      { text: "x", correct: true },
      { text: "y", correct: false },
      { text: "z", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'x' variable will contain False, because the list is basically empty.",
    link: "https://www.datacamp.com/tutorial/python-empty-list",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image20.png",
    answers: [
      { text: "2", correct: false },
      { text: "4", correct: true },
      { text: "5", correct: false },
      { text: "3", correct: false },
    ],
    explanation:
      "Explanation:<br><br>insert() inserts an item at a given position. The first argument is the index of the element before which to insert. insert(0, 1) inserts 1 before index 0 (at the front of the list). The del keyword deletes the given object: in this case x[1].The sum() function adds the items of a list (or a different iterable) and returns the sum.",
    link: "https://www.w3schools.com/python/ref_list_insert.asp",
  },
  {
    question: "What will be the output of the following code snippet?",
    image: "images/image21.png",
    answers: [
      { text: "3", correct: false },
      { text: "None", correct: false },
      { text: "1", correct: false },
      { text: "4", correct: true },
      { text: "2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The operator precedence of the addition operator is higher than the operator precedence of the multiply and assign operator. That means the addition takes place before the multiplication.",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image22.png",
    answers: [
      { text: "['Peter', 'Wellert']", correct: false },
      { text: "['Peter', 404, 3.03, 'Wellert', 33.3]", correct: false },
      { text: "None of the above", correct: false },
      { text: "[404, 3.03]", correct: true },
    ],
    explanation:
      "Explanation:<br><br>You have a list of five elements of various data types. [1:3] slices inclusive the first index and exclusive the third index. Meaning it slices the first and second index.",
    link: "https://www.w3schools.com/python/ref_list_slice.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image23.png",
    answers: [
      { text: "Hello" + "\n" + "Hello" + "\n" + "Hello", correct: false },
      { text: "Hello" + "\n" + "Hello", correct: false },
      { text: "An infinite loop", correct: true },
      {
        text: "Hello" + "\n" + "Hello" + "\n" + "Hello" + "\n" + "Hello",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The incrementation of num needs to be inside of the while loop. Otherwise the condition num > 0 will never be False.",
    link: "https://www.w3schools.com/python/python_while_loops.asp",
  },
  {
    question:
      "What is the expected output of the following code if the user enters 2 and 4?",
    image: "images/image24.png",
    answers: [
      { text: "4", correct: false },
      { text: "2", correct: false },
      { text: "6", correct: false },
      { text: "24", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The input() function returns a string. Therefore a string concatenation takes place and the result is the string 24.",
    link: "https://www.w3schools.com/python/ref_func_input.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image25.png",
    answers: [
      { text: "3", correct: true },
      { text: "1", correct: false },
      { text: "4", correct: false },
      { text: "2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In the first if condition, not x or y evaluates to False, so this condition is not met.<br><br> The first elif condition, not x or not y and z, also evaluates to False, so it is not met either. <br><br>However, the second elif condition, not x or y or not y and x, evaluates to True because the expression not y and x is True, making the entire condition true. <br><br>As a result, the program prints 3.",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question:
      "An operator able to check whether two values are not equal is coded as:",
    answers: [
      { text: "< >", correct: false },
      { text: "not ==", correct: false },
      { text: "=/=", correct: false },
      { text: "! =", correct: true },
    ],
    explanation:
      "Explanation:<br><br>In Python the not equal to operator is != . Other languages have <> or =/= as not equal to operators.",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image26.png",
    answers: [
      { text: "The code is erroneous.", correct: false },
      { text: "23", correct: true },
      { text: "100", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In this code, the Test class has an __init__ method that initializes an instance with an id attribute. When an instance of Test is created with x = Test(23), the __init__ method is called with the value 23 for the id parameter. <br><br>Inside the __init__ method, the instance's attribute self.id is set to 23, but then the local variable id is set to 100. This local variable id does not affect the instance attribute self.id. <br><br>Therefore, when you print x.id, it outputs 23, which is the value assigned to the instance attribute.",
    link: "https://www.w3schools.com/python/python_classes.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image27.png",
    answers: [
      { text: "2 1 2", correct: false },
      { text: "1 2 2", correct: false },
      { text: "1 1 2", correct: true },
      { text: "1 2 1", correct: false },
    ],
    explanation: "Explanation:<br><br>This one is simple: x, y, z = 1, 1, 2",
    link: "https://www.w3schools.com/python/python_tuples.asp",
  },
  {
    question: "Which module in Python supports regular expressions?",
    answers: [
      { text: "regex", correct: false },
      { text: "re", correct: true },
      { text: "pyregex", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Python's re module supports regular expressions.",
    link: "https://www.w3schools.com/python/python_regex.asp",
  },
  {
    question:
      "You want to check, whether the variable obj contains an object of the class A. Which of the following statements can you use?",
    answers: [
      { text: "A.isinstance(obj)", correct: false },
      { text: "obj.isinstance(A)", correct: false },
      { text: "isinstance(A, obj)", correct: false },
      { text: "isinstance(obj, A)", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The isinstance() function returns True if the specified object is of the specified type, otherwise False.",
    link: "https://www.w3schools.com/python/ref_func_isinstance.asp",
  },
  {
    question: "How many elements does the L list contain?",
    image: "images/image28.png",
    answers: [
      { text: "three", correct: false },
      { text: "two", correct: false },
      { text: "one", correct: false },
      { text: "zero", correct: true },
    ],
    explanation:
      "Explanation:<br><br>In the list comprehension [i for i in range(-1, -2)], the range(-1, -2) generates a sequence of numbers starting from -1 and ending before -2. However, since -1 is not less than -2, the range is empty. Consequently, the list comprehension creates an empty list.",
    link: "https://www.w3schools.com/Python/python_lists_comprehension.asp",
  },
  {
    question:
      "Knowing that a function named randint() resides in the module named random choose the proper way to import it:",
    answers: [
      { text: "from randint import random", correct: false },
      { text: "import randint", correct: false },
      { text: "from random import randint", correct: true },
      { text: "import randint from random", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The module name is random. You have to write the module first. And you import from a module. from the module random you want to import the method randint.",
    link: "https://www.w3schools.com/python/module_random.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image29.png",
    answers: [
      { text: "It outputs None.", correct: false },
      {
        text: "The code is erroneous and will raise an exception.",
        correct: false,
      },
      { text: "It outputs False.", correct: true },
      { text: "It outputs True.", correct: false },
    ],
    explanation:
    `Explanation:<br><br>In this code, the class Content has a class variable title set to "None". The __init__ method of the class takes a parameter this and initializes an instance variable name with the value of this followed by " than " and then the class variable Content.title.<br><br>When text_1 is created as an instance of Content with "Paper" as the argument, the name attribute of text_1 is set to "Paper than None". Similarly, when text_2 is created with "Article" as the argument, the name attribute of text_2 is set to "Article than None".<br><br>The comparison text_1.title == text_2.name checks whether the class variable title, which is "None", is equal to the instance variable name of text_2, which is "Article than None". Since these two values are not the same, the result of the comparison is False.`,
    link: "https://docs.python.org/3/tutorial/classes.html",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image30.png",
    answers: [
      { text: "0", correct: false },
      { text: "0.0", correct: false },
      { text: "0.4", correct: false },
      { text: "0.2", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The operators here come from two different groups: The group 'Multiplication, Division, Floor division, Modulus' has a higher precedence than the group 'Addition, Subtraction'. <br><br>Therefore the order of operations here is: //  →  /  →  +",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image31.png",
    answers: [
      { text: "[ 1, 4 ]", correct: false },
      { text: "[ 4, 3 ]", correct: true },
      { text: "[ 1, 3, 4 ]", correct: false },
      { text: "[ 1, 3 ]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A list is mutable. When you assign it to a different variable, you create a reference of the same object. If afterwards you change one of them, the other one is changed too.",
    link: "https://www.w3schools.com/python/python_lists.asp",
  },
  {
    question:
      "Which of the following commands can be used to read n characters from a file?",
    answers: [
      { text: "file.read(n)", correct: true },
      { text: "n = file .read()", correct: false },
      { text: "n = file.readline()", correct: false },
      { text: "file.readline(n)", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The read() method reads the entire file and returns it as a string. The readline() method reads only one line of the file and returns it as a string.",
    link: "https://www.w3schools.com/python/ref_file_read.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image32.png",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "True", correct: false },
      { text: "False", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The mathematical constant e is 2.718281828459045. It is true that is not 16.0 like math.pow(2, 4). The integer value of True is 1",
    link: "https://www.w3schools.com/python/python_math.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image33.png",
    answers: [
      { text: "7777777", correct: false },
      { text: "The code is erroneous.", correct: true },
      { text: "49", correct: false },
      { text: "77", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In the code, the expression '7' * '7' attempts to multiply a string by another string. However, in Python, the multiplication operator * is used to repeat a string by an integer. The second operand must be an integer to specify how many times the string should be repeated.<br><br>Here, both operands are strings ('7'), so Python does not know how many times to repeat the string '7' and will raise a TypeError.",
    link: "https://www.geeksforgeeks.org/create-multiple-copies-of-a-string-in-python-by-using-multiplication-operator/",
  },
  {
    question: "What will be the output of the following code snippet?",
    image: "images/image34.png",
    answers: [
      { text: "2 1", correct: true },
      { text: "1 2", correct: false },
      { text: "1 1", correct: false },
      { text: "2 2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Integer is an immutable data type. The values get copied from one variable to another. In the end x and y changed their values.",
    link: "https://www.w3schools.com/python/gloss_python_assignment_operators.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image35.png",
    answers: [
      { text: "3 42", correct: true },
      { text: "The code is erroneous.", correct: false },
      { text: "3 1", correct: false },
      { text: "1 1", correct: false },
      { text: "1 42", correct: false },
    ],
    explanation:
      "Explanation:<br><br>This question is about argument passing:<br><br> It is a big difference whether you pass a mutable or an immutable data type. The immutable integer in x gets copied to p1 and the change of p1 does not affect x. The mutable list in y gets referenced to p2 and the change of p2 affects y.",
    link: "https://www.w3schools.com/python/gloss_python_function_arguments.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image36.png",
    answers: [
      { text: "[ 3, 5, 20, 5, 25, 1, 3 ]", correct: true },
      { text: "[ 1, 3, 4, 5, 20, 5, 25 ]", correct: false },
      { text: "[ 1, 3, 3, 4, 5, 5, 20, 25 ]", correct: false },
      { text: "[ 3, 4, 5, 20, 5, 25, 1, 3 ]", correct: false },
      { text: "[ 3, 1, 25, 5, 20, 5, 4 ]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In this code, the variable nums is initialized with the list [3, 4, 5, 20, 5, 25, 1, 3]. The method pop(1) is then called on this list. The pop() method removes and returns the element at the specified index, which in this case is index 1. The element at index 1 is 4.<br><br>After calling nums.pop(1), the element 4 is removed from the list. Therefore, the list is updated to [3, 5, 20, 5, 25, 1, 3].",
    link: "https://www.w3schools.com/python/ref_list_pop.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image37.png",
    answers: [
      { text: "2019/Nov/27 11:27:22", correct: false },
      { text: "2019/11/27 11:27:22", correct: false },
      { text: "19/November/27 11:27:22", correct: true },
      { text: "19/11/27 11:27:22", correct: false },
    ],
    explanation:
      "Explanation:<br><br>'%y' = year, <br>'%B' = month fully written, <br>'%d' = day, <br>'%H' = hour, <br>'%M' = minute, <br>'%S' = second. <br><br>The format is '2019/Nov/27 11:27:22'.",
    link: "https://www.w3schools.com/python/python_datetime.asp",
  },
  {
    question:
      "What would you insert instead ??? so that the program checks for even numbers?",
    image: "images/image38.png",
    answers: [
      { text: "x % 1 == 2", correct: false },
      { text: "x % 'even' == True", correct: false },
      { text: "x % x == 0", correct: false },
      { text: "x % 2 == 0", correct: true },
      { text: "x % 2 == 1", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Every number that is divided by two and does not leave a rest is even.",
    link: "https://www.geeksforgeeks.org/what-is-a-modulo-operator-in-python/",
  },
  {
    question: "What will be the output of the following code snippet?",
    image: "images/image39.png",
    answers: [
      { text: "[ 8, 9 ]", correct: false },
      { text: "[ 1, 2]", correct: false },
      { text: "[ 1, 2, 3 ]", correct: false },
      { text: "[ 1, 3, 5, 7, 9 ]", correct: true },
    ],
    explanation:
      "Explanation:<br><br>a[::2] is the slicing operation, where:<br>The first colon : specifies the start index (default is the beginning of the list).<br>The second colon : specifies the end index (default is the end of the list).<br>The 2 after the second colon is the step, meaning it selects every second element.<br><br>So, a[::2] selects every second element starting from the first element.",
    link: "https://www.w3schools.com/python/ref_list_slice.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image40.png",
    answers: [
      { text: "The code is erroneous.", correct: false },
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The backslash is the character to escape another character. Here the backslash escapes the following single quote character. Together they are one character.",
    link: "https://www.w3schools.com/python/python_strings_escape.asp",
  },
  {
    question:
      "What is the default return value for a function that does not explicitly return any value?",
    answers: [
      { text: "void", correct: false },
      { text: "int", correct: false },
      { text: "public", correct: false },
      { text: "None", correct: true },
      { text: "Null", correct: false },
    ],
    explanation:
      "Explanation:<br><br>None is the default return value for a function that does not explicitly return any value.",
    link: "https://www.w3schools.com/python/gloss_python_function_return_value.asp",
  },
  {
    question:
      "You want to write a code snippet to read the total data from a text file and print it to the monitor. What snippet would you insert in the line indicated below:",
    image: "images/image41.png",
    answers: [
      { text: "data = file.load()", correct: false },
      { text: "data = file.readline()", correct: false },
      { text: "data = file.read()", correct: true },
      { text: "data = file.readlines()", correct: false },
    ],
    explanation:
      "Explanation:<br><br>data = file.read() reads the entire contents of the file and stores it in a string variable called data.",
    link: "https://www.w3schools.com/python/ref_file_read.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image42.png",
    answers: [
      { text: "1*1*1", correct: true },
      { text: "The code is erroneous.", correct: false },
      { text: "x y z", correct: false },
      { text: "1 1 1", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The print() function has a sep parameter which stands for separator. The default value of the sep parameter is a space character. You can change it to anything you want.",
    link: "https://www.w3schools.com/python/ref_func_print.asp",
  },
  {
    question: "What value will be assigned to the x variable?",
    image: "images/image43.png",
    answers: [
      { text: "True", correct: true },
      { text: "False", correct: false },
      { text: "1", correct: false },
      { text: "0", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The value assigned to the variable x will be True. This is because the expression y > z and z < y evaluates to True (7 > 3 and 3 < 7), and with the logical OR (or), the entire expression becomes True.",
    link: "https://www.w3schools.com/python/gloss_python_logical_operators.asp",
  },
  {
    question:
      "The value thirty point eleven times ten raised to the power of nine should be written as:",
    answers: [
      { text: "30.11E9.0", correct: false },
      { text: "30E11.9", correct: false },
      { text: "30.11E9", correct: true },
      { text: "30.11*10^9", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The value 'thirty point eleven times ten raised to the power of nine' should be written as 30.11e9 in scientific notation.",
    link: "https://en.wikipedia.org/wiki/Scientific_notation#E_notation",
  },
  {
    question:
      "What is the output of the following program if the user enters 'kangaroo' at the first prompt and '0' at the second prompt?",
    image: "images/image44.png",
    answers: [
      { text: "Wrong value.", correct: false },
      { text: "Do not divide by zero!", correct: false },
      { text: "4.0", correct: true },
      { text: "Error.Error.Error.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The length of kangaroo is 8 and the length of 0 is 1, so 1 * 2 -> 2, leading to 8 / 2 -> 4.0 .",
    link: "https://www.w3schools.com/python/ref_func_len.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image45.png",
    answers: [
      { text: "23" + "\n" + "42", correct: true },
      { text: "23", correct: false },
      { text: "42", correct: false },
      { text: "42" + "\n" + "23", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The function will try to execute print(23) and succeed. The finally block always gets executed.",
    link: "https://www.w3schools.com/python/python_try_except.asp",
  },
  {
    question:
      "Which of the following for loops would output the below number pattern?",
    image: "images/image46.png",
    answers: [
      {
        text: "for i in range(1, 6)" + "\n" + "print(i, i, i, i, i)",
        correct: false,
      },
      {
        text: "for i in range(1, 6):" + "\n" + "print(str(i) *5 )",
        correct: true,
      },
      {
        text: "for i in range(0, 5):" + "\n" + "print(str(i) * 5)",
        correct: false,
      },
      {
        text: "for i in range(1, 5)" + "\n" + "print(str(i) * 5)",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The code snippet prints each number from 1 to 5, five times in a row on separate lines. This is achieved by converting the number to a string and repeating it five times using the multiplication operator *.",
    link: "https://www.w3schools.com/python/python_for_loops.asp",
  },
  {
    question:
      "You develop a Python application for your company. You have the following code. Which of the following expressions is equivalent to the expression in the function?",
    image: "images/image47.png",
    answers: [
      { text: "(a + b ) * ( c - d )", correct: false },
      { text: "A + ( ( b * c ) - d )", correct: false },
      { text: "(a + (b * c ) ) - d", correct: true },
      { text: "None of the above", correct: false },
    ],
    explanation:
      "Explanation:<br><br>This question is about operator precedence: <br><br>The multiplication operator has the highest precedence and is therefore executed first. That leaves the addition operator and the subtraction  operator. They both are from the same group and therefore have the same precedence. That group has a left-to-right associativity. <br><br>The addition operator is on the left and is therefore  executed next. And the last one to be executed is the subtraction operator.",
  },
  {
    question: "What is the output of the following code snippet?",
    image: "images/image48.png",
    answers: [
      { text: "1 3", correct: false },
      { text: "3 2", correct: true },
      { text: "The code is erroneous.", correct: false },
      { text: "3 3", correct: false },
      { text: "2 3", correct: false },
    ],
    explanation:
      "Explanation:<br><br>When the function test(2, 1) is called, the values x=2 and y=1 are passed as arguments, overriding the default values of x=1 and y=2. Inside the function, the statement x = x + y is executed, updating the value of x to 3 (since x = 2 and y = 1, making x = 2 + 1 = 3). Then, the statement y += 1 increments the value of y by 1, making y = 2.<br><br>Finally, the print(x, y) statement outputs the updated values of x and y, which are 3 and 2 respectively.",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image49.png",
    answers: [
      { text: "The code is erroneous.", correct: false },
      { text: "False", correct: false },
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "True", correct: true },
    ],
    explanation:
      "Explanation:<br><br>C is a subclass of A. <br>C is a grandchild of A, so to speak.<br>B is a subclass of A<br>C is a subclass of B<br>And therefore C is a subclass of A",
    link: "https://www.w3schools.com/python/ref_func_issubclass.asp",
  },
  {
    question:
      "Which of the following expressions evaluates to True and raises no exception?",
    answers: [
      { text: "10 != '1' + '0'", correct: true },
      { text: "'AI' * 2 != 2 * 'AI'", correct: false },
      { text: "'9' * 3 > '9' * 9", correct: false },
      { text: "'9' * 1 < 1 * 2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The expression '10 != '1' + '0' evaluates to True, since the integer 10 is not equal to the string '10'.<br><br>The expression '9' * 3 > '9' * 9 evaluates to False, because we got 999 on the left side and 999999999 on the right side.<br><br>The expression '9' * 1 < 1 * 2 evaluates to False, because we got 9 on the left side and 2 on the right side.<br><br> The expression 'AI' * 2 != 2 * 'AI' evaluates to False, since both sides are equal.",
  },
  {
    question: "What is the correct command to shuffle the following list?",
    image: "images/image50.png",
    answers: [
      { text: "shuffle(people)", correct: false },
      { text: "people.shuffle( )", correct: false },
      { text: "random.shuffle(people)", correct: true },
      { text: "random.shuffleList(people)", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The shuffle() function in Python is used to shuffle the elements of a list. Only usable when imported from the random module.",
    link: "https://www.w3schools.com/python/ref_random_shuffle.asp",
  },
  {
    question: "The 0o prefix means that the number after it is denoted as:",
    answers: [
      { text: "binary", correct: false },
      { text: "octal", correct: true },
      { text: "decimal", correct: false },
      { text: "hexadecimal", correct: false },
    ],

    explanation:
      "Explanation:<br><br>The 0o prefix in Python denotes that the number following it is written in octal (base-8) notation.<br><br>Example:<br><br>- 0o10 in octal represents the decimal number 8.<br>- 0o77 in octal represents the decimal number 63.<br><br>The 0o prefix allows Python to distinguish octal numbers from decimal or other bases.",
    link: "https://exercism.org/tracks/python/concepts/binary-octal-hexadecimal",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image51.png",
    answers: [
      { text: "The code is erroneous.", correct: false },
      { text: "1", correct: true },
      { text: "None", correct: false },
      { text: "2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>This is a conditional expression. 1 % 2 is 1 and therefore not equal to 0. The condition is True and the inner func() function call returns 1. That 1 is passed to the outer function which will also return 1.",
  },
  {
    question:
      "What is the expected output of the following code?<br><br>print(list('hello'))",
    answers: [
      { text: "['h', 'e', 'l', 'l', 'o']", correct: true },
      { text: "[h, e, l, l, o]", correct: false },
      { text: "['h' 'e' 'l' 'l' 'o']", correct: false },
      { text: "hello", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A string is a sequence of characters and works very fine with the list() function. The result is a list of strings, in which every character is a string of its own.",
    link: "https://www.w3schools.com/python/ref_func_list.asp",
  },
  {
    question:
      "The system that allows you to diagnose input/output errors in Python is called:",
    answers: [
      { text: "error_number", correct: false },
      { text: "error_string", correct: false },
      { text: "errno", correct: false },
      { text: "errcode", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The errno module is used to get the error number of an exception. The errcode module is used to get the error code of an exception.",
    link: "https://www.oreilly.com/library/view/python-standard-library/0596000960/ch02s12.html",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image52.png",
    answers: [
      { text: "17", correct: false },
      { text: "8.5", correct: false },
      { text: "8", correct: false },
      { text: "17.5", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The operators here come from three different groups:<br>'Exponent' ** has the highest precedence. Followed by 'Multiplication, Division, Floor division, Modulus'.<br><br>'Addition, Subtraction' has the lowest precedence.<br><br>Therefore the order of operations here is:  **  →  /  →  //  →  +",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question:
      "The part of your code where you think an exception may occur should be placed inside:",
    answers: [
      { text: "the try: block", correct: true },
      { text: "the except: block", correct: false },
      { text: "the exception: block", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The try: block is used to check if an exception is raised. The except: block is used to handle the exception.",
    link: "https://www.w3schools.com/python/python_try_except.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image53.png",
    answers: [
      { text: "7", correct: false },
      { text: "7.0", correct: false },
      { text: "8", correct: false },
      { text: "8.0", correct: true },
      { text: "9", correct: false },
      { text: "9.0", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The operators here come from three different groups:<br>'Exponent' ** has the highest precedence. Followed by 'Multiplication, Division, Floor division, Modulus'.<br>'Addition, Subtraction' has the lowest precedence.<br><br>Therefore the order of operations here is:  **   →  //  →  *  →  /  →   %  →   +",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image54.png",
    answers: [
      { text: "3 1", correct: true },
      { text: "1 3", correct: false },
      { text: "1 1", correct: false },
      { text: "3 3", correct: false },
      { text: "3" + "\n" + "1", correct: false },
      { text: "1" + "\n" + "3", correct: false },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The first print (inside func()) prints 3 (with a trailing space). The second print (outside func()) prints 1. So the output prints 3 followed by a space and then 1.",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question: "The statement<br><br>assert x == 0<br><br>...",
    answers: [
      { text: "is erroneous.", correct: false },
      { text: "has no effect.", correct: false },
      { text: "will stop the program if x is equal to 0", correct: false },
      { text: "will stop the program if x is not equal to 0", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The statement assert x == 0 checks if x is equal to 0. If it's not, it raises an AssertionError, helping to catch bugs or unexpected states during development.",
    link: "https://www.w3schools.com/python/ref_keyword_assert.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image77.png",
    answers: [
      { text: "The code is erroneous.", correct: false },
      { text: "Kevin", correct: false },
      { text: "KevinClaus", correct: true },
      { text: "Claus", correct: false },
    ],
    explanation:
      "Explanation:<br><br>String literals that are delimited by whitespace are automatically concatenated.",
    link: "https://www.w3schools.com/python/python_strings.asp",
  },
  {
    question:
      "Which of the following functions immediately terminates a program?",
    answers: [
      { text: "sys.terminate( )", correct: false },
      { text: "sys.exit( )", correct: true },
      { text: "sys.halt( )", correct: false },
      { text: "sys.stop( )", correct: false },
      { text: "None", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The sys.exit() function in Python is used to terminate a program immediately. It raises the SystemExit exception, which can be caught if needed, but by default, it stops the program execution.",
    link: "https://docs.python.org/2/library/exceptions.html#exceptions.SystemExit",
  },
  {
    question: "A code point is:",
    answers: [
      { text: "A number which makes up a character.", correct: true },
      { text: "A code containing a point.", correct: false },
      { text: "A point used to write a code.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A code point is a unique numeric value that corresponds to a specific character in a character encoding standard, such as Unicode. It allows each character to be uniquely identified and represented in digital systems.",
    link: "https://en.wikipedia.org/wiki/Code_point",
  },
  {
    question:
      "The part of your code where the handling of an exception takes place should be placed inside:",
    answers: [
      { text: "the except: block", correct: true },
      { text: "the exception: block", correct: false },
      { text: "the try: block", correct: false },
      { text: "None of the above", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, the except: block is used to handle exceptions that occur within the corresponding try: block. When an exception occurs, control transfers to the except: block to execute the error-handling code.",
    link: "https://www.w3schools.com/python/python_try_except.asp",
  },
  {
    question:
      "If the class's constructor is declared as below, which one of the assignments is valid?",
    image: "images/image55.png",
    answers: [
      { text: "Object = Class(object)", correct: false },
      { text: "object = Class()", correct: true },
      { text: "object = Class(self)", correct: false },
      { text: "object = Class", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, when instantiating a class, you typically use the class name followed by parentheses to call its constructor (initializer) method. <br><br>object = Class() correctly creates an instance of the class Class by calling its constructor without passing any arguments.",
    link: "https://www.geeksforgeeks.org/constructors-in-python/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image56.png",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "The code is erroneous.", correct: true },
    ],
    explanation:
      "Explanation:<br><br>range(2) has two elements: 0 and 1. Therefore the outer list will have two elements. <br><br>Since data[2] does not exist, the code is erroneous.",
    link: "https://www.w3schools.com/python/python_for_loops.asp",
  },
  {
    question: "Which of the following variable names is illegal?",
    answers: [
      { text: "true", correct: false },
      { text: "TRUE", correct: false },
      { text: "True", correct: true },
      { text: "tRUE", correct: false },
    ],
    explanation:
      "Explanation:<br><br>True is a reserved keyword in Python. Therefore, it is illegal to use it as a variable name.",
    link: "https://www.w3schools.com/python/python_booleans.asp",
  },
  {
    question: "How many stars will the following code print to the monitor?",
    image: "images/image57.png",
    answers: [
      { text: "one", correct: false },
      { text: "two", correct: false },
      { text: "four", correct: true },
      { text: "eight", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code will print 4 asterisks to the monitor. The << operator is a bitwise left shift operator, which effectively doubles the value of x on each iteration of the loop.<br>In each iteration, x is left-shifted by 1, effectively doubling its value (1 << 1 becomes 2, 2 << 1 becomes 4, etc.).",
  },
  {
    question: "The += operator, when applied to strings, performs:",
    answers: [
      { text: "Concatenation", correct: true },
      { text: "Multiplication", correct: false },
      { text: "Subtraction", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The += operator, when applied to strings, concatenates the right operand to the left operand.",
    link: "https://www.w3schools.com/python/gloss_python_string_concatenation.asp",
  },
  {
    question: "Consider the following code:",
    image: "images/image58.png",
    answers: [
      { text: "It shuffles the elements of the list in-place.", correct: true },
      {
        text: "It will not modify the list. This function is just a placeholder and yet to be implemented.",
        correct: false,
      },
      {
        text: "It returns a list where the elements 10, 20, and 30 would be at random positions.",
        correct: false,
      },
      {
        text: "It shuffles the elements for the number of times equal to the size of the list.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>random.shuffle() is a function that shuffles the elements of the list in-place.",
    link: "https://www.w3schools.com/python/ref_random_shuffle.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image59.png",
    answers: [
      { text: "4", correct: false },
      { text: "4.0", correct: false },
      { text: "3", correct: false },
      { text: "3.5", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The operators here are from two different groups:<br>The group 'Multiplication, Division, Floor division, Modulus' has a higher precedence than the group 'Addition, Subtraction'.<br><br>Therefore the order of operations here is:  //  →  /  →  +  ",
  },
  {
    question:
      "Is there a way to check if a class is a subclass of another class?",
    answers: [
      { text: "Yes, there is a function that can do that.", correct: true },
      { text: "No.", correct: false },
      {
        text: "It may be possible, but only under special conditions.",
        correct: false,
      },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, you can use the issubclass() function to check if a class is a subclass of another class. It returns True if the first argument is a subclass of the second argument, otherwise, it returns False.",
    link: "https://www.w3schools.com/python/ref_func_issubclass.asp",
  },
  {
    question: "Which of the following is false?",
    answers: [
      {
        text: "A try statement can have one or more except clauses.",
        correct: false,
      },
      {
        text: "A try statement can have a finally clause and an except clause.",
        correct: false,
      },
      {
        text: "A try statement can have one or more finally clauses.",
        correct: true,
      },
      {
        text: "A try statement can have a finally clause without an except clause.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>In Python, a try statement can have only one finally clause. The finally clause is used to execute cleanup code regardless of whether an exception occurs, and there can only be one such block associated with a try statement.",
    link: "https://www.w3schools.com/python/gloss_python_try_except.asp",
  },
  {
    question: "How many stars will the following code print to the monitor?",
    image: "images/image60.png",
    answers: [
      { text: "zero", correct: false },
      { text: "one", correct: false },
      { text: "two", correct: false },
      { text: "The snippet will enter an infinite loop.", correct: true },
    ],
    explanation:
      "Explanation:<br><br>In this code, a while loop is set to run as long as the condition i < i + 2 is true. Since this condition is always true for any finite value of i (because i will always be less than i + 2), the loop will run indefinitely. Inside the loop, the variable i is incremented by 1 each time, and an asterisk ('*') is printed. As a result, the code creates an infinite loop that continuously prints '*', and the else block is never executed because the loop does not terminate.",
    link: "https://www.w3schools.com/python/python_while_loops.asp",
  },
  {
    question: "Which program will produce the following output:",
    image: "images/image61.png",
    answers: [
      {
        text: "import calendar" + "\n" + "print(calendar.week)",
        correct: false,
      },
      {
        text: "import calendar" + "\n" + "print(calendar.weekheader(3))",
        correct: false,
      },
      {
        text: "import calendar" + "\n" + "print(calendar.weekheader())",
        correct: false,
      },
      {
        text: "import calendar" + "\n" + "print(calendar.weekheader(2))",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>The calendar.weekheader() function generates a header for a week, typically used in calendars.<br><br>The argument 2 specifies the length of the abbreviated weekday names.<br><br>By default, the abbreviated weekday names are three characters long, but by passing 2 as an argument, they are abbreviated to two characters.<br<br>>Thus, the output will be 'Mo Tu We Th Fr Sa Su', representing abbreviated weekday names.",
    link: "https://www.w3resource.com/python/module/calendar/weekheader.php",
  },
  {
    question:
      "What is the expected output of the following code?<br><br>print(float('3.14'))",
    answers: [
      { text: "3,14", correct: false },
      { text: "3.14", correct: true },
      { text: "314", correct: false },
      { text: "'3.14'", correct: false },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The float() function converts a string representing a floating-point number into a floating-point number.",
    link: "https://www.geeksforgeeks.org/convert-string-to-float-in-python/",
  },
  {
    question: "What value will be assigned to the x variable?",
    image: "images/image62.png",
    answers: [
      { text: "1", correct: false },
      { text: "0", correct: false },
      { text: "True", correct: false },
      { text: "False", correct: true },
    ],
    explanation:
      "Explanation:<br><br>In Python, the comparison operators (==, >, !=, etc.) return boolean values (True or False).<br>The expression y == z evaluates to False because y is 7 and z is 3.<br><br>Similarly, the expression y > z also evaluates to True.<br><br>Therefore, the overall expression becomes False and True or False and True, which simplifies to False or False, resulting in False.",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image63.png",
    answers: [
      { text: "4", correct: true },
      { text: "e", correct: false },
      { text: "2", correct: false },
      { text: ";", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The string 'John,Doe,42' is split into a list of substrings using the comma , as a delimiter.<br><br>Then, the join() function concatenates these substrings without any separator, effectively removing the comma.<br><br>The resulting string is 'JohnDoe42'.<br><br>Finally, strng[-2] accesses the second character from the end of the string, which is '4'.",
    link: "https://www.geeksforgeeks.org/python-program-split-join-string/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image64.png",
    answers: [
      { text: "2", correct: false },
      { text: "0", correct: false },
      { text: "4", correct: false },
      { text: "The code is erroneous and cannot be run.", correct: true },
    ],
    explanation:
      "Explanation:<br><br>In Python you cannot add/concatenate an integer to a string, only strings can be concatenated.<br>Therefore plane + 2 will not work, making the code erroneous.",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image65.png",
    answers: [
      { text: "3", correct: false },
      { text: "-3", correct: true },
      { text: "2", correct: false },
      { text: "-2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In this code, the math module is used to perform mathematical operations. The variable x is set to 1.7. The math.floor(x) function returns the largest integer less than or equal to x, which is 1 for x = 1.7. Similarly, math.ceil(x) returns the smallest integer greater than or equal to x, which is 2 for x = 1.7.<br><br>When you add these two values together, 1 + 2 equals 3. The abs() function then computes the absolute value of 3, which is still 3. Applying the negative sign to this absolute value results in -3.",
    link: "https://www.geeksforgeeks.org/floor-ceil-function-python/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image66.png",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code defines an empty dictionary 'people'.<br><br>The function add_person() is defined to add a person to the dictionary.<br>Three persons are added to the dictionary: 'Kevin', 'Marvin', and 'kevin'.<br><br>Since the keys 'Kevin' and 'kevin' are considered different due to case sensitivity in Python, both are added as separate entries.<br><br>Therefore, the length of the dictionary 'people' is 3, indicating that there are three unique persons in the dictionary.",
    link: "https://www.w3schools.com/python/python_dictionaries.asp",
  },
  {
    question:
      "What is the expected output of the following code if the user enters 2 and 4?",
    image: "images/image67.png",
    answers: [
      { text: "4.0", correct: false },
      { text: "1.0", correct: false },
      { text: "2.0", correct: true },
      { text: "0.0", correct: false },
    ],
    explanation: "Explanation:<br><br>4 ** 1/2 = sqrt(4) = 2.0.",
    link: "https://www.datacamp.com/tutorial/exponents-in-python?dc_referrer=https%3A%2F%2Fwww.google.com%2F",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image68.png",
    answers: [
      { text: "[ 10, 20, 42 ]", correct: false },
      { text: "[ 7, 3, 23, 42 ]", correct: false },
      { text: "[ 10, 20, 23, 42 ]", correct: false },
      { text: "[ 7, 20, 23, 42 ]", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The two list slicings create new lists and don't affect w.<br><br> The assigning of the list w to the variable z creates a reference to the same object. Therefore the change of z does also affect w. <br><br>Hence, z[1] = 20 affects the Index [1] of w, leading to [7, 20, 23, 42]",
    link: "https://www.geeksforgeeks.org/python-list-slicing/",
  },
  {
    question:
      "Which of the following commands is used to open a file in binary format for writing only?",
    answers: [
      { text: "open('data.txt' , 'w+')", correct: false },
      { text: "open('data.txt' , 'wb+')", correct: false },
      { text: "open('data.txt' , 'w')", correct: false },
      { text: "open('data.txt' , 'wb')", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The 'wb' mode opens the file for binary writing and truncates the file if it already exists.",
    link: "https://www.w3schools.com/python/python_file_open.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image69.png",
    answers: [
      { text: "6 9 12", correct: false },
      { text: "8 27 64", correct: false },
      { text: "9 27 81", correct: true },
      { text: "27 81 343", correct: false },
    ],
    explanation:
      "Explanation:<br><br>data is a list of lambda functions. In the for loop the lambda functions get assigned to func and one after the other they are called with the argument 3:<br><br> 3 ** 2 = 9, 3 ** 3 = 27, 3 ** 4 = 81.",
    link: "https://www.datacamp.com/tutorial/exponents-in-python?dc_referrer=https%3A%2F%2Fwww.google.com%2F",
  },
  {
    question: "Which of the following is the output of the below Python code?",
    image: "images/image70.png",
    answers: [
      { text: "True" + "\n" + "False", correct: false },
      { text: "False" + "\n" + "True", correct: true },
      { text: "False" + "\n" + "False", correct: false },
      { text: "True" + "\n" + "True", correct: false },
    ],
    explanation:
      "Explanation:<br><br>An object is mutable and if you create two new objects with the same values they still will be different objects and have different ids. <br><br>A string is immutable and if you create two strings with the same value they will both point to the same object and therefore have the same ids.",
    link: "https://www.geeksforgeeks.org/mutable-vs-immutable-objects-in-python/",
  },
  {
    question:
      "A predefined Python variable, storing the module name, is called:",
    answers: [
      { text: "__name__", correct: true },
      { text: "__mod__", correct: false },
      { text: "__module__", correct: false },
      { text: "__modname__", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A predefined Python variable that stores the module name is called __name__. When a module is run directly, __name__ is set to '__main__'. If the module is imported into another module, __name__ is set to the module's name. <br><br>This allows you to distinguish between when a module is being run as the main program versus when it is being imported.",
    link: "https://builtin.com/articles/name-python",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image71.png",
    answers: [
      { text: "0", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "5", correct: false },
    ],
    explanation:
      "Explanation:<br><br>All the characters of header will be in x. Therefore, none of them are NOT IN header, so plus is never incremented, resulting in 0.",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image72.png",
    answers: [
      { text: "The code is erroneous.", correct: false },
      {
        text: "The number of all the entities residing in the math module.",
        correct: false,
      },
      {
        text: "A string containing the fully qualified name of the module.",
        correct: false,
      },
      {
        text: "A list of all the entities residing in the math module.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>The dir() function returns the names of all entities (properties and methods) of the passed module (or object). Examples for entities in the math module are: e, pi, inf, nan, and tau.",
    link: "https://www.w3schools.com/python/ref_func_dir.asp",
  },
  {
    question: "When an exception occurs, we say that it has been:",
    answers: [
      { text: "thrown", correct: false },
      { text: "raised", correct: true },
      { text: "dropped", correct: false },
      { text: "picked", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, exceptions can be handled using a try statement. The critical operation which can raise an exception is placed inside the try clause. The code that handles the exceptions is written in the except clause.",
    link: "https://www.programiz.com/python-programming/exception-handling",
  },
  {
    question:
      "What is the expected behavior of the following program if the user enters 0?",
    image: "images/image73.png",
    answers: [
      { text: "The program will output 0 to the console.", correct: false },
      {
        text: "The program will raise the ZeroDivisionError exception.",
        correct: false,
      },
      {
        text: "The program will raise the TypeError exception.",
        correct: true,
      },
      {
        text: "The program will raise the ValueError exception.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The input() function always returns a string. If you try to divide by a string you get a TypeError",
    link: "https://www.w3schools.com/python/ref_func_input.asp",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image74.png",
    answers: [
      { text: "125", correct: true },
      { text: "250", correct: false },
      { text: "72", correct: false },
      { text: "500", correct: false },
    ],
    explanation:
      "Explanation:<br><br>len(str(i)) is 3, therefore 3 < 72, leading to the else clause. <br><br>Here i //=2 is equivalent to i = i // 2, so i = 250 // 2 = 125, with // being the floor division operator.",
    link: "https://www.geeksforgeeks.org/floor-division-in-python/",
  },
  {
    question:
      "What snippet would you insert in the line indicated below, to print '1 2 3 4'?",
    image: "images/image75.png",
    answers: [
      { text: "print(n)", correct: false },
      { text: 'print(n, sep=" ")', correct: false },
      { text: 'print(n, end=" ")', correct: true },
      { text: 'print(n, " ")', correct: false },
    ],
    explanation: `Explanation:<br><br>You want to print the numbers 1 2 3 4 on the same line, separated by spaces. To achieve this, you need to control the end character of the print function. By default, print adds a newline character (\n) after each print statement, which causes each number to appear on a new line. To avoid this, you can use the end parameter of the print function.<br><br>The print function's end parameter specifies what should be printed at the end of the output. By setting end=" " (a space), you ensure that a space is printed instead of a newline after each number. This results in the numbers being printed on the same line with spaces in between.`,
    link: "https://www.w3schools.com/python/ref_func_print.asp",
  },
  {
    question:
      "What is the value type returned after executing the following snippet?",
    image: "images/image76.png",
    answers: [
      { text: "int", correct: false },
      { text: "float", correct: false },
      { text: "str", correct: false },
      { text: "bool", correct: true },
      { text: "NoneType", correct: false },
    ],
    explanation:
      'Explanation:<br><br>z = len("Python") is 6, therefore it is of type int.<br><br> x = y > z is False, therefore x is of type bool.',
    link: "https://www.w3schools.com/python/python_datatypes.asp",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image78.png",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>With a = 0 we get b = a ** 0 = 1, therefore we get c = 2. So a + b + c = 3.",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question: "How many stars (*) does the following snippet print?",
    image: "images/image79.png",
    answers: [
      { text: "3", correct: true },
      { text: "2", correct: false },
      { text: "1", correct: false },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>When i is 10, it's decremented to 7, and a star is printed. Next, when i is 7, it's decremented to 4, and another star is printed. Finally, when i is 4, it's decremented to 1, and a third star is printed. At this point, since i is now less than or equal to 3, the loop breaks, and the else block is skipped.<br><br>Therefore, the number of stars printed is 3.",
  },
  {
    question: "What is the result of the following comparison?",
    image: "images/image80.png",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
      { text: "None", correct: false },
      {
        text: "The comparison causes a runtime exception/error.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The variables x and y are strings, not numbers. When Python compares strings using >, it does so lexicographically, meaning character by character, like in a dictionary. For '20' and '30', it compares the first characters: '2' and '3'. <br><br>The Unicode value of '2' is 50, and '3' is 51. Since 50 is less than 51, '20' is less than '30'. Therefore, x > y evaluates to False, and the code prints False.",
    link: "https://www.geeksforgeeks.org/string-comparison-in-python/",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image81.png",
    answers: [
      { text: "Hello, Python!", correct: true },
      { text: "!nohtyP ,olleH", correct: false },
      { text: "Hello, Python!Hello, Python!", correct: false },
      { text: "!nohtyP ,olleH!nohtyP ,olleH", correct: false },
      { text: "The program causes a runtime exception/error.", correct: false },
      { text: "The result cannot be predicted.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The variable s is the string 'Hello, Python!' with 14 characters. The slice s[-14:15] starts at index -14, which is the first character of the string since -14 refers to the start in a string with 14 characters. The slice ends at index 15, but since the string only has 14 characters, it effectively goes to the end of the string.<br><br>Therefore, s[-14:15] extracts the entire string from start to finish. The output is: Hello, Python!",
    link: "https://www.w3schools.com/python/python_strings_slicing.asp",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image82.png",
    answers: [
      { text: "[2, 4]", correct: true },
      { text: "['C', 2, 4]", correct: false },
      { text: "['B', 'C', 2, 4]", correct: false },
      { text: "['A', 'B']", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Using the del statement, you can remove a specific slice of elements from a list. The slice [0:-2] means 'from the start of the list (index 0) up to, but not including(!), the element at index -2'. In Python, negative indexing allows you to refer to positions from the end of the list, with -1 being the last element. Therefore, -2 refers to the second-to-last element, which is 2 in this case.<br><br>Therefore, 'A', 'B' and 'C' are removed from the list.",
    link: "https://www.w3schools.com/python/python_lists_remove.asp",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image83.png",
    answers: [
      { text: "a" + "\n" + "b" + "\n" + "c", correct: true },
      { text: "1" + "\n" + "2" + "\n" + "3", correct: false },
      { text: "a:1" + "\n" + "b:2" + "\n" + "c:3", correct: false },
      { text: "0" + "\n" + "1" + "\n" + "2", correct: false },
      { text: "The code is erroneous", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In the for loop 'for item in dict:', the term ''item'' refers to the keys of the dictionary. Since dictionaries in Python are collections of key-value pairs, iterating over them by default gives you the keys. <br><br>Thus, in this case, 'a', 'b', and 'c' are the ''items'' being printed. These keys are the elements enclosed in single quotes in the dictionary, distinguishing them from the associated values (1, 2, and 3) which are not printed in this loop.",
    link: "https://www.w3schools.com/python/python_dictionaries.asp",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image84.png",
    answers: [
      { text: "0", correct: false },
      { text: "3", correct: false },
      { text: "7", correct: false },
      { text: "11", correct: false },
      {
        text: "The program will cause a runtime exception/error.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>We get a runtime exception here <br><br>→ ZeroDivisionError: integer division or modulo by zero",
    link: "https://docs.python.org/3/library/exceptions.html",
  },
  {
    question:
      "How many stars (*) will the following snippet send to the console?",
    image: "images/image85.png",
    answers: [
      { text: "One", correct: false },
      { text: "Two", correct: false },
      { text: "Three", correct: true },
      { text: "Four", correct: false },
      {
        text: "The program will cause a runtime exception/error.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>First we got a nested list comprehension that generates a list of lists:<br>The outer loop for r in range(3) iterates over the range 0, 1, 2. For each value of r, the inner loop for c in range(r) creates a list of integers from 0 to r-1. <br><br>Let's break down the list comprehension for each value of r: <br>When r = 0, the inner loop for c in range(0) generates an empty list [] because the range is 0. <br>When r = 1, the inner loop for c in range(1) generates [0]. <br>When r = 2, the inner loop for c in range(2) generates [0, 1]. <br><br>Combining these, the result of the list comprehension is: lst = [[], [0], [0, 1]]<br><br>Now let's examine how the nested for loop processes the list lst: <br>For the first sublist [], there are no elements to iterate over, so nothing is printed. <br>For the second sublist [0], the only element is 0. Since 0 < 2, an asterisk '*' is printed. <br>For the third sublist [0, 1], the elements are 0 and 1. <br><br>Both satisfy y < 2, so two asterisks '*' are printed.",
    link: "https://www.w3schools.com/python/python_lists_comprehension.asp",
  },
  {
    question:
      "What would you insert instead of ??? so that the program prints '1024' to the monitor?",
    image: "images/image86.png",
    answers: [
      { text: "[0]", correct: false },
      { text: "[1]", correct: false },
      { text: "[-1]", correct: true },
      { text: "[1024]", correct: false },
      { text: "[:]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>lst = [2 ** x for x in range(0, 11)] generates a list where each element is 2 raised to the power of x, for x ranging from 0 to 10. <br><br>This results in the list: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024].<br><br> Since 1024 is the last element in the list, we can select and print it with print(lst[-1]).",
    link: "https://www.geeksforgeeks.org/range-to-a-list-in-python/",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image87.png",
    answers: [
      { text: "True", correct: false },
      { text: "False", correct: true },
      { text: "None", correct: false },
      {
        text: "The program will cause a runtime exception/error.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>lst2 = lst1.split(',') splits the string lst1 at each comma (,). After splitting, lst2 becomes ['12', '34']. This creates a list where each element is a substring from lst1 separated by commas. <br><br>len(lst1) gives the length of the string lst1, which is 5 (counting each character including the comma). <br><br>len(lst2) gives the length of the list lst2, which is 2 (since it contains two elements after splitting). <br><br>So in this case, 5 < 2 evaluates to False.",
    link: "https://www.w3schools.com/python/ref_string_split.asp",
  },
  {
    question: "What is the expected behavior of the following snippet?",
    image: "images/image88.png",
    answers: [
      { text: "It will print 5", correct: false },
      { text: "It will print 64", correct: false },
      { text: "It will print 256", correct: true },
      { text: "It will print 512", correct: false },
      {
        text: "The code will cause a runtime exception/error.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br> The function fun calculates a raised to the power of b raised to the power of c. In this specific call fun(b=2, a=2, c=3), it computes 2 ** (2 ** 3), which results in 256. Therefore, the output of the print statement is 256.",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question: "What is the expected outcome of the following snippet?",
    image: "images/image89.png",
    answers: [
      { text: "3", correct: false },
      { text: "5", correct: false },
      { text: "7", correct: true },
      {
        text: "The code will cause a runtime exception/error.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>x = 5: This assigns the value 5 to the variable x.<br><br>f = lambda x: x + 2: This defines a lambda function that takes one parameter x and returns the result of adding 2 to it. <br><br>print(f(x)): This calls the lambda function f with the argument x (which is 5). <br><br>The function computes x + 2x + 2, which is 5 + 2 = 75 + 2 = 7, and prints the result.",
    link: "https://www.w3schools.com/python/python_lambda.asp",
  },
  {
    question: "What is the expected outcome of the following snippet?",
    image: "images/image90.png",
    answers: [
      { text: "8", correct: true },
      { text: "4", correct: false },
      { text: "6", correct: false },
      { text: "runtime error on line 4", correct: false },
      { text: "runtime error on line 5", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The given code snippet starts by assigning the value `1` to the variable `x`. It then defines a function named `a` that takes a single argument `x` and returns twice its value. After defining the function, the code calculates `x = 2 + a(x)`. <br><br>At this point, the function `a` is called with the current value of `x`, which is `1`. The function returns `2` (since `2 * 1 = 2`), and this result is added to `2`, giving a new value of `4` for `x`. <br><br>Next, the code executes `print(a(x))`. Here, the function `a` is called again, but this time with the updated value of `x`, which is `4`. The function computes `2 * 4`, which results in `8`. This value, `8`, is then printed to the console.<br><br> Thus, the expected output of the code is `8`.",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question: "What is the expected behavior of the following snippet?",
    image: "images/image91.png",
    answers: [
      { text: "print hello", correct: false },
      { text: "print h", correct: false },
      { text: "print ello", correct: false },
      { text: "cause a runtime exception on line 2", correct: false },
      { text: "cause a runtime exception on line 3", correct: false },
      { text: "cause a runtime exception on line 4", correct: false },
      { text: "cause a runtime exception on line 5", correct: true },
    ],
    explanation:
      "Explanation:<br><br>In the code snippet, the variable `a` is assigned the string `'hello'`. A function `x` is then defined, requiring two parameters, `a` and `b`. Inside this function, the first character of `a` is accessed and returned. <br><br>When `print(x(a))` is called, it tries to invoke the function `x` with only one argument, `a`. Since `x` expects two arguments but receives only one, Python raises a `TypeError`. <br><br>The error message will be: TypeError: x() missing 1 required positional argument: 'b'",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question: "What is the expected behavior of the following snippet?",
    image: "images/image92.png",
    answers: [
      { text: "It will print: SPAM", correct: false },
      { text: "It will print: MAPS", correct: false },
      { text: "It will print: None", correct: false },
      { text: "It will print: SPAMMAPS", correct: true },
      { text: "It will print: SPAM MAPS", correct: false },
      { text: "It will cause a runtime exception/error", correct: false },
      { text: "It will print an empty line", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In this code, the variable s is defined globally as the string 'SPAM'. The function f(x) takes one argument, x, but the value of x is not used inside the function. Instead, the function uses the global variable s and concatenates it with the string 'MAPS', returning the result.<br><br>When print(f(s)) is called, the function f(s) executes, and it concatenates the global variable s (which is 'SPAM') with 'MAPS'. This results in the string 'SPAMMAPS', which is then printed by the print() statement.<br><br>The important thing to note is that even though the function accepts an argument, it does not use it and instead operates on the global variable s. Therefore, the output is 'SPAMMAPS'.",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question: "What is the expected behavior of the following snippet?",
    image: "images/image93.png",
    answers: [
      {
        text: "It will print: <generator object gen at (some hex digits)>",
        correct: false,
      },
      { text: "It will print: 014916", correct: true },
      {
        text:
          "It will print: \n" +
          "0" +
          "\n" +
          "1" +
          "\n" +
          "4" +
          "\n" +
          "9" +
          "\n" +
          "16",
        correct: false,
      },
      { text: "It will cause a runtime exception/error", correct: false },
      { text: "It will print an empty line", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code defines a generator function called `gen()`. This function creates a range of numbers from 0 to 4. It then yields the square of each number in that range. <br><br>The `for` loop outside the function calls `gen()` and iterates over its values. It prints each square on the same line without any spaces or newlines between them. <br><br>Therefore, the output of the code is `014916`.",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image94.png",
    answers: [
      { text: "1" + "\n" + "2", correct: false },
      { text: "ERROR MESSAGE" + "\n" + "1" + "\n" + "2", correct: false },
      { text: "0" + "\n" + "2", correct: false },
      {
        text: "0" + "\n" + "ERROR MESSAGE" + "\n" + "1" + "\n" + "2",
        correct: true,
      },
    ],
    explanation:
      'Explanation:<br><br>The code snippet begins by setting x to 0. In the try block, it prints x, which is 0. Then, it attempts to perform 1 / x, causing a ZeroDivisionError because division by zero is not allowed. <br><br>When this error occurs, the except block catches it and prints "ERROR MESSAGE". Regardless of the error, the finally block always executes, printing x + 1, which is 1.<br>After the try-except-finally block, the code prints x + 2, which is 2.',
    link: "https://www.w3schools.com/python/python_try_except.asp",
  },
  {
    question:
      "The following class hierarchy is given. What is the expected output of the code?",
    image: "images/image95.png",
    answers: [
      { text: "AB", correct: false },
      { text: "ABB", correct: true },
      { text: "BA", correct: false },
      { text: "BBA", correct: false },
      { text: "AAA", correct: false },
      { text: "BBB", correct: false },
    ],
    explanation:
      'Explanation:<br><br>The provided code snippet demonstrates the concepts of class inheritance and method overriding in Python.<br><br> First, the code defines three classes: A, B, and C. Class A has a method a that prints the character "A" without a newline. Class B inherits from A and overrides the a method to print the character "B" instead. Class C inherits from B and adds a new method b that prints the character "B". <br><br>Next, three instances are created: a from class A, b from class B, and c from class C. When the method a.a() is called, it uses the a method from class A, printing "A". The call to b.a() invokes the overridden a method from class B, printing "B". Finally, calling c.b() uses the b method from class C, which also prints "B". <br><br>Thus, the output of the code, in sequence, is "A" from a.a(), "B" from b.a(), and "B" from c.b(), resulting in the combined output of ABB.',
    link: "https://www.programiz.com/python-programming/inheritance",
  },
  {
    question: "What is the expected result of executing the following code?",
    image: "images/image96.png",
    answers: [
      { text: "It will print bdf", correct: false },
      { text: "It will print ace", correct: true },
      { text: "It will print abcdef", correct: false },
      { text: "It will print an empty line.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The function I() is defined to work with the string 'abcdef'. Within this function, the slice notation s[::2] is applied to the string s, creating a new string consisting of every second character from the original string. This slicing operation results in the string 'ace'. The for loop inside the function then iterates over each character in this sliced string and yields each character one by one. <br><br>Outside the function, a for loop is used to iterate over the characters produced by the generator function I(). For each character yielded by the generator, the print function outputs the character. The end='' parameter in the print function ensures that the characters are printed consecutively without any spaces or newlines between them. <br><br>During the execution, the generator function I() yields the characters 'a', 'c', and 'e' from the string 'ace'. As the loop iterates over these yielded characters, it prints them sequentially. <br><br>The combined effect is that the code prints the characters 'a', 'c', and 'e' in a continuous manner. Thus, the final output of the code is the string 'ace'.",
    link: "https://wiki.python.org/moin/Generators",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image97.png",
    answers: [
      { text: "1", correct: false },
      { text: "False", correct: true },
      { text: "0", correct: false },
      { text: "True", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The provided code snippet initializes a dictionary data with keys 'name' and 'age', storing values 'Peter' and 30, respectively. It then creates a copy of this dictionary using the copy() method and assigns it to person. id() provides a way to uniquely identify and compare objects in Python based on their memory addresses.<br><br>To check if data and person refer to the same object in memory, the code compares their IDs using id(data) == id(person). Since copy() creates a shallow copy of data, person is a separate object with the same contents as data. <br><br>Therefore, the comparison id(data) == id(person) evaluates to False, indicating that data and person are distinct objects occupying different memory locations despite containing identical key-value pairs.",
    link: "https://www.toppr.com/guides/python-guide/references/methods-and-functions/methods/set/copy/python-set-copy/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image98.png",
    answers: [
      { text: "42" + "\n" + "23" + "\n" + "42", correct: false },
      { text: "42" + "\n" + "42" + "\n" + "42", correct: false },
      { text: "42" + "\n" + "23" + "\n" + "23", correct: true },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>There's a global variable x initially set to 42. The function func() is defined with the global x declaration inside it, indicating that x refers to the global variable rather than a local one within the function scope. <br><br>When func() is called, it first prints the current value of x, which is 42. Then, it assigns a new value 23 to x and prints this updated value. <br><br>After executing func(), the final print(x) statement outside the function also prints the current value of the global variable x, which remains 23 after being modified within func().",
    link: "https://www.geeksforgeeks.org/python-inner-functions/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image99.png",
    answers: [
      { text: "*", correct: false },
      { text: "***", correct: false },
      { text: "******", correct: true },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The provided Python code defines a generator function named func(n) that takes an integer parameter n. Inside this function, an empty string s is initialized. A for loop iterates i from 0 to n-1. During each iteration, an asterisk ('*') is appended to the string s, and then yield s is used to yield the current value of s to the caller.<br><br> Outside the function, a for loop iterates over the generator object returned by func(3). During each iteration, it prints the value yielded by the generator function without adding a newline (end=''). This results in the consecutive printing of the string values '*', '**', and '***'.",
    link: "https://www.geeksforgeeks.org/generators-in-python/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image100.png",
    answers: [
      { text: " 1" + "\n" + "-1", correct: true },
      { text: " 2" + "\n" + "-2", correct: false },
      { text: " 3" + "\n" + "-3", correct: false },
      { text: " 4" + "\n" + "-4", correct: false },
      { text: " 5" + "\n" + "-5", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, +++++x and -----x use consecutive unary operators (+ and -), but each operator only affects x once.<br><br>For +++++x: It simplifies to +x, which evaluates to 1 when x is 1. <br><br>For -----x: It simplifies to -x, which evaluates to -1 when x is 1.",
    link: "https://www.programiz.com/python-programming/precedence-associativity",
  },
  {
    question: "Consider the following code. What is the value of x?",
    image: "images/image101.png",
    answers: [
      { text: "False", correct: false },
      { text: "1", correct: false },
      { text: "True", correct: true },
      { text: "0", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The value of x is True because the expression x == x is True.",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },

  {
    question: "The built-in class property called __bases__ is:",
    answers: [
      {
        text: "a tuple, which contains information about the direct superclasses of the class.",
        correct: true,
      },
      {
        text: "a variable of type int , which stores the radix currently used by the class.",
        correct: false,
      },
      {
        text: "a dictionary, which contains information about all the superclasses of the class.",
        correct: false,
      },
      {
        text: "a string, which contains information about the direct superclass of the class.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The built-in class property __bases__ in Python is a tuple that contains the base classes of a class. This property provides a way to access the tuple of base classes from which a class is derived.<br><br>For example, if you have a class Child that inherits from Parent, Child.__bases__ would return a tuple containing Parent. This property is useful for inspecting class hierarchies and understanding the inheritance structure of a class.",
    link: "https://jfine-python-classes.readthedocs.io/en/latest/construct.html",
  },
  {
    question:
      "A predefined Python variable that stores the current module name is called:",
    answers: [
      { text: "__module__", correct: false },
      { text: "__mod__", correct: false },
      { text: "__name__", correct: true },
      { text: "__modname__", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The name of the predefined variable is __name__.",
    link: "https://docs.python.org/3/tutorial/modules.html",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image102.png",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In the code snippet, a function named inc is defined. This function takes a parameter inc, which is used within its nested function do. Inside inc, do is defined to accept another parameter val. When do is invoked with a value for val, it returns val + inc.<br><br> In the main execution of the code, inc(-1) is assigned to action. This means that action now holds the inner function do with inc set to -1. Later, action is called with 2 as its argument (action(2)). This call computes 2 + (-1), resulting in 1. <br><br>Therefore, when the statement print(action(2)) is executed, it outputs 1. This demonstrates how the function inc creates a closure around the parameter inc, allowing action to modify its input by adding -1 to it before returning the result.",
    link: "https://www.geeksforgeeks.org/closures-and-decorators-in-python/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image103.png",
    answers: [
      { text: "3", correct: true },
      { text: "6", correct: false },
      { text: "9", correct: false },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code snippet iterates through a list named data to count how many elements within it are lists themselves. It initializes a variable count to 0 and then uses a for loop to iterate over each index of the data list. During each iteration, it checks if the type of the element at the current index (data[i]) is a list using the condition if type(data[i]) == list. If the condition is true, indicating that data[i] is indeed a list, it increments the count variable by 1. After completing the loop, the code prints out the final value of count, which represents the total number of elements in the data list that are lists themselves. <br><br>In the context of the provided data = [1, 2, [3, 4], [5, 6], 7, [8, 9]], the output of the code will be 3, as there are three elements in data that are lists ([3, 4], [5, 6], and [8, 9]). This example demonstrates how Python allows for flexible handling of different types of data within a single list structure, and how simple type checking can be used to filter and process elements based on their data type.",
    link: "https://realpython.com/python-type-checking/",
  },
  {
    question:
      "What would you insert instead ??? so that the program prints 'True' to the monitor?",
    image: "images/image104.png",
    answers: [
      { text: "x < y", correct: false },
      { text: "x is y", correct: true },
      { text: "x is not y", correct: false },
      { text: "x != y", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The identity operator 'is' checks if x and y are the same object in memory. In this case, because strings with the same content often refer to the same object in memory due to interning (especially for small strings and literals), this will likely evaluate to True as well.",
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image105.png",
    answers: [
      { text: "44", correct: false },
      { text: "(4,)", correct: false },
      { text: "(4)", correct: false },
      { text: "4", correct: true },
    ],
    explanation:
      "Explanation:<br><br>Initially, data is assigned a tuple (1, 2, 4, 8). The slicing operation data[-2:-1] extracts a portion of this tuple, specifically creating a new tuple containing just the second-to-last element, which is (4,). Then, data is reassigned to the last element of this new tuple, which is simply 4. Therefore, when the final value of data is printed, the output is 4.",
    link: "https://realpython.com/python-tuples/",
  },
  {
    question:
      "Which of the following commands can be used to read the next line from a file?",
    answers: [
      { text: "readline( )", correct: true },
      { text: "read(n)", correct: false },
      { text: "read( )", correct: false },
      { text: "readlines( )", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The readline() method reads the next line from the file and returns it as a string. It is similar to the read() method, except it reads only one line at a time.",
    link: "https://www.w3schools.com/python/ref_file_readline.asp",
  },
  {
    question: "A built-in function is a function which ...",
    answers: [
      {
        text: "comes with Python, and is an integral part of Python.",
        correct: true,
      },
      { text: "is hidden from programmers.", correct: false },
      { text: "has to be imported before use.", correct: false },
      {
        text: "has been placed within your code by another programmer.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>A built-in function is a function which comes with Python, and is an integral part of Python. It is one of the fundamental building blocks of any programming language.",
    link: "https://www.geeksforgeeks.org/python-built-in-functions/",
  },
  {
    question:
      "Which of the following functions can be used to check if a file exists?",
    answers: [
      { text: "os.isFile( )", correct: false },
      { text: "os.path.exists( )", correct: false },
      { text: "os.path.isfile( )", correct: true },
      { text: "os.path.isFile( )", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The os.path.isfile() function checks if the path is an existing regular file. It returns True if it exists and False if it does not.",
    link: "https://www.geeksforgeeks.org/python-os-path-isfile-method/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image106.png",
    answers: [
      { text: "Peter", correct: true },
      { text: "Paul", correct: false },
      { text: "Mary", correct: false },
      { text: "The code is erroneous.", correct: false },
      { text: "None of the above.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Initially, the list data is assigned the elements ['Peter', 'Paul', 'Mary']. The expression inside the print statement is data[int(-1 / 2)]. To understand this, we need to evaluate the expression int(-1 / 2) first.<br><br>The division of -1 by 2 results in -0.5. Applying the int() function to -0.5 truncates the decimal part, yielding 0 because converting a float to an integer in Python truncates towards zero. So, int(-0.5) evaluates to 0.<br><br>Thus, the expression data[int(-1 / 2)] simplifies to data[0]. The index 0 in the list data refers to the first element, which is 'Peter'.",
    link: "https://www.w3schools.com/python/python_lists.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image107.png",
    answers: [
      { text: "1", correct: false },
      { text: "3", correct: false },
      { text: "6", correct: true },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The given code snippet defines a function func(x) that uses recursion to compute the sum of all integers from x down to 0. Here's how it works:<br><br>When func(3) is called, the function checks if x is 0. Since x is 3, which is not 0, the function proceeds to return the value of 3 plus the result of func(2). The call to func(2) then triggers a similar process: it checks if x is 0, finds that x is 2, and returns 2 plus the result of func(1).<br><br>This pattern continues with func(1), which returns 1 plus the result of func(0). Finally, func(0) reaches the base case where x is indeed 0, so it returns 0.<br><br>As the recursion unwinds, func(1) returns 1, func(2) returns 3, and func(3) ultimately returns 6, which is the sum of 3 + 2 + 1 + 0.<br><br>Therefore, when print(func(3)) is executed, the output will be 6.",
    link: "https://www.programiz.com/python-programming/recursion",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image108.png",
    answers: [
      { text: "0", correct: true },
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The for loop runs four times (len(data) is 4, as the dictionary has four key-value pairs). Each iteration updates x based on its current value as a key in the dictionary. <br><br>First Iteration: <br>x is 0. <br>x is updated to data[0], which is 1. <br><br>Second Iteration: <br>x is now 1. <br>x is updated to data[1], which is 0. <br><br>Third Iteration: <br>x is now 0 again. <br>x is updated to data[0], which is 1. <br><br>Fourth Iteration: <br>x is now 1 again. <br>x is updated to data[1], which is 0 = final value.<br><br>The variable x oscillates between 0 and 1 throughout the iterations due to the values stored in the dictionary data.",
    link: "https://www.programiz.com/python-programming/dictionary",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image109.png",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "5", correct: false },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The output of the code snippet is 2. This is because the method set updates self.x to 2 + 3 (which is 5) but returns the original value of x (which is 2). Thus, when print(a.set(a.x + 1)) is executed, it prints 2, which is the value returned by the set method.",
    link: "https://www.programiz.com/python-programming/methods",
  },
  {
    question: "What is the output of math.ceil(-1.1)?",
    answers: [
      { text: "-1", correct: true },
      { text: "-1.0", correct: false },
      { text: "-2", correct: false },
      { text: "-2.0", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The math.ceil() function in Python returns the smallest integer greater than or equal to a given number. For -1.1, the smallest integer greater than -1.1 is -1.",
    link: "https://www.w3schools.com/python/ref_math_ceil.asp",
  },
  {
    question: "What is the output of math.floor(-1.1)?",
    answers: [
      { text: "-1", correct: false },
      { text: "-1.0", correct: false },
      { text: "-2", correct: true },
      { text: "-2.0", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The math.floor() function in Python returns the largest integer less than or equal to a given number. For -1.1, the largest integer less than -1.1 is -2.",
    link: "https://www.w3schools.com/python/ref_math_floor.asp",
  },
  {
    question:
      "Which of the follwing returns a random floating number between 0 and 1?",
    answers: [
      { text: "math.random()", correct: false },
      { text: "math.random(1.0)", correct: false },
      { text: "random.random()", correct: true },
      { text: "random.random(1.0)", correct: false },
    ],
    explanation:
      "Explanation:<br><br>random.random() in Python generates a random floating-point number between 0.0 (inclusive) and 1.0 (exclusive). It returns a value in the range [0.0, 1.0)",
    link: "https://www.w3schools.com/python/ref_random_random.asp",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image110.png",
    answers: [
      { text: "None", correct: false },
      { text: "True", correct: true },
      { text: "0", correct: false },
      { text: "False", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The output is True. Both dir(math) and dir(sys) return lists, so b1 and b2 are both True. The logical and between them results in True.",
    link: "https://www.geeksforgeeks.org/python-dir-function/",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image111.png",
    answers: [
      { text: "It outputs 0", correct: false },
      { text: "It outputs 1", correct: false },
      { text: "It outputs 2", correct: true },
      { text: "The code is erroneous and will not execute", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The output is 2. The code raises a ValueError because '2A' cannot be converted to an integer, so n is set to 2.",
    link: "https://docs.python.org/3/library/exceptions.html#base-classes",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image112.png",
    answers: [
      { text: "It outputs 1", correct: false },
      { text: "It outputs 2", correct: false },
      { text: "It outputs 3", correct: true },
      { text: "The code is erroneous and will not execute", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The output is 3. The foo(0) call triggers a ZeroDivisionError, an ArithmeticError subclass. This increments m by 1 and re-raises the exception. The outer try-except block catches the ArithmeticError, adding 2 more to m, resulting in a final value of 3.",
    link: "https://docs.python.org/3/library/exceptions.html#base-classes",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image113.png",
    answers: [
      { text: "It outputs error", correct: false },
      { text: "It outputs 0", correct: false },
      { text: "The code is erroneous and will not execute", correct: false },
      { text: "It outputs list assignment index out of range", correct: true },
    ],
    explanation:
      `Explanation:<br><br>The output of the provided code will be "list assignment index out of range". <br><br>This happens because the code tries to assign a value to my_list[3], which does not exist in the list my_list that has only three elements with valid indices 0, 1, and 2. <br><br>When the code tries to access index 3, an IndexError is raised. The except block catches this error and prints out the error message "list assignment index out of range".`,
    link: "https://www.freecodecamp.org/news/list-index-out-of-range-python-error-message-solved/",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image114.png",
    answers: [
      { text: "It outputs 3", correct: true },
      { text: "It outputs 'None'", correct: false },
      { text: "It outputs 0", correct: false },
      { text: "It raises an exception", correct: false },
    ],
    explanation:
      `Explanation:<br><br>In this code, the expression str(1/3) calculates the result of dividing 1 by 3, which gives approximately 0.3333333333333333. This result is then converted to a string, so the variable string holds the value "0.3333333333333333".<br><br>The variable dummy is initialized as an empty string. The for loop iterates over each character in the string and concatenates each character to dummy. As a result, dummy ends up being the same as string.<br><br>After the loop completes, dummy contains the string "0.3333333333333333". The print(dummy[-1]) statement prints the last character of this string, which is '3'.`,
    link: "https://www.geeksforgeeks.org/convert-integer-to-string-in-python/",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image115.png",
    answers: [
      { text: "It outputs True", correct: true },
      { text: "It outputs False", correct: false },
      { text: "It outputs nothing", correct: false },
      { text: "It raises an exception", correct: false },
    ],
    explanation:
      'Explanation:<br><br>The output is True. The split method creates a list of strings without separators, and join concatenates them into "alphabetagamme", which contains only alphabetic characters. Thus, isalpha() returns True.',
    link: "https://www.w3schools.com/python/ref_string_isalpha.asp",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image116.png",
    answers: [
      { text: "It outputs 1", correct: true },
      { text: "It outputs 0", correct: false },
      { text: "It raises an exception", correct: false },
      { text: "It outputs 2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code prints 1. Sub_A's doit() method calls its overridden make() method, returning 1, while Sub_B's doit() calls the inherited make() method from Super, returning 0. The sum is 1.",
    link: "https://docs.python.org/3/tutorial/classes.html#inheritance",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image117.png",
    answers: [
      { text: "False upper", correct: false },
      { text: "True upper", correct: true },
      { text: "False lower", correct: false },
      { text: "True lower", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code prints True upper. Object is an instance of Lower, and super().__init__() in Lower calls Upper's constructor, setting Object.property to 'upper'.",
    link: "https://docs.python.org/3/tutorial/classes.html#inheriting-from-classes",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image118.png",
    answers: [
      { text: "It raises an exception", correct: false },
      { text: "It outputs 2", correct: false },
      { text: "It outputs 0", correct: false },
      { text: "It outputs 1", correct: true },
    ],
    explanation:
      "Explanation:<br><br>First, the Class is defined with a class variable Variable initialized to 0 and an instance variable value initialized to 0 within the __init__ method. When object_1 is created, the __init__ method is called, setting object_1.value to 0. After that, the class variable Class.Variable is incremented by 1, making its value 1.<br><br>Next, object_2 is created, which also triggers the __init__ method, setting object_2.value to 0. Then, object_2.value is explicitly incremented by 1, making its value 1. At this point, object_2.Variable refers to the class variable Variable, which is 1, and object_1.value remains 0.<br><br>When the code prints object_2.Variable + object_1.value, it adds 1 (from object_2.Variable) and 0 (from object_1.value), resulting in the output 1.",
    link: "https://docs.python.org/3/tutorial/classes.html#class-variables",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image119.png",
    answers: [
      { text: "It outputs 6", correct: false },
      { text: "It raises an exception", correct: false },
      { text: "It outputs 1", correct: false },
      { text: "It outputs 2", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The provided code defines a class Class with a private class variable __Var initialized to 0. The class also has a method foo, which increments Class.__Var by 1 and assigns this incremented value to an instance variable __prop, which is also private.<br><br>When o1, an instance of Class, is created and its foo method is called, Class.__Var is incremented from 0 to 1, and o1.__prop is set to this value 1. Afterward, another instance o2 is created, but its foo method is not called. This means that o2's __prop is never assigned, and Class.__Var remains 1.<br><br>In the final print statement, the code attempts to access the private class variable __Var and the private instance variable __prop. These private variables are accessed using their name-mangled versions: _Class__Var for the class variable and _Class__prop for the instance variable.<br><br>The expression o2._Class__Var + o1._Class__prop adds 1 (the value of Class.__Var via o2._Class__Var) to 1 (the value of o1._Class__prop). As a result, the output of the code is 2.",
    link: "https://docs.python.org/3/tutorial/classes.html#private-variables",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image120.png",
    answers: [
      { text: "4", correct: false },
      { text: "1", correct: true },
      { text: "16", correct: false },
      { text: "An exception is raised", correct: false },
    ],
    explanation:
      "Explanation:<br><br>range(-2, 2) creates a collection of numbers, starting from -2 and ending at 2 (exclusive), so [-2, -1, 0, 1].<br><br>The filter function or lambda function filters out everything where the absolute value is less than 1.<br><br>The absolute value or the absolute value function is as follows: absolute value |x| = √(x²).<br><br>Thus, for -2, it is √(-2)² = √4 = 2.<br>Similarly, for -1, the absolute value is 1.<br><br>So [-2, -1, 0, 1] becomes [2, 1, 0, 1].<br><br>Now, everything that is less than 1 (True) is filtered out, so only 0 remains in the variable m.Therefore, the final result for the length of m, which contains only the element 0, is 1.",
    link: "https://docs.python.org/3/tutorial/controlflow.html#list-comprehensions",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image121.png",
    answers: [
      { text: "1", correct: false },
      { text: "0", correct: true },
      { text: "3", correct: false },
      { text: "The code is erroneous and will not execute", correct: false },
    ],
    explanation:
      "Explanation:<br><br>3 % 1 is 0. <br><br>Since x = 0, the else block is executed, which prints 0.",
    link: "https://www.geeksforgeeks.org/what-is-a-modulo-operator-in-python/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image122.png",
    answers: [
      { text: "An exception is raised", correct: false },
      { text: "1", correct: false },
      { text: "0", correct: false },
      { text: "-1", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The foo function takes three parameters: x, y, and z. x is expected to be a function. In the code, x is a lambda function that returns the remainder of dividing its input by 2 (x % 2).<br><br> When calling foo(lambda x: x % 2, 2, 1), the lambda function is applied to both 2 and 1. For 2, 2 % 2 equals 0, and for 1, 1 % 2 equals 1. The function subtracts these results: 0 - 1.<br><br> Thus, the expected output is -1.",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image123.png",
    answers: [
      { text: "The code is erroneous and will not execute", correct: false },
      { text: "It outputs [4, 2, 0]", correct: false },
      { text: "It outputs [3, 1]", correct: true },
      { text: "It outputs [1, 3]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>my_list is created as [0, 1, 2, 3, 4].<br><br>The list iterates over the indices 4, 3, 2, 1 (in that order) and selects the values from my_list at those indices if the value is not divisible by 2 (i.e., it's odd).<br><br> For i = 4, my_list[4] is 4 (even, so it's not included).<br>br>For i = 3, my_list[3] is 3 (odd, so it's included).<br>br>For i = 2, my_list[2] is 2 (even, so it's not included).<br><br>For i = 1, my_list[1] is 1 (odd, so it's included).<br><br>Therefore, the resulting list m is [3, 1].<br><br>The output of the code is [3, 1].",
    link: "https://www.w3schools.com/python/python_lists_comprehension.asp",
  },
  {
    question: "What is the expected behaviour of the following code?",
    image: "images/image124.png",
    answers: [
      { text: "The code is erroneous and will not execute", correct: true },
      { text: "It outputs 1", correct: false },
      { text: "It outputs 3", correct: false },
      { text: "It outputs 2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The 'except' clause must be last in the 'try-except' block, otherwise it will not be executed and results in a SyntaxError.",
    link: "https://www.w3schools.com/python/python_try_except.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image125.png",
    answers: [
      { text: "It outputs False", correct: true },
      { text: "It raises an exception", correct: false },
      { text: "It outputs True", correct: false },
      { text: "It outputs nothing", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code joins the tuple ('alpha', 'omega') into the string  'alpha,,omega'  using  ,,  as a delimiter.<br><br>It then splits this string by , resulting in the list ['alpha',  '',  'omega'].<br><br> Finally, the code checks if the string ',' is an element in this list. <br><br>Since ',' is not in the list, the output is False.",
    link: "https://www.w3schools.com/python/ref_string_split.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image126.png",
    answers: [
      { text: "It outputs 123", correct: false },
      { text: "It raises an exception", correct: false },
      { text: "It outputs 6", correct: true },
      { text: "It outputs 321", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code reverses the string `'123'`, resulting in `'321'`. It then iterates over each character in this reversed string, converting each character to an integer and adding it to the variable `dummy`. <br><br>Starting with `dummy` equal to 0, it first adds 3, then 2, and finally 1. After these additions, the value of `dummy` becomes 6, which is then printed.",
    link: "https://www.geeksforgeeks.org/python-reversed-function/",
  },
  {
    question: "What is the expected behaviour of the following code?",
    image: "images/image127.png",
    answers: [
      { text: "It outputs 3", correct: false },
      { text: "It outputs 2", correct: false },
      { text: "It outputs 5", correct: true },
      { text: "It raises an exception", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code defines a class named Class with a class variable Var initialized to 0. When an instance of this class is created, the __init__ method sets an instance variable var and increments the class variable Var by 1.<br><br>When object_1 is created with the value 1, it sets object_1.var to 1 and increases Class.Var to 1. Then, when object_2 is created with the value 2, it sets object_2.var to 2 and increments Class.Var to 2. Finally, the code prints the sum of Class.Var, object_1.var, and object_2.var, which equals 2 + 1 + 2, resulting in an output of 5.",
    link: "https://docs.python.org/3/tutorial/classes.html#instance-variables",
  },
  {
    question: "What is the expected behaviour of the following code?",
    image: "images/image128.png",
    answers: [
      { text: "It raises an exception", correct: false },
      { text: "It outputs 2", correct: false },
      { text: "It outputs 3", correct: true },
      { text: "It outputs 1", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code defines a base class `Super` with two methods: `make`, which returns `0`, and `doit`, which calls the `make` method. There are two subclasses, `Sub_A` and `Sub_B`, each of which overrides the `make` method. `Sub_A`'s `make` method returns `1`, and `Sub_B`'s returns `2`.<br><br>When an instance of `Sub_A` is created and the `doit` method is called on it, the overridden `make` method in `Sub_A` is executed, returning `1`. Similarly, when an instance of `Sub_B` calls `doit`, the overridden `make` method in `Sub_B` returns `2`.<br><br>Finally, the code prints the sum of `a.doit()` and `b.doit()`, which is `1 + 2`, resulting in an output of `3`.",
    link: "https://docs.python.org/3/tutorial/classes.html#overriding-methods",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image129.png",
    answers: [
      { text: "3", correct: false },
      { text: "4", correct: false },
      { text: "2", correct: true },
      { text: "An exception is raised", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code defines a function 'foo' that takes three arguments: x, y, and z. <br><br>The function returns the result of applying x to the result of applying y to z.<br><br>In the function call 'foo(lambda x: 2 * x, lambda x: x // 2, 2)', the argument y is 'lambda x: x // 2' and z is 2. <br><br>Applying y to z results in 2 // 2, which equals 1.<br><br> This result is then passed to x, where x is 'lambda x: 2 * x'. <br><br>Applying x to 1 gives 2 * 1, which equals 2.<br><br>Therefore, the print statement outputs 2.",
    link: "https://realpython.com/python-lambda/#anonymous-functions",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image130.png",
    answers: [
      { text: "An exception is raised", correct: false },
      { text: "a", correct: false },
      { text: "b", correct: false },
      { text: "c", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The code defines a tuple mytu containing the elements ('a', 'b', 'c'). It then creates a new tuple m by applying a lambda function to each element of mytu. The lambda function converts each character to its ASCII value using ord, adds 1 to this value, and then converts it back to a character using chr.<br><br>For the character 'a', ord('a') is 97, so chr(97 + 1) results in 'b'.<br><br>For the character 'b', ord('b') is 98, so chr(98 + 1) results in 'c'.<br>br>For the character 'c', ord('c') is 99, so chr(99 + 1) results in 'd'.<br><br>Thus, the tuple m becomes ('b', 'c', 'd').<br><br>Finally, m[-2] accesses the second-to-last element of the tuple m, which is 'c'. Therefore, the print statement outputs 'c'.",
    link: "https://realpython.com/python-lambda/#anonymous-functions",
  },
  {
    question: "What is the expected behaviour of the following code?",
    image: "images/image131.png",
    answers: [
      { text: "It outputs abcef", correct: false },
      { text: "The code is erroneous and will not execute", correct: true },
      { text: "It outputs abcdef", correct: false },
      { text: "It outputs abdef", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code snippet attempts to delete the character at index 2 from the string str and then return the modified string. However, strings in Python are immutable, meaning they cannot be changed after they are created.<br><br>The function fun is defined to take a string s as input. It tries to delete the character at index 2 using del s[2].<br><br>Since strings are immutable, you cannot use del to remove characters from them. This will result in a TypeError indicating that the object does not support item deletion.<br><br>Thus, running this code will produce a TypeError and will not print any result.",
    link: "https://www.w3schools.com/python/ref_keyword_del.asp",
  },
  {
    question: "What is true about Python packages?<br><br>(Choose three)",
    answers: [
      {
        text: "A code designed to initialize a package's state should be placed inside a file named init.py",
        correct: true,
      },
      {
        text: "A package's contents can be stored and distributed as an mp3 file",
        correct: false,
      },
      {
        text: "__pycache__ is a folder that stores semi-compiled Python modules",
        correct: true,
      },
      { text: "The sys.path variable is a list of strings", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The __init__.py file is used to initialize a Python package and can contain initialization code or define what is available for import when the package is imported.<br><br>The __pycache__ directory contains bytecode-compiled versions of Python modules, which are files with a .pyc extension. These files help Python start up faster by skipping the compilation step.<br><br>sys.path is a list of strings that specifies the search paths for modules. It includes directories and zip files where Python looks for modules when importing.",
    link: "https://docs.python.org/3/library/sys.html#sys.path",
  },
  {
    question:
      "Assuming that the code below has been executed successfully, which of the following expressions will always evaluate to True?<br><br>(Choose two)",
    image: "images/image700.png",
    answers: [
      { text: "len(random.sample([1, 2, 3], 1)) > 2", correct: false },
      { text: "v1 == v2", correct: false },
      { text: "random.choice([1, 2, 3]) > 0", correct: true },
      { text: "v1 != v2", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The function random.choice([1, 2, 3]) randomly selects an element from the list [1, 2, 3]. Since all elements in this list (1, 2, and 3) are greater than 0, random.choice([1, 2, 3]) > 0 will always be True<br><br>v1 != v2 will always evaluate to True because v1 and v2 are randomly generated floating-point numbers between 0.0 and 1.0. While it is theoretically possible for v1 and v2 to be exactly equal, in practical terms with the precision of floating-point numbers, they are very unlikely to be exactly the same. Thus, this condition will almost always be true.",
    link: "https://docs.python.org/3/library/random.html#random.choice",
  },
  {
    question:
      "Which of the following code snippets will execute without raising any unhandled exceptions? <br><br>(Choose two)",
    image: "images/image701.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: true },
      { text: "C", correct: false },
      { text: "D", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In A, print(-1/1) executes successfully without raising an exception, so the except block is skipped, and the else block runs, printing 1/1. Thus, this code runs without errors.<br><br>In B, x = 1 executes without errors, so the except block is skipped. The else block runs and updates x to 3. This snippet works fine without any exceptions.<br><br>C raises a NameError in the try block because y is undefined. The except block also fails to handle this properly, causing another NameError. Hence, this snippet does not work due to unhandled exceptions.<br><br>In D, x = 1/0 raises a ZeroDivisionError, which is not caught by the except block that only handles NameError. As a result, the snippet fails due to the unhandled ZeroDivisionError",
    link: "https://docs.python.org/3/tutorial/errors.html#handling-exceptions",
  },
  {
    question: "What is true about the following snippet?<br><br>(Choose two)",
    image: "images/image702.png",
    answers: [
      { text: 'The string "the show must go on" will be seen', correct: false },
      { text: 'The string "nice to see you" will be seen', correct: true },
      { text: 'The string "na na na na" will be seen', correct: false },
      { text: "The code will raise an unhandled exception", correct: false },
      { text: 'The string  "I feel good" will be seen', correct: true },
    ],
    explanation:
      'Explanation:<br><br>The snippet defines a custom exception class E with a fixed string message in its __str__ method. In the try block, it prints "I feel food" and raises an instance of E with a specific message.<br><br> The except block catches the exception and prints "nice to see you" due to the custom __str__ method. The else block is skipped because an exception was raised.',
    link: "https://docs.python.org/3/tutorial/errors.html#user-defined-exceptions",
  },
  {
    question:
      "Which of the following expressions evaluates to True? <br><br>(Choose two)",
    image: "images/image703.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],
    explanation: `Explanation:<br><br>For A, ord("0") - ord("9") == 10, the ord("0") function returns the ASCII value of "0", which is 48, and ord("9") returns the ASCII value of "9", which is 57. Subtracting these values gives 48 - 57, which equals -9. Since -9 is not equal to 10, this expression is false.<br><br>In B, len("''") == 2, checks the length of the string ''. The string contains two single quotes, so its length is indeed 2. Therefore, this expression is true.<br><br>For C, chr(ord('z') - 1) == 'y', ord('z') gives the ASCII value of 'z', which is 122. Subtracting 1 from 122 gives 121, and chr(121) returns the character 'y'. Since 'y' is indeed equal to 'y', this expression is true.<br><br>In D, len(''1234'') == 4, contains an incorrectly formatted string (''1234''), which would cause a syntax error in Python. If the string were properly formatted as "1234", its length would be 4. However, as it is written, the expression is invalid and does not evaluate to anything.`,
    link: "https://python-reference.readthedocs.io/en/latest/docs/str/ASCII.html",
  },
  {
    question:
      "Which of the following expressions evaluates to True? <br><br>(Choose two)",
    image: "images/image704.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: true },
    ],
    explanation:
      "Explanation:<br><br>For A, 'xYz'.lower() > 'XY', the .lower() method converts the string 'xYz' to lowercase, resulting in 'xyz'. When comparing 'xyz' with 'XY', Python compares the strings lexicographically based on Unicode values. The lowercase 'x' has a higher Unicode value than the uppercase 'X', so 'xyz' > 'XY' is true.<br><br>In B, '8' + '8' != 2 * '8', the operation '8' + '8' concatenates the two strings, resulting in '88'. The expression 2 * '8' repeats the string '8' twice, also resulting in '88'. Since '88' is equal to '88', the expression '8' + '8' != 2 * '8' is false.<br><br>For C, float('3.14') == str('3.' + '14'), the float('3.14') converts the string '3.14' to the float 3.14. The str('3.' + '14') first concatenates the strings '3.' and '14' to form '3.14', and then converts it to a string, which remains '3.14'. However, a float 3.14 is not equal to a string '3.14', so this expression is false.<br><br>In D, 121 + 1 == int('1' + 2 * '2'), the calculation 121 + 1 results in 122. The expression '1' + 2 * '2' first repeats the string '2' twice to get '22', and then concatenates it with '1' to form '122'. Converting this string '122' to an integer using int('122') results in the integer 122. Since 122 == 122, this expression is true.",
    link: "https://docs.python.org/3/reference/expressions.html#value-comparisons",
  },
  {
    question:
      "Which of the following invocations are valid?<br><br>(Choose two)",
    answers: [
      { text: 'sort("python")', correct: false },
      { text: '"python".find("")', correct: true },
      { text: '"python".sort()', correct: false },
      { text: 'sorted("python")', correct: true },
    ],
    explanation: `Explanation:<br><br>sort("python") - This is not valid. The sort() method is available only for lists, not strings. Strings in Python are immutable, so they cannot be sorted in place.<br><br>"python".find("") - This is valid. The find() method can be used on a string to search for a substring. When you pass an empty string "" as the argument, it returns 0 because an empty string is found at the beginning of any string.<br><br>"python".sort() - This is not valid. Like sort("python"), this also fails because the sort() method cannot be applied to strings, as it is a list-specific method.<br><br>sorted("python") - This is valid. The sorted() function can be used with strings. It returns a list of characters sorted in ascending order (i.e., ['h', 'n', 'o', 'p', 't', 'y'] for the string "python").`,
    link: "https://docs.python.org/3/howto/sorting.html",
  },
  {
    question:
      "Which of the following invocations are valid?<br><br>(Choose two)",
    answers: [
      { text: "'in' in 'in'", correct: true },
      { text: "'in' in 'Hamburg'", correct: false },
      { text: "'in not' in 'not'", correct: false },
      { text: "'m'.upper() in 'Marvin'", correct: true },
    ],
    explanation:
      "Explanation:<br><br>'in' in 'in' - This is valid. The expression checks if the substring 'in' is present in the string 'in'. Since both are the same, the result is True.<br><br>'in' in 'Hamburg' - This is not valid. The expression checks if the substring 'in' is present in the string 'Hamburg'. Since 'in' is not present in 'Hamburg', the result is False.<br><br>'in not' in 'not' - This is not valid. The expression checks if the substring 'in not' is present in the string 'not'. Since 'in not' is longer and doesn't exist in 'not', the result is False.<br><br>'m'.upper() in 'Marvin' - This is valid. The expression converts 'm' to its uppercase form 'M' and checks if 'M' is present in the string 'Marvin'. Since 'M' is indeed in 'Marvin', the result is True.",
    link: "https://docs.python.org/3/reference/expressions.html#membership-test-operations",
  },
  {
    question: "Which of the following statements are true?<br><br>(Choose two)",
    answers: [
      {
        text: "An escape sequence can be recognized by the / sign put in front of it",
        correct: false,
      },
      { text: "ASCII is a subset of Unicode", correct: true },
      { text: "II in ASCII stands for Internal Information", correct: false },
      {
        text: "A code point is a number assigned to a given character",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>ASCII (American Standard Code for Information Interchange) is a character encoding standard that uses 7 bits to represent 128 characters. Unicode is a more extensive encoding system that encompasses ASCII as its first 128 characters, allowing for the representation of a much wider array of characters and symbols from various languages and scripts.<br><br>In Unicode, a code point is a unique number assigned to each character in the Unicode standard. For example, the code point for the letter 'A' is U+0041.",
    link: "https://en.wikipedia.org/wiki/ASCII",
  },
  {
    question:
      "Assuming the code below has been executed successfully, which of the following expressions evaluate to True? <br><br>(Choose two)",
    image: "images/image705.png",
    answers: [
      { text: "'var' in Class __dict__", correct: true },
      { text: "'data' in Object.__dict", correct: false },
      { text: "len(Class.__dict__) == 1", correct: false },
      { text: "'data' in Class.__dict__", correct: true },
    ],
    explanation:
      "Explanation:<br><br>'var' in Class.__dict__, evaluates to true. This is because Class.__dict__ is a dictionary containing the class attributes of Class. Since var is a class attribute defined in Class, it will be present in this dictionary.<br><br>'data' in Object.__dict__, evaluates to false. This is because Object.__dict__ is a dictionary containing only the instance attributes of the Object instance. Since data is a class attribute and not an instance attribute, it will not be found in this dictionary.<br><br>len(Class.__dict__) == 1, evaluates to false. The Class.__dict__ dictionary contains multiple entries, including the class attributes var and data, as well as other special entries such as methods and possibly module information. Therefore, the length of Class.__dict__ is greater than one.<br><br>'data' in Class.__dict__, evaluates to true. Since data is a class attribute of Class, it is included in the Class.__dict__ dictionary, making this expression true.",
    link: "https://docs.python.org/3/reference/datamodel.html#object.__dict__",
  }, 
  {
    question: "What is true about lambda function? <br><br>(Choose two)",
    answers: [
      { text: "They are called anonymous functions", correct: true },
      { text: "They cannot return the None value as a result", correct: false },
      { text: "They must contain the return keyword", correct: false },
      { text: "They can have zero arguments", correct: true },
    ],
    explanation:
      "Explanation:<br><br>Lambda functions in Python are indeed known as anonymous functions because they are defined without a name. They are often used for short, throwaway functions where defining a full function with a name would be unnecessarily verbose.<br><br>A lambda function in Python can have any number of arguments, including zero arguments. Lambda function with no arguments performs a simple operation without needing any inputs. However, they cannot have zero parameters.",
    link: "https://docs.python.org/3/reference/compound_stmts.html#lambda",
  },
  {
    question:
      "Which of the following lines contain valid Python code? <br><br>(Choose two)",
    image: "images/image707.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "C", correct: false },
      { text: "D", correct: true },
    ],
    explanation:
      "Explanation: <br><br>A is invalid because you cannot use return in a lambda function. Lambda functions are meant to be single expressions, not statements.<br><br>B is valid. It defines a lambda function that takes two arguments a and b, and returns a if a is less than b, otherwise it returns b. <br><br>C is invalid. Lambda functions do not support default argument values in this manner. <br><br>D is valid. It defines a lambda function that takes two arguments a and b but always returns True, regardless of the values of a and b.",
    link: "https://docs.python.org/3/reference/compound_stmts.html#lambda",
  },
  {
    question:
      "Select the true statements about the map() function? <br><br>(Choose two)",
    answers: [
      {
        text: "The map() function can accept more than two arguments.",
        correct: true,
      },
      {
        text: "The map() function can accept only two arguments.",
        correct: false,
      },
      {
        text: "The first map() function argument can be a list.",
        correct: false,
      },
      {
        text: "The second map() function argument can be a list.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>The map() function can accept more than two arguments. The first argument is a function, and subsequent arguments are iterables. If there are multiple iterables, map() will apply the function using corresponding elements from each iterable.<br><br>The second argument (and any subsequent arguments) to map() can be lists (or other iterables). These iterables are used as inputs to the function provided as the first argument.",
    link: "https://docs.python.org/3/library/functions.html#map",
  },
  {
    question:
      "Which of the following snippets outputs '1 2 3'? <br><br>(Choose two)",
    image: "images/image708.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: true },
      { text: "C", correct: false },
      { text: "D", correct: false },
    ],
    explanation: `Explanation:<br><br>Snippet A converts the string "321" into a list of characters, sorts the list into ['1', '2', '3'], and then joins the sorted elements with a space separator. This results in the output "1 2 3".<br><br>Snippet B sorts the characters of the string "321" into a list ['1', '2', '3'], and then joins these sorted characters with a space separator, also producing the output "1 2 3.`,
    link: "https://docs.python.org/3/library/functions.html#sorted",
  },
  {
    question:
      "Which of the following are valid Python string literals? <br><br>(Choose two)",
    answers: [
      { text: '" " " Hello there! General Kenobi!" " " "', correct: true },
      { text: "'All the emperor's druids'", correct: false },
      { text: '""', correct: false },
      { text: `"King's Cross Station"`, correct: true },
    ],
    explanation: `Explanation:<br><br>A is a valid Python string literal. Triple quotes (""" or ''') allow for multi-line strings and can include both single and double quotes within the string without the need for escaping.<br><br>B is not a valid Python string literal. The single quote within the string (emperor's) conflicts with the single quotes used to define the string, which causes a syntax error. To make this valid, you would need to either escape the inner single quote or use double quotes for the string.<br><br>C is not a valid Python string literal. The backslash (\) is an escape character, and it's incomplete here. To make this valid, you would need to complete the escape sequence or use a double backslash to represent a literal backslash.<br><br>D is a valid Python string literal. The string is enclosed in double quotes, so the single quote within the string (King's) does not cause any issues.`,
    link: "https://www.w3schools.com/python/python_strings.asp",
  },
  {
    question:
      "Assuming that the following code has been executed successfully, indicate the expressions which evaluate to True and don't raise any exceptions. <br><br>(Choose two)",
    image: "images/image709.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Expression A, 'stuff' in binder.__dict__, evaluates to False because after the method dispose() is called on the binder object, the stuff attribute is deleted. As a result, 'stuff' is no longer present in binder.__dict__.<br><br>Expression B, len(binder.__dict__) != len(Collection.__dict__), evaluates to True. After dispose() is called, binder.__dict__ is likely empty, while Collection.__dict__ still contains the class attributes, including stamps. Since the lengths of these dictionaries are different, this expression is true.<br><br>Expression C, 'stamps' in Collection.__dict__, evaluates to True. The stamps attribute is a class attribute of the Collection class, and it remains in Collection.__dict__, so this expression is true.<br><br>Expression D, len(binder.__dict__) > 0, evaluates to False. After the dispose() method deletes the stuff attribute, binder.__dict__ becomes empty, so its length is not greater than zero.",
    link: "https://docs.python.org/3/library/functions.html#len",
  },
  {
    question:
      "Which of the following function calls can be used to invoke the below function definition? <br><br>(Choose three)",
    image: "images/image710.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: true },
      { text: "C", correct: false },
      { text: "D", correct: true },
      { text: "E", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A is valid because it passes four positional arguments that directly match the parameters a, b, c, and d in the function's definition.<br><br> B is also valid. It uses three positional arguments for the parameters a, b, and c, and assigns a value to d using a keyword argument, which is perfectly acceptable in Python.<br><br>C is invalid because it incorrectly mixes keyword arguments with a positional argument that comes after them. In Python, once you start using keyword arguments, all subsequent arguments must also be passed as keyword arguments.<br><br>D is valid. It uses keyword arguments for all four parameters, matching the function's signature exactly, which is allowed and correct.<br><br>Lastly, E is invalid because it starts with a keyword argument and then follows with positional arguments. In Python, after using a keyword argument, all subsequent arguments must also be passed as keyword arguments.",
    link: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions",
  },
  {
    question: "Select the true statements. <br><br>(Choose two)",
    answers: [
      {
        text: "The lambda function can evaluate multiple expressions.",
        correct: false,
      },
      {
        text: "The lambda function can evaluate only one expression.",
        correct: true,
      },
      {
        text: "The lambda function can accept a maximum of two arguments.",
        correct: false,
      },
      {
        text: "The lambda function can accept any number of arguments.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>Lambda functions can have any number of arguments but only one expression. The expression is evaluated and returned. Lambda functions can be used wherever function objects are required.",
    link: "https://www.programiz.com/python-programming/anonymous-function#how",
  },
  {
    question:
      "What is true about object-oriented programming (OOP)? <br><br>(Choose two)",
    answers: [
      {
        text: "A class is like a blueprint used to construct objects.",
        correct: true,
      },
      {
        text: "A class may exist without its objects, while objects cannot exist without their class.",
        correct: true,
      },
      {
        text: "A relation between superclass and its subclass is known as fraternity.",
        correct: false,
      },
      {
        text: "Polymorphism is a phenomenon which allows you to have many classes of the same name.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>In OOP, a class is indeed like a blueprint or template that defines the properties (attributes) and behaviors (methods) that objects created from the class will have. Objects are instances of classes.<br><br>A class can be defined without creating any objects from it. However, an object cannot exist without a class because the class defines the structure and behavior of the object.",
    link: "https://www.programiz.com/python-programming/object-oriented-programming",
  },
  {
    question:
      "Which of the following expressions evaluates to True and raises no exception? <br><br>(Choose two)",
    image: "images/image711.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: true },
    ],
    explanation:
      "Explanation:<br><br>A evaluates to True and raises no exceptions. In Python, the empty string is considered to be present in any string, so this expression correctly returns True.<br><br>B checks whether the substring 'xyz' is not present in the string 'uvwxyz'. Since 'xyz' is actually part of the string 'uvwxyz', this expression evaluates to False. While it raises no exceptions, it does not meet the criteria of evaluating to True.<br><br>C checks whether the empty string is not present in another empty string. However, Python considers the empty string to be present in any string, including another empty string, so this expression evaluates to False. It raises no exceptions, but it does not evaluate to True.<br><br>Finally, D evaluates to True and raises no exceptions. The character 'b' is indeed present in the string 'abc', so this expression correctly returns True.",
    link: "https://docs.python.org/3/reference/expressions.html#boolean-operations",
  },
  {
    question:
      "Select the true statements about the filter() function. <br><br>(Choose two)",
    answers: [
      { text: "The filter() function returns an iterator.", correct: true },
      {
        text: "The filter() function has the following syntax:filter(function, iterable)",
        correct: true,
      },
      {
        text: "The filter() function does not return an iterator.",
        correct: false,
      },
      {
        text: "The filter() function has the following syntax:filter(iterable, function)",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The filter() function returns an iterator that can be used to iterate over the filtered results. In Python 3, it doesn't return a list directly but an iterator object that yields items one by one.<br><br>The filter() function takes two arguments: a function and an iterable. The function is applied to each item in the iterable, and only items for which the function returns True are included in the iterator returned by filter().",
    link: "https://www.programiz.com/python-programming/methods/built-in/filter",
  },
  {
    question:
      "Given the code below, which of the expressions will evaluate to True? <br><br>(Choose two)",
    image: "images/image712.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "C", correct: false },
      { text: "D", correct: true },
    ],
    explanation:
      "Explanation: <br><br>Expression A compares if selection and element are the same object in memory. Since selection is an instance of Radio and element is an instance of Control, they are different objects and the expression evaluates to False.<br><br>In expression B, selection is an instance of Radio. In Radio, my_ID is inherited from Button, which is 2. Thus, selection.my_ID evaluates to 2, so this expression evaluates to True.<br><br>In expression C, start is an instance of Button, where my_ID is 2. This expression compares start.my_ID with -2, which is not equal. Thus, this expression evaluates to False.<br><br>In expression D, start is an instance of Button, so isinstance(start, Button) evaluates to True.",
    link: "https://docs.python.org/3/library/functions.html#isinstance",
  },
  {
    question:
      "Given the code below, complete the print() method body in a way that will ensure that the get() method is properly invoked <br><br>(Choose two)",
    image: "images/image713.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: true },
    ],
    explanation:
      "Explanation:<br><br>A is incorrect: get() is an instance method, so you need an instance (self) to call it. Simply using get() without self won't work within the method.<br><br>B is incorrect: get() is an instance method and needs an instance to be called. Storage.get() tries to call get() on the class, not on an instance.<br><br>C is correct: This is the correct way to call the get() method on the current instance (self). Inside the print() method, self.get() will properly invoke the get() method.<br><br>D is correct: This calls get() on the instance self using the class Storage. While it's less common, it's valid and effectively does the same as self.get().",
    link: "https://docs.python.org/3/tutorial/classes.html#instance-methods",
  },
  {
    question:
      "You develop a Python application for your company. A list named employees contains 200 employee names, the last five being company management. You need to slice the list to display all employees excluding management. <br><br>Which code segments can you use? <br><br>(Choose two)",
    answers: [
      { text: "A)   Employees[ 1:-5 ]", correct: false },
      { text: "B)   Employees[  :-5 ]", correct: true },
      { text: "C)   Employees[ 0:-5 ]", correct: true },
      { text: "D)   Employees[ 0:-4 ]", correct: false },
      { text: "E)   Employees[ 1:-4 ]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A is incorrect: This starts slicing from index 1 and excludes the last five elements. This will skip the first employee and exclude the last five, which is not the desired outcome.<br><br>B is correct: This slices the list from the beginning up to but not including the last five elements. This is the correct way to exclude the last five elements.<br><br>C is correct: This is functionally the same as employees[:-5]. It slices from the beginning of the list up to but not including the last five elements.<br><br>D is incorrect: This slices up to but not including the last four elements. It excludes only the last four, not the last five.<br><br>E is incorrect: This starts slicing from index 1 and excludes the last four elements. This skips the first employee and excludes the last four, which is not the desired outcome.",
    link: "https://docs.python.org/3/tutorial/datastructures.html#slicing",
  },
  {
    question:
      "Which of the following statements are true? <br><br>(Choose two)",
    answers: [
      {
        text: "The open( ) function raises an exception when its operation fails.",
        correct: true,
      },
      {
        text: "Trying to write a file opened in read-only mode removes its contents.",
        correct: false,
      },
      {
        text: "Read, write, and delete are the names of file open modes.",
        correct: false,
      },
      {
        text: "The second argument of the open( ) function is a string.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>If the open() function fails (for example, if the file does not exist or there are permission issues), it raises an OSError or a subclass of it, such as FileNotFoundError.<br><br>The second argument of the open() function specifies the mode in which to open the file and is indeed a string. Examples include 'r', 'w', 'a', 'rb', etc.<br><br><br><br>If you open a file in read-only mode ('r'), you cannot write to it at all. Attempting to write will raise an io.UnsupportedOperation exception. The file's contents are not removed; the write operation is simply not allowed.<br><br>The common file open modes are 'r' (read), 'w' (write), 'a' (append), and so on. Delete is not a file open mode.",
    link: "https://docs.python.org/3/library/functions.html#open",
  },
  {
    question:
      "Which of the following open modes allow you to perform read operations? <br><br>(Choose two)",
    answers: [
      { text: "r+", correct: true },
      { text: "r", correct: true },
      { text: "w", correct: false },
      { text: "a", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The r+ mode opens the file for both reading and writing. It does not truncate the file and allows you to perform read operations.<br><br>The r mode opens the file for reading only. It does not allow writing to the file.<br><br>The w mode opens the file for writing only and truncates the file if it exists. It does not permit reading from the file.<br><br>The a mode opens the file for appending. It allows writing data to the end of the file but does not allow reading from it.",
    link: "https://docs.python.org/3/library/functions.html#open",
  },
  {
    question:
      "Which of the following snippets output ABC to the screen? <br><br>(Choose two)",
      image: "images/image734.png",
    answers: [
      { text: "A)", correct: true },
      { text: "B)", correct: false },
      { text: "C)", correct: true },
      { text: "D)", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A) slices the string 'ABCDEF' from the beginning up to but not including index 3, which results in 'ABC'.<br><br>B) reverses the string and takes every second character. The string 'AXBYCZ' reversed is 'ZCYBXA', and taking every second character gives 'ZCBA'.<br><br>C) takes every second character from the string 'AXBYCZ', starting from the beginning. The result is 'ABC'.<br><br>D) slices the string 'FEDCBA' starting from the third-to-last character to the end. The result is 'CBA'.",
    link: "https://www.w3schools.com/python/python_strings_slicing.asp",
  },
  {
    question:
      "The ABC company is creating a program that allows customers to log the number of miles biked. The program will send messages based on how many miles the customer logs. <br><br>In the code below, what would you insert instead of both ???",
    image: "images/image714.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: false },
      { text: "E", correct: false },
      { text: "F", correct: true },
    ],
    explanation:
      "Explanation:<br><br>Answer A: The function doesn't need any parameters and correctly handles user input.<br><br>Answer F: The function has the necessary parameters to perform the calorie calculation based on the number of miles and the calories burned per mile.<br><br>Answers C and E incorrectly require a parameter.<br><br>In answer B, the parameter name should be calories_per_mile for clarity.<br><br>Answer D is missing required parameters.",
    link: "https://www.w3schools.com/python/python_functions.asp",
  },
  {
    question:
      "Assuming that the following code has been executed successfully, indicate the expressions which evaluate to True and don't raise any exceptions. <br><br>(Choose two)",
    image: "images/image715.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Expression A checks if the method is present in the class's dictionary and is not None. Since Class.__dict__ contains the class's attributes, including method, this evaluates to True and does not raise any exceptions.<br><br>Expression B compares the length of the instance's dictionary (object.__dict__) with the class's dictionary (Class.__dict__). Since the instance dictionary only contains instance_var and the class dictionary contains more items (like class_var and method), their lengths are different. This evaluates to False.<br><br>Expression C checks if '__dict__' is a key in Class.__dict__. However, __dict__ is a special attribute and not a key within the dictionary, so this evaluates to False but does not raise an exception.<br><br>Expression C tries to access 'method' in the instance's dictionary (object.__dict__). Since methods are stored in the class dictionary, not the instance dictionary, this will raise a KeyError exception.",
    link: "https://docs.python.org/3/library/functions.html#isinstance",
  },
  {
    question:
      "Given the code below, which of the expressions will evaluate to True? <br><br>(Choose two)",
    image: "images/image716.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Expression A checks if the value attribute of the short object is equal to 2. The short object is an instance of the Bottom class, which inherits the value attribute from the Middle class. In Middle, value is set to 2, so short.value is indeed 2. Therefore, this expression evaluates to True.<br><br>Expression B checks if the average object is an instance of the Bottom class. The average object is actually an instance of the Middle class, not Bottom. Since average is not a Bottom instance, this expression evaluates to False.<br><br>Expression C checks if the value attribute of the average object is equal to 2. The average object is an instance of the Middle class, where the value attribute is explicitly set to 2. Therefore, average.value is 2, making this expression True.<br><br>Expression D checks if the say() method of the tall object returns 2. The tall object is an instance of the Top class, where the value attribute is set to 3. The say() method in Top returns self.value, which is 3 in this case. Since the method returns 3 and not 2, this expression evaluates to False.",
    link: "https://www.programiz.com/python-programming/methods/built-in/isinstance",
  },
  {
    question:
      "What statements are true about object-oriented programming? <br><br>(Choose two)",
    answers: [
      {
        text: "In the hierarchy diagram, a subclass of a class is located above the class.",
        correct: false,
      },
      {
        text: "Encapsulation is a phenomenon which allows you to hide some class traits from the outer world.",
        correct: true,
      },
      {
        text: "Polymorphism is a phenomenon allowing you to have manylasses of the same name.",
        correct: false,
      },
      {
        text: "A class may exist without its objects, but an object cannot exist without its class.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>In a hierarchy diagram, a subclass is shown below the class it inherits from.<br><br>Encapsulation allows you to hide certain details of a class, restricting access to some of its attributes and methods from the outside world.<br><br>Polymorphism allows objects of different classes to be treated as objects of a common superclass, but it does not involve having multiple classes with the same name.<br><br>A class can exist without creating any objects, but an object must have a class as its blueprint.",
    link: "https://www.programiz.com/python-programming/object-oriented-programming",
  },
  {
    question:
      "Which of the following expressions evaluates to True and raises no exception? <br><br>(Choose two)",
    image: "images/image717.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: true },
    ],
    explanation:
      "Explanation:<br><br>Expression A checks whether the substring 'xyz' is not in the string 'uvwxyz'. However, the substring 'xyz' is indeed present in 'uvwxyz', so 'xyz' in 'uvwxyz' evaluates to True. The not operator then negates this, making the entire expression evaluate to False.<br><br>Expression B checks if the character '?' is present in the string ' ', which consists of a single space. Since the character '?' is not found in the space character, the expression evaluates to False.<br><br>Expression C checks whether the substring 'de' is not in the string 'abc'. Since 'de' is indeed not found in 'abc', the expression evaluates to True.<br><br>Expression D checks if a space character ' ' is present within the string ' '. Since the string is exactly one space character, the expression evaluates to True.",
    link: "https://docs.python.org/3/reference/expressions.html#boolean-operations",
  },
  {
    question:
      "Which of the following can be used to find a given substring within a string? <br><br>(Choose two)",
    answers: [
      { text: "The .index( ) method", correct: true },
      { text: "String Slicing", correct: false },
      { text: "The find( ) function", correct: false },
      { text: "The .rfind( ) method", correct: true },
    ],
    explanation: `Explanation:<br><br>The .index() method searches for a substring within a string and returns the index of the first occurrence. If the substring is not found, it raises a ValueError. <br><br>For example, "hello".index("e") returns 1.<br><br>The .rfind() method is similar to .find(), but it searches for the substring from the end of the string towards the beginning, returning the index of the last occurrence of the substring. If the substring is not found, it returns -1. <br><br>For example, "hellohello".rfind("l") returns 9.`,
    link: "https://docs.python.org/3/library/stdtypes.html#str.index",
  },
  {
    question:
      "Which of the following classes have valid constructors? <br><br>(Choose two)",
    image: "images/image718.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Constructor A raises an exception (ArithmeticError). While it is technically a valid constructor in the sense that it syntactically correct, it will always raise an error when an instance of the class is created.<br><br>Constructor B will result in a TypeError because the __init__ method must accept at least one parameter, which is typically self. The self parameter represents the instance of the class being initialized and is required for accessing instance attributes and methods.<br><br>Constructor C initializes an instance attribute self.attribute with the value True. It is a valid constructor and will successfully create instances of the Aleph class.<br><br>Constructor D attempts to return a value (False). Constructors in Python (__init__ methods) should not return a value (other than None, which is implicit). Returning a value from __init__ is invalid and will raise a TypeError.",
    link: "https://docs.python.org/3/reference/datamodel.html#object.__init__",
  },
  {
    question:
      "Which of the following are character encoding standard names? <br><br>(Choose two)",
    answers: [
      { text: "UniLang", correct: false },
      { text: "Intcod", correct: false },
      { text: "Unicode", correct: true },
      { text: "ASCII", correct: true },
    ],
    explanation:
      "Explanation:<br><br>Unicode is a character encoding standard that uses 7 bits to represent 128 characters. ASCII is a subset of Unicode.",
    link: "https://en.wikipedia.org/wiki/Character_encoding",
  },
  {
    question:
      "Which of the following code snippets will be True? <br><br>(Choose two)",
    image: "images/image719.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "C", correct: true },
      { text: "D", correct: false },
      { text: "E", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A) n Python, small integers (typically between -5 and 256) are cached and reused, so x and y will actually reference the same object. Therefore, x is y is True, and x is not y is False. So this will print False.<br><br>B) The string 'v' is indeed a substring of 'Kevin'. Thus, 'v' in 'Kevin' evaluates to True. This will print True.<br><br>C) The substring 'ist' is present in the string 'Das ist Python Code!'. Therefore, 'ist' in 'Das ist Python Code!' evaluates to True. This will print True.<br><br>D) The string 'Kevin' and its lowercase version 'kevin' are different objects. So x and y do not refer to the same object. Thus, x is y evaluates to False. This will print False.<br><br>E) Lists are mutable, and x and y are two different list objects with the same content. Since they are different objects, x is y evaluates to False. This will print False.",
    link: "https://docs.python.org/3/tutorial/datastructures.html#more-on-lists",
  },
  {
    question: "Which of the following code snippets will print 124?",
    image: "images/image720.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: true },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In A, eval evaluates the input as a Python expression. If you enter 123, eval will evaluate this as the integer 123. Adding 1 to 123 will give 124.<br><br>B converts the input string to an integer using int() and then adds 1. If you input 123, int(num) converts it to 123, and 123 + 1 is 124.<br><br>C directly converts the input string to an integer using int(), and then adds 1. If you input 123, int(input()) converts it to 123, and 123 + 1 is 124.<br><br>D does not convert the input to an integer; it treats num as a string. Adding 1 to a string will result in a TypeError. If you input 123, this will cause an error because you cannot concatenate a string and an integer.",
    link: "https://docs.python.org/3/library/functions.html#eval",
  },
  {
    question:
      "Which of the following statements are true? <br><br>(Choose two)",
    answers: [
      {
        text: '"/n" can be used to encode a new-line character',
        correct: false,
      },
      { text: "Python accepts UTF-8 encoded source files", correct: true },
      { text: "ASCII is a subset of UNICODE", correct: true },
      {
        text: "In ASCII, Latin upper-case letter codepoints are greater than their lower-case counterparts",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The correct escape sequence for a new-line character in Python is \n, not /n.<br><br>ython source files can indeed be encoded in UTF-8. This allows the use of a wide range of characters and symbols in source code, including non-English characters.<br><br>ASCII (American Standard Code for Information Interchange) is a character encoding standard that includes 128 characters. Unicode is a more comprehensive character encoding standard that includes all ASCII characters and many more. Thus, ASCII is a subset of Unicode.<br><br>In ASCII, the code points for upper-case letters (A-Z) are actually less than those for lower-case letters (a-z). For example, the code point for 'A' is 65, while the code point for 'a' is 97.",
    link: "https://en.wikipedia.org/wiki/ASCII",
  },
  {
    question:
      "Which of the following functions come from the math module? <br><br>(Choose two)",
    answers: [
      { text: "sqrt( )", correct: true },
      { text: "hypot( )", correct: true },
      { text: "processor( )", correct: false },
      { text: "seed( )", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The math.sqrt() method returns the square root of a number.<br><br>The math.hypot() method returns the hypotenuse of a right-angled triangle, via Pythagorean theorem: <br><br>a² + b² = c²",
    link: "https://docs.python.org/3/library/math.html#module-math",
  },
  {
    question:
      "Which of the following are the names of built-in Python exceptions? <br><br>(Choose two)",
    answers: [
      { text: "LookupException", correct: false },
      { text: "KeyError", correct: true },
      { text: "ProgramTooComplicatedError", correct: false },
      { text: "AssertionError", correct: true },
    ],
    explanation:
      "Explanation:<br><br>KeyError is a built-in exception in Python that is raised when a dictionary key is not found in a dictionary. <br><br>AssertionError is a built-in exception in Python that is raised when a condition is not true.",
    link: "https://docs.python.org/3/library/exceptions.html",
  },
  {
    question:
      "Which of the following assignments will successfully produce a non-empty string? <br><br>(Choose two)",
    image: "images/image721.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: true },
      { text: "C", correct: false },
      { text: "D", correct: false },
    ],
    explanation: `Explanation:<br><br>Assignment A: s[-1] accesses the last character of the string "12", which is "2". This assignment changes s from "12" to "2", which is a non-empty string.<br><br>Assignment B: The slicing operation s[1::2] starts at index 1 and takes every second character. For the string "12", this results in "2". Thus, s is assigned the non-empty string "2".<br><br>Assignment C: s[9] tries to access the character at index 9 of the string "Marvin", which only has 6 characters (indices 0 through 5). This will raise an IndexError because the index is out of range.<br><br>Assignment D: The slicing operation s[-3:-5] starts from index -3 and slices up to (but not including) index -5. Since -3 is valid but -5 is out of range for the string "12", the slice produces an empty string because the start index is greater than the end index.`,
    link: "https://docs.python.org/3/tutorial/datastructures.html#slicing",
  },
  {
    question:
      "What is true about object-oriented programming (OOP)? <br><br>(Choose two)",
    answers: [
      {
        text: "A) A superclass of a class is located below the class in the hierarchy diagram.",
        correct: false,
      },
      {
        text: "B) Encapsulation is a phenomenon which allows you to hide certain class traits from the outer world.",
        correct: true,
      },
      {
        text: "C) All objects of the same class have exactly the same set of attributes.",
        correct: false,
      },
      {
        text: "D) A part of a class designed to build new objects is called constructor.",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>A) In hierarchy diagrams, the superclass is above the subclass.<br><br>B) Encapsulation hides internal details of a class.<br><br>C) Objects of the same class have the same set of attributes, though their values may differ.<br><br>D) A constructor initializes new objects in a class.",
    link: "https://www.programiz.com/python-programming/object-oriented-programming",
  },
  {
    question:
      "Which of the following code snippets will expand the code, so that 100 will be printed? <br><br>(Choose two)",
    image: "images/image722.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Snippet A will add 100 to res for each name in the tuple that is present in data. If only one name is in data, res will be 100. If two or more names are in data, res will be greater than 100.<br><br>Snippet B will add 100 to res for each name in the tuple that is not present in data. To get a total of 100, exactly one name must be missing from data.<br><br>Snippet C will add 50 to res for each name in the tuple that is present in data. To get a total of 100, exactly two names must be in data.<br><br>Snippet D will add 50 to res for each name in the tuple that is not present in data. To get a total of 100, exactly two names must be missing from data.",
    link: "https://docs.python.org/3/tutorial/controlflow.html#list-comprehensions",
  },
  {
    question:
      "Which of the following lines contain valid Python code? <br><br>(Choose two)",
    answers: [
      { text: "A. lambda x: x + 1", correct: true },
      { text: "B. lambda (x): return x + 1", correct: false },
      { text: "C. lambda x: None", correct: true },
      { text: "D. lambda x = x + 1", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Lambda functions are used for creating small anonymous functions in Python.<br><br>Line A defines a valid lambda function that takes one parameter x and returns x + 1.<br><br>Line B is invalid because there are    parentheses around a single parameter, which is not allowed in Python 3. Lambda functions do not use return statements, they are meant to be single-expression functions.<br><br>Line C defines a valid lambda function that takes one parameter x and returns None<br><br>Line D is invalid because lambda functions cannot have default arguments that depend on the value of the parameter itself. The syntax for lambda functions does not support such default arguments.",
    link: "https://docs.python.org/3/reference/compound_stmts.html#lambda",
  },
  {
    question:
      "You want to print the numbers 1 to 7. But the code below does not work. What do you have to change? <br><br>(Choose two)",
    image: "images/image723.png",
    answers: [
      { text: "if nums[x] == 7:   # Line 5", correct: true },
      { text: "while (x < 10):    # Line 3", correct: false },
      { text: "x = x + 1          # Line 8", correct: false },
      { text: "print (nums[x] )   # Line 4", correct: true },
    ],
    explanation:
      "Explanation:<br><br>In line 4, nums(x) uses parentheses, which is incorrect for indexing lists. You should use square brackets for indexing.<br><br>In line 5, the assignment operator = is used instead of the comparison operator ==",
    link: "https://www.programiz.com/python-programming/list",
  },
  {
    question: "Which of the following statements are true?",
    answers: [
      {
        text: "A)   The finally branch of the try statement may be executed if special conditions are met.",
        correct: false,
      },
      {
        text: "B)   The args property is a tuple designed to gather all arguments passed to the exception constructor.",
        correct: true,
      },
      {
        text: "C)   The finally branch of the try statement is always executed.",
        correct: true,
      },
      {
        text: "D)   You cannot define new exceptions as subclasses derived from predefined exceptions.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>A) refers to the finally block in a try statement. However, it is misleading because the finally block is always executed, regardless of whether an exception is raised or handled. There are no special conditions for it to execute—it runs no matter what, ensuring that cleanup code is always executed.<br><br>B) is true. In Python, when you create an exception and pass arguments to it, these arguments are stored in the args property as a tuple. This allows you to access the arguments later.<br><br>C) is true and refers to the finally block in a try statement. The finally block is executed no matter what happens in the try and except blocks—whether an exception is raised, caught, or even if a return statement is encountered. The purpose of finally is to guarantee that the cleanup code is run.<br><br>D) is false. In Python, you can define new exceptions by creating a subclass of an existing exception. This allows you to create custom exceptions that can carry specific information or behavior.",
    link: "https://docs.python.org/3/tutorial/errors.html#user-defined-exceptions",
  },
  {
    question: "Which of the following statements are true?",
    answers: [
      {
        text: "A)   Variables with names starting with two underscores are considered private within their class due to name mangling.",
        correct: true,
      },
      {
        text: "B)   The directory from which the Python code is run is always searched through in order to find the necessary modules.",
        correct: true,
      },
      {
        text: "C)   Variables with names ending with two underscores are considered private inside their home module.",
        correct: false,
      },
      {
        text: "D) The directory from which the code is run is never searched through.",
        correct: false,
      },
    ],
    explanation: `Explanation:<br><br>A) is true. In Python, variables whose names start with two underscores (but do not end with two underscores) are subject to name mangling. This means that they are modified internally by the interpreter to include the class name, making it harder to access them from outside the class directly.<br><br>B) is true. The directory from which the Python script is executed is the first entry in the sys.path list. This means that Python will search this directory first when looking for modules to import.<br><br>C) is false. Variables with names ending with two underscores (like __init__, __str__, etc.) are not considered private. These are typically special methods or attributes in Python, often referred to as "dunder" (double underscore) methods. They are not meant to be private and are part of the Python object's public API.<br><br>D) is false. As mentioned in statement B, the directory from which the code is run is indeed searched through first when looking for modules to import.`,
    link: "https://docs.python.org/3/library/sys.html#sys.path",
  },
  {
    question:
      "Which of the following assignments can be performed without raising any exceptions? <br><br>(Choose two)",
    image: "images/image724.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: true },
    ],
    explanation:
      "Explanation:<br><br>A will raise an exception. The string 'kevin' has only 5 characters, indexed from 0 to 4. Trying to access s[9] will result in an IndexError because index 9 is out of range.<br><br>B will raise an exception. Strings in Python are immutable, meaning they cannot be changed after they are created. Attempting to assign a new value to s[0] will raise a TypeError.<br><br>C will not raise an exception. The slicing operation s[::2] creates a new string by taking every second character of the original string 'kevin'. The resulting string would be 'kvi'.<br><br>D will not raise an exception. The slicing operation s[::-2] creates a new string by taking every second character of the original string 'kevin', but in reverse order. The resulting string would be 'nve'.",
    link: "https://www.w3schools.com/python/python_strings_slicing.asp",
  },
  {
    question:
      "Which of the following expressions evaluate to True? <br><br>(Choose two)",
    image: "images/image725.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: true },
    ],
    explanation:
      "Explanation:<br><br>A: The ord('x') gives 120, and ord('X') gives 88. The sum 120 + 88 equals 208, while ord(' ') gives 32. Since 208 is not equal to 32, the expression is False.<br><br>B: The ord('k') gives 107, so ord('k') + 2 equals 109. chr(109) gives 'm', not 'i'. Therefore, the expression is False.<br><br>C: As explained above, ord('k') + 2 equals 109, and chr(109) gives 'm'. Thus, the expression is True.<br><br>D: The ord('x') gives 120, and ord('X') gives 88. The difference 120 - 88 equals 32, and ord(' ') also gives 32. Thus, the expression is True.",
    link: "https://miro.medium.com/v2/resize:fit:1400/1*rFEwJIMzpHHTb-MpoiLCAw.jpeg",
  },
  {
    question:
      "Which of the following messages will appear on the screen when the code is run?",
    image: "images/image726.png",
    answers: [
      { text: "Problem", correct: false },
      { text: "Ignore", correct: true },
      { text: "Launch", correct: true },
      { text: "Ignition", correct: false },
    ],
    explanation: `Explanation:<br><br>he Failure class is defined as a subclass of IndexError. It has an __init__ method that takes a message argument and assigns it to an instance variable, self.message.<br><br>The __str__ method is overridden to return the string "Problem" whenever an instance of Failure is converted to a string.<br><br>The code inside the try block first prints "Launch". It then raises an instance of the Failure exception with the message "Ignition".<br><br>The first except block is for RuntimeError. This block would be ignored because the raised exception is of type Failure, which is a subclass of IndexError, not RuntimeError.<br><br>The second except block catches IndexError. Since Failure is a subclass of IndexError, this block will handle the raised Failure exception. Inside this block, "Ignore" is printed.<br><br>The else block is not executed because an exception was raised and caught.`,
    link: "https://www.geeksforgeeks.org/python-try-except/",
  },
  {
    question:
      "Select the true statements about the try-except block in relation to the following example: <br><br>(Choose two)",
    image: "images/image727.png",
    answers: [
      {
        text: "A)   The code that follows the try statement will be executed if the code in the except clause runs into an error.",
        correct: false,
      },
      {
        text: "B)   If there is a syntax error in code located ¡n the try block, the except branch will not handle it, and a SyntaxError exception will be raised instead.",
        correct: true,
      },
      {
        text: "C)   If you suspect that a snippet may raise an exception, you should place it in the try block.",
        correct: true,
      },
      {
        text: "D)   The code that follows the except statement will be executed if the code in the try clause runs into an error.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>A) is False. If an error occurs in the except block, the control will not proceed to the code that follows the try block or the except block. Instead, Python will look for any additional except or finally blocks, or if none are present, it will propagate the exception up to the next higher level.<br><br>B) is True. Syntax errors occur during the parsing of the code before execution begins. Therefore, if there is a syntax error in the try block, it will not be caught by the except block. Instead, a SyntaxError will be raised before the try block is executed.<br><br>C) is True. To handle potential exceptions gracefully, you should place the code that might raise an exception inside a try block. This allows you to catch and handle exceptions using the except block, rather than allowing the program to terminate unexpectedly.<br><br>D) is False. If an error occurs in the try block, the except block will handle it, and any code following the except block (within the same level of indentation) will be executed. The except block itself handles the exception, but the try block does not execute the code that comes after the except block.",
    link: "https://www.geeksforgeeks.org/python-try-except/",
  },
  {
    question: `If you want to build a string that reads:<br><br>Marvin's weed's name's "La Sage"<br><br>Which of the following literals would you use?`,
    answers: [
      { text: `A)   'Marvin\'s weed\'s name\'s \"La Sage\"`, correct: true },
      { text: `B)   'Marvin's weed's name's "La Sage" '`, correct: false },
      { text: `C)   "Marvin's weed's name's "La Sage" "`, correct: false },
      { text: `D)   "Marvin's weed's name's \"La Sage\" "`, correct: true },
    ],
    explanation:
      "Explanation:<br><br>A) is a valid option in Python. It uses single quotes to define the string and escapes both the single quotes and the double quotes within the string.<br><br>B) will result in a syntax error in Python because the single quotes inside the string conflict with the single quotes used to define the string.<br><br>C) is problematic because it incorrectly places a single quote after name, which will cause a syntax error.<br><br>D) is a valid option in Python. It uses double quotes to define the string and escapes the double quotes inside the string.",
    link: "https://www.w3schools.com/python/python_strings.asp",
  },
  {
    question:
      "Consider the code below. Which print statement will output True?",
    image: "images/image728.png",
    answers: [
      { text: "A)  print (languages is more_languages)", correct: false },
      { text: "B)  print (languages is extra_languages)", correct: false },
      { text: "C)  print (more_languages is extra_languages)", correct: true },
      { text: "D)  print (languages == more_languages)", correct: true },
    ],
    explanation:
      "Explanation:<br><br>A) will output False because languages and more_languages are two different lists, even though they have the same content. They are stored at different memory locations.<br><br>B) will also output False because languages and extra_languages are different lists stored at different memory locations.<br><br>C) will output True because extra_languages is just another reference to the same list as more_languages. They both point to the exact same object in memory.<br><br>D) will output True because the contents of languages and more_languages are the same.",
    link: "https://docs.python.org/3/reference/datamodel.html#objects-values-and-types",
  },
  {
    question: "Which of the following operations will not raise any exception?",
    answers: [
      { text: "A)   Indexing a tuple", correct: false },
      { text: "B)   Invoking the float( ) function", correct: false },
      { text: "C)   Slicing a string", correct: true },
      { text: "D)   Decrementing an integer variable by one", correct: true },
    ],
    explanation:
      "Explanation:<br><br>A) can raise an exception if the index is out of bounds (e.g., trying to access an index that doesn't exist in the tuple). So, this operation can raise an IndexError if the index is invalid.<br><br>B) can raise a ValueError if the string or input provided to float() cannot be converted to a float.<br><br>C) will not raise an exception, even if the start or end indices are out of range. However, depending on the situation (such as trying to perform an operation on the sliced result), it could potentially lead to issues.<br><br>D) is a basic arithmetic operation in Python that will not raise any exceptions.",
    link: "https://docs.python.org/3/library/functions.html#float",
  },
  {
    question:
      "Which of the following expressions evaluates to True and raises no exception? <br><br>(Choose two)",
    answers: [
      { text: "A)  ' ' * 0 < 1 * ' '", correct: true },
      { text: "B)  'Analog' < 'analog'", correct: true },
      { text: "C)  str(None) == None", correct: false },
      { text: "D)  str(None) != 'None'", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A) evaluates to True because ' ' * 0 results in an empty string '', and 1 * ' ' results in a string containing a single space ' '<br><br>B) evaluates to True because the string comparison is based on the ASCII values of the characters.<br><br>In C), the comparison between str(None) and None evaluates to False because a string is not the same as the None object.<br><br>In D), the comparison between str(None) and the string 'None' evaluates to False because both are the same string, and the != operator checks for inequality, which is not the case here.",
    link: "https://docs.python.org/3/library/stdtypes.html#str",
  },
  {
    question:
      "You are creating a function that manipulates a number, which has the following requirements:<br><br>A float is passed into the function. The function must take the absolute value of the float. Any decimal points after the integer must be removed. <br><br>Which math functions should you use? <br><br>(Choose two)",
    answers: [
      { text: "math.ceil(x)", correct: false },
      { text: "math.floor(x)", correct: true },
      { text: "math.fabs(x)", correct: true },
      { text: "math.fmod(x)", correct: false },
      { text: "math.frexp(x)", correct: false },
    ],
    explanation:
      "Explanation:<br><br>math.floor(x): This function returns the largest integer less than or equal to x. This effectively removes any decimal points after the integer part, as it rounds down to the nearest whole number.<br><br>math.fabs(x): This function returns the absolute value of x. It converts a negative float to its positive counterpart but does not remove decimal points.<br><br>Note: math.fabs() is part of the math module and requires importing the math module, while abs() is a built-in function in Python. Both do the same thing.",
    link: "https://docs.python.org/3/library/math.html",
  },
  {
    question: "Which of the following statements are correct?",
    answers: [
      { text: "A) True or False evaluates to True", correct: true },
      { text: "B) True + 1 evaluates to 2", correct: true },
      { text: "C) 7 + False evaluates to False", correct: false },
      { text: "D) Type ('') returns <class 'bool'>", correct: false },
      { text: "E) True and False evaluates to True", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A) The or operator returns True if at least one of the operands is True. Since True or False has one True operand, the expression evaluates to True.<br><br>B) True is equivalent to 1, and False is equivalent to 0. Therefore, True + 1 is equivalent to 1 + 1, which equals 2.<br><br>C) As mentioned before, False is equivalent to 0. Therefore, 7 + False is equivalent to 7 + 0, which equals 7, not False.<br><br>D) Type('') checks the type of the empty string ''. The type of '' is <class 'str'>, not <class 'bool'>.<br><br>E) The and operator returns True only if both operands are True. Since one of the operands is False, the expression evaluates to False.",
    link: "https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not",
  },
  {
    question: "Which of the following lines contain valid Python code?",
    answers: [
      { text: "A)  lambda f (x,y): return x >> y", correct: false },
      { text: "B)  lambda x, y: '0123456789' [x:y]", correct: true },
      { text: "C)  lambda x, y: x + y", correct: true },
      { text: "D)  lambda x, y -> x ** y", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A) attempts to define a lambda function, but it incorrectly uses the syntax f(x, y) and the return keyword. In Python, lambda functions are anonymous and don't use the return keyword; they consist of a single expression that is implicitly returned.<br><br>B) defines a lambda function that slices the string '0123456789' from index x to index y. The syntax is correct.<br><br>C) defines a lambda function that takes two arguments x and y, and returns their sum. The syntax is correct.<br><br>D) incorrectly uses the -> symbol, which is not valid in a lambda function. The correct syntax should use a colon (:) instead of ->.",
    link: "https://docs.python.org/3/library/functions.html#lambda",
  },
  {
    question:
      "You are writing code that generates a random integer with a minimum value of 5 and a maximum value of 11.",
    answers: [
      { text: "random.randrange (5, 12, 1)", correct: true },
      { text: "random.randrange (5, 11, 1)", correct: false },
      { text: "random.randint (5, 11)", correct: true },
      { text: "random.randint (5, 12)", correct: false },
    ],
    explanation:
      "Explanation:<br><br>With randint() both start and stop are inclusive.<br><br>With randrange() start is inclusive and stop is exclusive.",
    link: "https://docs.python.org/3/library/random.html#random.randrange",
  },
  {
    question:
      "Which of the following literals reflect the value given as 34.23?",
    answers: [
      { text: ".3423e2", correct: true },
      { text: "3423e-2", correct: true },
      { text: ".3423e-2", correct: false },
      { text: "3423e2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The literal .3423e2 represents the value 34.23.<br><br>The literal 3423e-2 represents the value 34.23.",
    link: "https://docs.python.org/3/library/functions.html#float",
  },
  {
    question:
      "Assuming that the following snippet has been successfully executed, which of the equations are True? <br><br>(Choose two)",
    image: "images/image729.png",
    answers: [
      { text: "A)  len(a) == len(b)", correct: true },
      { text: "B)  b [0] +1 ==a [0]", correct: false },
      { text: "C)  a [0] == b [0]", correct: true },
      { text: "D)  a [0] + 1 ==b [0]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A) Both a and b reference the same list, so they have the same length.<br><br>B) b[0] is 0 and a[0] is also 0. So, b[0] + 1 equals 1, which is not equal to a[0] (which is 0).<br><br>C) Both a[0] and b[0] are 0 because a and b reference the same list.<br><br>D) a[0] is 0, so a[0] + 1 equals 1. However, b[0] is 0, so 1 is not equal to 0.",
    link: "https://docs.python.org/3/tutorial/datastructures.html#more-on-lists",
  },
  {
    question:
      "Assuming that the following snippet has been successfully executed, which of the equations are True? <br><br>(Choose two)",
    image: "images/image730.png",
    answers: [
      { text: "A)  len(a) == len (b)", correct: true },
      { text: "B)  a [0] - 1 == b [0]", correct: true },
      { text: "C)  a [0] == b [0]", correct: false },
      { text: "D)  b [0] - 1 == a [0]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A) is True. Both a and b are lists with a length of 1, so their lengths are equal.<br><br>B) is True. The value of a[0] is 1, so a[0] - 1 equals 0, which is the same as b[0].<br><br>C) is False. The value of a[0] is 1, while the value of b[0] is 0, so they are not equal.<br><br>D) is False. The value of b[0] is 0, so b[0] - 1 equals -1, which is not equal to a[0], which is 1.",
    link: "https://docs.python.org/3/tutorial/datastructures.html#more-on-lists",
  },
  {
    question: "Which of the following statements are true?",
    answers: [
      { text: "A) Python strings are actually lists", correct: false },
      { text: "B) Python strings can be concatenated", correct: true },
      { text: "C) Python strings can be sliced like lists", correct: true },
      { text: "D) Python strings are mutable", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A) is False. Python strings are not lists; they are a distinct data type called str. While strings and lists share some similarities, such as indexing and slicing, they are different in how they are implemented and used.<br><br>B) is True. Python strings can be concatenated using the + operator. For example, 'Hello, ' + 'World!' results in 'Hello, World!'.<br><br>C) is True. Python strings can be sliced similarly to lists. For example, 'Hello'[1:4] results in 'ell'.<br><br>D) is False. Python strings are immutable, meaning once a string is created, its contents cannot be changed. To modify a string, you would need to create a new string.",
    link: "https://docs.python.org/3/library/stdtypes.html#str",
  },
  {
    question: "Which of the following statements are true?",
    answers: [
      { text: "A)   Lists may not be stored inside tuples", correct: false },
      { text: "B)   Tuples may be stored inside lists", correct: true },
      { text: "C)   Tuples may not be stored inside tuples", correct: false },
      { text: "D)   Lists may be stored inside lists", correct: true },
    ],
    explanation:
      "Explanation:<br><br>A) is False. Lists can indeed be stored inside tuples. For example, tuple_with_list = ([1, 2, 3], 'a', 'b') is a valid tuple where one of the elements is a list.<br><br>B) is True. Tuples can be stored inside lists. For example, list_with_tuple = [(1, 2), (3, 4)] is a valid list containing tuples.<br><br>C) is False. Tuples can be stored inside other tuples. For example, nested_tuple = ((1, 2), (3, 4)) is a valid tuple where each element is also a tuple.<br><br>D) is True. Lists can be stored inside other lists. For example, nested_list = [[1, 2, 3], [4, 5, 6]] is a valid list where each element is another list.",
    link: "https://docs.python.org/3/library/stdtypes.html#tuple",
  },
  {
    question: "Which of the following expression evaluate to True?",
    image: "images/image731.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],
    explanation: `Explanation:<br><br>A) evaluates to True because the string '•' contains exactly one character. Therefore, its length is 1, which makes the comparison len('•') == 1 true. <br><br>B) evaluates to False. The string """ """ actually contains a single space, so its length is 1. Since the comparison is checking if the length is 0, it does not hold true.<br><br>B) evaluates to True. The function ord('A') returns the ASCII value of 'A', which is 65. Adding 1 to this value gives 66, and chr(66) converts this back to the character 'B'. Therefore, the comparison chr(ord('A') + 1) == 'B' is true.<br><br>D) evaluates to False. The ord("Z") function returns 90, and ord("z") returns 122. The difference is 90 - 122, which equals -32. The ord("0") function returns 48, so the comparison -32 == 48 is false.`,
    link: "https://docs.python.org/3/library/functions.html#ord",
  },
  {
    question: "Which of the following expression evaluate to True?",
    image: "images/image732.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "C", correct: true },
      { text: "D", correct: true },
    ],
    explanation: `Explanation:<br><br>A) evaluates to False. The function ord("0") returns the ASCII value of '0', which is 48. The function ord("9") returns the ASCII value of '9', which is 57. Subtracting these values, 48 - 57, results in -9. Therefore, -9 is not equal to 10.<br><br>B) evaluates to True. The string """1234""" is equivalent to "1234", which contains 4 characters: '1', '2', '3', and '4'. Thus, len("""1234""") is 4, and the comparison len("""1234""") == 4 is true.<br><br>C) evaluates to True. The string "''" contains exactly 2 characters, both of which are single quote marks. Hence, len("''") is 2, making the comparison len("''") == 2 true.<br><br>D) evaluates to True. The function ord('Z') returns 90, and subtracting 1 gives 89. The function chr(89) converts the value 89 to the character 'Y'. Therefore, chr(ord('Z') - 1) is 'Y', making the comparison chr(ord('Z') - 1) == 'Y' true.`,
    link: "https://docs.python.org/3/library/functions.html#ord",
  },
  {
    question: "What is a true about python class constructors?",
    answers: [
      {
        text: "A) the constructor must have at least one parametercorrect",
        correct: true,
      },
      {
        text: "B) the constructor must return a value other than None",
        correct: false,
      },
      {
        text: "C) the constructor is a method named_init_correct",
        correct: true,
      },
      {
        text: "D) there can the more than one constructor in a Python class",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>A) is True. In Python, the constructor method __init__ must have at least one parameter, self, which refers to the instance being created. Other parameters can be added as needed, but self is required.<br><br>B) is False. In Python, the constructor method __init__ does not return any value. Its purpose is to initialize the instance. By default, it implicitly returns None.<br><br>C) is True. In Python, the constructor method is indeed named __init__. It is called when a new instance of the class is created.<br><br>D) is False. Python does not support method overloading, so a class cannot have more than one __init__ method. However, you can achieve similar functionality by using default arguments or variable-length arguments in a single __init__ method.",
    link: "https://www.geeksforgeeks.org/python-classes/",
  },
  {
    question: "Which of the following expressions evaluate to True? <br><br>(Choose three)",
    image: "images/image733.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: true },
    ],
    explanation:
      "Explanation:<br><br>A) evaluates to True. First, the operation 1 - 1 results in 0, which is then converted to the string '0'. The slice '012345£739'[:2] extracts the first two characters of the string, which are '01'. The substring '0' is indeed present in '01', making the condition str(1-1) in '012345£739'[:2] true.<br><br>B) evaluates to False. The substring 'phd' is not found within the string 'alpha'. Hence, the condition 'phd' in 'alpha' is false.<br><br>C) evaluates to True. The reverse of the string 'abcde' is 'edcba'. The substring 'deb' is not present in the reversed string 'edcba', so the condition 'deb' not in 'abcde'[::-1] is true.<br><br>D) evaluates to True. The substring 'True' does not appear in the string 'False'. Thus, the condition 'True' not in 'False' is true.",
    link: "https://docs.python.org/3/library/stdtypes.html#str",
  },
  {
    question: "An operator able to perform bitwise shifts is coded as... <br><br>(Choose two)",
    answers: [
      { text: "- -", correct: false },
      { text: "+ +", correct: false },
      { text: "< <", correct: true },
      { text: "> >", correct: true },
    ],
    explanation:
      "Explanation: <br><br>Bitwise left shift operator is coded as <<. Bitwise right shift operator is coded as >>.",
    link: "https://docs.python.org/3/reference/expressions.html#operator-precedence",
  },
  // Matthias Fragen ab hier
  {
    question:
      "What will be the value of the i variable when the while loop finishes its execution?",
    image: "images/image132.png",
    answers: [
      { text: "1", correct: true },
      { text: "0", correct: false },
      { text: "2", correct: false },
      { text: "The variable becomes unavailable", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In the given code, the variable i is initialized to 0. The while loop is set to continue executing as long as the condition i != 0 is true. However, since i is initially 0, this condition is false from the start, which means that the body of the while loop does not execute at all.<br><br>Since the loop was never entered, the else block associated with the while loop is executed. The else block increments i by 1, resulting in i being updated from 0 to 1.<br><br>As a result, when the while loop finishes its execution, the value of i will be 1.",
    link: "https://www.w3schools.com/python/python_while_loops.asp",
  },
  {
    question: "What is the output of the following piece of code?",
    image: "images/image133.png",
    answers: [
      { text: "ant'bat'camel", correct: false },
      { text: `ant"bat"camel`, correct: true },
      { text: "antbatcamel", correct: false },
      { text: `print(a, b, c, sep= '"')`, correct: false },
    ],
    explanation: `Explanation:<br><br>The code defines three variables: a with the value 'ant', b with the value "bat", and c with the value 'camel'. When the print function is called, it prints the values of a, b, and c in sequence. The sep parameter in the print function is set to '"', meaning that each value will be separated by a double-quote character.<br><br>As a result, the output of the code will be the string ant"bat"camel, where the words ant, bat, and camel are separated by double quotes.`,
    link: "https://www.w3schools.com/python/ref_func_print.asp",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image134.png",
    answers: [
      { text: "3", correct: false },
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "The code is erroneous", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The provided code snippet contains a syntax error due to the incorrect indentation of the else block. In Python, the else statement must be aligned with the corresponding if statement. <br><br>Since the else block is indented incorrectly, the code will not execute and will raise a SyntaxError.",
    link: "https://www.w3schools.com/python/python_conditions.asp",
  },
  {
    question:
      "Assuming a String is six or more letters long, the following slice<br><br>string[ 1 : - 2 ]<br><br>is shorter than the original string by..?",
    answers: [
      { text: "four chars", correct: false },
      { text: "three chars", correct: true },
      { text: "one char", correct: false },
      { text: "two chars", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Given that the string is six or more letters long, the slice string[1:-2] removes three characters from the original string. Specifically, it excludes the first character and the last two characters.<br><br> As a result, the sliced string is shorter than the original string by three characters.",
    link: "https://www.w3schools.com/python/ref_string_slice.asp",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image135.png",
    answers: [
      { text: "1", correct: false },
      { text: "4", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The given code initializes a list lst with the values [1, 2, 3, 4]. The first slicing operation, lst[-3:-2], extracts a sublist starting from the element at index -3 (which is 2) up to but not including the element at index -2 (which is 3). This operation results in the list [2].<br><br> Next, the code reassigns lst to the value of lst[-1], which selects the last element of the list [2], resulting in lst being assigned the integer 2. Finally, the print statement outputs the value of lst, which is 2.",
    link: "https://www.w3schools.com/python/python_lists.asp",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image136.png",
    answers: [
      { text: "abc", correct: false },
      { text: "The code will raise a Type Error", correct: true },
      { text: "ABC", correct: false },
      { text: "123", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The given code snippet will result in an error when executed. The code attempts to use a for loop to iterate over len(s), where s is the string 'abc'. However, len(s) returns an integer, and integers are not iterable in Python. This will cause the code to raise a TypeError because the for loop cannot iterate over an integer.<br><br>Furthermore, even if the code correctly iterated over the indices of the string, it would still encounter an issue. In Python, strings are immutable, meaning you cannot modify a string in place by assigning a new value to s[i].<br><br>As a result, the expected output of this code is a TypeError indicating that an 'int' object is not iterable.",
    link: "https://www.w3schools.com/python/python_for_loops.asp",
  },
  {
    question:
      "How many elements will the list2 list contain after execution of the following snippet?",
    image: "images/image137.png",
    answers: [
      { text: "zero", correct: false },
      { text: "five", correct: false },
      { text: "seven", correct: true },
      { text: "three", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code snippet first creates a list list1 consisting of nine False values, generated by a list comprehension that iterates over the range from 1 to 9.<br><br>The next line of the code performs slicing on list1 with the expression list1[-1:1:-1]. This slice starts from the last element of the list and moves backward towards the index just before 1, but does not include the element at index 1.<br><br>As a result, this slicing operation retrieves elements in reverse order from the end of the list up to but not including the second element. Therefore, list2 will contain 7 elements, all of which are False.<br><br>Thus, after executing the snippet, the list list2 will contain 7 elements.",
    link: "https://www.w3schools.com/python/python_lists.asp",
  },
  {
    question: "Can a module run like regular code?",
    answers: [
      {
        text: "Yes, and it can differentiate its behavior between the regular launch and import",
        correct: true,
      },
      { text: "It depends on the Python version", correct: false },
      {
        text: "Yes, but in cannot differentiate its behavior between the regular launch and import",
        correct: false,
      },
      {
        text: "No, it is not possible; a module can be imported, not run",
        correct: false,
      },
    ],
    explanation: `Explanation:<br><br>A Python module can run like regular code and can differentiate its behavior based on how it is executed. If a module is run directly, the code under the if __name__ == "__main__": block will execute. If the module is imported, this block will be skipped, allowing the module to adapt its behavior depending on whether it is run as a script or imported.`,
    link: "https://docs.python.org/3/tutorial/modules.html",
  },
  {
    question: "What is the expected behavior of the following snippet?",
    image: "images/image138.png",
    answers: [
      { text: "cause a runtime exception", correct: true },
      { text: "print 1", correct: false },
      { text: "print 0,[1]", correct: false },
      { text: "print [1]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The provided code snippet will result in an error when executed. The function a is defined to return the value of x[y], where x is expected to be a sequence (such as a list or string) and y is an index.<br><br> However, in the function call a(0, [1]), 0 is passed as the first argument, which is an integer, and [1] is passed as the second argument, which is a list.<br><br>Since integers cannot be indexed and lists cannot be used as indices for integers, Python will raise a TypeError. The error message will indicate that an integer object is not subscriptable, meaning you cannot use a list to index an integer.",
    link: "https://docs.python.org/3/library/exceptions.html#TypeError",
  },
  {
    question:
      "What can you do if you don't like a long package path like this one?<br><br>import alpha.beta.gamma.delta.epsilon.zeta",
    answers: [
      {
        text: "you can make an alias for the name using the 'alias' keyword",
        correct: false,
      },
      { text: "nothing, you need to come to terms with it", correct: false },
      {
        text: "you can shorten it to alpha . zeta and Python will find the proper connection",
        correct: false,
      },
      {
        text: "you can make an alias for the name using the 'as' keyword",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>In Python, if you don't like a long package path, you can use the as keyword to create an alias for the module or package. This allows you to refer to it by a shorter name within your code.<br><br> Here is an example of how you can do this:<br><br>import alpha.beta.gamma.delta.epsilon.zeta as zeta<br><br>With this alias, you can use zeta instead of the full path alpha.beta.gamma.delta.epsilon.zeta throughout your code, making it more concise and readable.",
    link: "https://realpython.com/python-aliases/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image139.png",
    answers: [
      { text: "abcef", correct: false },
      {
        text: "The program will cause a runtime exception/error",
        correct: true,
      },
      { text: "acdef", correct: false },
      { text: "abdef", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code snippet will result in an error when executed. In the code, the string 'abcdef' is assigned to the variable str, and the function fun is defined to take a parameter s and attempt to delete the element at index 2 using del s[2].<br><br>However, since strings in Python are immutable, you cannot modify them by deleting characters or altering them in place. Therefore, attempting to delete an element from the string will raise a TypeError. <br><br>The error message will indicate that a 'str' object does not support item deletion. Consequently, the function call print(fun(str)) will not produce a valid output and will instead result in this type of error.",
    link: "https://www.w3schools.com/python/python_ref_string.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image140.png",
    answers: [
      { text: "21", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "12", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code defines a recursive function f that constructs a string by concatenating numbers in descending order. <br><br>When f(2) is called, the function returns '2' concatenated with the result of f(1). <br><br>Since f(1) returns '1', the result of f(2) is '2' + '1', which is '21'. <br><br>Therefore, the expected output of the code is '21'.",
    link: "https://www.programiz.com/python-programming/recursion",
  },
  {
    question: "What is the expected behavior of the following snippet?",
    image: "images/image141.png",
    answers: [
      { text: "cause a runtime exception on line 02", correct: false },
      { text: "cause a runtime exception on line 01", correct: false },
      { text: "cause a runtime exception on line 03", correct: false },
      { text: "print 3", correct: true },
    ],
    explanation:
      "Explanation:<br><br>In the code snippet, the function x is initially defined to return the value 2. However, the subsequent line x = 1 + x() reassigns x. Here, x() is called, which returns 2, so the expression 1 + x() evaluates to 1 + 2, resulting in 3. As a result, x is assigned the value 3. Consequently, the print(x) statement outputs 3.",
    link: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image142.png",
    answers: [
      { text: "print 4321", correct: false },
      {
        text: "print <generator object f at (some hex digits)>",
        correct: true,
      },
      { text: "cause a runtime exception", correct: false },
      { text: "print 1234", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The expected behavior of the provided code is to print a description of the generator object.<br><br> When the function f(2) is called, it returns a generator object. This generator object represents an iterator that can yield values from 1 to 2 when iterated over.<br><br> However, simply printing the generator object does not execute it or display the values it generates. <br><br>Instead, it prints a description of the generator object, which looks like <generator object f at (some hex digits)>, where (some hex digits) is the memory address of the generator.<br><br>In order to output values from the generator, you have to use the `next()` function.<br><br>In this case: print(next(f(2)))",
    link: "https://www.programiz.com/python-programming/generator",
  },
  {
    question:
      "Is it possible to safely check if a class/object has a certain attribute?",
    answers: [
      { text: "Yes, by using the hasattr attribute", correct: false },
      { text: "Yes, by using the hasattr( ) method", correct: false },
      { text: "Yes, by using the hasattr( ) function", correct: true },
      { text: "No, it is not possible", correct: false },
    ],
    explanation:
      "Explanation:<br><br>It is possible to safely check if a class or object has a certain attribute by using the `hasattr()` function. This function takes two arguments: the object (or class) and the name of the attribute (as a string) you want to check.<br><br> It returns `True` if the attribute exists and `False` if it does not. This allows you to verify the presence of an attribute without causing an error if the attribute is not found.",
    link: "https://www.programiz.com/python-programming/methods/built-in/hasattr",
  },
  {
    question: "The first parameter of each method:",
    answers: [
      {
        text: "holds a reference to the currently processed object",
        correct: true,
      },
      { text: "is always set to None", correct: false },
      { text: "is set to a unique random value", correct: false },
      { text: "is set by the first argument's value", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The first parameter of each method within a class in Python, commonly named `self`, holds a reference to the instance of the class that is currently being processed. This allows the method to access and manipulate the attributes and other methods of that specific instance. For example, when you call a method on an object, `self` refers to that object, enabling the method to interact with its data.",
    link: "https://docs.python.org/3/tutorial/classes.html",
  },
  {
    question:
      "The simplest possible class definition in Python can be expressed as:",
    answers: [
      { text: "class X:", correct: false },
      { text: "class X:\npass", correct: true },
      { text: "class X:\nreturn", correct: false },
      { text: "class X:\n{ }", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, the simplest possible class definition includes just the class keyword followed by the class name and a placeholder statement. The pass statement is used as a placeholder in the class body to indicate that no action is required. This is useful when defining a class with no methods or attributes yet.",
    link: "https://www.programiz.com/python-programming/class",
  },
  {
    question:
      "If you want to access an exception object's components and store them in an object called e, you have to use the following form of exception statement:",
    answers: [
      { text: "except Exception(e):", correct: false },
      { text: "except e = Exception:", correct: false },
      { text: "except Exception as e:", correct: true },
      { text: "such an action is not possible in Python", correct: false },
    ],
    explanation:
      "Explanation:<br><br>To access and store an exception object in a variable, you use the `except` clause with the `as` keyword. This allows you to capture the exception instance and refer to it by a variable name.<br><br> For example, in the statement `except Exception as e:`, the exception object is stored in the variable `e`. You can then use this variable to access details about the exception. <br><br>This approach is standard in Python for handling exceptions and retrieving error information.",
    link: "https://www.programiz.com/python-programming/exception-handling",
  },
  {
    question: "A variable stored separately in every object is called:",
    answers: [
      {
        text: "there are no such variables, all variables are shared among objects",
        correct: false,
      },
      { text: "a class variable", correct: false },
      { text: "an object variable", correct: false },
      { text: "an instance variable", correct: true },
    ],
    explanation:
      "Explanation:<br><br>In Python, a variable that is stored separately for each instance of a class is called an instance variable. Instance variables are defined within methods (typically in the __init__ method) and are unique to each object created from the class. Each object maintains its own copy of instance variables, allowing them to hold different values for different instances of the class.",
    link: "https://pynative.com/python-instance-variables/",
  },
  {
    question:
      "You are going to read just one character from a stream called s. Which statement would you use?",
    answers: [
      { text: "ch = read(s, 1)", correct: false },
      { text: "ch = s.input(1)", correct: false },
      { text: "ch = input(s, 1)", correct: false },
      { text: "ch = s.read(1)", correct: true },
    ],
    explanation:
      "Explanation:<br><br>In Python, to read a specific number of characters from a stream, such as reading just one character, you use the read() method of the stream object. By passing 1 as an argument to s.read(), you instruct Python to read one character from the stream s.",
    link: "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files",
  },
  {
    question:
      "The following class hierarchy is given. What is the expected out of the code?",
    image: "images/image143.png",
    answers: [
      { text: "B B", correct: false },
      { text: "C C", correct: false },
      { text: "A A", correct: false },
      { text: "B C", correct: true },
    ],
    explanation: `Explanation:<br><br>When the code is executed, it first creates an instance of class B and calls the do() method on it. This method, defined in class B, calls the b() method of the same instance. Inside b(), it then calls self.a(), which refers to the a() method of class B. As a result, "B" is printed.<br><br>Next, the code creates an instance of class C and calls the do() method on it. Similar to the previous step, the do() method in class C calls the b() method. Inside b(), it calls self.a(), which refers to the a() method of class C. Consequently, "C" is printed.<br><br>Therefore, the final output of the code is "B C", with each letter separated by a space.`,
    link: "https://docs.python.org/3/tutorial/classes.html",
  },
  {
    question:
      "Python's built in function named open() tries to open a file and returns:",
    answers: [
      { text: "an integer value identifying an opened file", correct: false },
      { text: "an error code (0 means success)", correct: false },
      { text: "a stream object", correct: true },
      { text: "always None", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, the built-in open() function attempts to open a file and returns a file object, which is a stream object. This object provides methods and attributes for interacting with the file, such as reading from or writing to it.<br><br>Here's an example:<br><br>file = open('example.txt', 'r')<br>print(type(file))",
    link: "https://docs.python.org/3/library/functions.html#open",
  },
  {
    question: 'Python strings can be "glued" together using the operator..?',
    answers: [
      { text: ".", correct: false },
      { text: "&", correct: false },
      { text: "_", correct: false },
      { text: "+", correct: true },
    ],
    explanation:
      'Explanation:<br><br>In Python, strings can be concatenated, or "glued" together, using the + operator. This operator allows you to join two or more strings into a single string.',
    link: "https://www.w3schools.com/python/python_operators.asp",
  },
  {
    question: "How many stars (*) does the following snippet print?",
    image: "images/image144.png",
    answers: [
      { text: "the code is erroneous", correct: false },
      { text: "five", correct: false },
      { text: "three", correct: false },
      { text: "four", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The code snippet will print a total of four stars (*). Initially, the variable i is set to 3. During each iteration of the while loop, i is decremented by 1, and a star is printed. <br><br>This process repeats for three iterations, resulting in three stars being printed. After the loop terminates, the else block is executed, which prints an additional star. <br><br>Therefore, combining the three stars from the loop and the one star from the else block, the total output is four stars.",
    link: "https://www.w3schools.com/python/python_while_loops.asp",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image145.png",
    answers: [
      { text: "*-**-**-**-*", correct: true },
      { text: "*-**-**-**-**-**-**-**-*", correct: false },
      { text: "*-*", correct: false },
      { text: "*-**-*", correct: false },
    ],
    explanation:
      "Explanation:<br><br>First, the variable s is initialized with the string '*-*'. The expression 2 * s results in the string '*--*', which is the original string repeated twice. Similarly, s * 2 also results in '*--*'. <br><br>Adding these two results together with 2 * s + s * 2 produces the concatenated string '*--*--*'",
    link: "https://www.w3schools.com/python/gloss_python_string_concatenation.asp",
  },
  {
    question:
      "How many elements will the list1 list contain after execution of the following snippet?",
    image: "images/image146.png",
    answers: [
      { text: "two", correct: true },
      { text: "zero", correct: false },
      { text: "one", correct: false },
      { text: "three", correct: false },
    ],
    explanation: `Explanation:<br><br>The split(',') method splits the string "don't think twice, do it!" into a list of substrings wherever a comma , is found.<br><br>    In the string "don't think twice, do it!", there is one comma, which separates the string into two parts: "don't think twice" and " do it!".<br><br>Thus, after splitting, list1 will contain two elements: ["don't think twice", " do it!"].`,
    link: "https://www.w3schools.com/python/ref_string_split.asp",
  },
  {
    question:
      "Assuming that lst - is a four-element list. Is there any difference between these two statements?",
    image: "images/image147.png",
    answers: [
      {
        text: "yes, there is, the first line empties the list, the second line deletes the list as a whole",
        correct: false,
      },
      {
        text: "yes, there is, the first line deletes the list as a whole, the second line just empties the list",
        correct: true,
      },
      { text: "no, there is no difference", correct: false },
      {
        text: "yes, there is, the first line deletes the list as a whole, the second line removes all the elements except the first one",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The first line, del lst, deletes the list object itself, meaning the variable lst will no longer exist after this statement is executed.<br><br>The second line, del lst[:], does not delete the list itself but instead removes all elements from the list, leaving it empty. The list lst will still exist as an empty list.",
    link: "https://www.w3schools.com/python/python_lists_remove.asp",
  },
  {
    question:
      "What should you put instead of XXX to print out the module name?",
    image: "images/image148.png",
    answers: [
      { text: "main", correct: false },
      { text: "_main_", correct: false },
      { text: "_ _main_ _", correct: true },
      { text: "_ _ _main_ _ _", correct: false },
    ],
    explanation: `Explanation:<br><br>In Python, when a script is run directly, the special variable __name__ is set to "__main__". Therefore, to print out the module name when the script is executed directly, you should check if __name__ is equal to "__main__".`,
    link: "https://docs.python.org/3/tutorial/modules.html",
  },
  {
    question: "Files with the suffix .pyc contain:",
    answers: [
      { text: "Python 4 source code", correct: false },
      { text: "backups", correct: false },
      { text: "temporary data", correct: false },
      { text: "semi-compiled Python code", correct: true },
    ],
    explanation:
      "Explanation:<br><br>Files with the suffix .pyc contain bytecode, which is semi-compiled Python code. This bytecode is generated by the Python interpreter to speed up the execution of programs by avoiding the need to recompile the source code each time the program is run.",
    link: "https://stackoverflow.com/questions/2998215/if-python-is-interpreted-what-are-pyc-files",
  },
  {
    question: "Package source directories/folders can be:",
    answers: [
      { text: "converted into the so-called pypck format", correct: false },
      {
        text: "packed as a ZIP file and distributed as one file",
        correct: true,
      },
      {
        text: "rebuilt to a flat form and distributed as one directory/folder",
        correct: false,
      },
      {
        text: "removed as Python compiles them into an internal portable format",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>In Python, package source directories can be compressed into a ZIP file and distributed as a single file. This allows for easier distribution and installation of Python packages, as the entire package can be contained within one compressed file.",
    link: "https://packaging.python.org/en/latest/tutorials/packaging-projects/",
  },
  {
    question:
      "A two-parameter lambda function raising its first parameter to the power of the second parameter should be declared as:",
    image: "images/image149.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: true },
    ],
    explanation:
      "Explanation:<br><br>In Python, a lambda function is declared using the syntax lambda parameters: expression. In this case, the lambda function takes two parameters x and y, and returns the result of x raised to the power of y, which is represented by x ** y.",
    link: "https://www.w3schools.com/python/python_lambda.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image150.png",
    answers: [
      { text: "21", correct: false },
      { text: "13", correct: false },
      { text: "3", correct: true },
      { text: "None", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The function f(n) is a recursive function that adds the current value of n to the result of calling itself with n - 1. <br><br>When f(2) is called, the function first checks if n is equal to 1. Since n is 2, it does not return 1 immediately but instead returns 2 + f(1). <br><br>The function then calls f(1), and because n is now 1, it returns 1. This leads to the calculation 2 + 1, which results in 3. <br><br>Therefore, when print(f(2)) is executed, the output is 3.",
    link: "https://www.programiz.com/python-programming/recursion",
  },
  {
    question:
      "A method for passing the arguments used by the following snippet is called:",
    image: "images/image151.png",
    answers: [
      { text: "sequential", correct: false },
      { text: "named", correct: false },
      { text: "positional", correct: true },
      { text: "keyword", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In the provided code snippet, the arguments 1 and 2 are passed to the function fun in a way where their positions match the parameters a and b in the function definition. <br><br>This method of passing arguments, where the position of each argument determines which parameter it corresponds to, is known as positional argument passing.",
    link: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image152.png",
    answers: [
      { text: "print 2 1", correct: false },
      { text: "print 1 2", correct: true },
      { text: "cause a runtime error", correct: false },
      {
        text: "print <generator object f at (some hex digits)>",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>In the code, the function f(n) is a generator function that yields numbers from 1 to n inclusive. When f(2) is called, it creates a generator that will yield the values 1 and 2. The for loop then iterates over these values, and each value is printed followed by a space (due to end=' ').<br><br> As a result, the numbers 1 and 2 are printed on the same line with a space separating them.",
    link: "https://www.programiz.com/python-programming/generator",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image153.png",
    answers: [
      { text: "prints 0", correct: false },
      { text: "cause a runtime exception/error", correct: true },
      { text: "prints 3", correct: false },
      { text: "print an empty line", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The function unclear(x) returns 0 when x is odd. If x is even, the function does not explicitly return a value, so it implicitly returns None.<br><br>When unclear(1) is called, the function returns 0 because 1 is odd. However, when unclear(2) is called, the function returns None because 2 is even.<br><br>The expression unclear(1) + unclear(2) thus becomes 0 + None. In Python, adding an integer to None is not allowed and results in a TypeError. Therefore, instead of producing a result, the code will raise a TypeError due to this invalid operation.",
    link: "https://docs.python.org/3/tutorial/controlflow.html#defining-functions",
  },
  {
    question:
      "If any of a class's components has a name that starts with two underscores (___), then:",
    answers: [
      { text: "the class component's name will be mangled", correct: true },
      {
        text: "the class component has to be an instance variable",
        correct: false,
      },
      {
        text: "the class component has to be a class variable",
        correct: false,
      },
      { text: "the class component has to be a method", correct: false },
    ],
    explanation:
      "Explanation:<br><br>When a class component's name starts with two underscores (__), Python applies name mangling. This means that the name is altered to include the class name as a prefix, which makes it harder to accidentally override the component in subclasses.<br><br> For example, if a class MyClass has a variable named __variable, Python will internally change this name to _MyClass__variable.",
    link: "https://en.wikipedia.org/wiki/Name_mangling#Python",
  },
  {
    question:
      "If you need to serve two different exceptions called Ex1 and Ex2 in one except branch, you can write:",
    answers: [
      { text: "except Ex1 Ex2:", correct: false },
      { text: "except (Ex1, Ex2)", correct: true },
      { text: "except Ex1, Ex2:", correct: false },
      { text: "except Ex1+Ex2:", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, if you want to handle multiple exceptions in a single except block, you can group them together inside parentheses, separated by commas. This way, if either Ex1 or Ex2 is raised, the except block will be executed.",
    link: "https://docs.python.org/3/tutorial/errors.html#handling-exceptions",
  },
  {
    question: "A function called issubclass(c1, c2) is able to check if:",
    answers: [
      {
        text: "c1 and c2 are both subclasses of the same superclass",
        correct: false,
      },
      { text: "c2 is a subclass of c1", correct: false },
      { text: "c1 is a subclass of c2", correct: true },
      {
        text: "c1 and c2 are not subclasses of the same superclass",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The function issubclass(c1, c2) checks if c1 is a subclass of c2.",
    link: "https://docs.python.org/3/library/functions.html#issubclass",
  },
  {
    question:
      "If s is a stream open for reading, what do you expect from the following invocation?<br><br>c = s.read()",
    answers: [
      {
        text: "one line of the file will be read and stored in the string called c",
        correct: false,
      },
      {
        text: "the whole file content will be read and stored in the string called c",
        correct: true,
      },
      {
        text: "one character will be read and stored in the string called c",
        correct: false,
      },
      {
        text: "one disk sector (512 bytes) will be read and stored in the string called c",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>If s is a stream open for reading, the invocation c = s.read() will read the whole file content and store it in the string called c.",
    link: "https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image154.png",
    answers: [
      { text: "True False", correct: false },
      { text: "True True", correct: true },
      { text: "False False", correct: false },
      { text: "False True", correct: false },
    ],
    explanation: `Explanation:<br><br>The isinstance(x, Z) function call returns True since x is an instance of class Z. Additionally, the isinstance(z, X) function call also returns True because z is an instance of class Z, and class Z is a subclass of X.<br><br> As a result, z is also considered an instance of X. Therefore, both conditions evaluate to True, and the output is "True True."`,
    link: "https://docs.python.org/3/library/functions.html#isinstance",
  },
  {
    question:
      "Which one of the platform module functions should be used to determine the underlying platform name?",
    answers: [
      { text: "platform.python_version()", correct: false },
      { text: "platform.processor()", correct: false },
      { text: "platform.platform()", correct: true },
      { text: "platform.uname()", correct: false },
    ],
    explanation:
      "Explanation:<br><br>This function returns a string that describes the platform name, including the operating system, version, and other relevant details. It is specifically designed to provide information about the underlying platform on which the Python code is running.",
    link: "https://docs.python.org/3/library/platform.html#platform.platform",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image155.png",
    answers: [
      { text: "False", correct: false },
      { text: "None", correct: false },
      { text: "True", correct: true },
      { text: "0", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The dir(math) function returns a list of names of the attributes of the math module. Each name in this list is a string, so type(dir(math)[0]) checks the type of the first item in this list, which is indeed a string. Therefore, b1 is True.<br><br>The dir(sys.path) function returns a list of names of attributes and methods for the sys.path object. Since sys.path is a list, the dir(sys.path) call returns the list of attributes and methods available for lists. Each item in this list is a string, so type(dir(sys.path)[-1]) checks the type of the last item in this list, which is also a string. Hence, b2 is True.<br><br>Since both b1 and b2 are True, the final output of the print statement will be True.",
    link: "https://docs.python.org/3/library/functions.html#dir",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image156.png",
    answers: [
      { text: "it outputs 3", correct: true },
      { text: "it outputs 1", correct: false },
      { text: "the code is erroneous and it will not execute", correct: false },
      { text: "it outputs 2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code initializes a global variable m to 0. It defines a function 'foo(n)' that asserts m is 0, then tries to return 1 / n. If n is 0, a ZeroDivisionError occurs, which is caught as an ArithmeticError. <<br><br>In the exception block, m is incremented by 1, and the exception is re-raised.<br><br>In the outer try block, 'foo(0)' is called, which raises the ArithmeticError. This is caught by the except ArithmeticError block, which increments m by 2. <br><br>Since no other exceptions are raised, and the re-raised exception is not caught by any other block, the final value of m is 2.<br><br>Therefore, when the print(m) statement is executed, it outputs 2.",
    link: "https://docs.python.org/3/tutorial/errors.html#handling-exceptions",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image157.png",
    answers: [
      { text: "it outputs 3", correct: false },
      { text: "the code is erroneous and it will not execute", correct: false },
      { text: "it outputs 1", correct: true },
      { text: "it outputs 2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code attempts to convert the string s with the value '2A' into an integer using int(s). However, '2A' is not a valid integer literal, so a ValueError exception will be raised by the int() function.<br><br>Since ValueError is a subclass of Exception but not explicitly caught by any of the specified except clauses (TypeError, LookupError), the generic except clause is triggered. In this generic except block, the value of n is set to 1.<br><br>Thus, the print(n) statement will output 1.",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image158.png",
    answers: [
      { text: "it outputs error", correct: false },
      { text: "it outputs <class 'IndexError'>", correct: false },
      { text: "it outputs list assignment index out of range", correct: true },
      { text: "the code is erroneous and it will not execute", correct: false },
    ],
    explanation: `Explanation:<br><br>When the code is executed, it attempts to assign a value to an index in the list that does not exist. The list 'my_list' contains three elements with indices '0', '1', and '2'.<br><br> The code tries to assign the value at index '2' to index '3', but since the list does not have an index '3', Python raises an 'IndexError'. This error is caught by the 'except' block, which then prints the error message "list assignment index out of range". <br><br>Therefore, the expected outcome of this code is the error message being printed.`,
    link: "https://www.freecodecamp.org/news/list-index-out-of-range-python-error-message-solved/",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image159.png",
    answers: [
      { text: "it raises an exception", correct: false },
      { text: "it outputs 0", correct: true },
      { text: "it outputs 3", correct: false },
      { text: "it outputs 'None'", correct: false },
    ],
    explanation: `Explanation:<br><br>When the code is executed, it first calculates the result of 1 / 3, which is approximately '0.3333333333333333', and converts this result into a string. The code then iterates over each character in this string, adding each character to the beginning of an initially empty string called 'dummy'. This process effectively reverses the string.<br><br> After the loop completes, 'dummy' contains the reversed version of the original string, which is "3333333333333333.0".<br><br> Finally, the code prints the last character of this reversed string. Since the last character of "3333333333333333.0" is "0", the code will print "0".`,
    link: "https://www.w3schools.com/python/python_howto_reverse_string.asp",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image160.png",
    answers: [
      { text: "it raises an exception", correct: false },
      { text: "it outputs True", correct: false },
      { text: "it outputs False", correct: true },
      { text: "it outputs nothing", correct: false },
    ],
    explanation: `Explanation:<br><br>The expected behavior of the code begins with the string "alpha;beta;gamma" being split using the delimiter ":" through the split method. Since this delimiter does not exist in the string, the result of this operation is a list containing a single element, which is ['alpha;beta;gamma'].<br><br>Following this, the code attempts to join the elements of the list into a single string using an empty string '' as the separator. Given that the list contains only one element, the resulting string remains unchanged as "alpha;beta;gamma".<br><br>Finally, the code checks whether the resulting string "alpha;beta;gamma" consists solely of alphabetic characters by using the isalpha() method. Because the string includes semicolons (;), which are not alphabetic characters, the isalpha() method returns False.<br><br>Thus, when this code is executed, the final output will be False.`,
    link: "https://www.w3schools.com/python/ref_string_isalpha.asp",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image161.png",
    answers: [
      { text: "it outputs 0", correct: false },
      { text: "it outputs 1", correct: true },
      { text: "it raises an exception", correct: false },
      { text: "it outputs 2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code defines a class hierarchy with three classes: Super, Sub_A, and Sub_B. The Super class has two methods: make, which returns 0, and doit, which calls self.make() and returns its result. The Sub_A class inherits from Super and overrides the make method to return 1. The Sub_B class also inherits from Super but does not override the make method, so it uses the default implementation from Super.<br><br>When instances of these classes are created (a as an instance of Sub_A and b as an instance of Sub_B), and the doit method is called on each instance, the behavior is as follows:<br><br>For instance a of Sub_A, calling a.doit() invokes doit, which in turn calls self.make(). Since a is an instance of Sub_A, the overridden make method in Sub_A is used, which returns 1.<br><br>For instance b of Sub_B, calling b.doit() similarly invokes doit, which calls self.make(). Since b is an instance of Sub_B and this class does not override make, it uses the make method from Super, which returns 0.<br><br>Therefore, when you print the sum of the results of a.doit() and b.doit(), the calculation is 1 + 0, resulting in an output of 1.",
    link: "https://docs.python.org/3/tutorial/classes.html#overriding-methods",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image162.png",
    answers: [
      { text: "True upper", correct: false },
      { text: "True lower", correct: false },
      { text: "False upper", correct: true },
      { text: "False lower", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In the given code, there are two classes: Upper and Lower. The Lower class inherits from Upper and overrides the method to return a different string.<br><br>An instance named Object is created from the Upper class. When the isinstance function is used to check if Object is an instance of the Lower class, the result is False because Object is an instance of Upper, not Lower.<br><br>When calling the method on the Object instance, it invokes the method defined in the Upper class, which returns the string 'upper'.<br><br>Thus, when the print statement is executed, it first prints False (the result of the isinstance check) and then prints 'upper' (the result of the method call), with the two values separated by a space. <br><br>Therefore, the output of the code is: False upper.",
    link: "https://docs.python.org/3/library/functions.html#isinstance",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image163.png",
    answers: [
      { text: "it outputs 1", correct: false },
      { text: "it outputs 3", correct: true },
      { text: "it outputs 6", correct: false },
      { text: "it raises an exception", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In the given code, the class Class has a class attribute __Var that is initialized to 0. The foo method increments this class attribute and assigns the incremented value to an instance attribute named __prop.<br><br>When an instance o1 of Class is created and its foo method is called, the class attribute __Var is incremented from 0 to 1, and the instance attribute __prop for o1 is set to 1. Subsequently, another instance o2 of Class is created, and calling o2.foo() again increments the class attribute __Var from 1 to 2, setting the instance attribute __prop for o2 to 2.<br><br>Finally, the code prints the sum of o2._Class__Var and o1._Class__prop. The value of o2._Class__Var is 2, and the value of o1._Class__prop is 1. Therefore, the result of the addition is 3.",
    link: "https://docs.python.org/3/tutorial/classes.html#private-variables",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image164.png",
    answers: [
      { text: "it outputs 0", correct: true },
      { text: "it raises an exception", correct: false },
      { text: "it outputs 1", correct: false },
      { text: "it outputs 2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In the provided code, the class Class has a class attribute named Variable, which is initialized to 0, and an instance attribute value, also initialized to 0.<br><br>When an instance object_1 of Class is created, it initially inherits the class attribute Variable with the value 0 and has its own instance attribute value set to 0. After creating object_1, the code sets object_1.Variable to 1. This action creates or modifies an instance attribute named Variable specific to object_1, but it does not affect the class attribute Variable, which remains 0 for other instances.<br><br>Next, another instance object_2 of Class is created. This instance starts with the class attribute Variable set to 0 and its own instance attribute value set to 0. The code then increments object_2.value by 1, so object_2.value becomes 1.<br><br>When the code prints the sum of object_2.Variable and object_1.value, it calculates object_2.Variable (which is still 0, as it refers to the class attribute) and object_1.value (which remains 0, as it was not modified). Thus, the sum is 0.",
    link: "https://docs.python.org/3/tutorial/classes.html#class-attributes",
  },
  {
    question:
      "A property that stores information about a given class's super-classes is named:",
    answers: [
      { text: "__upper__", correct: false },
      { text: "__super__", correct: false },
      { text: "__ancestors__", correct: false },
      { text: "__bases__", correct: true },
    ],
    explanation:
      "Explanation:<br><br>In Python, __bases__ is an attribute of a class that provides a tuple containing the base classes (superclasses) of the class. This attribute allows you to inspect the hierarchy of a class and see which classes it directly inherits from.",
    link: "https://docs.python.org/3/reference/datamodel.html#class-objects",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image165.png",
    answers: [
      { text: "a", correct: false },
      { text: "c", correct: true },
      { text: "an exception is raised", correct: false },
      { text: "b", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In the provided code, a tuple named mytu is defined with the elements 'a', 'b', and 'c'. The code then uses the map function along with a lambda function to transform each element of the tuple.<br><br>The lambda function lambda x: chr(ord(x) + 1) converts each character to its Unicode code point using ord(x), increments this code point by 1, and then converts it back to a character using chr. As a result, each character in the tuple mytu is replaced by the next character in the Unicode sequence. Specifically, 'a' becomes 'b', 'b' becomes 'c', and 'c' becomes 'd'. Thus, the transformed tuple is ('b', 'c', 'd').<br><br>Finally, the code prints the element at the index -2 of the tuple m, which refers to the second-to-last element. In the tuple ('b', 'c', 'd'), the second-to-last element is 'c'.",
    link: "https://realpython.com/python-lambda/#anonymous-functions",
  },
  ,
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image166.png",
    answers: [
      { text: "it outputs [1, 3]", correct: false },
      { text: "the code is erroneous and it will not execute", correct: false },
      { text: "it outputs [3, 1]", correct: true },
      { text: "it outputs [4, 2, 0]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code begins by creating a list named my_list, which contains the values [0, 1, 2, 3, 4]. This list is generated using a list comprehension that iterates over the numbers from 0 to 4.<br><br>Following this, a new list named m is constructed using another list comprehension. This comprehension iterates over the indices 4, 3, 2, and 1 in reverse order. For each index, it checks whether the value at that index in my_list is odd. If the value is odd, it is included in the list m.<br><br>Specifically, when the code examines index 4, the value is 4, which is even, so this value is not included in the new list. At index 3, the value is 3, which is odd, so it is included. At index 2, the value is 2, which is even, so it is not included. Finally, at index 1, the value is 1, which is odd, so it is included.<br><br>As a result, the list m is created with the values [3, 1].",
    link: "https://www.w3schools.com/python/python_lists_comprehension.asp",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image167.png",
    answers: [
      { text: "3", correct: true },
      { text: "5", correct: false },
      { text: "4", correct: false },
      { text: "an exception is raised", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code defines a function named foo that takes two parameters: x and y. Inside the function, y(x) is evaluated first, and then the result is added to x + 1. The result of this addition is then returned by the function.<br><br>In the specific call to foo, the first argument is 1 and the second argument is a lambda function defined as lambda x: x * x. This lambda function takes an input x and returns the square of x.<br><br>When foo is called with these arguments, the lambda function lambda x: x * x is applied to the value 1. Therefore, y(1) results in 1 * 1, which is 1. Next, the function adds this result to x + 1, which is 1 + 1, resulting in 2.<br><br>Thus, the function foo(1, lambda x: x * x) returns 2, and when the result is printed, the output is 2.",
    link: "https://realpython.com/python-lambda/#anonymous-functions",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image168.png",
    answers: [
      { text: "the code is erroneous and it will not execute", correct: false },
      { text: "it outputs 1", correct: false },
      { text: "it outputs -1", correct: false },
      { text: "it outputs 0", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The code first calculates 3 % 1, which is 0, and assigns this value to the variable x. Then, it uses a conditional expression to set y to 1 if x is greater than 0, otherwise to 0. Since x is 0, which is not greater than 0, y is assigned 0. Finally, the code prints y, so the output is 0.",
    link: "https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image169.png",
    answers: [
      { text: "the code is erroneous and it will not execute", correct: false },
      { text: "it outputs 2.0", correct: true },
      { text: "it outputs 2.5", correct: false },
      { text: "it outputs 3.0", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code first calculates 8 ** (1 / 3), which is the cube root of 8. This calculation results in 2.0 because 23=823=8. Thus, x is assigned the value 2.0.<br><br>Next, the code uses a conditional expression to set the variable y. It checks if x is less than 2.3. Since x is 2.0, which is indeed less than 2.3, the condition is true, and y is assigned the value 2.0.",
    link: "https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",
  },
  {
    question: "What is the expected behavior of the following code?",
    image: "images/image170.png",
    answers: [
      { text: "it outputs [4, 2]", correct: true },
      { text: "it outputs [2, 4]", correct: false },
      { text: "it outputs [0, 1, 2, 3, 4]", correct: false },
      { text: "the code is erroneous and it will not execute", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code begins by creating a list named my_list using a list comprehension. This comprehension iterates over the range from 5 down to 1 (excluding 0), resulting in the list [5, 4, 3, 2, 1].<br><br>Following this, another list comprehension constructs the list m. This comprehension iterates over the indices from 0 to 4 and includes elements from my_list only if those elements are even. Specifically, at index 0, the value is 5, which is odd, so it is not included. At index 1, the value is 4, which is even, so it is included. At index 2, the value is 3, which is odd, so it is not included. At index 3, the value is 2, which is even, so it is included. Finally, at index 4, the value is 1, which is odd, so it is not included.<br><br>As a result, the list m contains the even numbers [4, 2].",
    link: "https://www.w3schools.com/python/python_lists_comprehension.asp",
  },
  {
    question: "The __bases__ property contains:",
    answers: [
      { text: "base class location (addr)", correct: false },
      { text: "base class objects (class)", correct: true },
      { text: "base class names (str)", correct: false },
      { text: "base class ids (int)", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The __bases__ attribute of a class is a tuple containing the base classes of that class. Each element in this tuple is a class object representing a direct base class of the class. This allows you to inspect the inheritance hierarchy of a class programmatically.",
    link: "https://docs.python.org/3/reference/datamodel.html#class-objects",
  },
  {
    question:
      "Operator able to perform bitwise shifts is coded as ... <br><br>(Choose two)",
    answers: [
      { text: "- -", correct: false },
      { text: "+ +", correct: false },
      { text: "< <", correct: true },
      { text: "> >", correct: true },
    ],
    explanation:
      "Explanation:<br><br>Both << and >> are bitwise shift operators in Python. The << operator performs a left shift, and the >> operator performs a right shift.",
    link: "https://docs.python.org/3/reference/expressions.html#operator-precedence",
  },
  {
    question:
      "Which of the following statements are true? <br><br>(Choose two)",
    answers: [
      { text: "Python strings are actually lists", correct: false },
      { text: "Python strings can be concatenated", correct: true },
      { text: "Python strings can be sliced like lists", correct: true },
      { text: "Python strings are mutable", correct: false },
    ],
    explanation:
      "Explanation:<br><br>Python strings can be concatenated using the + operator and can be sliced similarly to lists. <br><br>However, Python strings are not mutable; once created, their contents cannot be changed.",
    link: "https://docs.python.org/3/library/stdtypes.html#str",
  },
  {
    question: "Which of the following sentences are true? <br><br>(Choose two)",
    answers: [
      { text: "Lists may not be stored inside tuples", correct: false },
      { text: "Tuples may be stored inside lists", correct: true },
      { text: "Tuples may not be stored inside", correct: false },
      { text: "Lists may be stored inside lists", correct: true },
    ],
    explanation:
      "Explanation:<br><br>In Python, you can store tuples inside lists, and you can also store lists inside other lists. However, lists cannot be stored inside tuples because tuples are immutable, meaning their contents cannot be changed once created.",
    link: "https://docs.python.org/3/library/stdtypes.html#tuple",
  },
  {
    question:
      "What would you used instead of XXX if you want to check wether a certain 'key' exists in a dictionary called dict? <br><br>(Choose two)",
    image: "images/image171.png",
    answers: [
      { text: "'key' in dict", correct: true },
      { text: "dict['key'] != None", correct: false },
      { text: "dict.exists('key')", correct: false },
      { text: "'key' in dict.keys( )", correct: true },
    ],
    explanation:
      "Explanation:<br><br>'key' in dict: This is the most efficient and straightforward way to check if a key exists in a dictionary. It checks for the presence of the key directly.<br><br>'key' in dict.keys(): While this method works and will correctly determine if the key is in the dictionary, it is less efficient than using 'key' in dict because it involves creating a view of the dictionary's keys.",
    link: "https://docs.python.org/3/library/stdtypes.html#dict",
  },
  {
    question:
      "You need data which can act as a simple telephone directory. You can obtain it with the following clauses<br><br>(Choose two.)",
    answers: [
      { text: "A) dir={'Mom': 5551234567, 'Dad': 5557654321}", correct: true },
      {
        text: "B) dir= {'Mom': '5551234567', 'Dad': '5557654321'}",
        correct: true,
      },
      { text: "C) dir= {Mom: 5551234567, Dad: 5557654321}", correct: false },
      {
        text: "D) dir= {Mom: '5551234567', Dad: '5557654321'}",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>A) uses integers for phone numbers, which is valid but might limit formatting or leading zeros.<br><br>B) uses strings for phone numbers, which allows more flexibility in formatting and handling.<br><br>Options C) and D) are incorrect due to the lack of quotes around the dictionary keys, which should be strings.",
    link: "https://docs.python.org/3/library/stdtypes.html#dict",
  },
  {
    question: "Select the valid fun () invocations: <br><br>(Choose two)",
    image: "images/image172.png",
    answers: [
      { text: "A)  fun(b=1)", correct: false },
      { text: "B)  fun(a=0)", correct: true },
      { text: "C)  fun(b=1, 0)", correct: false },
      { text: "D)  fun(1)", correct: true },
    ],
    explanation:
      "Explanation:<br><br>A) is invalid because a is a required argument, and it is missing. You must provide a value for a when calling the function.<br><br>B) is valid. You provide a value for a (0), and since b has a default value of 0, it is not necessary to pass a value for b.<br><br>C) is invalid because positional arguments (like 0) must come before keyword arguments (like b=1). Python doesn't allow a positional argument after a keyword argument.<br><br>D) is valid. You provide a value for a (1), and since b has a default value of 0, it takes that default value.",
    link: "https://www.datamentor.io/python/function-arguments",
  },
  {
    question:
      "If you need a function that does nothing, what would you use instead of XXX? <br><br>(Choose two)",
    image: "images/image173.png",
    answers: [
      { text: "pass", correct: true },
      { text: "return", correct: true },
      { text: "exit", correct: false },
      { text: "None", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, the pass statement is used when you need a placeholder for code that does nothing. It is often used in situations where code is syntactically required but you don't want to execute anything, such as in an empty function or class definition.<br><br>Using return would also result in a function that does nothing in the sense that it exits without returning a value. When return is used without any expression in a function, it simply ends the function and implicitly returns None.",
    link: "https://docs.python.org/3/reference/compound_stmts.html#pass",
  },
  {
    question:
      "What can you deduce from the following statement?<br><br>str = open('file.txt', 'rt')<br><br>(Choose two)",
    answers: [
      {
        text: "A) str is a string read in from the file named file.txt",
        correct: false,
      },
      {
        text: "B) a newline character translation will be performed during the reads",
        correct: true,
      },
      {
        text: "C) if file. txt does not exist, it will be created",
        correct: false,
      },
      {
        text: "D) the opened file cannot be written with the use of the str variable",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>B) The mode 'rt' stands for reading the file in text mode with newline translation. In text mode, the file will automatically handle newline characters and convert them appropriately.<br><br>A) is incorrect because str is not a string but a file object, and the file contents have not been read yet.<br><br>C) is incorrect because the file is opened in read mode, and if 'file.txt' doesn't exist, Python will raise a FileNotFoundError. The file won't be created.<br><br>D) is true, but indirectly. Since the file is opened in read mode ('r'), the file cannot be written to, but it's not because of the variable str; it's because of the mode 'r'.",
    link: "https://docs.python.org/3/library/functions.html#open",
  },
  {
    question:
      "Which of the following words can be used as a variable name?  <br><br>(Choose two)",
    answers: [
      { text: "for", correct: false },
      { text: "True", correct: false },
      { text: "For", correct: true },
      { text: "true", correct: true },
    ],
    explanation:
      "Explanation:<br><br>for is a reserved keyword in Python and cannot be used as a variable name.<br><br>True is a built-in constant in Python and cannot be used as a variable name.",
    link: "https://docs.python.org/3/reference/lexical_analysis.html#keywords",
  },
  {
    question:
      "Which line can be used instead of the comment to cause the snippet to produce the output '1 2 3'?",
    image: "images/image174.png",
    answers: [
      { text: "A)", correct: true },
      { text: "B)", correct: false },
      { text: "C)", correct: true },
      { text: "D)", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A) This line of code sets c to the value of b (which is 3), b to the value of a (which is 2), and a to the value of c (which is 1). After executing this line, the values will be: a = 1, b = 2, and c = 3. Therefore, print(a, b, c) will output 1 2 3.<br><br>B) This line assigns c the value of a (which is 2), b the value of c (which is 1), and a the value of b (which is 3). After this operation, the values will be: a = 3, b = 1, and c = 2. Therefore, print(a, b, c) will produce 3 1 2.<br><br>C) This line sets a to the value of c (which is 1), b to the value of a (which is 2), and c to the value of b (which is 3). After this line is executed, the values will be: a = 1, b = 2, and c = 3. Therefore, print(a, b, c) will output 1 2 3.<br><br>D) This line does not change any values; it simply assigns each variable its current value.",
    link: "https://docs.python.org/3/tutorial/controlflow.html#assignment-statements",
  },
  {
    question:
      "Which of the listed actions can be applied to the following tuple? (Choose two)<br><br>tup = ()",
    answers: [
      { text: "A) tup[:]", correct: true },
      { text: "B) tup.append(0)", correct: false },
      { text: "C) tup[0]", correct: false },
      { text: "D) del tup", correct: true },
    ],
    explanation:
      "Explanation:<br><br>A) is valid. The slice operation on a tuple creates a new tuple containing all the elements from the original tuple. Since tup is an empty tuple, tup[:] will also be an empty tuple ().<br><br>B) is not valid. Tuples in Python are immutable, which means you cannot modify them by adding elements. The append method is specific to lists, not tuples.<br><br>C) is not valid in this case. Accessing an index in a tuple requires that the index exists within the tuple. Since tup is empty, there is no element at index 0, so this will raise an IndexError.<br><br>D) is valid. The del statement can be used to delete the entire tuple variable tup. After executing del tup, the variable tup will no longer exist in the namespace.",
    link: "https://docs.python.org/3/library/stdtypes.html#tuple",
  },
  {
    question: "Which of the equations are True? <br><br>(Choose two)",
    answers: [
      { text: "A) chr(ord(x)) == x", correct: true },
      { text: "B) ord(ord(x)) == x", correct: false },
      { text: "C) chr(chr(x)) == x", correct: false },
      { text: "D) ord(chr(x)) == x", correct: true },
    ],
    explanation:
      "Explanation<br><br>A) is true when x is a single character string. The ord() function converts a character to its corresponding ASCII (or Unicode) code point, and the chr() function converts a code point back to a character. So, for a single character x, chr(ord(x)) will indeed be equal to x.<br><br>B) is not true. The ord() function expects a single character string and returns its integer ASCII (or Unicode) code point. Applying ord() to this integer (which is not a valid input for ord()) will raise a TypeError.<br><br>C) is not true. The chr() function expects an integer code point and returns a character. Applying chr() to a character (which is not a valid input for chr()) will raise a TypeError.<br><br>D) is true when x is a valid integer code point within the range of characters (0 to 1114111 for Unicode). The chr() function converts the integer code point to a character, and the ord() function converts it back to the integer code point. Thus, ord(chr(x)) will be equal to x as long as x is within the valid range.",
    link: "https://docs.python.org/3/library/functions.html#ord",
  },
  {
    question: "A class constructor... <br><br>(Choose two)",
    answers: [
      { text: "A) can return a value", correct: false },
      {
        text: "B) cannot be invoked directly from inside the class",
        correct: true,
      },
      {
        text: "C) can be invoked directly from any of the subclasses",
        correct: true,
      },
      {
        text: "D) can be invoked directly from any of the superclasses",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>A) is false. In Python, a class constructor is defined by the __init__ method, and it cannot return a value other than None. The purpose of __init__ is to initialize the instance of the class, not to return values.<br><br>B) is true. While it's uncommon and not typical practice, the __init__ method can be called from within other methods of the class. However, doing so directly is not standard practice and can lead to confusing code.<br><br>C) is true. Subclasses can invoke the constructor of their parent class using super().__init__() or by directly calling the parent class's __init__ method if needed.<br><br>D) is not accurate. You cannot invoke the constructor of a superclass directly from a superclass. The superclass's constructor is typically invoked through the subclass or through inheritance mechanisms.",
    link: "https://docs.python.org/3/library/functions.html#super",
  },
  {
    question:
      "Assuming that the code below has been executed successfully, which of the following expressions will always evaluate to True? <br><br>(Choose two)",
    image: "images/image175.png",
    answers: [
      { text: "A) v1 >= 1", correct: false },
      { text: "B) v1 == v2", correct: true },
      { text: "C) len(random.sample([1, 2, 3], 2)) > 2", correct: false },
      { text: "D) random.choice([1, 2, 3]) >= 1", correct: true },
    ],
    explanation:
      "Explanation:<br><br>A) will evaluate to False. The random.random() function generates a floating-point number in the range [0.0, 1.0), so v1 and v2 will always be less than 1.<br><br>B) will evaluate to True. The random.seed(1) function initializes the random number generator to a known state. By resetting the seed to 1 and calling random.random() again, v1 and v2 will be identical because the sequence of random numbers generated will be the same due to the same seed.<br><br>C) will evaluate to False. The random.sample() function returns a list of unique elements from the given sequence. The length of the list returned when sampling 2 elements from [1, 2, 3] will always be 2, which is not greater than 2.<br><br>D) will evaluate to True. The random.choice() function selects a random element from the list [1, 2, 3]. Since all elements in the list are 1, 2, or 3, and all of these are greater than or equal to 1, the condition will always be true.",
    link: "https://docs.python.org/3/library/random.html#random.seed",
  },
  {
    question:
      "Which of the following snippets will execute without raising any unhandled exceptions? <br><br>(Choose two)",
    image: "images/image176.png",
    answers: [
      { text: "A", correct: true },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],
    explanation: `Explanation:<br><br>In A, the code will execute without raising any unhandled exceptions. Although 0/0 will raise a ZeroDivisionError, this exception is caught by the except block. The except block then executes successfully with 0/1, and since the else block is skipped due to the exception, no further issues occur.<br><br>In B, the code will raise an unhandled exception. The int("0") conversion succeeds without any issues, but when it reaches the else block, int("") raises a ValueError, which is not handled by the except clause. This results in an unhandled exception.<br><br>In C, the code will also execute without raising any unhandled exceptions. The math.sqrt(-1) call raises a ValueError, but this exception is caught by the except block, which successfully executes math.sqrt(0). Since an exception was caught, the else block does not execute, and no further issues arise.<br><br>In D, the code will raise an unhandled exception. The float("1e1") conversion succeeds, but when the else block is reached, float("1c1") raises a ValueError. Since this exception is not caught, the snippet results in an unhandled exception.`,
    link: "https://docs.python.org/3/library/functions.html#int",
  },
  {
    question:
      "Which of the following expressions evaluate to True? <br><br>(Choose two)",
    answers: [
      { text: `A)   ord("Z") - ord("z") == ord("0")`, correct: false },
      { text: `B)   chr(ord('A') + 1) == 'B'`, correct: true },
      { text: `C)   len('\'') == 1 # ( ' \ ' ' )`, correct: true },
      { text: `D)   len(""" """) == 0`, correct: false },
    ],
    explanation: `Explanation:<br><br>A) evaluates to false. The ASCII value of "Z" is 90, and the ASCII value of "z" is 122. Subtracting these values gives -32, while the ASCII value of "0" is 48. Since -32 does not equal 48, this expression is false.<br><br>B) evaluates to true. The ord('A') function returns 65, and adding 1 results in 66. The chr(66) function converts this back to the character 'B', so the expression chr(ord('A') + 1) indeed results in 'B'.<br><br>C) evaluates to true. The string '\' contains a single character, which is a single quote. Its length is 1, making the expression len('\'') == 1 true.<br><br>D) evaluates to false. The string """ """ is a multi-line string that contains one space character. Thus, its length is 1, not 0. Therefore, this expression is false.`,
    link: "https://docs.python.org/3/library/functions.html#ord",
  },
  {
    question:
      "Which of the following expressions evaluate to True? <br><br>(Choose two)",
    answers: [
      { text: "A)   121 + 1 != '1' + 2 * '2'", correct: true },
      { text: "B)   '1' + '1' + '1' < '1' * 3", correct: false },
      { text: "C)   'AbC'.lower() < 'AB'", correct: false },
      { text: "D)   '3.14' != str(3.1415)", correct: true },
    ],
    explanation:
      "Explanation:<br><br>A) evaluates to true. The integer 121 + 1 results in 122, whereas '1' + 2 * '2' creates the string '122' by concatenating '1' with '2' repeated twice. Since an integer and a string are different types, 122 does not equal '122', making this comparison true.<br><br>B) evaluates to false. The expression '1' + '1' + '1' results in the string '111', and '1' * 3 also results in '111'. Since '111' is not less than '111', this expression is false.<br><br>C) evaluates to false. The lower() method converts 'AbC' to 'abc'. In ASCII comparison, 'abc' is not less than 'AB' because lowercase letters have higher values than uppercase letters.<br><br>D) evaluates to true. The string '3.14' is not equal to str(3.1415), which converts the float 3.1415 to the string '3.1415'. Since '3.14' and '3.1415' are different, this expression is true.",
    link: "https://docs.python.org/3/library/functions.html#str",
  },
  {
    question:
      "Assuming that the code below has been placed inside a file named code.py and executed successfully, which of the following expressions evaluate to True? <br><br>(Choose two)",
    image: "images/image177.png",
    answers: [
      { text: "A)   len(ClassA.__bases__) == 2", correct: false },
      { text: "B)   ClassA.__module__ == '__main__'", correct: true },
      { text: "C)   __name__ == 'code.py'", correct: false },
      { text: "D)   str(Object) == 'Object'", correct: true },
    ],
    explanation:
      "Explanation:<br><br>A) evaluates to false. ClassA.__bases__ is a tuple containing the base classes of ClassA. Since ClassA only inherits from the implicit object class and has no other explicit base classes, ClassA.__bases__ is (object,), which has a length of 1. Therefore, len(ClassA.__bases__) is 1, not 2.<br><br>B) evaluates to true. The __module__ attribute of a class holds the name of the module where the class is defined. When code.py is executed directly, its module name is set to '__main__'. Hence, ClassA.__module__ will indeed be '__main__'.<br><br>C) evaluates to false. The special variable __name__ is set to '__main__' when a script is run directly, not to the name of the file. Therefore, __name__ is '__main__', not 'code.py'.<br><br>D) evaluates to true. The Object instance is created from ClassB, which inherits the __str__ method from ClassA. The __str__ method of ClassA returns 'Object', so str(Object) will indeed return 'Object'.",
    link: "https://docs.python.org/3/library/functions.html#str",
  },
  {
    question:
      "What is true about Object-Oriented Programming in Python? <br><br>(Choose two)",
    answers: [
      {
        text: "each object of the same class can have a different set of methods",
        correct: false,
      },
      {
        text: "a subclass is usually more specialized than its superclass",
        correct: true,
      },
      {
        text: "if a real-life object can be described with a set of adjectives, they may reflect a Python object method",
        correct: false,
      },
      {
        text: "the same class can be used many times to build a number of objects",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>In OOP, a subclass typically extends or specializes the behavior of its superclass. It inherits methods and attributes from the superclass and can add or override functionality to provide more specific behavior.<br><br>A class serves as a blueprint for creating objects. Multiple objects can be instantiated from the same class, each having its own set of attributes while sharing the same methods.",
    link: "https://www.programiz.com/python-programming/object-oriented-programming",
  },
  {
    question:
      "What is true about Python class constructors? <br><br>(Choose two)",
    answers: [
      {
        text: "there can be more than one constructor in a Python class",
        correct: false,
      },
      {
        text: "the constructor must return a value other than None",
        correct: false,
      },
      { text: "the constructor is a method named __init__", correct: true },
      {
        text: "the constructor must have at least one parameter",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>In Python, the constructor for a class is defined by the __init__ method. This special method is automatically called when a new instance of the class is created, and it is used to initialize the object's attributes.<br><br>The __init__ method must have at least one parameter, self, which refers to the instance being created. However, it can also have additional parameters that are used to initialize the object's attributes.",
    link: "https://www.geeksforgeeks.org/constructors-in-python/",
  },
  {
    question:
      "Which of the following lambda definitions are correct? <br><br>(Choose two)",
    image: "images/image735.png",
    answers: [
      { text: "A)", correct: true },
      { text: "B)", correct: false },
      { text: "C)", correct: true },
      { text: "D)", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A) is a correct lambda function definition. It takes two parameters, x and y, and returns a tuple (x, y). The syntax is valid and does not produce any errors.<br><br>B) is incorrect. In Python, lambda functions cannot use the return keyword. The lambda function should directly express the return value without the return keyword. The correct syntax would be to write lambda x, y: x // y - x % y.<br><br>C) is a correct lambda function definition. It takes two parameters, x and y, and returns the result of x // y - x % y. The syntax is valid and appropriate for a lambda function.<br><br>D) is incorrect. Lambda functions do not support default values for parameters in this syntax. Parameters should be specified without default values. The correct lambda function definition should not include default values for parameters.",
    link: "https://docs.python.org/3/library/functions.html#lambda",
  },
  {
    question:
      "Which of the following statements are true? <br><br>(Choose two)",
    answers: [
      {
        text: "if invoking open () fails, an exception is raised",
        correct: true,
      },
      { text: "open () requires a second argument", correct: false },
      {
        text: "open () is a function which returns an object that represents a physical file",
        correct: true,
      },
      {
        text: "instd, outstd. errstd are the names of pre-opened streams",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>If open() fails due to reasons such as the file not being found, lacking permissions, or other issues, it raises an exception, typically an OSError or FileNotFoundError.<br><br>The open() function returns a file object, which provides methods and attributes to interact with the file, such as reading from or writing to the file.<br><br><br><br>The open() function requires at least one argument, which is the file path. The second argument, which specifies the mode (e.g., 'r', 'w', 'a'), is optional. If omitted, the default mode is 'r' (read mode).<br><br>The standard pre-opened streams in Python are named sys.stdin, sys.stdout, and sys.stderr. These represent the standard input, output, and error streams, respectively. The names instd, outstd, and errstd are not used in Python.",
    link: "https://docs.python.org/3/library/functions.html#open",
  },
  {
    question:
      "Which of the following expressions evaluate to True? <br><br>(Choose two)",
    answers: [
      { text: `A)   ord('a') - ord('A') == ord('0')`, correct: false },
      { text: `B)   len(""" """) > 0`, correct: true },
      { text: `C)   chr(ord('a') + 1) == 'B'`, correct: false },
      { text: `D)   len('\'') == 1 # ' \' '`, correct: true },
    ],
    explanation: `Explanation:<br><br>A) evaluates to false. The ord('a') function returns the ASCII value of 'a', which is 97, and ord('A') returns 65. Subtracting 65 from 97 gives 32. The ord('0') function returns 48, so 32 is not equal to 48.<br><br>B) evaluates to true. The string """ """ contains a single space character. The length of this string is 1, which is greater than 0. Therefore, the condition len(""" """) > 0 is true.<br><br>c) evaluates to false. The ord('a') function returns the ASCII value of 'a', which is 97. Adding 1 to 97 results in 98, and chr(98) gives 'b'. Therefore, chr(ord('a') + 1) evaluates to 'b', not 'B'.<br><br>D) evaluates to true. The string '\' contains a single backslash character. Its length is indeed 1. Thus, len('\'') equals 1, making the expression true.`,
    link: "https://docs.python.org/3/library/functions.html#ord",
  },
  {
    question:
      "Assuming that the code below has been executed successfully, which of the expressions evaluate to True? <br><br>(Choose two)",
    image: "images/image178.png",
    answers: [
      { text: "A)", correct: true },
      { text: "B)", correct: false },
      { text: "C)", correct: true },
      { text: "D)", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A) evaluates to true. The Class.__dict__ attribute is a dictionary containing the class attributes of Class. Since var is defined as a class attribute, it is present in Class.__dict__.<br><br>B) evaluates to false. The Object.__dict__ attribute contains instance attributes of the Object instance. var is a class attribute, not an instance attribute, so it does not appear in Object.__dict__.<br><br>C) evaluates to true. The Object.__dict__ contains instance attributes of the Object instance. The only instance attribute set by the __init__ method is prop, which has the value 2. Therefore, Object.__dict__ contains one entry, making its length 1.<br><br>D) evaluates to false. The Class.__dict__ contains class attributes of Class, while prop is an instance attribute set in the __init__ method. Since prop is not a class attribute, it does not appear in Class.__dict__.",
    link: "https://docs.python.org/3/reference/datamodel.html#object.__dict__",
  },
  {
    question:
      "Assuming that the code below has been executed successfully, which of the following expressions will always evaluate to True? <br><br>(Choose two)",
    image: "images/image179.png",
    answers: [
      { text: "A)   v1 == v2", correct: false },
      { text: "B)   v1 < 1", correct: true },
      { text: "C)   random.choice([1, 2, 3]) > 0", correct: true },
      { text: "D)   len(random.sample([1, 2, 3], 1)) > 2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>A) will not always evaluate to true. The random.random() function generates a random float between 0.0 and 1.0, and since v1 and v2 are generated independently, it is highly unlikely that they will have the exact same value. Therefore, v1 == v2 is not guaranteed to be true.<br><br>B) will always evaluate to true. The random.random() function generates a float in the range [0.0, 1.0), so v1 will always be less than 1. Hence, v1 < 1 is always true.<br><br>C) will always evaluate to true. The random.choice([1, 2, 3]) function selects a random element from the list [1, 2, 3], and since all elements in this list are greater than 0, random.choice([1, 2, 3]) > 0 will always be true.<br><br>D) will not evaluate to true. The random.sample([1, 2, 3], 1) function returns a list containing a single randomly selected element from [1, 2, 3], so the length of the list is always 1. Consequently, len(random.sample([1, 2, 3], 1)) > 2 is false because 1 is not greater than 2.",
    link: "https://docs.python.org/3/library/random.html#random.choice",
  },
  {
    question:
      "Assuming that the snippet below has been executed successfully, which of the following expressions evaluate to True? <br><br>(Choose two)",
    image: "images/image180.png",
    answers: [
      { text: "A)   string[0] == 'Y'", correct: false },
      { text: "B)   string[0] == string [-1]", correct: true },
      { text: "C)   string is None", correct: false },
      { text: "D)   len(string) == 1", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The first part of the snippet, 'SKY'[::-1], reverses the string 'SKY', which results in the string 'YKS'. After this operation, the variable string is assigned the value 'YKS'. <br><br>In the next line, string = string[-1], the last character of the string 'YKS' is extracted and assigned to string. The last character of 'YKS' is 'S', so string is now equal to 'S'.<br><br>A) is false because string is 'S', and its first character is 'S', not 'Y'.<br><br>B) is true since both string[0] and string[-1] refer to the same character, 'S'.<br><br>C) is false because string is 'S', not None.<br><br>D) is true because the length of string is 1.",
    link: "https://docs.python.org/3/reference/expressions.html#slice",
  },
  {
    question:
      "Which of the following expressions evaluate to True? <br><br>(Choose two)",
    answers: [
      { text: "A)   11 == '011", correct: false },
      { text: "B)   3 * 'a' < 'a' * 2", correct: false },
      { text: "C)   'abc'.upper() < 'abc'", correct: true },
      { text: "D)   '1' + 2 * '2' != 2 * '12'", correct: true },
    ],
    explanation:
      "Explanation:<br><br>A) compares an integer (11) with a string ('011'). In Python, integers and strings are different types, and they are never considered equal. Therefore, this expression evaluates to False.<br><br>B) multiplies the string 'a' by 3, resulting in 'aaa', and multiplies 'a' by 2, resulting in 'aa'. It then checks if 'aaa' is less than 'aa'. In Python, string comparisons are lexicographical, meaning it compares the strings character by character. Since 'aaa' is not less than 'aa', this expression evaluates to False.<br><br>C) first converts 'abc' to uppercase, resulting in 'ABC', and then compares it with 'abc'. Again, lexicographical comparison is used, and uppercase letters have lower Unicode values than lowercase letters. Since 'ABC' is less than 'abc', this expression evaluates to True.<br><br>D) evaluates the string concatenation. The left-hand side of the expression is '1' + 2 * '2', which equals '1' + '22', resulting in '122'. The right-hand side, 2 * '12', results in '1212'. Since '122' is not equal to '1212', this expression evaluates to True.",
    link: "https://docs.python.org/3/library/functions.html#str",
  },
  {
    question:
      "Which of the following invocations are valid? <br><br>(Choose two)",
    answers: [
      { text: "sorted('python')", correct: true },
      { text: "'python'.sort()", correct: false },
      { text: "sort('python')", correct: false },
      { text: "'python'.find(' ')", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The sorted() function is a valid Python function that can be used on any iterable, including strings. It returns a sorted list of characters from the string 'python'. Therefore, this invocation is valid.<br><br>The sort() method is a list method, but strings do not have a sort() method. Since 'python' is a string and not a list, this invocation is invalid.<br><br>The sort() function is not a standalone function in Python; it is a method available only for lists. Since 'python' is a string and sort() cannot be used this way, this invocation is invalid.<br><br>The find() method is a valid string method in Python. It searches for the specified substring, in this case, a space character ' ', within the string 'python'. Since 'find() is a valid method for strings, this invocation is valid.",
    link: "https://docs.python.org/3/library/functions.html#str.find",
  },
  {
    question:
      "Assuming that the math module has been successfully imported, which of the following expressions evaluate to True? <br><br>(Choose two)",
    answers: [
      { text: "A)   math.hypot(2,5) == math.trunc(2.5)", correct: false },
      { text: "B)   math.floor(2.5) == math.trunc(2.5)", correct: true },
      { text: "C)   math.ceil(2.5) == math.floor(2.5)", correct: false },
      { text: "D)   math.hypot(3,4) == math.sqrt(25)", correct: true },
    ],
    explanation:
      "Explanation:<br><br>In A), the math.hypot(2, 5) function calculates the Euclidean distance between the origin and the point (2, 5). This results in √(2² + 5²) = √29, which is approximately 5.385. On the other hand, math.trunc(2.5) removes the decimal part of 2.5, resulting in 2. Since 5.385 is not equal to 2, this expression evaluates to False.<br><br>In B), the math.floor(2.5) function returns the largest integer less than or equal to 2.5, which is 2. Similarly, math.trunc(2.5) truncates the decimal part of 2.5, also resulting in 2. Since both values are equal to 2, this expression evaluates to True.<br><br>In C), the math.ceil(2.5) function returns the smallest integer greater than or equal to 2.5, which is 3. The math.floor(2.5) function, however, returns 2. Since 3 is not equal to 2, this expression evaluates to False.<br><br>In D), the math.hypot(3, 4) function calculates the Euclidean distance between the origin and the point (3, 4), which results in √(3² + 4²) = √25 = 5. Similarly, math.sqrt(25) also returns √25, which is 5. Since both values are equal, this expression evaluates to True.",
    link: "https://docs.python.org/3/library/math.html#math.trunc",
  },
  {
    question: "Which of the following statement are true? <br><br>(Choose two)",
    answers: [
      {
        text: "A) if open( )'s second argument is 'w' and the invocation succeeds, the previous file's content is lost",
        correct: true,
      },
      {
        text: "B) closing an open file is performed by the closefile( ) function",
        correct: false,
      },
      {
        text: "C) if open( )'s second argument is 'r' the file must exist or open will fail",
        correct: true,
      },
      {
        text: "D) the second open( ) argument describes the open mode and defaults to 'w'",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>A) is true. When you open a file in write mode ('w'), the file is either created if it does not exist, or its contents are completely overwritten if it does exist. Therefore, any previous content in the file is lost.<br><br>B) is false. The correct method to close an open file in Python is file.close(), not closefile(). The function closefile() does not exist in Python.<br><br>C) is true. When you open a file in read mode ('r'), the file must already exist. If the file does not exist, Python will raise a FileNotFoundError.<br><br>D) is false. The second argument to open() does indeed describe the open mode, but the default mode is 'r' (read mode), not 'w' (write mode).",
    link: "https://docs.python.org/3/library/functions.html#open",
  },
  {
    question: "What is true about Python packages? <br><br>(Choose two)",
    answers: [
      {
        text: "A) a code designed to initialize a package's state should be placed inside a file named init.py",
        correct: false,
      },
      {
        text: "B) a package contents can be stored and distributed as an mp3 file",
        correct: false,
      },
      {
        text: "C) _pycache_is a folder that stores semi-completed Python modules",
        correct: true,
      },
      { text: "D) the sys.path variable is a list of strings", correct: true },
    ],
    explanation: `Explanation:<br><br>A) is true. In Python, the __init__.py file is used to initialize a package's state. It can contain initialization code, or it can be empty. Its presence indicates that the directory should be treated as a package.<br><br>B) is false. Python packages are typically distributed as ZIP files or directories containing Python code, not MP3 files. MP3 files are audio files and are not suitable for storing Python packages.<br><br>C) is false. The _pycache_ directory is used to store compiled bytecode files (.pyc files) for Python modules. These files are fully compiled and are used to speed up the loading of modules. They are not "semi-completed" but rather optimized bytecode versions of the source files.<br><br>D) is true. The sys.path variable in Python is a list of strings that specifies the search paths for modules. It determines where Python looks for modules to import.`,
    link: "https://docs.python.org/3/library/sys.html#sys.path",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image181.png",
    answers: [
      { text: "True" + "\n" + "False" + "\n" + "False", correct: false },
      { text: "False" + "\n" + "False" + "\n" + "False", correct: false },
      { text: "True" + "\n" + "False" + "\n" + "True", correct: false },
      { text: "True" + "\n" + "True" + "\n" + "False", correct: true },
    ],
    explanation: `Explanation:<br><br>print(' \n '.isspace()):<br>The string ' \n ' contains only whitespace characters—a space, a newline, and another space. Since all characters are whitespace and the string is not empty, the method isspace() returns True. Therefore, the output of this line is True.<br><br>print(" ".isspace()):<br> The string " " consists of a single space character, which is a whitespace character. Since the string contains only this whitespace character and is not empty, the method isspace() returns True. Thus, the output of this line is True.<br><br>print("Wazzuuuuuuuup".isspace()):<br> The string "Wazzuuuuuuuup" contains letters and no whitespace characters. Since not all characters are whitespace and the string is not empty, the method isspace() returns False. Therefore, the output of this line is False.`,
    link: "https://www.w3schools.com/python/ref_string_isspace.asp",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image182.png",
    answers: [
      { text: "[1, 2, 3, 4]", correct: false },
      { text: "[2, 4, 6, 8]", correct: false },
      { text: "[[1, 4], [9, 16]]", correct: false },
      { text: "[1, 4, 9, 16]", correct: true },
    ],
    explanation:
      "Explanation:<br><br>The code defines a matrix as matrix = [[1, 2], [3, 4]], which is a list of lists representing a 2x2 matrix. <br><br>The list comprehension [num**2 for row in matrix for num in row] processes each element in this matrix by iterating over each row and then over each number within that row. <br><br>For each number, it computes the square of the number (num**2).",
    link: "https://www.w3schools.com/python/python_lists_comprehension.asp",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image183.png",
    answers: [
      {
        text: "True" + "\n" + "True" + "\n" + "False" + "\n" + "True",
        correct: false,
      },
      {
        text: "False" + "\n" + "True" + "\n" + "True" + "\n" + "True",
        correct: false,
      },
      {
        text: "False" + "\n" + "True" + "\n" + "False" + "\n" + "False",
        correct: false,
      },
      {
        text: "False" + "\n" + "True" + "\n" + "False" + "\n" + "True",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>The first print statement checks if the instance obj has an attribute called __name__. Since __name__ is an attribute of class objects and not instances, this check returns False.<br><br>The second print statement checks if the instance obj has an attribute called __module__. The __module__ attribute is associated with classes and not instances, so this check also returns False.<br><br>The third print statement checks if the instance obj has an attribute called __bases__. This attribute pertains to class objects and not their instances, so this check returns False as well.<br><br>Finally, the fourth print statement checks if the class object MyClass has an attribute called __name__. Class objects do have a __name__ attribute, which holds the name of the class as a string. Therefore, this check returns True.",
    link: "https://www.programiz.com/python-programming/methods/built-in/hasattr",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image184.png",
    answers: [
      {
        text: `["a", "aa", "aaa", "b", "bb", "bbb", "c", "cc", "ccc"]`,
        correct: false,
      },
      { text: `["aa", "bb", "cc"]`, correct: false },
      { text: `["aa", "cc"]`, correct: true },
      { text: `["a", "b", "c"]`, correct: false },
    ],
    explanation: `Explanation:<br><br>The list comprehension [letter*2 for letter in letters if letter != "b"] creates a new list by iterating over each element in the letters list. For each letter, it checks if the letter is not equal to "b". If this condition is true, the code creates a new string by repeating the letter twice.<br><br>During execution, when the letter is "a", it meets the condition "a" != "b", so it produces "a"*2, resulting in "aa". When the letter is "b", it does not meet the condition since "b" == "b", so it is excluded from the result. For the letter "c", it meets the condition "c" != "b", and thus produces "c"*2, resulting in "cc".<br><br>As a result, the list comprehension produces the list ['aa', 'cc'].`,
    link: "https://www.programiz.com/python-programming/list-comprehension",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image185.png",
    answers: [
      { text: "True, True, False", correct: false },
      { text: "True, False, False", correct: true },
      { text: "True, False, True", correct: false },
      { text: "False, False, False", correct: false },
      { text: "True, True, True", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The first print statement checks if the class C has an attribute named A. Since C inherits from class A, which has the attribute A, the check returns True. Thus, the output of this statement is True,.<br><br>The second print statement checks if the class C has an attribute named B. Although class C inherits from class B, which has an attribute b, there is no attribute named B in C. Therefore, the check returns False, and the output is False,.<br><br>The third print statement checks if the class B has an attribute named A. Since B does not have an attribute A and only has an attribute named b, the check returns False.",
    link: "https://www.programiz.com/python-programming/methods/built-in/hasattr",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image186.png",
    answers: [
      { text: "1", correct: false },
      { text: "0", correct: false },
      { text: "2", correct: true },
      { text: "3", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code defines a class named A with two methods: __init__ and set. The __init__ method initializes an instance of A with an attribute v, which defaults to 1 if no other value is provided. The set method allows you to update the attribute v with a new value and returns this new value.<br><br>When the line a = A() is executed, an instance of class A named a is created. The __init__ method sets a.v to 1 since that is the default value specified.<br><br>Next, the print(a.set(a.v + 1)) statement is executed. In this line, a.v has the value 1, so a.v + 1 evaluates to 2. The set method is then called with the argument 2. Inside the set method, a.v is updated to 2, and the method returns the value 2.<br><br>Finally, the print function outputs the value returned by the set method, which is 2.",
    link: "https://docs.python.org/3/tutorial/classes.html",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image187.png",
    answers: [
      { text: "1", correct: false },
      { text: "3 2 1", correct: true },
      { text: "1 2 3", correct: false },
      { text: "3", correct: false },
    ],
    explanation:
      "Explanation<br><br>The code defines a generator function named countdown that takes a parameter n. This function uses a while loop to yield values starting from n and decrementing by 1 on each iteration until n is no longer greater than 0. The yield keyword produces values one at a time and pauses the function's execution until the next value is requested.<br><br>When the countdown(3) generator is used in the for loop, it begins with n set to 3. During the first iteration of the loop, the generator yields the value 3, which is printed followed by a space. The generator then decrements n to 2 and yields this value, which is also printed with a space. In the next iteration, n is decremented to 1, and this value is yielded and printed. After n is decremented to 0, the generator finishes, as n is no longer greater than 0, and the loop exits.",
    link: "https://www.programiz.com/python-programming/generator",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image188.png",
    answers: [
      { text: "The code is erroneous.", correct: false },
      { text: "1", correct: true },
      { text: "3", correct: false },
      { text: "2", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In the try block, the statement c = a / b would raise a ZeroDivisionError, which is a subclass of the ArithmeticError exception. However, in the except block, the ArithmeticError exception would be caught before the ZeroDivisionError exception. <br><br>Therefore, the value of c would be set to 1.",
    link: "https://docs.python.org/3/library/exceptions.html",
  },
  {
    question:
      "If you want to import mathematical constant e from math, which line will you use?",
    answers: [
      { text: "import e from math", correct: false },
      { text: "from e import math", correct: false },
      { text: "from math import e", correct: true },
      { text: "None of the above", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In Python, the mathematical constant e can be imported from the math module.The math module provides various mathematical functions and constants including e.<br><br>The line from math import e imports only the constant e from the math module.This means that we can now use the constant e directly in our code, without having to prefix it with the module name math.",
    link: "https://www.programiz.com/python-programming/modules",
  },
  {
    question:
      "What line of code should you use if you want to shuffle this list?",
    image: "images/image189.png",
    answers: [
      { text: "shufle(names)", correct: false },
      { text: "random(names.shuffle())", correct: false },
      { text: "names.shuffle()", correct: false },
      { text: "random.shuffle(names)", correct: true },
    ],
    explanation:
      "Explanation:<br><br>To shuffle the names list, you can use the shuffle() function from the random module in Python. This will output the names list in a random order. Note that the shuffle() function shuffles the list in place, meaning that it modifies the original list rather than returning a new shuffled list.",
    link: "https://www.w3schools.com/python/ref_random_shuffle.asp",
  },
  {
    question: "What does the .read() method do in Python file handling?",
    answers: [
      {
        text: "Reads the entire contents of the file as a single string.",
        correct: true,
      },
      { text: "Reads all lines of text from the file.", correct: false },
      { text: "Reads a single line of text from the file.", correct: false },
      {
        text: "Reads a specified number of characters from the file.",
        correct: false,
      },
    ],
    explanation:
      "Explanation:<br><br>The .read() method in Python file handling is used to read the contents of a file. It allows you to read the entire content of a file as a string or a specified number of bytes from the file. When called without any arguments, file.read() reads the entire content of the file and returns it as a single string.",
    link: "https://www.w3schools.com/python/ref_file_read.asp",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image190.png",
    answers: [
      { text: "[2, 4]", correct: true },
      { text: "[]", correct: false },
      { text: "[1, 2, 3, 4, 5]", correct: false },
      { text: "[1, 3, 5]", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The function custom_func is defined to take two parameters: numbers, which is expected to be a list of numbers, and condition, which is a function or lambda expression used to test each number in the list. Inside the function, a list comprehension is used to create a new list that includes only the numbers from the numbers list that satisfy the condition function.<br><br>The function is then called with the list [1, 2, 3, 4, 5] and a lambda function lambda x: x % 2 == 0. This lambda function checks whether a number x is even by testing if the remainder when x is divided by 2 is 0.<br><br>During execution, the list comprehension iterates through each number in the list [1, 2, 3, 4, 5]. For each number, the lambda function is applied to determine if the number is even. If the lambda function returns True, the number is included in the resulting list.<br><br>Since the lambda function returns True for the even numbers 2 and 4, these are the only numbers included in the final list. The odd numbers 1, 3, and 5 are excluded because they do not meet the condition of being even.<br><br>As a result, when the print(result) statement is executed, it outputs the list [2, 4].",
    link: "https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image191.png",
    answers: [
      { text: "7", correct: true },
      { text: "24", correct: false },
      { text: "27", correct: false },
      { text: "21", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code defines three lambda functions: f, g, and h: <br><br>The lambda function f doubles its input, defined as f = lambda x: x * 2. <br>The lambda function g adds 3 to its input, defined as g = lambda y: y + 3. <br>The lambda function h subtracts 5 from its input, defined as h = lambda z: z - 5.<br><br>The main lambda function, which is invoked with arguments 1, 2, and 3, performs a series of computations using these three functions. <br>Specifically, it computes f(g(h(x))) + h(g(y)) + g(f(z)).<br><br>First, for x = 1, the function h(x) is computed as 1 - 5, resulting in -4. <br>Next, g(h(x)) is computed as -4 + 3, resulting in -1. <br>Then, f(g(h(x))) is calculated as -1 * 2, resulting in -2.<br><br>Next, for y = 2, g(y) is computed as 2 + 3, resulting in 5. <br>Then, h(g(y)) is computed as 5 - 5, resulting in 0.<br><br>Finally, for z = 3, f(z) is computed as 3 * 2, resulting in 6. <br>Then, g(f(z)) is computed as 6 + 3, resulting in 9.<br><br>Adding these results together, -2 + 0 + 9 equals 7.",
    link: "https://realpython.com/python-lambda/#anonymous-functions",
  },
  {
    question: "What is the expected output of the following code snippet?",
    image: "images/image192.png",
    answers: [
      { text: "-13", correct: truee },
      { text: "13", correct: false },
      { text: "5", correct: false },
      { text: "-4", correct: false },
    ],
    explanation:
      "Explanation:<br><br>First, the math.floor(x) function is used to find the largest integer less than or equal to -4.7, which is -5. Next, the math.ceil(x) function returns the smallest integer greater than or equal to -4.7, which is -4.<br><br>Adding these two results together gives -5 + (-4), which equals -9. The abs function is then applied to this sum, so abs(-9) equals 9. The negative of this absolute value is -9.<br><br>Finally, the math.trunc(x) function truncates -4.7 to the integer -4 by removing the fractional part. Adding this to -9 results in -9 + (-4), which equals -13.",
    link: "https://docs.python.org/3/library/math.html#math.trunc",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image193.png",
    answers: [
      { text: "Raises an exception", correct: false },
      { text: "True", correct: false },
      { text: "False", correct: true },
      { text: "None of the above", correct: false },
    ],
    explanation:
      "Explanation:<br><br>In the provided code, you have defined three classes: A, B, and C, where C is a subclass of A, and B is unrelated to these classes. <br><br>An instance of class C is created and assigned to the variable obj. <br><br>When you use isinstance(obj, B) to check if obj is an instance of class B, the result is False because obj is an instance of class C, which does not inherit from B and has no relationship with it. <br><br>Thus, the output of the print(isinstance(obj, B)) statement will be False.",
    link: "https://docs.python.org/3/library/functions.html#isinstance",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image194.png",
    answers: [
      { text: "It will raise a TypeError", correct: false },
      { text: "2", correct: true },
      { text: '"Not alphanumeric"', correct: false },
      { text: "3", correct: false },
    ],
    explanation: `Explanation:<br><br>In this code, we check if the string s1 is alphanumeric using the isalnum() method. Since s1 only contains letters and digits, this condition evaluates to True.<br><br>Next, we count the number of occurrences of the letter "a" in s1 using the count() method and print the result, which is 2.`,
    link: "https://www.programiz.com/python-programming/methods/string/isalnum",
  },
  {
    question: "What is the expected output if the user enters 0?",
    image: "images/image195.png",
    answers: [
      { text: "The program will raise ValueError.", correct: false },
      { text: "The program will raise TypeError.", correct: true },
      { text: "The program will raise ZeroDivisionError.", correct: false },
      { text: "The program will raise SyntaxError.", correct: false },
    ],
    explanation: `Explanation:<br><br>This one is tricky: Notice that we didn't convert the input value to int. <br><br>The input() function always returns a string and if you try to divide a float by a string you will get a TypeError".`,
    link: "https://www.programiz.com/python-programming/methods/built-in/input",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image196.png",
    answers: [
      { text: "The code is erroneous.", correct: false },
      {
        text: "True" + "\n" + "False" + "\n" + "False" + "\n" + "False",
        correct: false,
      },
      {
        text: "True" + "\n" + "False" + "\n" + "False" + "\n" + "True",
        correct: false,
      },
      {
        text: "True" + "\n" + "False" + "\n" + "True" + "\n" + "True",
        correct: true,
      },
    ],
    explanation:
      "Explanation:<br><br>The first print statement, print('pro' > 'Pro'), compares the strings 'pro' and 'Pro'. In Python, string comparisons are case-sensitive and based on Unicode values. The Unicode value for the lowercase letter 'p' is higher than that for the uppercase letter 'P', so 'pro' is considered greater than 'Pro'. Therefore, this statement prints True.<br><br>The second print statement, print('Pro' < 'Pro'), compares two identical strings, 'Pro' and 'Pro'. Since they are equal, the comparison 'Pro' < 'Pro' is False, and thus this statement prints False.<br><br>The third print statement, print('PRO' > '1000'), compares the string 'PRO' with '1000'. In Unicode, the uppercase letter 'P' has a higher value than the numeric character '1', which is the first character of '1000'. Hence, 'PRO' is considered greater than '1000'. Consequently, this statement prints True.<br><br>The fourth print statement, print('11' < '8'), compares the string '11' with '8'. When comparing strings, Python compares the Unicode values of the characters. The Unicode value for '1' is less than that for '8', so '11' is considered less than '8'. Therefore, this statement prints True.",
    link: "https://www.digitalocean.com/community/tutorials/python-string-comparison",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image197.png",
    answers: [
      { text: "******", correct: false },
      { text: "***123", correct: true },
      { text: "abc123", correct: false },
      { text: "None of the above", correct: false },
    ],
    explanation: `Explanation:<br><br>The code iterates over each character in the string s using a for loop. For each character, it checks if it is in the string "123". If it is, then the continue statement is executed, and the loop moves on to the next character without executing any of the subsequent statements in the loop.<br><br>If the character is not in the string "123", then the else block is executed, which replaces that character in the string s with the "*" character using the replace() method.<br><br>So, the final result is a string in which all characters except "1", "2", and "3" are replaced with "*".`,
    link: "https://www.programiz.com/python-programming/methods/string/replace",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image198.png",
    answers: [
      { text: "56", correct: false },
      { text: "33", correct: true },
      { text: "42", correct: false },
      { text: "None of these", correct: false },
    ],
    explanation:
      "Explanation:<br><br>The code defines four classes A, B, C and D. A has a class variable x with the value 42, B inherits from A and overrides x with the value 56, C inherits from B and overrides x with the value 33, and D inherits from C and doesn't define any class variables.<br><br>When an object of class D is created and obj.x is printed, Python first looks for x in the instance of D, but there is no x defined in the instance. It then looks for x in the class D, but x is not defined in D. Next, it looks for x in the parent class C, where it finds x with the value 33. Therefore, the output is 33.",
    link: "https://www.programiz.com/python-programming/inheritance",
  },
  {
    question: "What is the expected output of the following code snippet?",
    image: "images/image199.png",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "False", correct: false },
      { text: "True", correct: false },
    ],
    explanation:
      "Explanation: <br><br>The code imports the math module and assigns the result of the comparison math.e != math.pow(1,5) to the variable x.<br><br>math.e is the mathematical constant e (approximately equal to 2.71828), and math.pow(1, 5) is the result of raising 1 to the power of 5, which is also equal to 1. Therefore, math.e != math.pow(1, 5) is True, since e is not equal to 1 raised to the power of 5.<br><br>Since x is True, the int() function converts it to the integer 1, which is then printed to the console.",
    link: "https://www.programiz.com/python-programming/methods/built-in/int",
  },
  {
    question: `Some additional and necessary packages are stored inside the following directory:<br><br>C:\Python\Project\Modules<br><br>Which of the following lines of code should you write to ensure that the directory is traversed by Python in order to find all requested modules?`,
    image: "images/image200.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: false },
      { text: "D", correct: true },
    ],
    explanation: `Explanation:<br><br>sys.path.append() is used to add a new directory to Python's module search path.<br><br>
    The path "C:\Python\Project\Modules" uses double backslashes (\\) to escape the backslash character properly in Python strings. Single backslashes (\) would cause errors because they are interpreted as escape sequences (e.g., \n for newline).`,
    link: "https://www.geeksforgeeks.org/sys-path-in-python/",
  }, 
  {
    question: "What is the expected output of the following code?",
    image: "images/image201.png",
    answers: [
      { text: "[ upsilon]" + "\n" + "procoding" + "\n" + "[tau]" + "\n" + "[aleph]", correct: false },
      { text: "[ upsilon]" + "\n" + "procoding" + "\n" + "[tau ]" + "\n" + "[aleph]", correct: true },
      { text: "[upsilon]" + "\n" + "procoding" + "\n" + "[tau ]" + "\n" + "[aleph]", correct: false },
      { text: "[ upsilon ]" + "\n" + "procoding" + "\n" + "[ tau ]" + "\n" + "[aleph]", correct: false },
    ],
    explanation: `Explanation:<br><br>The first print statement uses the rstrip() (right strip) method to remove the whitespace at the end of the string " upsilon ", and then concatenates the resulting string with "[" and "]" to produce "[ upsilon]".<br><br>The second print statement uses the rstrip() method again, this time with the argument ".rs" to remove the ".rs" suffix from the string "procoding.rs", resulting in the string "procoding".<br><br>The third print statement uses the lstrip() (left strip) method to remove the whitespace at the beginning of the string " tau ", and then concatenates the resulting string with "[" and "]" to produce "[tau ]".<br><br>The fourth print statement uses the strip() method to remove the whitespace at both the beginning and end of the string " aleph ", and then concatenates the resulting string with "[" and "]" to produce "[aleph]".`,
    link: "https://www.programiz.com/python-programming/methods/string/strip",
  },
  {
    question: "Select the possible outputs of the following Python code. <br><br>(Choose two)",
    image: "images/image202.png",
    answers: [
      { text: "0 0 0 1", correct: true },
      { text: "0 0 0 0", correct: true },
      { text: "0 0 1 1", correct: false },
      { text: "1 0 0 1", correct: false },
    ],
    explanation: "Explanation:<br><br>Note that the randrange(start, stop, step) function returns a randomly selected element from the range created by the arguments start, stop, and step.<br><br>If start is omitted, it defaults to 0. In our case, since we have randrange(1), start is 0 by default, and the range is [0]. If stop is omitted, it defaults to start, and the range is [0]. If step is omitted, it defaults to 1.<br><br>Therefore, randrange(0, 1, 1) is equivalent to randrange(0, 1) and generates only 0. The randint(a, b) function returns a random integer n such that a <= n <= b. In our case, randint(0, 1) generates either 0 or 1 randomly.",
    link: "https://www.w3schools.com/python/ref_random_randrange.asp",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image203.png",
    answers: [
      { text: "po", correct: true },
      { text: "pro", correct: false },
      { text: "ro", correct: false },
      { text: "pr", correct: false },
    ],
    explanation: `Explanation:<br><br>The try block contains only one statement which is to print the letter 'p' without raising any exceptions. Therefore, the code inside the try block will be executed uccessfully. <br><br>Then the finally block will also be executed regardless of whether an exception occurred or not, and it will print the letter 'o'. So the final output will be "po".`,
    link: "https://www.w3schools.com/python/python_try_except.asp",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image204.png",
    answers: [
      { text: "Error: file mode is invalid", correct: false },
      { text: "'Hello world!'", correct: false },
      { text: "b'Hello world!'", correct: true },
      { text: "None", correct: false },
    ],
    explanation: "Explanation:<br><br>The file 'file.txt' is initially opened in write mode with the 'w' mode and data is written as a string 'Hello world!'.<br><br>Then the file is opened in read mode with 'r', and the data is read as a string. The string is then encoded into bytes using the .encode() method and written to the file in binary mode using the 'wb' mode.<br><br>Finally, the file is opened in binary mode with 'rb', and the data is read as a bytes object.<br><br>The type of data is class 'bytes'",
    link: "https://www.w3schools.com/python/ref_func_open.asp",
  },
  {
    question: "Which of the following statements is true?",
    answers: [
      { text: "A try statement can either have a finally clause or an except clause.", correct: false },
      { text: "A try statement can have a finally clause without an except clause.", correct: true },
      { text: "A try statement cannot have more except clauses.", correct: false },
      { text: "A try statement can have one or more finally clauses.", correct: false },
    ],
    explanation: "Explanation:<br><br>A try statement can have one or more except clauses to handle different types of exceptions that may occur within the try block.<br><br>A try statement can have only one finally clause in Python.<br><br>In Python, a try statement must have at least one except clause or a finally clause, and it can also have both.<br><br>A try statement can have a finally clause without an except clause. The finally clause is executed regardless of whether an exception was raised or not.",
    link: "https://docs.python.org/3/tutorial/errors.html",
  },
  {
    question: "What statement is true? <br><br>(Choose two)",
    answers: [
      { text: "The constructor can return a value.", correct: false },
      { text: "The self parameter is used to obtain access to the object's instance and class variables.", correct: true },
      { text: "Reflection is the ability of a program to examine the type or properties of an object at runtime.", correct: false },
      { text: "The constructor cannot return a value.", correct: true },
    ],
    explanation: "Explanation:<br><br>The self parameter is used to refer to the instance of the object on which a method is being called. This allows the method to access and modify the instance variables of that object, as well as any class variables that are shared among all instances of the class. By convention, the first parameter of every method in a Python class is self, though you can technically use any name for this parameter.<br><br>In Python, the constructor method __init__() cannot return a value explicitly using the return keyword. It is because the __init__() method is called automatically when an object is created, and its main purpose is to initialize the object's attributes.<br><br>Introspection is the ability of a program to examine the type or properties of an object at runtime.<br><br>Reflection is the ability of a program to manipulate the values, properties and/or functions of an object at runtime.",
    link: "https://docs.python.org/3/tutorial/classes.html",
  },
  {
    question: "What does the following code output?",
    image: "images/image205.png",
    answers: [
      { text: "abc23!", correct: true },
      { text: "Abc2", correct: false },
      { text: "Abc23!", correct: false },
      { text: "ABC23", correct: false },
    ],
    explanation: "Explanation:<br><br>The isalnum() method returns True if all characters in the string are alphanumeric (letters or numbers), and False otherwise. Since s contains only letters and numbers, the if statement will always be true.<br><br>The replace() method replaces all occurrences of a given substring in a string with another substring. In this case, the 1 is replaced with an empty string, effectively removing it from the original string.<br><br>The if statement checks if the character 3 is in the modified string. If it is, the exclamation point is added to the end of the string. If it's not, the string is converted to uppercase.<br><br>The final string is printed, which is abc23!.",
    link: "https://www.geeksforgeeks.org/python-string-isalnum-method/",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image206.png",
    answers: [
      { text: "Triangle is a Shape" + "\n" + "Shape can be a Shape", correct: true },
      { text: "Shape is a Shape" + "\n" + "Shape can be a Shape", correct: false },
      { text: "Triangle is a Shape" + "\n" + "Triangle can be a Shape", correct: false },
      { text: "None of these", correct: false },
    ],
    explanation: `Explanation:<br><br>This code defines a class hierarchy with Shape as the base class and Triangle as a derived class. Neither class has methods or attributes.<br><br>The code uses print() statements to show the relationship between the two classes. The first print statement indicates that Triangle is a subclass of Shape. The second shows that Shape is a superclass of Triangle.<br><br>Key points:<br><br>• Triangle.__name__ returns "Triangle".<br><br>• Shape.__name__ returns "Shape".<br><br> • Triangle.__bases__ returns a tuple of base classes, which includes Shape.<br><br>• Triangle.__bases__[0].__name__ returns "Shape", the base class of Triangle`,
    link: "https://docs.python.org/3/tutorial/classes.html",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image207.png",
    answers: [
      { text: "o", correct: false },
      { text: "p", correct: false },
      { text: "r", correct: true },
      { text: "rpo", correct: false },
    ],
    explanation: `Explanation:<br><br>When the try block raises an Exception, the first except block will be executed since Exception is a subclass of BaseException. Therefore, "r" will be printed.`,
    link: "https://docs.python.org/3/tutorial/errors.html",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image208.png",
    answers: [
      { text: "3" + "\n" + "15", correct: true },
      { text: "3" + "\n" + "14", correct: false },
      { text: "2" + "\n" + "16", correct: false },
      { text: "4" + "\n" + "15", correct: false },
      { text: "4" + "\n" + "14", correct: false },
      { text: "2" + "\n" + "15", correct: false },      
    ],
    explanation: `Explanation:<br><br>The first section defines a string i_am with the value "I'm". Since the apostrophe is an escape character, it is represented as \'. The len() function is then called on this string, which returns 3, the length of the string.<br><br>The second section defines a string multiline with multiple lines using triple quotes ('''). This string contains 14 characters plus 1 newline character, for a total length of 15. The len() function is then called on this string, which returns 15.`,
    link: "https://llego.dev/posts/determining-string-length-python-using-len/",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image209.png",
    answers: [
      { text: "['e', 'd', 'c', 'b', 'a']", correct: true },
      { text: "['a', ',', 'b', ',', 'c', ',', 'd', ',', 'e']", correct: false },
      { text: "['e', ',', 'd', ',', 'c', ',', 'b', ',', 'a']", correct: false },
      { text: "['a', 'b', 'c', 'd', 'e']", correct: false },
    ],
    explanation: `Explanation:<br><br>The string s is defined as "a,b,c,d,e".<br><br>The split() method is called on s with the argument ",". This returns a list of substrings, where each substring is separated by ,: ["a", "b", "c", "d", "e"].<br><br>The slice notation [::-1] is used to reverse the order of the elements in the list. This returns a new list with the elements in reverse order: ['e', 'd', 'c', 'b', 'a'].`,
    link: "https://docs.python.org/3/library/stdtypes.html#str.split",
  },
  {
    question: "What will be the output of the following code?",
    image: "images/image210.png",
    answers: [
      { text: "1", correct: true },
      { text: "0", correct: false },
      { text: "2", correct: false },
      { text: "Error", correct: false },
    ],
    explanation: "Explanation:<br><br>In the first line, the string 'hello world' is assigned to the variable s. In the second line, we use the replace() method to replace the first occurrence of the lowercase letter 'l' in s with the uppercase letter 'L'.<br><br> This gives us the string 'heLlo world'. <br><br>Then, we use the count() method to count the number of uppercase 'L's in s, which is 1",
    link: "https://docs.python.org/3/library/stdtypes.html#str.count",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image211.png",
    answers: [
      { text: "xxxabc" + "\n" + "5", correct: false },
      { text: "xxxabc" + "\n" + "6", correct: false },
      { text: "abcxxx" + "\n" + "23", correct: false },
      { text: "abcxxx" + "\n" + "5", correct: false },
      { text: "xxxabc" + "\n" + "23", correct: true },
      { text: "The code is erroneous.", correct: false },
    ],
    explanation: `Explanation:<br><br>The first line will output "xxxabc".<br><br>The second line will output "23" (a string concatenation, not a numerical addition).`,
    link: "gloss_python_string_concatenation",
  },
  {
    question: "What does the following code output?",
    image: "images/image212.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],
    explanation: `Explanation:<br><br>s.isalnum() returns False if s contains any non-alphanumeric characters (i.e., characters that are neither letters nor digits).<br><br>s.islower() returns True if all alphabetic characters in s are lowercase.<br><br>sorted(s) == list(s) checks whether the characters in s are sorted in ascending order.<br><br>s.rfind("!") returns the index of the last occurrence of ! in s, or -1 if ! does not appear in s.<br><br>s.find("1") returns the index of the first occurrence of 1 in s, or -1 if 1 does not appear in s.`,
    link: "https://docs.python.org/3/library/stdtypes.html#str.isalnum",
  },
  {
    question: "What will be the output of the following code?",
    image: "images/image213.png",
    answers: [
      { text: "['General', 'Kenobi']", correct: false },
      { text: "['General', 'KEnobi']", correct: false },
      { text: "['GeneraL', 'Kenobi']", correct: true },
      { text: "The code is erroneous", correct: false },
    ],
    explanation: "Explanation:<br><br>The code slices the string up to the first 7 characters (s[:7]), which results in 'Genera'. In this slice, the lowercase 'l' is replaced with an uppercase 'L', producing 'GeneraL'. <br><br>The next part of the code, s[8:], retrieves the remaining characters of the string starting from the 8th position, which is 'Kenobi'. These two parts are then concatenated to form the new string 'GeneraL Kenobi'.<br><br>When you use s[:7] + s[8:], it effectively removes the space between 'General' and 'Kenobi'.<br><br>Finally, s.split() splits the string into a list of words, which is ['GeneraLKenobi']."
  },
  {
    question: "What will the value of the i variable be when the following loop finishes its execution?",
    image: "images/image214.png",
    answers: [
      { text: "10", correct: false },
      { text: "11", correct: false },
      { text: "9", correct: true },
      { text: "the variable becomes unavailable", correct: false },
    ],
    explanation: "Explanation:<br><br>The variable i will take on values from 0 to 9 during the loop execution because the range(10) function generates numbers from 0 to 9 (10 numbers in total).<br><br>Since the pass statement does nothing, the loop runs without any action being performed for each value of i. When the loop finishes, i will hold the value of the last number in the range, which is 9.",
    link: "https://wiki.python.org/moin/ForLoop",
  },
  {
    question: "What is the expected output of the following snippet?",
    image: "images/image215.png",
    answers: [
      { text: "the code is erroneous", correct: true },
      { text: "3", correct: false },
      { text: "7", correct: false },
      { text: "15", correct: false },
    ],
    explanation: "Explanation:<br><br>In the if statement, it should be == (for comparison) instead of = (which is for assignment). Therefore, the code is erroneous.",
    link: "https://www.w3schools.com/python/gloss_python_comparison_operators.asp",
  },
  {
    question: "How many lines does the following snippet output?",
    image: "images/image216.png",
    answers: [
      { text: "three", correct: false },
      { text: "one", correct: true },
      { text: "two", correct: false },
      { text: "four", correct: false },
    ],
    explanation: `Explanation:<br><br>The for loop iterates over the numbers 1 and 2 generated by range(1, 3). On each iteration, the print("*", end="") statement outputs a * without moving to a new line because of the end="" parameter, which keeps the output on the same line.<br><br>After the loop completes its iterations, the else block is executed, and the print("*") statement prints another * in the same line.`,
  },
  {
    question: "Which snippet would be the best to use in order to get the following result (list): [1, 3, 5]",
    image: "images/image217.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: false },
      { text: "C", correct: true },
      { text: "D", correct: false },
    ],    
    explanation: "Explanation:<br><br>C) is correct because it filters the list my_list = [0, 1, 2, 3, 4, 5, 6] by selecting only the odd numbers. The expression x % 2 == 1 checks if each number in the list is odd, and the filter() function returns a new list containing only the odd numbers, which are 1, 3, and 5. <br><br>Therefore, option C gives the desired result [1, 3, 5].",
    link: "https://docs.python.org/3/tutorial/datastructures.html#list-comprehensions",
  },
  {
    question: "What is the output of the following code in Python?",
    image: "images/image218.png",
    answers: [
      { text: "{'MyClass.__x': 42}", correct: false },
      { text: "{'__x': 42}", correct: false },
      { text: "{'_MyClass__x': 42}", correct: true },
      { text: "{'x': 42}", correct: false },
    ],    
    explanation: "Explanation:<br><br>When you run the code and execute print(obj.__dict__), the output will be {'_MyClass__x': 42}.<br><br>This happens because the attribute __x in the MyClass is marked as private by using a double underscore. In Python, when you use double underscores, it triggers name mangling, which changes the name of the attribute internally to _MyClass__x. This is done to avoid accidental access or modification of the private attribute from outside the class. <br><br>As a result, when you print obj.__dict__, the internal dictionary shows the mangled attribute name as _MyClass__x, with its value being 42.",
    link: "https://docs.python.org/3/tutorial/classes.html#private-attributes",
  },
  {
    question: "With regards to the directory structure below, select the proper forms of the directives in order to import module_a. <br><br>(Choose two)",
    image: "images/image219.png",
    answers: [
      { text: "A) from pypack import module_a", correct: true },
      { text: "B) import module_a from pypack", correct: false },
      { text: "C) import module_a", correct: false },
      { text: "D) import pypack.module_a", correct: true },
    ],    
    explanation: "A) from pypack import module_a: This form is valid when importing module_a from the pypack directory when you're working from outside the pypack directory.<br><br>B) import module_a from pypack: This is invalid Python syntax.<br><br>C) import module_a: This would only work if you're working within the pypack directory itself, but since the question is asking for general imports from a package structure, this is not applicable in most scenarios where module_a needs to be accessed from outside the pypack directory.<br><br>D) import pypack.module_a: This form is also correct. It explicitly imports module_a by referencing its full path within the pypack directory structure, which is valid if pypack is treated as a package.",
    link: "https://docs.python.org/3/tutorial/modules.html#tut-package",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image220.png",
    answers: [
      { text: "True" + "\n" + "False" + "\n" + "False", correct: false },
      { text: "True" + "\n" + "True" + "\n" + "True", correct: true },
      { text: "True" + "\n" + "False" + "\n" + "True", correct: false },
      { text: "True" + "\n" + "True" + "\n" + "False", correct: false },
    ],    
    explanation: `Explanation:<br><br>"a" > "" is True because the empty string "" is considered to be less than any non-empty string.<br><br>"69" > "420" is Truebecause strings are compared character by character. The first characters  compared are "6" and "4", and since "6" is greater than "4", the comparison returns True.<br><br>"Marvin" > "MARVIN" is True because uppercase letters have a smaller Unicode value than lowercase letters. In this case, "M" has a smaller Unicode value than "m", so "Marvin" is considered to be greater than "MARVIN".`,
    link: "https://docs.python.org/3/library/stdtypes.html#str",
  },
  {
    question: "What is the output of the following code in Python?",
    image: "images/image221.png",
    answers: [
      { text: "54321 will be printed on the standard output", correct: false },
      { text: "1 2 3 4 5 will be printed on the standard output", correct: false },
      { text: "12345 will be printed on the standard output", correct: true },
      { text: "None of these", correct: false },
    ],
    explanation: "Explanation:<br><br>First, the sys module is imported to access system-specific functionality, including sys.stdout for writing output. The list numbers contains the integers [1, 2, 3, 4, 5]. The for loop iterates over each number in this list. <br><br>Inside the loop, each number is converted to a string using str(n) and then written to the standard output with sys.stdout.write().<br><br>Since sys.stdout.write() does not add any additional characters between the outputs, the numbers are printed consecutively as a single, unbroken string.",
    link: "https://docs.python.org/3/library/sys.html#sys.stdout",
  },
  {
    question: "What is the output of the following code in Python?",
    image: "images/image222.png",
    answers: [
      { text: "Fluffy white", correct: true },
      { text: "AttributeError", correct: false },
      { text: "NameError", correct: false },
      { text: "TypeError", correct: false },
    ],    
    explanation: "Explanation:<br><br>The given code creates a class hierarchy involving Animal, Cat, and Persian.<br><br>In this case, the Animal class is the base class, the Cat class inherits from Animal, and the Persian class inherits from Cat. <br><br>Each class has its own __init__() method to initialize the instance variables.<br><br>When an instance of the Persian class, p, is created using the statement Persian('Fluffy', 'white'), it invokes the __init__() method of the Persian class. However, since the Persian class does not define its own __init__() method, it will look for one in its immediate superclass, Cat.<br><br> Similarly, if not found in Cat, it will continue searching in the next superclass, Animal.<br><br> The __init__() method of the Cat class is called using super().__init__(name) to ensure that the initialization logic of the Cat class is executed. This initializes the name attribute inherited from the Animal class. <br><br>Then, the color attribute specific to the Cat class is initialized. Therefore, when the statement print(p.name, p.color) is executed, it will print the values of the name and color attributes of the p instance, which are 'Fluffy' and 'white', respectively.",
    link: "https://docs.python.org/3/tutorial/classes.html#inheriting-from-classes",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image223.png",
    answers: [
      { text: "0 1 4", correct: true },
      { text: "1 2 3", correct: false },
      { text: "1 4 9", correct: false },
      { text: "0 1 2", correct: false },
    ],    
    explanation: "Explanation:<br><br>• The squares() function generates an iterator that yields the square of each number from 0 up to n-1<br><br>• In the for loop, we iterate over the values generated by calling squares(3)<br><br>• The first iteration generates 0 (0 ** 2), which is printed to the console<br><br>• The second iteration generates 1 (1 ** 2), which is printed to the console<br><br>• The third iteration generates 4 (2 ** 2), which is printed to the console<br><br>• The loop then exits",
    link: "https://docs.python.org/3/library/functions.html#squares",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image224.png",
    answers: [
      { text: "2", correct: true },
      { text: "4", correct: false },
      { text: "3", correct: false },
      { text: "1", correct: false },
    ],    
    explanation: `Explanation:<br><br>The string "Lernen für das Zertifikat ist öde" is sliced from index 1 up to, but not including, index 32, with a step size of 11. This slicing operation selects characters at the specified indices with the given step.<br><br>Specifically:<br><br>• At index 1, the character is 'e'<br><br>• At index 12, the character is 'a'<br><br>• At index 23, the character is 'a'.<br><br>These characters are extracted and combined to form the substring 'eaa'.<br><br>The count() method returns the number of elements with the specified value, in this case 'a'.<br><br>Since we got 2 'a's, the output is 2.`,
    link: "https://docs.python.org/3/library/stdtypes.html#str.count",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image225.png",
    answers: [
      { text: "Kevin", correct: false },
      { text: "Hand", correct: false },
      { text: "schütteln", correct: false },
      { text: "Hand schütteln möchte", correct: false },
      { text: "brauche", correct: false },
      { text: "Leiter", correct: true },
    ],    
    explanation: `Explanation:<br><br>my_string.split() splits the original string into a list of words using whitespace as the delimiter, resulting in:<br><br>['Wenn', 'ich', 'Kevin', 'die', 'Hand', 'schütteln', 'möchte,', 'brauche', 'ich', 'ne', 'Leiter!']<br><br>This slice operation reverses the order of the elements in the list, giving us:<br><br>['Leiter!', 'ne', 'ich', 'brauche', 'möchte,', 'schütteln', 'Hand', 'die', 'Kevin', 'ich', 'Wenn']<br><br>[0] selects the first element from the reversed list, whichis 'Leiter!'<br><br>.rstrip("!") removes the trailing exclamation mark '!' from the end of the string 'Leiter!', so the resulting string is 'Leiter'.`,
    link: "https://docs.python.org/3/library/stdtypes.html#str.split",
  },
  {
    question: "A file name like this one below says that: services.cpython-36.pyc<br><br>(Choose three)",
    answers: [
      { text: "A) the interpreter used to generate the file is version 3.6", correct: true },
      { text: "B) it has been produced by CPython", correct: true },
      { text: "C) it is the 36 version of the file", correct: false },
      { text: "D) the file comes from the services.py source file", correct: true },
    ],
    explanation: "Explanation:<br><br>A) is True: The -36 in the filename indicates that the Python version used to generate the file was Python 3.6.<br><br>B) is True: The cpython in the filename indicates that the file was produced by the CPython implementation of Python.<br><br>C) is False: The 36 does not refer to the version of the file but to the Python interpreter version (3.6) used to generate the file.<br><br>D) is True: The services prefix suggests that the .pyc file was generated from the services.py source file.",
    link: "https://codefather.tech/blog/difference-between-py-and-pyc-files-python/",
  },
  {
    question: "What will be the output of the following code?",
    image: "images/image226.png",
    answers: [
      { text: "The code will raise a TypeError.", correct: false },
      { text: "The code will print the result of the division.", correct: false },
      { text: `The code will not print "Invalid input." if the user enters a zero.`, correct: false },
      { text: `The code will print "Invalid input." if the user enters a non-numeric value.`, correct: true },
    ],    
    explanation: `Explanation:<br><br>The code uses a try-except block to handle two exceptions: ValueError if the user enters a non-numeric value, and ZeroDivisionError if the user enters a zero. <br><br>If the user enters a non-numeric value, the int() function will raise a ValueError, and the except block will execute and print "Invalid input." <br><br>The code will not raise a TypeError, and it will not print the result of the division.`,
    link: "https://www.programiz.com/python-programming/exceptions",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image227.png",
    answers: [
      { text: "0 2 4", correct: false },
      { text: "0 1 2", correct: false },
      { text: "0 1 4", correct: true },
      { text: "1 4 9", correct: false },
    ],    
    explanation: "Explanation:<br><br>The fun(n) generator function yields i*i for each value of i in the range from 0 to n-1. In the for loop that follows, the values yielded by fun(3) are printed, separated by spaces. <br><br>So the output is 0 1 4, which are the squares of 0, 1, and 2.",
    link: "https://www.programiz.com/python-programming/generator",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image228.png",
    answers: [
      { text: "81", correct: false },
      { text: "7", correct: false },
      { text: "12", correct: true },
      { text: "None", correct: false },
    ],    
    explanation: "Explanation:<br><br>• The custom_func function takes three parameters: x, y, and operation. It calls the operation function with x and y as arguments and returns the result.<br><br>• result is assigned the result of calling custom_func with arguments 3, 4, and a lambda function lambda x, y: x * y. This lambda function multiplies its two arguments x and y.<br><br>• When custom_func is called, it passes 3 as x, 4 as y, and the lambdafunction lambda x, y: x * y as operation.<br><br>• Inside custom_func, it calls operation(3, 4), which invokes the lambda function with x=3 and y=4. The lambda function performs the multiplication and returns the result.<br><br>• The returned result from custom_func is stored in the result variable.<br><br>• Finally, print(result) outputs the value of result, which is the result of the multiplication, 12.",
    link: "https://realpython.com/python-lambda/#anonymous-functions",
  },
  {
    question: "Select valid string operators. <br><br>(Choose two)",
    answers: [
      { text: "-", correct: false },
      { text: "*", correct: true },
      { text: "/", correct: false },
      { text: "*=", correct: true },
    ],    
    explanation: `Explanation:<br><br>*= is a valid string operator in Python. It is used for string repetition. For example, the expression "abc" *= 3 would result in the string "abcabcabc".<br><br></br>The * operator can be used with strings in Python to repeat the string a certain number of times. For example, "hello" * 3 would produce the string "hellohellohello".<br><br>The / operator is used for division of numerical types, and is not applicable to strings.<br><br>The - operator is not a valid string operator in Python. It is used for subtraction of numerical types, and is not applicable to strings.`,
    link: "https://www.programiz.com/python-programming/operators",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image229.png",
    answers: [
      { text: "Kevin Benjamin Marvin Benjamin", correct: false },
      { text: "Benjamin Marvin Kevin Benjamin", correct: false },
      { text: "Marvin Benjamin Kevin Benjamin ", correct: true },
      { text: "Kevin Marvin Benjamin", correct: false },
      { text: "The code is erroneous", correct: false },
    ],    
    explanation: `Explanation:<br><br>When the function f is called with f(40), it executes the code in the try block without raising any exceptions, so it goes to the else block and prints "Marvin". <br><br>Then it goes to the finally block and prints "Benjamin".<br><br>When the function f is called with f(0), it executes the code in the try block, but the expression a / a raises a ZeroDivisionError. So it goes to the except block and prints "Kevin".<br><br> Then it goes to the finally block and prints "Benjamin".<br><br>Everything will be written on the same line because of end=" "`,
    link: "https://www.programiz.com/python-programming/exceptions",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image230.png",
    answers: [
      { text: "420", correct: false },
      { text: `(420, 69, 44, 123456, "Ja moin")`, correct: false },
      { text: "44", correct: false },
      { text: "5", correct: true },
      { text: "The code is erroneous.", correct: false },
    ],    
    explanation: `Explanation:<br><br>When the raise statement is executed, it raises an Exception object with five arguments: 420, 69, 44, 123456, and "Ja moin"<br><br>When the except block catches the exception, it assigns it to the variable e. <br><br>The len(e.args) statement then returns the length of the args attribute of the Exception object, which is 5.`,
    link: "https://www.programiz.com/python-programming/exceptions",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image231.png",
    answers: [
      { text: "[[3, 2, 1], [6, 5, 4], [9, 8, 7]]", correct: false },
      { text: "[[1, 2, 3], [4, 5, 6], [7, 8, 9]]", correct: false },
      { text: "[[1, 4, 7], [2, 5, 8], [3, 6, 9]]", correct: true },
      { text: "None of these.", correct: false },
    ],
    explanation: "Explanation:<br><br>This code is using list comprehension to create a new 2D list that is the transpose of the original matrix. <br><br>The inner comprehension [row[i] for row in matrix] selects the i-th element from each row of matrix, and the outer comprehension [...] for i in range(len(matrix[0]))] iterates over the indices of the columns in matrix. <br><br>Therefore, the resulting transpose list has rows corresponding to columns of matrix and columns corresponding to rows of matrix.",
    link: "https://www.geeksforgeeks.org/python-matrix/",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image232.png",
    answers: [
      { text: `"Frankfurt am Main"`, correct: false },
      { text: `"Frankfurt Frankfurt"`, correct: false },
      { text: `"am Main an der Oder"`, correct: false },
      { text: `"Frankfurt an der Oder"`, correct: true },
      { text: "None", correct: false },
    ],    
    explanation: "Explanation:<br><br> The replace() method returns a copy of the string with all occurrences of a specified substring replaced with another string.",
    link: "https://www.programiz.com/python-programming/methods/string/replace",
  },
  {
    question: "What is the output of the following code?",
    image: "images/image233.png",
    answers: [
      { text: "A", correct: false },
      { text: "B", correct: true },
      { text: "C", correct: false },
      { text: "The code is erroneus.", correct: false },
    ],    
    explanation: "Explanation:<br><br>In this example, D class inherits from B and C, and B class overrides the method method() inherited from A class. Since B class is listed first in the inheritance list, its implementation of method() is called when obj.method() is called.",
    link: "https://www.codecademy.com/resources/docs/python/inheritance",
  },
  {
    question: "What will be printed when the following code is executed?",
    image: "images/image234.png",
    answers: [
      { text: "Klappt das hier?" + "\n" + "€" + "\n" + "Nice!", correct: false },
      { text: "Klappt das hier?" + "\n" + "Nice!", correct: false },
      { text: "Klappt das hier?" + "\n" + "Nope..." + "\n" + "Delete System32", correct: true },
      { text: "Nope..." + "\n" + "Delete System32", correct: false },
    ],    
    explanation: `Explanation:<br><br>The program will enter the try block and execute the first print statement, which will output the string "Klappt das hier?" to the console.<br><br>The program will then execute the second print statement, which will try to access the character at index 2 of the string "€€". However, since the string only has two characters (max index [1]), this will raise an IndexError exception.<br><br>The program will catch the IndexError exception and execute the code in the except block, which will print the message "Nope..." to the console.<br><br>The program will then execute the final print statement, which will output the string "Delete System32" to the console.`,
    link: "https://www.programiz.com/python-programming/exceptions",
  },
  {
    question: "What statement is true? <br><br>(Choose all that apply)",
    answers: [
      { text: "The part of the code where you think an exception may occur should be placed inside the except branch.", correct: false },
      { text: "The part of the code where the handling of an exception takes place should be placed inside the exception branch.", correct: false },
      { text: "The part of the code where the handling of an exception takes place should be placed inside the except branch.", correct: true },
      { text: "The part of the code where you think an exception may occur should be placed inside the try branch.", correct: true },
    ],    
    explanation: "Explanation:<br><br>In Python, you should put the part of the code where you think an exception may occur inside a try block. The try block is used to enclose the code that may raise an exception.<br><br>Also, it's generally a good practice to specify the specific type of exception that you expect to be raised inside the except block. This allows you to handle different exceptions differently and avoid catching unintended exceptions.",
    link: "https://www.w3schools.com/python/python_try_except.asp",
  },
  {
    question: "Is the __dict__ property available for all Python objects?",
    answers: [
      { text: "A) No, it is only available for instances of built-in classes.", correct: false },
      { text: "B) Yes, it is available for all objects that are instances of user-defined classes.", correct: true },
      { text: "C) No, it is only available for instances of user-defined classes.", correct: false },
      { text: "D) Yes, it is available for instances of all Python objects.", correct: false },
    ],
    explanation: "Explanation:<br><br>A) is incorrect because built-in class instances generally do not have a __dict__.<br><br>B) is correct. The __dict__ attribute is available for objects that are instances of user-defined classes, allowing access to their attributes. It stores the object's namespace in a dictionary. However, objects of some built-in types like int, str, or float don't have a __dict__.<br><br>C) implies it's exclusive to user-defined class instances, which is mostly true but not absolute since some custom optimizations or settings can remove it (e.g., by using __slots__).<br><br>D) is incorrect because not all objects (like built-in types) have the __dict__ attribute.",
    link: "https://docs.python.org/3/reference/datamodel.html#object.__dict__",
  },
  {
    question: "What is the expected output of the following code?",
    image: "images/image235.png",
    answers: [
      { text: "None", correct: false },
      { text: "True", correct: false },
      { text: "False", correct: false },
      { text: "The code is erroneous.", correct: true },
    ],    
    explanation: `Explanation:<br><br>The code tries to convert the string '12.8' to an integer using the int() function.<br><br> However, since the string contains a decimal point, which is not a valid digit in an integer, a ValueError is raised with the message "invalid literal for int() with base 10: '12.8'".`,
    link: "https://docs.python.org/3/library/functions.html#int",
  },/*
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],    
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],    
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],    
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],    
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],    
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],    
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],    
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],    
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],    
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],    
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],    
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],    
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],    
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],    
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],    
  },
  {
    question: "",
    answers: [
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
      { text: "", correct: false },
    ],    
  },
  */
  
];
