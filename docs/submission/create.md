# Create Submission 

## Resource URL

```
https://voten.co/api/submissions
```

## Resource Method

```
POST
```

## Parameters

| Name | Required | Description | Default | Example | Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| channel\_name | Yes | The name of the channel you're trying to submit the post to.  |  | news | string |
| type | Yes | The type of the submission. Accepted values are: `link`, `img`, `text`, `gif`. |  |  link| string |
| title | Yes | Title of the post. Must be between 7-150 characters. |  | a really cool title | string |
| url | Yes if `type` === `link` | A valid URL you're trying to submit as a link post.  |  | `https://laravel-news.com/voten-open-source`  | string |
| photos_id | Yes if `type` === `img` | An array filled with IDs of the uploaded photos. If it's filled with more than a single ID, it'll create an album. You don't need to do further action for it.   |  | [542, 543]  | array |
| gif_id | Yes if `type` === `gif` | The ID of the uploaded GIF. (GIF posts don't support album) |  | 454  | integer |
| text |  | The optional content used only for text posts (`type` === `text`). Can't exceed 15,000 characters. |  | some really cool content supporting Markdown syntax.    | string |
| nsfw |  | Is the submitted post not safe for work environment?  | `false` | 1, 0, `false`, `true` | boolean |

## Example Response

```json
{
    "data": {
        "id": 12839,
        "slug": "some-cool-title-for-my-post-5",
        "channel_id": 6,
        "channel_name": "news",
        "user_id": 1,
        "title": "Some cool title for my post",
        "type": "text",
        "nsfw": false,
        "content": {
            "text": "some cool content that supports markdown as well."
        },
        "rate": 1056.51,
        "likes_count": 1,
        "comments_count": 0,
        "approved_at": null,
        "disapproved_at": null,
        "created_at": "2018-03-16 22:32:54",
        "url": "https://voten.co/c/news/some-cool-title-for-my-post-5",
        "domain": null,
        "author": {
            "id": 1,
            "username": "sully",
            "name": "Sully Fischer",
            "bio": "Just a rock n roll rebel who also happens to like developing web applications",
            "avatar": "https://cdn.voten.co/users/avatars/1520174526SGY6bGaqJNDRapd6.png",
            "email": "fischersully@gmail.com",
            "verified_email": true,
            "cover_color": "Dark Blue",
            "created_at": "2017-01-09 17:34:14"
        }
    }
}
```
