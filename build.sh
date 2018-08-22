#%/bin/bash

docker run -it -v $(pwd):/home/boot/repo docker.io/zhilvis/boot-base bash -c "cd repo;boot build"

#heroku container:login
#docker tag <img> registry.heroku.com/swed-ynab/web
#docker push registry.heroku.com/swed-ynab/web
