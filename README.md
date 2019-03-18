# IMDBClone
Create IMDB clone using Node and Mongo</br>

## To run project:</br>
1.Clone Repo</br>
2.run 'npm install'</br>
3.run 'npm start'</br>

### Endpoints created:

**User API**:</br>
1.POST: UserRegistration-->http://localhost:8282/api/users/ </br>
sample payload:
```
{
    "user":{
    	"email":"aarshi@gmail.com",
        "password":"ioio"
    }
}
```
Response: it will give authToken

2.POST: LoginUser-->http://localhost:8282/api/users/login</br>
sample payload:
```
{
    "user":{
    	"email":"aarshi@gmail.com",
        "password":"ioio"
    }
}
```
Response: it will give authToken

**Cast API**:</br>
1.GET: Get Cast(actor/Producer/Director Information)-->http://localhost:8282/api/cast/{id}</br>
2.POST : http://localhost:8282/api/cast/</br>
sample payload:
```
{
	"name":"Angelina",
	"gender":"F",
	"dob":"2014-04-03",
	"bio":"http://angelina.com"
        "actedIn":[],
        "producedBy":[],
}
```
Response:It will give reponse id</br>

**Movie API**</br>
1.GET: get movie information-->http://localhost:8282/api/movie/{movie_id}</br>
2.GET: get all movies-->http://localhost:8282/api/movie/</br>
3.POST: create movie-->http://localhost:8282/api/movie</br>
sample payload
```
{
	"title":"Matrix Reloaded",
	"yearOfRelease":2008,
	"plot":"Sci-Fiction",
        "actors":[],
        "producers":[],
    }
```
Response: It will give resource_id 

4.PUT: edit movie information -->http://localhost:8282/api/movie/{movie_id}
```
{
	"title":"Matrix Reloaded",
	"yearOfRelease":2008,
	"plot":"Sci-Fiction",
        "actors":[],
        "producers":[],
    }
```
5.DELETE: delete movie-->http://localhost:8282/api/movie/{movie_id}


