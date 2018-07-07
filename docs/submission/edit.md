# Edit Submission 

At the moment, Voten only allows the edit action for `text` typed submissions' content.  

## Resource URL

```
https://voten.co/api/submissions/:submission_id:
```

## Resource Method

```
PATCH
```

## Parameters

| Name | Required | Description | Default | Example | Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| text | Yes | String content of the submission. Can’t exceed 15,000 characters. `null` is also accepted. |  | some cool content that supports markdown as well | string |

## Example Response

```json
{
    "message": "Text Submission has been updated."
}
```