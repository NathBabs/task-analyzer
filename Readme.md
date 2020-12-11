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

On Postman select **Body** then select **raw** then select **text**.<br>
Then post the below input in the text area.

```
2
1 PT
2 US
3
1 1 10
2 1 5
3 2 10
```

### To get the response in the standard output please the response **Body** option from **json** <br>
### to **text**

```
2 10.00
1 7.50
US 10.00
PT 7.50
```