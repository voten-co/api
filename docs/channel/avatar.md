# Upload Channel Avatar

Only channel’s administrators are permitted to perform this request. That means even channel's moderators cannot perform such operation.

## Resource URL

```
https://voten.co/api/channels/:channel_id:/avatar
```

## Resource Method

```
POST
```

## Parameters

| Name | Required | Description  | Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| photo | Yes | The photo you're trying to upload as the new avatar for the channel. It must have a minimum of **250x250** pixels with a ratio of **1/1**. (such as a square or circle) | file |

## Example Response

Response contains the URL to the new uploaded avatar photo in png format:

```
https://cdn.voten.co/channels/avatars/1527423363K2Al4Ss3DDN4YpHN.png
```
