export type LanguageType =
  | "Systems"
  | "Web Frontend"
  | "Backend"
  | "Data & Scientific"
  | "Mobile"
  | "Functional"
  | "Scripting"
  | "Database";

export type Language = {
  name: string;
  type: LanguageType;
  year: number;
  creator: string;
  tagline: string;
  history: string;
  helloWorld: string;
  facts: string[];
  easterEggs: string[];
  paradigms?: string[];
  memoryModel?: string;
  ecosystem?: string;
};

export const languages: Language[] = [
  {
    name: "C",
    type: "Systems",
    year: 1972,
    creator: "Dennis Ritchie",
    tagline: "The small, sharp tool that still powers kernels, runtimes, and embedded systems.",
    history:
      "C grew out of Bell Labs work on Unix and became the portable systems language that shaped operating systems, compilers, and decades of language design.",
    helloWorld: '#include <stdio.h>\n\nint main(void) {\n  printf("Hello, World!\\n");\n  return 0;\n}',
    facts: [
      "Its influence is visible in C++, Java, JavaScript, C#, Go, Rust, and many more.",
      "The language is tiny compared with modern ecosystems, but it exposes memory and hardware details directly.",
      "Unix and C evolved together, which helped both spread across many machines.",
    ],
    easterEggs: [
      "The phrase 'hello, world' became famous through The C Programming Language book.",
      "Obfuscated C contests turned valid C into an art form of readable unreadability.",
    ],
    paradigms: ["Imperative", "Procedural", "Structured"],
    memoryModel: "Manual memory management with malloc/free",
    ecosystem: "Massive - used in operating systems, embedded systems, compilers, and as the basis for many other languages",
  },
  {
    name: "C++",
    type: "Systems",
    year: 1985,
    creator: "Bjarne Stroustrup",
    tagline: "Zero-cost abstractions with enough control to make game engines and trading systems purr.",
    history:
      "C++ began as 'C with Classes' and grew into a multi-paradigm language used wherever performance, control, and large-scale architecture meet.",
    helloWorld: '#include <iostream>\n\nint main() {\n  std::cout << "Hello, World!\\n";\n}',
    facts: [
      "It supports procedural, object-oriented, generic, and functional styles.",
      "Templates accidentally enabled compile-time metaprogramming.",
      "Modern C++ keeps adding safer abstractions while preserving low-level performance.",
    ],
    easterEggs: [
      "The name is a programmer joke: ++ is C's increment operator.",
      "Template error messages used to be legendary walls of text.",
    ],
  },
  {
    name: "Rust",
    type: "Systems",
    year: 2015,
    creator: "Graydon Hoare and the Rust project",
    tagline: "Memory safety without a garbage collector, wrapped in a very opinionated compiler hug.",
    history:
      "Rust was created at Mozilla to make systems programming safer. Its ownership model catches many memory and concurrency bugs at compile time.",
    helloWorld: 'fn main() {\n  println!("Hello, World!");\n}',
    facts: [
      "The borrow checker enforces ownership and lifetime rules before code runs.",
      "Cargo made package management and builds feel unusually polished for systems programming.",
      "Rust is increasingly used in operating systems, CLIs, WebAssembly, and infrastructure.",
    ],
    easterEggs: [
      "The compiler's messages are famously friendly and often include practical suggestions.",
      "Ferris, the Rust mascot, appears throughout the community and docs.",
    ],
    paradigms: ["Multi-paradigm", "Functional", "Imperative", "Concurrent"],
    memoryModel: "Ownership-based with RAII, no garbage collector",
    ecosystem: "Growing rapidly - Cargo registry has 100k+ crates, used in systems, web (WASM), CLI tools, and embedded",
  },
  {
    name: "JavaScript",
    type: "Web Frontend",
    year: 1995,
    creator: "Brendan Eich",
    tagline: "The browser's native spellbook, now running everywhere from servers to tiny devices.",
    history:
      "JavaScript was created rapidly for Netscape Navigator, standardized as ECMAScript, and became the universal language of the web.",
    helloWorld: 'console.log("Hello, World!");',
    facts: [
      "It was originally created in about ten days.",
      "Despite the name, JavaScript and Java are different languages.",
      "Node.js helped move JavaScript from browsers to servers and tooling.",
    ],
    easterEggs: [
      "Try [] + [] and [] + {} in a console if you enjoy type coercion riddles.",
      "The web console is full of tiny jokes on major sites, including recruiting messages.",
    ],
    paradigms: ["Multi-paradigm", "Event-driven", "Functional", "Imperative"],
    memoryModel: "Automatic garbage collection (mark-and-sweep)",
    ecosystem: "Huge - npm has over 1.5 million packages, runs in browsers, servers (Node.js), mobile, desktop, and IoT",
  },
  {
    name: "TypeScript",
    type: "Web Frontend",
    year: 2012,
    creator: "Microsoft",
    tagline: "JavaScript with a type system and a very helpful sense of suspicion.",
    history:
      "TypeScript adds static types to JavaScript while compiling back to plain JS, making large web codebases easier to navigate and refactor.",
    helloWorld: 'const message: string = "Hello, World!";\nconsole.log(message);',
    facts: [
      "TypeScript's type system can model surprisingly complex logic at compile time.",
      "It became a default choice for many React, Node, and enterprise web projects.",
      "Types vanish at runtime, so the emitted code is regular JavaScript.",
    ],
    easterEggs: [
      "Type-level programming can calculate strings, numbers, and object shapes without running code.",
      "The 'satisfies' operator gives type checking without widening useful literal types.",
    ],
  },
  {
    name: "Python",
    type: "Data & Scientific",
    year: 1991,
    creator: "Guido van Rossum",
    tagline: "Readable, batteries-included, and somehow the glue for half the internet.",
    history:
      "Python was designed for readability and practical productivity. Its ecosystem made it a favorite for web apps, automation, data science, AI, and education.",
    helloWorld: 'print("Hello, World!")',
    facts: [
      "The name comes from Monty Python, not the snake.",
      "Indentation is part of the syntax, which keeps visual structure meaningful.",
      "The scientific stack around NumPy, pandas, and PyTorch made Python central to modern AI.",
    ],
    easterEggs: [
      "Run import this to see The Zen of Python.",
      "Python has a __future__ module for opting into upcoming behavior.",
    ],
    paradigms: ["Multi-paradigm", "Object-oriented", "Imperative", "Functional"],
    memoryModel: "Automatic reference counting with cyclic garbage collection",
    ecosystem: "Extensive - PyPI has over 400k packages, used in web (Django/Flask), data science, AI, automation, and more",
  },
  {
    name: "R",
    type: "Data & Scientific",
    year: 1993,
    creator: "Ross Ihaka and Robert Gentleman",
    tagline: "Statistics with a command line, a plotting habit, and a serious academic pedigree.",
    history:
      "R was inspired by S and built for statistical computing. It became a powerhouse for analysis, visualization, and reproducible research.",
    helloWorld: 'cat("Hello, World!\\n")',
    facts: [
      "CRAN is one of the largest repositories of statistical packages.",
      "R's formula syntax is beloved in modeling workflows.",
      "ggplot2 changed how many people think about building charts.",
    ],
    easterEggs: [
      "The name R nods to both S and the first names of its creators.",
      "fortune packages preserve memorable quotes from the R community.",
    ],
  },
  {
    name: "Java",
    type: "Backend",
    year: 1995,
    creator: "James Gosling and Sun Microsystems",
    tagline: "Write once, run almost anywhere, especially inside enterprise server rooms.",
    history:
      "Java brought managed memory, a virtual machine, and portability into the mainstream, becoming a dominant language for backend, Android, and enterprise software.",
    helloWorld: 'public class HelloWorld {\n  public static void main(String[] args) {\n    System.out.println("Hello, World!");\n  }\n}',
    facts: [
      "The JVM now hosts many languages, including Kotlin, Scala, and Clojure.",
      "Java applets faded away, but server-side Java stayed enormous.",
      "The language has accelerated its release cycle and added modern features.",
    ],
    easterEggs: [
      "The coffee naming theme runs deep: Java, beans, and the steaming cup logo.",
      "The classic verbose Hello World is practically a programming meme.",
    ],
  },
  {
    name: "Go",
    type: "Backend",
    year: 2009,
    creator: "Robert Griesemer, Rob Pike, and Ken Thompson",
    tagline: "Simple syntax, fast builds, and concurrency that likes servers.",
    history:
      "Go was created at Google to simplify large-scale server development with fast compilation, built-in formatting, and lightweight goroutines.",
    helloWorld: 'package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hello, World!")\n}',
    facts: [
      "gofmt made formatting debates disappear by fiat.",
      "Goroutines and channels make concurrent code feel approachable.",
      "Go binaries are easy to ship because they are commonly statically compiled.",
    ],
    easterEggs: [
      "The mascot is the Go gopher, created by Renee French.",
      "The language's deliberate minimalism is one of its strongest opinions.",
    ],
  },
  {
    name: "C#",
    type: "Backend",
    year: 2000,
    creator: "Anders Hejlsberg and Microsoft",
    tagline: "A polished, modern workhorse for apps, games, cloud services, and tooling.",
    history:
      "C# launched with .NET as a type-safe, object-oriented language and has grown into a multi-paradigm platform language.",
    helloWorld: 'Console.WriteLine("Hello, World!");',
    facts: [
      "Top-level statements made modern Hello World wonderfully tiny.",
      "C# powers Unity games, ASP.NET services, desktop apps, and cloud workloads.",
      "LINQ brought query expressions directly into the language.",
    ],
    easterEggs: [
      "The name C# is a musical pun: C sharp is a note above C.",
      "Async and await made asynchronous code read almost like synchronous code.",
    ],
  },
  {
    name: "Swift",
    type: "Mobile",
    year: 2014,
    creator: "Apple",
    tagline: "Apple-platform speed with a syntax that tries to stay pleasant.",
    history:
      "Swift was introduced as a safer, modern successor for Objective-C in Apple development and later became open source.",
    helloWorld: 'print("Hello, World!")',
    facts: [
      "Optionals are a core feature for making absence explicit.",
      "SwiftUI made declarative app interfaces central in Apple's ecosystem.",
      "The language balances high-level expressiveness with compiled performance.",
    ],
    easterEggs: [
      "The Swift logo uses a bird shape, matching the language's name.",
      "Playgrounds made experimenting with Swift unusually visual and immediate.",
    ],
  },
  {
    name: "Kotlin",
    type: "Mobile",
    year: 2011,
    creator: "JetBrains",
    tagline: "A pragmatic JVM language that made Android development feel fresher.",
    history:
      "Kotlin was built by JetBrains to be concise, safe, and interoperable with Java. Google later made it a preferred language for Android.",
    helloWorld: 'fun main() {\n  println("Hello, World!")\n}',
    facts: [
      "Null safety is built into the type system.",
      "Kotlin works on the JVM, Android, JavaScript, and native targets.",
      "Coroutines are widely used for asynchronous Android code.",
    ],
    easterEggs: [
      "Kotlin is named after an island near St. Petersburg.",
      "Its Java interop lets projects migrate gradually instead of all at once.",
    ],
  },
  {
    name: "Haskell",
    type: "Functional",
    year: 1990,
    creator: "Haskell committee",
    tagline: "Pure functions, lazy evaluation, and types that feel like theorem sketches.",
    history:
      "Haskell standardized research in lazy functional programming and became influential far beyond its production footprint.",
    helloWorld: 'main :: IO ()\nmain = putStrLn "Hello, World!"',
    facts: [
      "It is named after logician Haskell Curry.",
      "Lazy evaluation means expressions are evaluated only when needed.",
      "Its type classes inspired features in other languages.",
    ],
    easterEggs: [
      "Monads became both a useful abstraction and a long-running tutorial genre.",
      "The phrase 'avoid success at all costs' is often associated with Haskell culture.",
    ],
  },
  {
    name: "Lisp",
    type: "Functional",
    year: 1958,
    creator: "John McCarthy",
    tagline: "Code as data, parentheses as architecture, macros as secret doors.",
    history:
      "Lisp is one of the oldest high-level languages still in use. Its homoiconic structure made it foundational for AI research and macro systems.",
    helloWorld: '(format t "Hello, World!~%")',
    facts: [
      "Programs are represented as lists, which makes code transformation natural.",
      "Garbage collection was pioneered in Lisp systems.",
      "Many modern language ideas appeared in Lisp early.",
    ],
    easterEggs: [
      "Lisp is jokingly expanded as 'Lots of Irritating Superfluous Parentheses'.",
      "Macros can create language-like features inside the language itself.",
    ],
  },
  {
    name: "Ruby",
    type: "Scripting",
    year: 1995,
    creator: "Yukihiro Matsumoto",
    tagline: "A language optimized for programmer happiness and elegant little spells.",
    history:
      "Ruby blended ideas from Perl, Smalltalk, Eiffel, Ada, and Lisp. Ruby on Rails later pushed it into web-development fame.",
    helloWorld: 'puts "Hello, World!"',
    facts: [
      "The creator is widely known as Matz.",
      "Everything is an object, including integers and nil.",
      "Rails popularized convention over configuration for web apps.",
    ],
    easterEggs: [
      "Ruby has an English-like feel that makes tiny DSLs pleasant.",
      "The language name followed the gemstone theme after Perl.",
    ],
  },
  {
    name: "PHP",
    type: "Scripting",
    year: 1995,
    creator: "Rasmus Lerdorf",
    tagline: "The web's scrappy server-side survivor, still serving a huge chunk of pages.",
    history:
      "PHP began as Personal Home Page tools and evolved into a widely deployed server-side language for dynamic websites and CMS platforms.",
    helloWorld: '<?php\necho "Hello, World!";\n?>',
    facts: [
      "WordPress keeps PHP massively relevant.",
      "Modern PHP added types, attributes, enums, and strong package tooling.",
      "Composer transformed dependency management in the ecosystem.",
    ],
    easterEggs: [
      "Older PHP versions had special query parameters that revealed logos.",
      "Its recursive acronym now means PHP: Hypertext Preprocessor.",
    ],
  },
  {
    name: "SQL",
    type: "Database",
    year: 1974,
    creator: "Donald Chamberlin and Raymond Boyce",
    tagline: "Declarative data questions for the relational universe.",
    history:
      "SQL emerged from IBM research on relational databases and became the standard language for querying and managing structured data.",
    helloWorld: "SELECT 'Hello, World!' AS greeting;",
    facts: [
      "SQL asks what data you want, while the database decides how to get it.",
      "Different databases have dialects, so portability can be trickier than it looks.",
      "Indexes, query planners, and joins are where the real magic happens.",
    ],
    easterEggs: [
      "SQL is often pronounced both 'sequel' and 'S-Q-L', depending on who is nearby.",
      "Recursive CTEs can make SQL feel unexpectedly algorithmic.",
    ],
  },
  {
    name: "Assembly",
    type: "Systems",
    year: 1949,
    creator: "Kathleen Booth",
    tagline: "The raw machine code that speaks directly to silicon.",
    history:
      "Assembly languages emerged as human-readable representations of machine code, evolving with each processor architecture and becoming the foundation for all higher-level languages.",
    helloWorld: '; x86-64 Linux\n\nsection .data\n  msg db "Hello, World!", 10\n  len equ $ - msg\n\nsection .text\n  global _start\n\n_start:\n  mov rax, 1        ; sys_write\n  mov rdi, 1        ; stdout\n  mov rsi, msg\n  mov rdx, len\n  syscall\n\n  mov rax, 60       ; sys_exit\n  xor rdi, rdi\n  syscall',
    facts: [
      "Every high-level language compiles down to assembly at some point.",
      "Different CPUs have different assembly languages - x86, ARM, RISC-V, etc.",
      "Modern compilers generate better assembly than most humans can write.",
    ],
    easterEggs: [
      "The first assembly language was created for the EDSAC computer in 1949.",
      "Assembly programmers often have strong opinions about tabs vs spaces.",
    ],
  },
  {
    name: "Perl",
    type: "Scripting",
    year: 1987,
    creator: "Larry Wall",
    tagline: "The duct tape of the internet, with regex superpowers.",
    history:
      "Perl was created to make report processing easier and grew into a powerful scripting language that powered much of the early web and system administration.",
    helloWorld: 'print "Hello, World!\\n";',
    facts: [
      "Perl's motto is 'There's more than one way to do it' (TMTOWTDI).",
      "It has powerful regular expressions built into the language.",
      "CPAN (Comprehensive Perl Archive Network) is one of the oldest package repositories.",
    ],
    easterEggs: [
      "Perl's creator Larry Wall is also a linguist, which influenced the language's design.",
      "The language has a built-in variable $_ that many newcomers find confusing.",
    ],
  },
  {
    name: "Scala",
    type: "Backend",
    year: 2004,
    creator: "Martin Odersky",
    tagline: "Object-oriented meets functional in the JVM's most elegant resident.",
    history:
      "Scala was designed to be a better Java, combining object-oriented and functional programming paradigms while maintaining JVM compatibility.",
    helloWorld: 'object HelloWorld {\n  def main(args: Array[String]): Unit = {\n    println("Hello, World!")\n  }\n}',
    facts: [
      "Scala compiles to JVM bytecode and can call Java libraries directly.",
      "It supports both mutable and immutable data structures.",
      "The language is used heavily in big data processing (Spark) and web frameworks (Play).",
    ],
    easterEggs: [
      "Scala's name comes from 'scalable language'.",
      "It has a REPL (Read-Eval-Print Loop) for interactive programming.",
    ],
  },
  {
    name: "Dart",
    type: "Web Frontend",
    year: 2011,
    creator: "Google",
    tagline: "Google's answer to JavaScript, with Flutter's mobile ambitions.",
    history:
      "Dart was created by Google to address JavaScript's shortcomings and became the language behind Flutter for cross-platform mobile development.",
    helloWorld: 'void main() {\n  print("Hello, World!");\n}',
    facts: [
      "Dart can compile to JavaScript for web use or native code for mobile.",
      "Flutter uses Dart to create native iOS and Android apps from a single codebase.",
      "It has strong typing with type inference for developer productivity.",
    ],
    easterEggs: [
      "Dart's mascot is a penguin wearing a spacesuit.",
      "The language was initially controversial for competing with JavaScript.",
    ],
  },
  {
    name: "Lua",
    type: "Scripting",
    year: 1993,
    creator: "Roberto Ierusalimschy, Luiz Henrique de Figueiredo, Waldemar Celes",
    tagline: "The embeddable scripting language that powers games and extensibility.",
    history:
      "Lua was designed as a scripting extension language and became popular for game development and embedded systems due to its small size and speed.",
    helloWorld: 'print("Hello, World!")',
    facts: [
      "Lua is used in World of Warcraft for addons and many games for scripting.",
      "It's designed to be embedded in C/C++ applications.",
      "The language has a register-based virtual machine for efficiency.",
    ],
    easterEggs: [
      "Lua means 'moon' in Portuguese, the native language of its creators.",
      "It's used in Redis for scripting and Nginx for configuration.",
    ],
  },
  {
    name: "Shell",
    type: "Scripting",
    year: 1977,
    creator: "Stephen Bourne",
    tagline: "The command-line orchestrator that turns text into actions.",
    history:
      "The Bourne shell (sh) became the standard Unix shell and inspired Bash, which is now the most common shell on Linux and macOS systems.",
    helloWorld: '#!/bin/bash\necho "Hello, World!"',
    facts: [
      "Shell scripts automate system administration and development workflows.",
      "Pipes (|) allow chaining commands together in powerful ways.",
      "Environment variables and exit codes are fundamental to shell programming.",
    ],
    easterEggs: [
      "The 'shebang' (#!) tells the system which interpreter to use.",
      "Shell scripts can be surprisingly complex - some are full applications.",
    ],
  },
];

export const languageTypes: LanguageType[] = [
  "Systems",
  "Web Frontend",
  "Backend",
  "Data & Scientific",
  "Mobile",
  "Functional",
  "Scripting",
  "Database",
];
