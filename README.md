# GroceryStoreBacked

<h2> Try it! </h2>
https://grocerystore-fduda354.koyeb.app

<h2> Or you can try it on docker </h2>
docker run -d -it -p 8081:80/tcp --name grocery-store-frontend needxmafia/grocery-store-frontend:latest

<h2>Project Stucture</h2>

<img width="127" alt="Zrzut ekranu 2022-11-10 o 11 07 14" src="https://user-images.githubusercontent.com/92389794/201063059-6eb57b54-6085-4228-8ffd-fb645ef884dd.png">

https://www.koyeb.com


https://azure.microsoft.com/pl-pl/

![Zrzut ekranu 2022-11-10 o 18 14 28](https://user-images.githubusercontent.com/92389794/201162712-63b8fa0b-6b52-47d5-b2fa-0c808f167e5e.png)




Main project: store management.
Technology i used:
- Spring jpa
- Spring security
- REST API
- MySQL
- Docker
- Always data
- CI/CD
- Lombok
- JWT

This API allows you to manage your store

<h3>Database</h3>
<h4>PostgreSQL</h4>

Database diagram

![db diagram](https://user-images.githubusercontent.com/92389794/195979591-67ab7a01-f910-45fe-ab67-602ed3cf9f20.png)


AppUsers Table

<img width="915" alt="U" src="https://user-images.githubusercontent.com/92389794/195979837-666ab354-8cda-47d5-8813-614d3fe2fa68.png">

Baskets Table

<img width="189" alt="B" src="https://user-images.githubusercontent.com/92389794/195979848-1d849d35-ec1d-43bd-895a-f63108ce9e33.png">

Product_DB Table

<img width="346" alt="PDB" src="https://user-images.githubusercontent.com/92389794/195979870-b23454b8-10f4-4bb6-a3d1-70bdb07efcc6.png">

PurchasedProducts_Baskets Table

<img width="283" alt="PP_B" src="https://user-images.githubusercontent.com/92389794/195979880-4c2ff9b6-b1e8-4749-b786-b354fa88d5ca.png">


<h3>REST API</h3>

<h3>Endpoints</h3>

<h4>Role_USER: Endpoints:</h4>

#Registration:

![registration](https://user-images.githubusercontent.com/92389794/195980883-1ce83917-f166-4c6d-afb0-69eb8f1e6bfe.png)

#Login:

![login](https://user-images.githubusercontent.com/92389794/195980951-3a3a3652-abd6-4a5b-8f29-fbeb93311bfb.png)

#UpdateData

![put](https://user-images.githubusercontent.com/92389794/195981758-fc161bb5-e177-4f98-b3c3-4a573d07a37c.png)

#AddProductToBasket

![addPtobasket](https://user-images.githubusercontent.com/92389794/195981660-137860b1-b7be-4018-89da-8d422460e5cd.png)

#RemoveProductFromBasket

![remove](https://user-images.githubusercontent.com/92389794/195981922-c0907b83-623f-4336-ab1c-c30815ffca46.png)

#GetReceipt

![receipt](https://user-images.githubusercontent.com/92389794/195981802-d8769c88-2830-4947-972b-d1256f77f0ae.png)

<h4>Role_ADMIN: Endpoints:</h4>

#GetAllUsers

![getallusers](https://user-images.githubusercontent.com/92389794/195982990-e317a5bf-6225-4bef-a2e0-98222054a3c2.png)

#AddProductToDb

![add product to db](https://user-images.githubusercontent.com/92389794/195983009-43149074-73ce-4ae1-aa35-c78e3f8dcc59.png)

#DeleteUser

![deleteuser](https://user-images.githubusercontent.com/92389794/195983030-bc81f943-4019-45d1-89a1-84997b607c6c.png)


#ResetApp
<br>
this method delete all users and remove all products from all baskets

![re](https://user-images.githubusercontent.com/92389794/195983085-e80fcede-3486-4eda-9208-6486d778e4e6.png)

<h3>Roles_permissions</h3>

<img width="802" alt="security" src="https://user-images.githubusercontent.com/92389794/195983200-41285a67-87b5-4a3a-863f-82b7eae156ea.png">


<h3>JWT</h3>

Each user who logs in will get a token using the getJWT method which assigns him the appropriate role and encrypts it with the HMAC256 algorithm. 
Each HTTP query goes through the JWT filter class. which checks if the header contains "Authorization" and is not null.
Then it reads the permissions that can be found in the Authorization header

