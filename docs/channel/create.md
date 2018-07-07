# Create Channel  

## Resource URL

```
https://voten.co/api/channels
```

## Resource Method

```
POST
```

## Parameters

| Name | Required | Description | Default | Example | Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| name | Yes | The name of the channel. Note that it cannot be modified later. |  | gaming, News, OldSchoolCool, modernWarfare2 | string |
| description | | Describes the creating channel in 10-250 characters. It is used by users trying to find your channel. | | | string | 
| nsfw | | Does the channel contain **mostly** NSFW (not safe for work) content? | `false` |  1, 0, `false`, `true`| boolean

## Example Response

```json
{
    "data": {
        "id": 1,
        "name": "myNewChannel",
        "description": "describing my cool channel",
        "nsfw": false,
        "cover_color": "Blue",
        "avatar": "/imgs/channel-avatar.png",
        "subscribers_count": 0,
        "comments_count": 0,
        "submissions_count": 1,
        "created_at": "2018-05-26 15:33:33"
    }
}
```
