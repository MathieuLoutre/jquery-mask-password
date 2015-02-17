# jquery-mask-password

> Hides the content of a text field after a given delay

## Why?

Masking your password is very useful, but not always. Particularly not when you're typing. This is simple solution to the problem.

## How?

It changes the type of the input from password to text when typing, and back to password after a delay (1s by default)

## Usage

Install using bower: `bower install jquery-mask-password`  
Or using npm: `npm install jquery-mask-password`  
Or just by downloading the [tarball](https://github.com/MathieuLoutre/jquery-mask-password/archive/master.zip)

```js

	$("input[type=password").maskPassword();

	$("input[type=password").maskPassword(2000);

```

## Changelog

- 0.2.1 - Use `setSelectionRange` to not lose focus in FF

- 0.1.1 - Remove console.log

- 0.1.0 - First release