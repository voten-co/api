# Report Comment 

## Resource URL

```
https://voten.co/api/comments/:comment_id:/report
```

## Resource Method

```
POST
```

## Parameters

| Name | Required | Description | Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| subject | Yes | Must be one these values: `It's spam`, `It doesn't follow channel's exclusive rules`, `It doesn't follow Voten's general rules`, `It's harassing me or someone that I know`, `Other`. | string 
| description | | Optional description which cannot exceed 5,000 characters. | string

## Example Response

```json
{
    "message": "Report submitted successfully."
}
```