# Twitter Event Audience

WIP - A node service to return tweets what people saying about your event

# How it works
This project using a [Twitter JS Client](https://github.com/BoyCook/TwitterJSClient) to connect with Twitter API and get informations

# Setup
- Clone this project
- Run `npm i`
- Create a `.env` file with TwitterAPI Credentials.

> Example

```
consumerKey = "myawesomeproject"
consumerSecret = "myawesomeproject"
accessToken = "myawesomeproject"
accessTokenSecret = "myawesomeproject"
callBackUrl = "myawesomeproject"
```

# How to Use
- Call `http://localhost:3000/event-audience`

- You will received a similar response to this:

```
{  
  "item":"E taa chegaaando o #dfne2k17 :D :D",
  "name":"Yan Magalhães",
  "username":"yaanmagale",
  "image":"http://pbs.twimg.com/profile_images/573808379103158272/jUaUrzy4_normal.jpeg"
}
```   

# Next Steps
- Deploy to Heroku or other online service
- Receive a escecific hastag to seach
