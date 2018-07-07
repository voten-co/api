# Get Comment  

## Resource URL

```
https://voten.co/api/comments/:comment_id:
```

## Resource Method

```
GET
```

## Parameters

| Name | Required | Description | Default | Example | Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| with_children |  | Include children comments within the response (in case there is any of course).  | `false` | `1`, `0`, `true`, `false` | boolean


## Example Response

```json
{
    "data": {
        "id": 1,
        "submission_id": "1",
        "user_id": "2",
        "channel_id": "1",
        "parent_id": null,
        "nested_level": "0",
        "rate": "1192.08",
        "likes_count": "1",
        "content": {
            "text": "Asperiores eius reiciendis omnis. Et architecto vero atque explicabo dolores aut. Dolor qui aut qui ad similique voluptatem."
        },
        "approved_at": null,
        "disapproved_at": null,
        "created_at": "2018-05-26 13:07:19",
        "edited_at": null,
        "author": {
            "id": 2,
            "username": "tess82",
            "name": "Hershel Ullrich",
            "bio": null,
            "avatar": "/imgs/default-avatar.png",
            "verified_email": true,
            "cover_color": "Dark",
            "created_at": "2018-05-26 13:07:19",
            "info": {
                "location": "Maldives",
                "twitter": null,
                "website": null
            }
        }
    }
}
```
