# vuejs_auth

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# Clean Authentication With Vuejs And Vuex
## please note ..
1. this project is just a boilerplate for authentication in vuejs (best practice)
2. i think you can use it for any type of project that you have (it's just a boilerplate)
3. this project also support refresh token(thanks to axios intercepotrs )
4. you should change some things :
* for example your end point name and your base url maybe  difference(also type of your response depends on your back end)
* example(this is my response shape(in the backend) for getting user information) :
```json
{
    "item" :  {
        "username" : "sajad564" , 
        "photo" : {
            "url" : "sajad564.jpg"
        }
    } , 
    "errors" : "" , 
    "status" : "200"
}
```
but maybe you have some thing like below one :

```json
{
    "username" : "sajad564"
    "photo" : "sajad564.jpeg"
}
```
* another example(endpoint name) :
my user end point route in the backend is  : localhost:5000/account/currentuser
but your end point maybe is  : localhost:5000/user/information
5. at this moment ui is not great (actualy design  belong to this [link](https://colorlib.com/wp/html5-and-css3-login-forms/)) but in the future i will add some more stuff like how to change account information
6. about backend :
* i wrote backend with asp.net core but i dont share it here because that was huge project
* i will create a simple backend for this project very soon(so you will see functionallity)
## Conclusion :
* feel free to use it for any purposes
* as i said you should change  :
1. base url
2. backend end point route
3. response and request shape . 
* good luck :)

