# nodejs_mongodb

$ npm run start

# endpoint to Create new User (POST)

localhost:8080/users/new

# example json body:
{
	"name":"John Smith",
	"email":"johnsmith@gmail.com",
	"birth":"1576665898" // unix timestamp
}

# example json response:
{
    "error": null,
    "data": [
        {
            "name": "John Smith",
            "email": "johnsmith@gmail.com",",
            "birth": "1576665898",
            "created_at": 1576603730107,
            "updated_at": 1576603730107,
            "_id": "5df910528ad0240b1a602f79"
        }
    ]
}

# endpoint to Update existing User (PUT)
localhost:8080/users/:id

# example json body:
{
	"email":"john_smith@gmail.com",
	"name":"John Smith",
	"birth":"1576665898"
}

# example json reponse:
{
    "error": null,
    "data": {
        "_id": "5df8f5f4a5a3350071cb70e4",
        "name": "John Smith",
        "email": "joshn_smith@gmail.com",
        "birth": "1576665898",
        "created_at": 1576596980202,
        "updated_at": 1576600773058
    }
}

# endpoint to Delete User (DELETE):
localhost:8080/users/:id

# endpoint to Get All Users (GET):
localhost:8080/users

