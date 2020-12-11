# ⚠  🚩 I couldn't find a way to deploy to VERCEL so i used heroku  instead

# For testing the function
## Sample of input
Pass a string of this format into the analyzeTasks() function. <br>
I would suggest using a template literal, and make sure there's no linebreak-<br>
or white-space at the beginning and at the end of the string

```
2
1 PT
2 US
3
1 1 10
2 1 5
3 2 10
```

## Sample of output

```
1 7.50
2 10.00
PT 7.50
US 10.00
```

# For testing the API route

## Sample of input

On the request input area in Postman, select **Body** then select **raw** then select **text**.<br>
Then post the below input in the text area.<br>
Send a ``POST`` request to this route ``https://nath-analyze-tasks.herokuapp.com/analyze/tasks`` with a post request containing the input below. 

```
2
1 PT
2 US
3
1 1 10
2 1 5
3 2 10
```

 To get the response in the standard output please change the response **Body** option from **json** <br>
 to **text**

```
2 10.00
1 7.50
US 10.00
PT 7.50
```