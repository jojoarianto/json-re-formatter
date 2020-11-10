simple json restructuring

# install dependency
```
npm inistall
```

# how to run
```
node converter-from-url.js https://something.firebaseio.com/ababababababa/abababababab/.json > output.json
```

## example json input
```
var dummyJson = {
    "-ML_TskwkjxNhicsW6iY": {
        "answer": {
            "2": "E",
            "3": "C",
            "5": "A",
            "9": "C",
            "10": "B",
        },
        "user_id": "5ed25b055b19287cd66bf817"
    }
};
```

## example output json
```
var dummyJson = {
    "5ed25b055b19287cd66bf817": {
        "answer": {
            "2": "E",
            "3": "C",
            "5": "A",
            "9": "C",
            "10": "B",
        },
        "user_id": "5ed25b055b19287cd66bf817"
    }
};
```