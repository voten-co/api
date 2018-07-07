# How does authorization work on Voten?

You must pass a valid access_token in the Authorization header of your request. (except for login and register calls of course). You do not need to generate `access_token` anywhere on site. It will be given to you as the result of `https://voten.co/api/token/login` and  `https://voten.co/api/token/register` API calls. 

## PHP Example:

Here's a PHP example, when using the Guzzle HTTP library:

```php
$response = $client->request('GET', '/api/user', [
    'headers' => [
        'Accept' => 'application/json',
        'Authorization' => 'Bearer '.$accessToken,
    ],
]);
```

## Javascript Example:

As a simple tip, it may be easier to config your Ajax library to send the Authorization header automatically in every request. For example, when using Axios library:

```js
if (accessToken.length) {
    window.axios.defaults.headers.common = {
        'Authorization': 'Bearer ' + accessToken,
    };
}
```



