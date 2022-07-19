# URL Shortener

In this project, I've built a program to get shortened URLs. 

## Configuring
This project was built using MongoDB database. Because of security, I've erased my username and password. 
To run this project, before cloning this repository, you'll please follow those steps:

1. Connect to <a href= "https://www.mongodb.com/atlas/database" target="_blank">MongoDB Atlas Database</a>
2. Click on SignIn and log in to your account or create a new account. 
3. Create a new database. <a href="https://www.youtube.com/watch?v=xrc7dIO_tXk" target="_blank">Here</a> there's a video explaining how to configure your MongoDB.
4. Click on <a href="https://github.com/HalineTamaoki/shorturl_nodejs/blob/main/src/config/Constants.ts" target="_blank">this link</a>.
5. Change the row "MONGO_CONNECTION" replacing `<username>` with your username (you can find it on "Security -> Database Acess") and your password (you can find it on the same path from username).


Below there's an example of how it should be

```shell
    MONGO_CONNECTION: 'mongodb+srv://UsernameExample:PasswordExample@encurtadorurl.bgvdmap.mongodb.net/encurtadorURL?retryWrites=true&w=majority'
```


## Install
Clone this repository and install it dependencies with this command:

```shell
$ npm install
```

## Running

Run the application with `npm run dev` command. It will start the app on [localhost:3000](http://localhost:3000/):

```shell
$ npm run dev
```

Hope you like 😃

---

*This project was originally developed by <a href="https://github.com/alexiadorneles" target="_blank">Aléxia Dorneles</a> and replied here as the code challenge from Digital Innovation One's NodeJS course*
