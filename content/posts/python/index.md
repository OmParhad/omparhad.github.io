+++
title = 'Getting Started with Python'
date = 2026-10-14
draft = false
description = 'A short introduction to Python, with a first program, basic values, and links to trusted learning resources.'
author = 'Om Parhad'
tags = ['Python', 'Programming']
categories = ['Programming']
ShowToc = true
TocOpen = false

[cover]
image = 'python-logo.png'
alt = 'The Python programming language logo'
caption = 'The official Python logo.'
+++

Python is a general-purpose programming language known for readable syntax and a large collection of libraries. This short example introduces the shape of a Python program and links to resources for learning more.

## Your first program

The `print()` function writes a value to the terminal:

```python
print('Hello, world!')
```

Save this in a file named `hello.py`, then run it with `python hello.py` (or `python3 hello.py`, depending on your system).

## Variables and values

Names let a program reuse values. Python determines the type from the value assigned:

```python
name = 'Ada'
years_learning = 1
is_learning = True

print(f'{name} has been learning Python for {years_learning} year.')
```

Strings hold text, integers hold whole numbers, and booleans represent `True` or `False`.

## Put logic in a function

Functions give a useful piece of logic a name, so it can be called more than once:

```python
def greet(person):
    return f'Hello, {person}!'


print(greet('Ada'))
```

The indented line belongs to the function body. Calling `greet('Ada')` passes a value for `person` and returns a greeting.

## Continue learning

- Read the [official Python tutorial](https://docs.python.org/3/tutorial/).
- Browse the [Python documentation](https://docs.python.org/3/).
- Review [PEP 8](https://peps.python.org/pep-0008/) for Python's style conventions.

## A simple learning path

1. Install Python from [python.org](https://www.python.org/downloads/).
2. Practice variables, conditions, loops, and functions.
3. Build a small project and look up unfamiliar concepts in the documentation.