# Edit Comment

## Resource URL

```
https://voten.co/api/comments/:comment_id:
```

## Resource Method

```
PATCH
```

## Parameters

| Name | Required | Description | Default | Example | Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| text | Yes | String content of the comment. Can’t exceed 5,000 characters. |  | some cool content that supports markdown as well | string |

## Example Response

```json
{
    "message": "Comment edited successfully."
}
```