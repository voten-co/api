# Login

After a successful login, you'll be given a valid `access_token` which later you'll be using for authorization.

## Resource URL

```
https://voten.co/api/token/login
```

## Resource Method

```
POST
```

## Parameters

| Name | Required | Description | Type |
| :--- | :--- | :--- | :--- | :--- | :--- |
| username | Yes | The username used for login. Voten supports both user's `username` and `email`. Note that even if you're using email, you still have to send it as `username`. | string |
| password | Yes  |   | string |

## Example Response

```json
{
    "token_type": "Bearer",
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImRmNWExMmE5ODg2NWE5M2QzMzY5ZTE0OTM5YjlhZjE2N2I3ZjVlMzNkNWJjOWQ1MzA4MTk0ODkwZmI4NDQzMDYzYmY5ZTdlNzkyZDQ3MGMyIn0.eyJhdWQiOiIxMSIsImp0aSI6ImRmNWExMmE5ODg2NWE5M2QzMzY5ZTE0OTM5YjlhZjE2N2I3ZjVlMzNkNWJjOWQ1MzA4MTk0ODkwZmI4NDQzMDYzYmY5ZTdlNzkyZDQ3MGMyIiwiaWF0IjoxNTIwNDA5MTc2LCJuYmYiOjE1MjA0MDkxNzYsImV4cCI6MTU1MTk0NTE3Niwic3ViIjoiMyIsInNjb3BlcyI6W119.b4LeL6K2mmhaM42WL5vieQkEslH_OrLbtuJHpNneUK4bMsrkfrjEhRhZC_fIA4YPkuKHIzC-OCczzPMHDrmcT18-8NlB_fzsT9ff4wzjvCeqn5rIZeNe6swaC-zhg3MvR_pzyoeRuEZ19Aig1lYsRKiMaSLfqbEA_eksoZwvCL-LybWhKA4AKVd4RtnenOnZQ_fu2fv4MeVIbk_03udS8wd9z5_4K-wL5BGU_6RwF3ED72ZKfWhpFicANOA6PK3huEH7YjjsWAaQE5P2GlsIa3m5QruS76BLPsswOVDBso7CEsho3RQVrT9bRuupBMyUylMG3PS9s1H_R2BloGQw8P-lje3GyzeOSchCKHXqj2e9VW4FeHQzRC0Fvy2bng8Es3Wdqy3SvatrDCdykj4pkdyB1bAj--gBN9d0oPRdKM6MfJ0I0E0-CXud57jBk23ALjaNhpoZ4Dnq5ADw_toT5Dk_8zfMsb1f4VfN9rTOgF19uwOKY0uleoUjnW75rq1kXI5b7QK71d3T9SGSVythboQDvAyHNW1w_xKLTz_5q7KPoDXjczpXGi3OHB946JcPhtD41E0j3YTwnCs-JIkVT4zUskPTXu-vGaJSBz7djLiIaX_VeBS2E_Jvo37LeBPBvLfUQizMjyq-CIJgdtFprHXWPzDkBkP3hdQVyOyKXSo",
    "expires_in": 31536000
}
```
