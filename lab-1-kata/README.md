# The Greeting Kata

This [Kata](https://en.wikipedia.org/wiki/Kata_(programming)) is designed to help practice what a test of a pure function ought to look like. It is intentionally designed to start with a very easy, non-branching base case which slowly becomes addled with complexity as additional requirements are added that will require significant branching and eventually a pressure to compose additional units.

This Kata was suggested by [Nick Gauthier](http://ngauthier.com) and inspired a bit by Bob from [Exercism](http://exercism.io).

## Requirement 1

Write a method `greet(name)` that interpolates `name` in a simple greeting. For example, when `name` is `"Bob"`, the method should return a string `"Hello, Bob."`.

## Requirement 2

Handle nulls by introducing a stand-in. For example, when `name` is null, then the method should return the string `"Hello, my friend."`

## Requirement 3

Handle shouting. When `name` is all uppercase, then the method should shout back to the user. For example, when `name` is `"JERRY"` then the method should return the string `"HELLO JERRY!"`

## Requirement 4

Handle two names of input. When `name` is an array of two names (or, in languages that support it, varargs or a splat), then both names should be printed. For example, when `name` is `["Jill", "Jane"]`, then the method should return the string `"Hello, Jill and Jane."`

## Requirement 5

Handle arbitrarily names of input. When `name` represents more than two names, separate them with commas and close with an Oxford comma and "and". For example, when `name` is `["Amy", "Brian", "Charlotte"]`, then the method should return the string `"Hello, Amy, Brian and Charlotte."`

