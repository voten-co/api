# Bookmark Comment 

This route toggles the "bookmark" action for the comment. Meaning that the first time you call it, it'll bookmark the comment; the second call for the same record will cause removing "bookmark" record. 

::: tip
The response is different for "bookmark" and "undo bookmark". You can use either the response's message or status code to detect whether the action has caused "bookmark" or "undo bookmark". Since the "bookmark" action causes creating a record in our database, it has the status code of `201`. The "undo bookmark" isn't creating anything; thus it has the status code of `200`.
:::

## Resource URL

```
https://voten.co/api/comments/:comment_id:/bookmark
```

## Resource Method

```
POST
```

## Example Response

When performed a "bookmark" action: 

```json
{
    "message": "Bookmarked successfully."
}
```

When performed an "undo bookmark" action: 

```json
{
    "message": "Undid bookmark successfully."
}
```