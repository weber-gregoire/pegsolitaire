# Peg Solitaire Solver
This is a simple program in Node.js taht solves peg solitaire based on a backtracking algorithm, and symetric identifications, with no optimization at all.
Many variations of the board are available to be solved, and the solving time depends on the board chosen.

## How to run

### With Node.js installed

Get the dependencies
```npm install```

Run the program
```npm start <NAME_OF_THE_BOARD>```

### With Docker

Get the image by building or pulling it

* ```docker build -t solitaire .```
* ```docker pull gregoireweber/peg-solitaire-solver```

Then run the image
```docker run gregoireweber/peg-solitaire-solver <NAME_OF_THE_BOARD>```

## Available boards

### ENGLISH
```
    O O O     
    O O O     
O O O O O O O 
O O O - O O O 
O O O O O O O 
    O O O     
    O O O     
```

### PLUS
```
    - - -     
    - O -     
- - - O - - - 
- O O O O O - 
- - - O - - - 
    - O -     
    - - -     
```

### CROSS
```
    - - -     
    - O -     
- - O O O - - 
- - - O - - - 
- - - O - - - 
    - - -     
    - - -     
```

### FIREPLACE
```
    O O O     
    O O O     
- - O O O - - 
- - O - O - - 
- - - - - - - 
    - - -     
    - - -     
```

### UP
```
    - O -     
    O O O     
- O O O O O - 
- - - O - - - 
- - - O - - - 
    O O O     
    O O O
```

### PYRAMID
```
    - - -     
    - O -     
- - O O O - - 
- O O O O O - 
O O O O O O O 
    - - -     
    - - -     
```

### DIAMOND
```
    - O -     
    O O O     
- O O O O O - 
O O O - O O O 
- O O O O O - 
    O O O     
    - O -     
```

### EUROPEAN (long solving duration)
```
    O O O
  O O O O O
O O O - O O O
O O O O O O O
O O O O O O O
  O O O O O
    O O O
```

### GERMAN (long solving duration)
```
      O O O       
      O O O       
      O O O       
O O O O O O O O O 
O O O O - O O O O 
O O O O O O O O O 
      O O O       
      O O O       
      O O O       
```

### ASYMETRICAL (long solving duration)
```
    O O O       
    O O O       
    O O O       
O O O O O O O O 
O O O - O O O O 
O O O O O O O O 
    O O O       
    O O O       
```