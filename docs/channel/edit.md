# Edit Channel  

Only channel's administrators are permitted to edit the channel. That means moderators cannot perform such operation. 

## Resource URL

```
https://voten.co/api/channels/:channel_id:
```

## Resource Method

```
PATCH
```

## Parameters

| Name | Required | Description | Default | Example | Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| description | Yes | Describes the creating channel in 10-250 characters. It is used by users trying to find your channel. | | | string | 
| cover_color | | The color used as the background of the channel's cover. Must be one of these values: `Dark Blue`,`Blue`,`Red`,`Dark`,`Pink`,`Dark Green`,`Bright Green`,`Purple`,`Gray`,`Orange` | | | string | 
| nsfw | | Does the channel contain **mostly** NSFW (not safe for work) content? | `false` |  1, 0, `false`, `true`| boolean

## Example Response

```json
{
    "message": "Channel has been updated successfully."
}
```