# pythagorean-triples

## About

It aims to be an interesting study for an enached and fast solution for this paricular problem.

## The Problem

A Pythagorean triple is a set of three natural numbers, {a, b, c}, for
which,

```text
a**2 + b**2 = c**2
```

and such that,

```text
a < b < c
```

For example,

```text
3**2 + 4**2 = 9 + 16 = 25 = 5**2.
```

Given an object that contains a `sum` (and optionally a `minFactor` and a `maxFactor`), the triplets function returns all the
pythagorean triples `a, b, c` for which

```text
a + b + c = sum
```

(and `minFactor < a < b < c < maxFactor`).
The implementation is based on [Euclid's formula](https://en.wikipedia.org/wiki/Pythagorean_triple#Generating_a_triple:~:text=on%20the%20cone.-,Euclid%27s%20formula,-%5B3%5D%20is) for generating Pythagorean triples.

## Sources

Exercism Pythagorean triplets exercise from [Javascript track](https://exercism.org/tracks/javascript/exercises)

[Problem 9](http://projecteuler.net/problem=9) at Project Euler
