# Like Comment 

This route toggles the "like" action for the comment. Meaning that the first time you call it, it'll like the comment; the second call for the same record will cause removing "like" record. 

::: tip
The response is different for "like" and "undo like". You can use either the response's message or status code to detect whether the action has caused "like" or "undo like". Since the "like" action causes creating a record in our database, it has the status code of `201`. The "undo like" isn't creating anything; thus it has the status code of `200`.
:::

## Resource URL

```
https://voten.co/api/comments/:comment_id:/like
```

## Resource Method

```
POST
```

## Example Response

When performed a "like" action: 

```json
{
    "message": "Liked successfully."
}
```

When performed an "undo like" action: 

```json
{
    "message": "Undid like successfully."
}
```