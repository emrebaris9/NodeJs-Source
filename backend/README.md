# Movie App Backend
That Restful API develop with Node.JS and Express.

## How to install
Clone this folder and install dependencies.

`npm install`

## Enviroments variables
Create a file named ".env" in the root directory and fill its contents as follows.
( Backend klasörü içinde .env dosyası oluşturarak içine mlabda konfigüre ettiğiniz bilgileri girin.
    db_host için db adresindeki username : password ve yanındaki bileşenleri girin
    db_name ise mlab de oluşturuğunuz proje ismini girin.                             )
```
DB_HOST=xxx
DB_NAME=xxx
```

| Route | HTTP Verb	 | POST body	 | Description	 |
| --- | --- | --- | --- |
| /api/movies | `GET` | Empty | List all movies. // Bütün filmleri getirir |
| /api/movies | `POST` | {'title':'A_Film', 'cover':'cover url' } | Create a new movie. // Yeni bir film ekler |
| /api/movies/:_id | `GET` | Empty | Get a movie. // id ile filmi getirir |
| /api/movies/:_id | `PUT` | {'title':'A_Film', 'cover':'new cover url'} | Update a movie with new info. // filmi günceller değiştirir |
| /api/movies/:_id | `DELETE` | Empty | Delete a movie. |


"Cover ile fotoğraf linki adresleyerek fotoğrafları görüntüleyebilirsiniz."
