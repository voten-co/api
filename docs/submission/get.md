# Get  Submission 

## Resource URL

```
https://voten.co/api/submissions/:submission_id:
```

## Resource Method

```
GET
```

## Parameters

| Name | Required | Description | Default | Example | Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| with_channel |  | Includes data of the submitted channel.  | `false` | `1`, `0`, `true`, `false` | boolean


## Example Response

```json
{
    "data": {
        "id": 3,
        "slug": "laravel-scheduler-adds-support-for-running-hourly-tasks-on-a-certain-minute",
        "channel_id": 3,
        "channel_name": "laravel",
        "user_id": 1,
        "title": "Laravel Scheduler Adds Support for Running Hourly Tasks on a Certain Minute",
        "type": "link",
        "nsfw": false,
        "content": {
            "img": "https://cdn.voten.co/submissions/link/1483997753j9RqCml.jpg",
            "url": "https://laravel-news.com/scheduler-hourlyat",
            "type": "link",
            "embed": "",
            "title": "Laravel Scheduler Adds Support for Running Hourly Tasks on a Certain Minute",
            "thumbnail": "https://cdn.voten.co/submissions/link/thumbs/1483997753dXwOHsk.jpg",
            "description": "Laravel Scheduler now includes a new method hourlyAt that will allow you to define the minute within the hour that a task should run.",
            "providerName": "Laravel News",
            "publishedTime": "2017-01-06T20:34:00-05:00"
        },
        "rate": 229.2,
        "likes_count": 3,
        "comments_count": 0,
        "approved_at": null,
        "disapproved_at": null,
        "created_at": "2017-01-09 19:05:54",
        "url": "https://laravel-news.com/scheduler-hourlyat",
        "domain": "laravel-news.com",
        "author": {
            "id": 1,
            "username": "sully",
            "name": "Sully Fischer",
            "bio": "Just a rock n roll rebel who also happens to like developing web applications",
            "avatar": "https://cdn.voten.co/users/avatars/1505414772nkM1CzJ.png",
            "verified_email": true,
            "cover_color": "Dark Blue",
            "created_at": "2017-01-09 17:34:14",
            "info": {
                "location": "Earth Planet",
                "twitter": "sullyfischer",
                "website": "https://voten.co"
            }
        }
    }
}
```
