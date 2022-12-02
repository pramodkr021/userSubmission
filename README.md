<h1>Assignment Task Solution</h1>

<strong>API endpoint :</strong>
<ul><li>/</li>
<p>This endpoint will result in response code of 200 and says <strong>"Welcome to the demo assignment"</strong></p>

<li>/register</li>
<p>This endpoint uses <b>POST</b> method and accept values for field like name, age, city, phone, email, password, role. Role and city are optional. The data submitted to via raw json will response in code of 200 and will return the form data as response.</p>

<li>/getuser</li>
<p>This endpoint uses <b>POST</b> method and accept values for email and password. If the user is admin and provides correct username and password, the response will be the complete list of submission in the database with a status code of 200. If the password is wrong, response code is 401 with a response wrong password. It the user is not admin, response code is 401 with a response Admin rights needed. If the username is wrong, the response code is 404 with a response Incorrect email or user does not exist</p>
