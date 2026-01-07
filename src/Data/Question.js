 export  const questions = [
  {
    id: 1,
    question: "What is the output of the following Java code?\n\nint x = 10;\nSystem.out.println(x++ + ++x);",
    options: ["21", "22", "23", "Compilation error"],
    answer: 1
  },
  {
    id: 2,
    question: "Which statement about String is TRUE in Java?",
    options: [
      "String is mutable",
      "StringBuilder is thread-safe",
      "String objects are stored only in heap",
      "String is immutable"
    ],
    answer: 3
  },
  {
    id: 3,
    question: "What will be the result of this Java 8 code?\n\nStream.of(1,2,3,4).filter(n -> n > 2).findFirst().get()",
    options: ["2", "3", "4", "NoSuchElementException"],
    answer: 1
  },
  {
    id: 4,
    question: "Which scenario can cause a memory leak in Java?",
    options: [
      "Using local variables",
      "Closing streams",
      "Unclosed static collections",
      "Using garbage collection"
    ],
    answer: 2
  },
  {
    id: 5,
    question: "Which Java 8 functional interface allows NO input but returns a value?",
    options: ["Consumer", "Supplier", "Function", "Predicate"],
    answer: 1
  },
  {
    id: 6,
    question: "What is the output of this Java code?\n\nInteger a = 128;\nInteger b = 128;\nSystem.out.println(a == b);",
    options: ["true", "false", "Compilation error", "Runtime exception"],
    answer: 1
  },
  {
    id: 7,
    question: "Which SQL query returns duplicate records?",
    options: [
      "SELECT DISTINCT col FROM table;",
      "SELECT col FROM table GROUP BY col;",
      "SELECT col FROM table;",
      "SELECT UNIQUE col FROM table;"
    ],
    answer: 2
  },
  {
    id: 8,
    question: "Which SQL clause is evaluated FIRST?",
    options: ["SELECT", "WHERE", "GROUP BY", "HAVING"],
    answer: 1
  },
  {
    id: 9,
    question: "Which SQL statement correctly finds the 2nd highest salary?",
    options: [
      "SELECT MAX(salary) FROM emp;",
      "SELECT salary FROM emp ORDER BY salary DESC LIMIT 1,1;",
      "SELECT salary FROM emp WHERE salary > 2;",
      "SELECT salary FROM emp GROUP BY salary;"
    ],
    answer: 1
  },
  {
    id: 10,
    question: "What happens when a WHERE clause is used with aggregate functions?",
    options: [
      "It works normally",
      "It filters after aggregation",
      "It causes an error",
      "It replaces HAVING"
    ],
    answer: 2
  },
  {
    id: 11,
    question: "What will happen in React if state is updated directly?",
    options: [
      "Component re-renders",
      "UI updates automatically",
      "React ignores the update",
      "Application crashes"
    ],
    answer: 2
  },
  {
    id: 12,
    question: "Why should keys be unique in React lists?",
    options: [
      "For styling",
      "For sorting",
      "To help React identify changes",
      "To avoid runtime errors"
    ],
    answer: 2
  },
  {
    id: 13,
    question: "What is the output of this React logic?\n\nsetCount(count + 1);",
    options: ["Count increases by 2", "Count increases by 1", "Count becomes 0", "Error"],
    answer: 1
  },
  {
    id: 14,
    question: "Which hook is most likely to cause an infinite loop if dependencies are wrong?",
    options: ["useState", "useEffect", "useMemo", "useRef"],
    answer: 1
  },
  {
    id: 15,
    question: "What will this Java code output?\n\ntry {\n  return 1;\n} finally {\n  return 2;\n}",
    options: ["1", "2", "Compilation error", "Runtime error"],
    answer: 1
  },
  {
    id: 16,
    question: "Which Java 8 Stream operation is lazy?",
    options: ["forEach()", "collect()", "filter()", "reduce()"],
    answer: 2
  },
  {
    id: 17,
    question: "Which SQL JOIN returns records even if there is no match?",
    options: ["INNER JOIN", "CROSS JOIN", "LEFT JOIN", "SELF JOIN"],
    answer: 2
  },
  {
    id: 18,
    question: "Why is useRef preferred over useState for mutable values?",
    options: [
      "It improves performance",
      "It triggers re-render",
      "It avoids re-render",
      "It is immutable"
    ],
    answer: 2
  },
  {
    id: 19,
    question: "What happens if a Stream has no terminal operation?",
    options: [
      "Compilation error",
      "Runtime error",
      "Nothing executes",
      "Stream auto-executes"
    ],
    answer: 2
  },
  {
    id: 20,
    question: "Which scenario breaks React’s one-way data flow?",
    options: [
      "Props drilling",
      "Lifting state up",
      "Child mutating parent state",
      "Using context"
    ],
    answer: 2
  }
];
  