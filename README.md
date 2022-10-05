# Javascript developer test

Details:
In the following file `data.js`, there are `Countries` containing `Peoples` containing `Animals`.
Some features have been implemented by a previous developer. You need to check if all user stories have been completed.
If you find some issues or enhancements, feel free to create a new pull request on the same repository.

## User story #1 filter
The customer would like to filter the above lists by animals name and print a formatted list in the console.

Your task:
You have to implement a command filter that take in parameter a name of animal or a partial name.

Rules:
if an animal name should not match the input pattern, it should be removed from the list.
if a people no longer contains animal after the filter, the people should not appear in the result.
if a country no longer contains people after the filter, the country should not appear in the result.
The order of countries, peoples and animals should be kept intact.

Example : 
```shell script
$ node app.js --filter=ry
# Only animals containing `ry` are displayed.
[
  {
    "name": "Uzuzozne",
    "people": [
      {
        "name": "Lillie Abbott",
        "animals": [
          {
            "name": "John Dory"
          }
        ]
      }
    ]
  },
  {
    "name": "Satanwi",
    "people": [
      {
        "name": "Anthony Bruno",
        "animals": [
          {
            "name": "Oryx"
          }
        ]
      }
    ]
  }
]
```

```shell script
$ node app.js --filter=uz
# Only animals containing `Uz` are displayed.
[
  {
    "name": "Dillauti",
    "people": [
      {
        "name": "Philip Murray",
        "animals": [
          {
            "name": "Buzzard"
          }
        ]
      }
    ]
  }
]
```

## User story #2 count

The next goal is to print the counts of People and Animals by counting the number of children and appending it in the name.

Task:
You have to implement a new command count that does not take any parameters. It adds a suffix to countries and people by counting their respective direct children.
The number of children should appear in square brackets a white space after the name of the country or the people.

Rules:
If the count is the only command called, you have to count the initial data.


## User story #3 combine filter and count commands

Task:
It should be possible to use a command filter and a command count in the same call.

Rules:
The count command should add the number of children after the filter was applied.

```shell script
node app.js --count --filter=ry
node app.js --filter=ry --count 
# This two commands should produce the same result
[
  {
    "name": "Uzuzozne [1]",
    "people": [
      {
        "name": "Lillie Abbott [1]",
        "animals": [
          {
            "name": "John Dory"
          }
        ]
      }
    ]
  },
  {
    "name": "Satanwi [1]",
    "people": [
      {
        "name": "Anthony Bruno [1]",
        "animals": [
          {
            "name": "Oryx"
          }
        ]
      }
    ]
  }
]
```

## Requirements

- The code must be available in a GIT repository
- No library/modules should be added.

## Appreciation

We will be really attentive to:

- **Code readability**, structure and consistency
- **Tests**, and how they are written
- Comments
