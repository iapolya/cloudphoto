# CloudPhoto (AWS)
Консольное приложение cloudphoto для отправки фотографий в облачное хранилище и загрузки их на компьютер.
```
cd cloudphoto
npm install
npm link
```

Создайте файл .env (копия .env.example) и измените значения переменных.

[Как получить ID и key?](https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-your-credentials.html)

# Примеры
`-p` путь до директории

`-a` название альбома
```
cloudphoto upload -p path -a album
cloudphoto download -p path -a album
cloudphoto list
cloudphoto list -a album
```

