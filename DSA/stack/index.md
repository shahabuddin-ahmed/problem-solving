### Basic Operations on Stack

-   push() to insert an element into the stack
-   pop() to remove an element from the stack
-   top() Returns the top element of the stack.
-   isEmpty() returns true if stack is empty else false.
-   size() returns the size of stack.

### Time Complexity

| Operations | Complexity |
| ---------- | ---------- |
| push()     | O(1)       |
| pop()      | O(1)       |
| isEmpty()  | O(1)       |
| size()     | O(1)       |

### Types of Stacks:

**Fixed Size Stack:** As the name suggests, a fixed size stack has a fixed size and cannot grow or shrink dynamically. If the stack is full and an attempt is made to add an element to it, an overflow error occurs. If the stack is empty and an attempt is made to remove an element from it, an underflow error occurs.

**Dynamic Size Stack:** A dynamic size stack can grow or shrink dynamically. When the stack is full, it automatically increases its size to accommodate the new element, and when the stack is empty, it decreases its size. This type of stack is implemented using a linked list, as it allows for easy resizing of the stack.

1. Infix to Postfix Stack: This type of stack is used to convert infix expressions to postfix expressions.
2. Expression Evaluation Stack: This type of stack is used to evaluate postfix expressions.
3. Recursion Stack: This type of stack is used to keep track of function calls in a computer program and to return control to the correct function when a function returns.
4. Memory Management Stack: This type of stack is used to store the values of the program counter and the values of the registers in a computer program, allowing the program to return to the previous state when a function returns.
5. Balanced Parenthesis Stack: This type of stack is used to check the balance of parentheses in an expression.
6. Undo-Redo Stack: This type of stack is used in computer programs to allow users to undo and redo actions.
