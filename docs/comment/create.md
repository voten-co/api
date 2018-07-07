# Create Comment  

## Resource URL

```
https://voten.co/api/submissions/:submission_id:/comments
```

## Resource Method

```
POST
```

## Parameters

| Name | Required | Description | Default | Example | Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| body | Yes | The string content of the comment. Can't exceed 5000 characters. |  | some really cool content supporting Markdown syntax.    | string |
| parent_id | | The id of the parent comment. Used when trying to send a reply to another comment. | `null` | 112, `null` | integer

## Example Response

```json
{
    "data": {
        "id": 1,
        "submission_id": 1,
        "user_id": 1,
        "channel_id": "1",
        "parent_id": null,
        "nested_level": 0,
        "rate": 1192.105111111111,
        "likes_count": 1,
        "content": {
            "text": "some cool comment which BTW supports **markdown**"
        },
        "approved_at": null,
        "disapproved_at": null,
        "created_at": "2018-05-26 13:26:09",
        "edited_at": null,
        "author": {
            "id": 1,
            "username": "kira92",
            "name": "Adolphus Hartmann",
            "bio": null,
            "avatar": null,
            "email": "okuneva.emmanuelle@example.net",
            "verified_email": true,
            "cover_color": null,
            "created_at": "2018-05-26 13:26:09",
            "info": {
                "location": "Czech Republic",
                "twitter": null,
                "website": null
            }
        }
    }
}
```
