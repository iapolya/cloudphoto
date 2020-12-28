# Cloudphoto
Консольное приложение cloudphoto для отправки фотографий в облачное хранилище и загрузки их на компьютер.
```
cd cloudphoto
npm install
npm link
```

Создайте файл .env (копия .env.example) и измените значения переменных.

# Примеры
```
cloudphoto upload -p path -a album
cloudphoto download -p path -a album
cloudphoto list
cloudphoto list -a album
```
