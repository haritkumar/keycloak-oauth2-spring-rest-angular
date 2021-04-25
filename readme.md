## Keycloak Oauth2 security with Spring rest and angular app
Keycloak as authentication and authorization server which is an open-source identity and access management platform (IAM) from Red Hat’s Jboss.

Features

- Two-factor authentication
- Bruteforce detection
- Social login (Facebook, Twitter, Google…)
- LDAP/AD integration

### Step 1 : Setup Keycloak Server
```sh
# Start the Keycloak and MySql containers
docker-compose -f mysql-keycloak.yml up
````

Open [http://localhost:8080](http://localhost:8080) to access keycloak admin console
- use `admin:admin@123` as credentials